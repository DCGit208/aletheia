import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { parseStripeProductIds, validatePaidStripeCheckout } from "../../../functions/src/stripe-payment-validation.js";

const validCheckout = {
  mode: "payment",
  status: "complete",
  paymentStatus: "paid",
  currency: "usd",
  amountTotal: 15000,
  metadataUid: "firebase-user-123",
  clientReferenceId: "firebase-user-123",
  productIds: ["product-maker-bible"],
  expectedAmountCents: 15000,
};

describe("Stripe payment validation", () => {
  it("parses unique product IDs from checkout metadata", () => {
    assert.deepEqual(parseStripeProductIds("product-maker-bible, product-course-faith"), [
      "product-maker-bible",
      "product-course-faith",
    ]);
  });

  it("rejects missing, empty, or duplicate metadata product IDs", () => {
    assert.throws(() => parseStripeProductIds(undefined), /missing product IDs/i);
    assert.throws(() => parseStripeProductIds("product-maker-bible,"), /empty product ID/i);
    assert.throws(
      () => parseStripeProductIds("product-maker-bible,product-maker-bible"),
      /duplicate product IDs/i,
    );
  });

  it("accepts a completed payment that matches the server catalogue", () => {
    assert.doesNotThrow(() => validatePaidStripeCheckout(validCheckout));
  });

  it("rejects unpaid, mismatched, or incorrectly priced Stripe sessions", () => {
    assert.throws(
      () => validatePaidStripeCheckout({ ...validCheckout, paymentStatus: "unpaid" }),
      /completed, paid payment/i,
    );
    assert.throws(
      () => validatePaidStripeCheckout({ ...validCheckout, clientReferenceId: "another-user" }),
      /user identifiers do not match/i,
    );
    assert.throws(
      () => validatePaidStripeCheckout({ ...validCheckout, currency: "eur" }),
      /currency does not match/i,
    );
    assert.throws(
      () => validatePaidStripeCheckout({ ...validCheckout, amountTotal: 100 }),
      /amount does not match/i,
    );
    assert.throws(
      () => validatePaidStripeCheckout({ ...validCheckout, productIds: ["product-maker-bible", "product-maker-bible"] }),
      /product IDs are invalid/i,
    );
  });
});
