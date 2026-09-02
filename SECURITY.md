# Security

## Principles

- Never trust a client-provided role
- Never trust a client-provided payment status
- Privileged work is authorized by the Firebase custom claim `aletheiaRole`
- PII (email) lives in `usersPrivate` and is owner-readable only
- Public `profiles` contain display fields only
- Admin is a protected route **and** a rules/functions check. The link is not security

## Roles

guest · member · student · author · contributor · moderator · administrator

Community roles (member, contributor, moderator, administrator) are assigned per community later. Creating a community is not a member privilege.

## Prototype rules

I've set up prototype Security Rules to keep the data in Firestore safe. They are designed to be secure for least-privilege catalog reads, owner-only private data, claim-based administration, and entitlement-checked chapter/lesson bodies. However, you should review and verify them before broadly sharing your app. If you'd like, I can help you harden these rules.

Storage rules allow public cover/avatar reads, owner avatar writes, and deny everything else by default.

## Devil's advocate (initial)

| Attack | Outcome |
| --- | --- |
| Guest lists unpublished books | Denied (`status == published`) |
| User writes `aletheiaRole` on a profile | Field does not exist on profiles; claim is token-only |
| User creates an admin user document | No client path sets claims |
| User creates a purchase entitlement | Denied unless admin; enrollment only for free/public courses |
| User marks an order paid | Order create/update denied to clients |
| User reads another user's email | `usersPrivate` owner/admin only |
| User updates another user's progress | Owner path check |
| User posts as someone else | `authorUid == request.auth.uid` |
| User adds extra fields to a profile | `hasOnlyAllowedFields` |
| User writes a 1MB bio | Size cap 2000 |
| Guest reads an entitled chapter | Denied unless preview list includes it |
| Moderator grants themselves admin | Claim change is Admin SDK only |

## Payments

Local checkout records an order and entitlement **on this device** only when Firebase is not connected. A signed-in Firebase account always opens Stripe; the browser must not grant access.

Live card charges: Stripe Checkout → Cloud Function webhook → order → entitlement. The browser must not grant access. Same Stripe account as sbd-network.web.app; a **new webhook** for Aletheia. See `PAYMENTS.md`.
