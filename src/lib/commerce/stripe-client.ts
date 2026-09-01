import { httpsCallable } from "firebase/functions";
import { getFirebaseFunctions } from "@/lib/firebase/client";

export async function redirectToStripeCheckout(productIds: string[], origin: string): Promise<void> {
  const functions = getFirebaseFunctions();
  if (!functions) {
    throw new Error("Stripe Checkout requires a signed-in Firebase account.");
  }
  const create = httpsCallable<{ productIds: string[]; origin: string }, { url: string }>(
    functions,
    "createCheckoutSession",
  );
  const result = await create({ productIds, origin });
  if (!result.data.url) throw new Error("Checkout session did not return a URL.");
  window.location.assign(result.data.url);
}
