import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { checkoutMode, isLiveCheckout } from "./mode";

const ORIGINAL_ENV = {
  NEXT_PUBLIC_FIREBASE_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  NEXT_PUBLIC_FIREBASE_PROJECT_ID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  NEXT_PUBLIC_FIREBASE_APP_ID: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  NEXT_PUBLIC_ENABLE_LOCAL_DEMO_MODE: process.env.NEXT_PUBLIC_ENABLE_LOCAL_DEMO_MODE,
};

function setEnv(overrides: Record<string, string | undefined>) {
  for (const [key, value] of Object.entries(overrides)) {
    if (value === undefined) {
      delete process.env[key];
    } else {
      process.env[key] = value;
    }
  }
}

describe("checkout mode", () => {
  it("uses live Stripe whenever Firebase is configured", () => {
    setEnv({
      NEXT_PUBLIC_FIREBASE_API_KEY: "demo-key",
      NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: "demo.firebaseapp.com",
      NEXT_PUBLIC_FIREBASE_PROJECT_ID: "demo-project",
      NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: "demo.appspot.com",
      NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: "1234567890",
      NEXT_PUBLIC_FIREBASE_APP_ID: "app-id",
      NEXT_PUBLIC_ENABLE_LOCAL_DEMO_MODE: undefined,
    });

    assert.equal(checkoutMode(), "stripe");
    assert.equal(isLiveCheckout({ source: "firebase" }), true);
  });

  it("allows local mock mode only when explicitly enabled", () => {
    setEnv({
      NEXT_PUBLIC_FIREBASE_API_KEY: undefined,
      NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: undefined,
      NEXT_PUBLIC_FIREBASE_PROJECT_ID: undefined,
      NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: undefined,
      NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: undefined,
      NEXT_PUBLIC_FIREBASE_APP_ID: undefined,
      NEXT_PUBLIC_ENABLE_LOCAL_DEMO_MODE: "false",
    });

    assert.equal(checkoutMode(), "stripe");
    assert.equal(isLiveCheckout({ source: "demo" }), false);

    setEnv({
      NEXT_PUBLIC_ENABLE_LOCAL_DEMO_MODE: "true",
    });

    assert.equal(checkoutMode(), "local");
    assert.equal(isLiveCheckout({ source: "demo" }), false);
  });

  it("restores environment after each test", () => {
    setEnv(ORIGINAL_ENV);
  });
});
