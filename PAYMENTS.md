# Payments — Stripe for Aletheia

## Same Stripe account, not a second company

Use the **existing Stripe account** that already charges for sbd-network.web.app. Do **not** open a second Stripe business unless Aletheia is a separate legal entity.

What must be separate inside that same account:

| Keep shared | Create new for Aletheia |
| --- | --- |
| Stripe account, legal entity, tax settings, bank payout | Checkout webhook endpoint pointing at Aletheia |
| Secret/publishable keys (or a restricted key for this app) | Line items named as Aletheia products |
| | Success/cancel URLs on aletheia-world.web.app |

Do **not** reuse the SBD Network webhook URL. If one endpoint receives both apps’ events, SBD Network must ignore sessions whose metadata `app` is `aletheia`, and Aletheia ignores everything else. The functions in this repo already ignore non-Aletheia sessions.

Checkout branding in the Stripe Dashboard should say Aletheia, not SBD Network.

The server never trusts a price sent from the browser. Amounts come from `src/lib/commerce/offerings.ts` (copied to `functions/src/offerings.ts`). Maker Bible is **$150**. Foundation School year/intensive is **$400**.

## Flow

1. Guest may browse. They cannot pay.
2. Sign up / sign in (Firebase Auth when connected; local accounts in this prototype).
3. Add to cart.
4. **Live:** `createCheckoutSession` Cloud Function opens Stripe Checkout. Card is entered on Stripe.
5. Stripe sends `checkout.session.completed` to `/api/stripe/webhook`.
6. The function writes `usersPrivate/{uid}/orders/{sessionId}` and purchase entitlements. The browser does not grant access.
7. The member stays signed in. Library and reader follow the entitlement.

**Local / until Stripe + Firebase Functions are live:** Shop “Place order” still records an order on this device so the UX can be exercised. That grant does not follow the person to another phone and is not a real charge.

## Enable live card payments

1. Same Stripe account. Developers → API keys. Use **test** keys first.
2. Firebase project `aletheia-world` needs **Blaze** billing (Cloud Functions). This is Google Cloud billing, not a second Stripe account. It can share the same Google billing account as other Firebase projects.
3. Set secrets (never in the Next.js client):

```bash
npx -y firebase-tools@latest functions:secrets:set STRIPE_SECRET_KEY --project aletheia-world
npx -y firebase-tools@latest functions:secrets:set STRIPE_WEBHOOK_SECRET --project aletheia-world
```

4. Deploy functions, then add a webhook in Stripe:

- Endpoint: `https://aletheia-world.web.app/api/stripe/webhook`
- Event: `checkout.session.completed`
- Copy the signing secret into `STRIPE_WEBHOOK_SECRET`

5. Public web config in `.env.local` / Hosting env:

```
NEXT_PUBLIC_CHECKOUT_MODE=stripe
NEXT_PUBLIC_FIREBASE_*   # existing Firebase web config
```

6. Enable Email/Password in Firebase Authentication on `aletheia-world`. Authorized domain: `aletheia-world.web.app`.

Until those are set, the app stays in local foundation mode: sign-up on the device, mock checkout, Foundation School and Maker Bible (beyond Genesis 1) gated by that device entitlement.
