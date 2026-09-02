import { isFirebaseConfigured } from "@/lib/firebase/config";

export type CheckoutMode = "stripe" | "local";

/**
 * Stripe Checkout whenever Firebase Auth is connected.
 * Device-local mock only when Firebase is absent, or when MODE is forced to local.
 */
export function checkoutMode(): CheckoutMode {
  if (process.env.NEXT_PUBLIC_CHECKOUT_MODE === "local") return "local";
  if (isFirebaseConfigured()) return "stripe";
  return "local";
}

export function isStripeCheckout(): boolean {
  return checkoutMode() === "stripe";
}
