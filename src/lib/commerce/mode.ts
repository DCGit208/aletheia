import { isFirebaseConfigured } from "@/lib/firebase/config";

export type CheckoutMode = "stripe" | "local";

/** Stripe Checkout when Firebase Auth is connected and the public flag is set. Otherwise device-local mock. */
export function checkoutMode(): CheckoutMode {
  if (process.env.NEXT_PUBLIC_CHECKOUT_MODE === "stripe" && isFirebaseConfigured()) return "stripe";
  return "local";
}

export function isStripeCheckout(): boolean {
  return checkoutMode() === "stripe";
}
