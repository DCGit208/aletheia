import { initializeApp } from "firebase-admin/app";
import { FieldValue, getFirestore } from "firebase-admin/firestore";
import { HttpsError, onCall } from "firebase-functions/v2/https";
import { onRequest } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";
import Stripe from "stripe";
import { offersForProductIds, uniqueGrants } from "./offerings.js";

initializeApp();

const stripeSecret = defineSecret("STRIPE_SECRET_KEY");
const webhookSecret = defineSecret("STRIPE_WEBHOOK_SECRET");

const REGION = "us-central1";

function stripeClient(secret: string) {
  return new Stripe(secret);
}

export const createCheckoutSession = onCall(
  { region: REGION, secrets: [stripeSecret], cors: true },
  async (request) => {
    if (!request.auth?.uid) {
      throw new HttpsError("unauthenticated", "Sign in before paying.");
    }
    const productIds = Array.isArray(request.data?.productIds)
      ? (request.data.productIds as unknown[]).filter((id): id is string => typeof id === "string")
      : [];
    const origin = typeof request.data?.origin === "string" ? request.data.origin.replace(/\/$/, "") : "";
    if (productIds.length === 0) throw new HttpsError("invalid-argument", "Cart is empty.");
    if (!/^https?:\/\//.test(origin)) throw new HttpsError("invalid-argument", "Missing origin.");

    let offers;
    try {
      offers = offersForProductIds(productIds);
    } catch (error) {
      throw new HttpsError("not-found", error instanceof Error ? error.message : "Unknown product.");
    }

    const stripe = stripeClient(stripeSecret.value());
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      client_reference_id: request.auth.uid,
      customer_email: request.auth.token.email,
      success_url: `${origin}/shop/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/shop/cancel`,
      metadata: {
        app: "aletheia",
        uid: request.auth.uid,
        productIds: productIds.join(","),
      },
      line_items: offers.map((offer) => ({
        quantity: 1,
        price_data: {
          currency: "usd",
          unit_amount: offer.priceCents,
          product_data: {
            name: offer.title,
            metadata: { aletheiaProductId: offer.productId, app: "aletheia" },
          },
        },
      })),
    });

    if (!session.url) throw new HttpsError("internal", "Stripe did not return a Checkout URL.");
    return { url: session.url };
  },
);

export const stripeWebhook = onRequest(
  { region: REGION, secrets: [stripeSecret, webhookSecret], cors: false, invoker: "public" },
  async (req, res) => {
    if (req.method !== "POST") {
      res.status(405).send("Method not allowed");
      return;
    }

    const signature = req.headers["stripe-signature"];
    if (typeof signature !== "string") {
      res.status(400).send("Missing signature");
      return;
    }

    const stripe = stripeClient(stripeSecret.value());
    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(req.rawBody, signature, webhookSecret.value());
    } catch (error) {
      res.status(400).send(error instanceof Error ? error.message : "Invalid signature");
      return;
    }

    if (event.type !== "checkout.session.completed") {
      res.status(200).send("ignored");
      return;
    }

    const session = event.data.object as Stripe.Checkout.Session;
    if (session.metadata?.app !== "aletheia") {
      res.status(200).send("not-aletheia");
      return;
    }

    const uid = session.metadata.uid || session.client_reference_id;
    const productIds = (session.metadata.productIds ?? "")
      .split(",")
      .map((id) => id.trim())
      .filter(Boolean);
    if (!uid || productIds.length === 0) {
      res.status(400).send("Missing uid or products");
      return;
    }

    const grants = uniqueGrants(productIds);
    const db = getFirestore();
    const orderId = session.id;
    const orderRef = db.doc(`usersPrivate/${uid}/orders/${orderId}`);
    const existing = await orderRef.get();
    if (existing.exists) {
      res.status(200).send("already-granted");
      return;
    }

    const batch = db.batch();
    batch.set(orderRef, {
      id: orderId,
      userId: uid,
      productIds,
      totalCents: session.amount_total ?? grants.length,
      currency: "USD",
      status: "paid",
      source: "stripe",
      createdAt: FieldValue.serverTimestamp(),
    });

    for (const grant of grants) {
      const entitlementId = `${uid}:${grant.contentKind}:${grant.contentId}`;
      batch.set(
        db.doc(`usersPrivate/${uid}/entitlements/${entitlementId}`),
        {
          id: entitlementId,
          userId: uid,
          contentKind: grant.contentKind,
          contentId: grant.contentId,
          source: "purchase",
          grantedAt: FieldValue.serverTimestamp(),
        },
        { merge: true },
      );
    }

    for (const productId of productIds) {
      if (productId === "product-foundation-year" || productId === "product-foundation-intensive") {
        const programId =
          productId === "product-foundation-year" ? "program-foundation-year" : "program-foundation-intensive";
        batch.set(
          db.doc(`usersPrivate/${uid}/programEnrollments/${uid}:${programId}`),
          {
            id: `${uid}:${programId}`,
            userId: uid,
            schoolId: "school-foundation",
            programId,
            startedAt: FieldValue.serverTimestamp(),
          },
          { merge: true },
        );
      }
    }

    await batch.commit();
    res.status(200).send("granted");
  },
);
