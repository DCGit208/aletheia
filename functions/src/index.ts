import { initializeApp } from "firebase-admin/app";
import { FieldValue, getFirestore } from "firebase-admin/firestore";
import { HttpsError, onCall, onRequest } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";
import Stripe from "stripe";
import {
  getOffer,
  isMomoYearProduct,
  MOMO_PAYEES,
  MOMO_REVIEWER_EMAILS,
  MOMO_YEAR_XAF,
  offersForProductIds,
  uniqueGrants,
  type MomoNetwork,
} from "./offerings.js";

initializeApp();

const stripeSecret = defineSecret("STRIPE_SECRET_KEY");
const webhookSecret = defineSecret("STRIPE_WEBHOOK_SECRET");

const REGION = "us-central1";

function stripeClient(secret: string) {
  return new Stripe(secret);
}

function isReviewer(auth: { token: Record<string, unknown> } | undefined): boolean {
  if (!auth) return false;
  if (auth.token.aletheiaRole === "administrator") return true;
  const email = typeof auth.token.email === "string" ? auth.token.email.trim().toLowerCase() : "";
  return (MOMO_REVIEWER_EMAILS as readonly string[]).includes(email);
}

function requireAuth(request: { auth?: { uid: string; token: Record<string, unknown> } }) {
  if (!request.auth?.uid) {
    throw new HttpsError("unauthenticated", "Sign in before paying.");
  }
  return request.auth;
}

function digitsOnly(value: string): string {
  return value.replace(/\D/g, "");
}

function makeReference(id: string): string {
  return `ATH-${id.slice(0, 8).toUpperCase()}`;
}

async function grantPaidAccess(input: {
  uid: string;
  productIds: string[];
  orderId: string;
  source: "stripe" | "momo";
  totalCents: number;
  currency: "USD" | "XAF";
  extra?: Record<string, unknown>;
}): Promise<"granted" | "already-granted"> {
  const grants = uniqueGrants(input.productIds);
  const db = getFirestore();
  const orderRef = db.doc(`usersPrivate/${input.uid}/orders/${input.orderId}`);
  const existing = await orderRef.get();
  if (existing.exists && existing.data()?.status === "paid") {
    return "already-granted";
  }

  const batch = db.batch();
  batch.set(
    orderRef,
    {
      id: input.orderId,
      userId: input.uid,
      productIds: input.productIds,
      totalCents: input.totalCents,
      currency: input.currency,
      status: "paid",
      source: input.source,
      createdAt: existing.data()?.createdAt ?? FieldValue.serverTimestamp(),
      paidAt: FieldValue.serverTimestamp(),
      ...input.extra,
    },
    { merge: true },
  );

  for (const grant of grants) {
    const entitlementId = `${input.uid}:${grant.contentKind}:${grant.contentId}`;
    batch.set(
      db.doc(`usersPrivate/${input.uid}/entitlements/${entitlementId}`),
      {
        id: entitlementId,
        userId: input.uid,
        contentKind: grant.contentKind,
        contentId: grant.contentId,
        source: "purchase",
        grantedAt: FieldValue.serverTimestamp(),
      },
      { merge: true },
    );
  }

  for (const productId of input.productIds) {
    const offer = getOffer(productId);
    if (!isMomoYearProduct(productId) || !offer?.contentId) continue;
    const programId = offer.contentId;
    batch.set(
      db.doc(`usersPrivate/${input.uid}/programEnrollments/${input.uid}:${programId}`),
      {
        id: `${input.uid}:${programId}`,
        userId: input.uid,
        schoolId: "school-foundation",
        programId,
        startedAt: FieldValue.serverTimestamp(),
      },
      { merge: true },
    );
  }

  await batch.commit();
  return "granted";
}

export const createCheckoutSession = onCall(
  { region: REGION, secrets: [stripeSecret], cors: true },
  async (request) => {
    const auth = requireAuth(request);
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
      client_reference_id: auth.uid,
      customer_email: typeof auth.token.email === "string" ? auth.token.email : undefined,
      success_url: `${origin}/shop/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/shop/cancel`,
      metadata: {
        app: "aletheia",
        uid: auth.uid,
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

    try {
      const result = await grantPaidAccess({
        uid,
        productIds,
        orderId: session.id,
        source: "stripe",
        totalCents: session.amount_total ?? 0,
        currency: "USD",
      });
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send(error instanceof Error ? error.message : "Grant failed");
    }
  },
);

export const createManualPayment = onCall({ region: REGION, cors: true }, async (request) => {
  const auth = requireAuth(request);
  const productId = typeof request.data?.productId === "string" ? request.data.productId : "";
  const networkRaw = typeof request.data?.momo_network === "string" ? request.data.momo_network : "";
  const phone = digitsOnly(typeof request.data?.phone === "string" ? request.data.phone : "");
  const network = networkRaw === "mtn" || networkRaw === "orange" ? (networkRaw as MomoNetwork) : null;

  if (!isMomoYearProduct(productId)) {
    throw new HttpsError(
      "failed-precondition",
      "Mobile Money is only for The Walk or The Intensive, alone in the cart.",
    );
  }
  if (!network) throw new HttpsError("invalid-argument", "Choose MTN or Orange.");
  if (phone.length < 9 || phone.length > 15) {
    throw new HttpsError("invalid-argument", "Enter the Mobile Money number you paid from.");
  }

  const offer = getOffer(productId);
  if (!offer) throw new HttpsError("not-found", "Unknown product.");

  const db = getFirestore();
  const existing = await db.collection("manualPayments").where("uid", "==", auth.uid).get();
  const open = existing.docs.find((doc) => {
    const data = doc.data();
    return data.status === "pending" && data.productId === productId;
  });
  if (open) {
    return {
      success: true as const,
      paymentId: open.id,
      reference: String(open.data().reference ?? makeReference(open.id)),
      alreadyOpen: true as const,
    };
  }

  const paymentRef = db.collection("manualPayments").doc();
  const reference = makeReference(paymentRef.id);
  const payee = MOMO_PAYEES[network];
  const record = {
    id: paymentRef.id,
    uid: auth.uid,
    email: typeof auth.token.email === "string" ? auth.token.email : "",
    productId,
    productTitle: offer.title,
    amountXaf: MOMO_YEAR_XAF,
    priceCents: offer.priceCents,
    network,
    phone,
    payeeNumber: payee.number,
    payeeName: payee.name,
    status: "pending",
    reference,
    createdAt: FieldValue.serverTimestamp(),
  };

  const batch = db.batch();
  batch.set(paymentRef, record);
  batch.set(db.doc(`usersPrivate/${auth.uid}/orders/${paymentRef.id}`), {
    id: paymentRef.id,
    userId: auth.uid,
    productIds: [productId],
    totalCents: offer.priceCents,
    currency: "XAF",
    amountXaf: MOMO_YEAR_XAF,
    status: "pending",
    source: "momo",
    network,
    phone,
    reference,
    createdAt: FieldValue.serverTimestamp(),
  });
  await batch.commit();

  return { success: true as const, paymentId: paymentRef.id, reference, alreadyOpen: false as const };
});

export const listManualPayments = onCall({ region: REGION, cors: true }, async (request) => {
  if (!isReviewer(request.auth)) {
    throw new HttpsError("permission-denied", "Not allowed to review Mobile Money.");
  }
  const db = getFirestore();
  const snap = await db.collection("manualPayments").where("status", "==", "pending").get();
  const payments = snap.docs.map((doc) => {
    const data = doc.data();
    const createdAt = data.createdAt?.toDate?.();
    return {
      id: doc.id,
      uid: data.uid ?? "",
      email: data.email ?? "",
      productId: data.productId ?? "",
      productTitle: data.productTitle ?? "",
      amountXaf: data.amountXaf ?? MOMO_YEAR_XAF,
      network: data.network ?? "",
      phone: data.phone ?? "",
      reference: data.reference ?? makeReference(doc.id),
      status: data.status ?? "pending",
      createdAt: createdAt instanceof Date ? createdAt.toISOString() : null,
    };
  });
  payments.sort((a, b) => (a.createdAt ?? "").localeCompare(b.createdAt ?? ""));
  return { payments };
});

export const confirmManualPayment = onCall({ region: REGION, cors: true }, async (request) => {
  if (!isReviewer(request.auth)) {
    throw new HttpsError("permission-denied", "Not allowed to confirm Mobile Money.");
  }
  const paymentId = typeof request.data?.paymentId === "string" ? request.data.paymentId : "";
  if (!paymentId) throw new HttpsError("invalid-argument", "Missing payment.");

  const db = getFirestore();
  const paymentRef = db.doc(`manualPayments/${paymentId}`);
  const snap = await paymentRef.get();
  if (!snap.exists) throw new HttpsError("not-found", "Payment not found.");
  const data = snap.data() ?? {};
  if (data.status === "approved") {
    return { success: true as const, already: true as const };
  }
  if (data.status !== "pending") {
    throw new HttpsError("failed-precondition", "This payment is not waiting for confirmation.");
  }
  const uid = typeof data.uid === "string" ? data.uid : "";
  const productId = typeof data.productId === "string" ? data.productId : "";
  if (!uid || !isMomoYearProduct(productId)) {
    throw new HttpsError("failed-precondition", "Payment record is incomplete.");
  }

  const result = await grantPaidAccess({
    uid,
    productIds: [productId],
    orderId: paymentId,
    source: "momo",
    totalCents: typeof data.priceCents === "number" ? data.priceCents : 40000,
    currency: "XAF",
    extra: {
      amountXaf: MOMO_YEAR_XAF,
      reference: data.reference ?? makeReference(paymentId),
      network: data.network,
      phone: data.phone,
    },
  });

  await paymentRef.update({
    status: "approved",
    confirmedAt: FieldValue.serverTimestamp(),
    confirmedBy: request.auth?.uid ?? "",
  });

  return { success: true as const, already: result === "already-granted" };
});
