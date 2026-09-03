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

The server never trusts a price sent from the browser. Amounts come from `src/lib/commerce/offerings.ts` (copied to `functions/src/offerings.ts`). Maker Bible is **$150**. Foundation School year/intensive is **$400** (Mobile Money: **240,000 FCFA** at 600 XAF).

## Flow

1. Guest may browse. They cannot pay.
2. Sign up / sign in (Firebase Auth when connected; local accounts in this prototype).
3. Add to cart.
4. **Card:** `createCheckoutSession` Cloud Function opens Stripe Checkout. Card is entered on Stripe. An MTN MoMo virtual card on that screen is still Stripe, not a transfer.
5. Stripe sends `checkout.session.completed` to `/api/stripe/webhook`.
6. The function writes `usersPrivate/{uid}/orders/{sessionId}` and purchase entitlements. The browser does not grant access.
7. **Mobile Money (year only):** If the cart holds only The Walk or The Intensive, Shop also offers MTN or Orange. The student sends **240,000 FCFA** to Achu Gustave Mokom (`237 677 604 100` MTN / `237 699 651 555` Orange) and submits the number they paid from. `createManualPayment` writes a **pending** order. It does **not** grant entitlements.
8. A reviewer confirms in Administration. `confirmManualPayment` writes the same grants as a paid Stripe session.
9. The member stays signed in. Library and reader follow the entitlement.

Courses, the textbook alone, Maker Bible, and companion books stay card-only — the same yearly-only rule as the other checkout on this Stripe account.

**Local / no Firebase web config:** Shop “Place order” records an order on this device so the UX can be exercised. That grant does not follow the person to another phone and is not a real charge. If Firebase is connected, Shop always opens Stripe or records a pending Mobile Money transfer instead of granting access in the browser.

## Live card payments

**Locked.** Aletheia Cloud Functions on `aletheia-world` use the live Stripe secret and a live webhook at `https://aletheia-world.web.app/api/stripe/webhook` (`checkout.session.completed` only). A real card for The Walk, The Intensive, or a course is a real charge. Test cards such as `4242` will fail.

The bank statement descriptor is the Stripe account’s legal name (BTH Education Group). That is the same account, not a second Stripe business.

## Mobile Money

Same payees as the other product on this Stripe account — the same legal person, not that product’s branding.

| Network | Number | Name | USSD |
| --- | --- | --- | --- |
| MTN | 237 677 604 100 | Achu Gustave Mokom | `*126#` |
| Orange | 237 699 651 555 | Achu Gustave Mokom | `#150#` |

Amount for The Walk or The Intensive: **240,000 FCFA** ($400 × 600). Not the other product’s yearly FCFA price.

Reviewers (Cloud Function allowlist, in addition to `aletheiaRole === administrator`): `bthedugrp@gmail.com`, `house_justice@yahoo.com`, `dr.coachachu@btheducationgroup.org`. Confirming is a server grant. The student form never writes entitlements.

Do not paste live keys into the app, git, or Hosting env. They live only in Firebase secret manager (`STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`). After rotating a secret, redeploy functions.

If Firebase web config is missing, Shop falls back to device-local mock checkout. That path does not charge a card.
