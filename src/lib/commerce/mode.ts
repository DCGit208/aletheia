import { isFirebaseConfigured, isLocalDemoModeEnabled } from "@/lib/firebase/config";

export type CheckoutMode = "stripe" | "local";

/**
 * Stripe Checkout whenever Firebase Auth is connected.
 * Device-local mock is only allowed in explicit local development mode.
 */
export function checkoutMode(): CheckoutMode {
  if (isFirebaseConfigured()) return "stripe";
  if (isLocalDemoModeEnabled()) return "local";
  return "stripe";
}

export function isStripeCheckout(): boolean {
  return isFirebaseConfigured() && checkoutMode() === "stripe";
}

/** Card and Mobile Money. A signed-in Firebase member is live even if checkout mode was left on local. */
export function isLiveCheckout(user?: { source?: string } | null): boolean {
  return Boolean((user?.source === "firebase" && isFirebaseConfigured()) || isStripeCheckout());
}
