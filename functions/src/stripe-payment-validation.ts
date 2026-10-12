export function parseStripeProductIds(value: unknown): string[] {
  if (typeof value !== "string" || !value.trim()) {
    throw new Error("Checkout session is missing product IDs.");
  }

  const productIds = value.split(",").map((productId) => productId.trim());
  if (productIds.some((productId) => !productId)) {
    throw new Error("Checkout session contains an empty product ID.");
  }
  if (new Set(productIds).size !== productIds.length) {
    throw new Error("Checkout session contains duplicate product IDs.");
  }
  return productIds;
}

export function validatePaidStripeCheckout(input: {
  mode: string | null;
  status: string | null;
  paymentStatus: string | null;
  currency: string | null;
  amountTotal: number | null;
  metadataUid: string | null;
  clientReferenceId: string | null;
  productIds: string[];
  expectedAmountCents: number;
}): void {
  if (input.mode !== "payment" || input.status !== "complete" || input.paymentStatus !== "paid") {
    throw new Error("Stripe Checkout session is not a completed, paid payment.");
  }
  if (!input.metadataUid || input.metadataUid !== input.clientReferenceId) {
    throw new Error("Stripe Checkout session user identifiers do not match.");
  }
  if (input.productIds.length === 0 || new Set(input.productIds).size !== input.productIds.length) {
    throw new Error("Stripe Checkout session product IDs are invalid.");
  }
  if (input.currency !== "usd") {
    throw new Error("Stripe Checkout session currency does not match the catalogue.");
  }
  if (
    !Number.isSafeInteger(input.expectedAmountCents) ||
    input.expectedAmountCents <= 0 ||
    input.amountTotal !== input.expectedAmountCents
  ) {
    throw new Error("Stripe Checkout session amount does not match the catalogue.");
  }
}
