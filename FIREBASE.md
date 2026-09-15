# Firebase

## Current status

Signed-in deploy account: the Google account used with the Firebase CLI.

| Host | Project | Status |
| --- | --- | --- |
| [aletheia-world.web.app](https://aletheia-world.web.app) | `aletheia-world` | This is the project we can deploy. Classic Hosting. |
| [aletheia.web.app](https://aletheia.web.app) | `aletheia` | Project exists. This Google account is **not a member**, so we cannot upload there. |

`.firebaserc` defaults to `aletheia-world`. To put the same app on `aletheia.web.app`, add this Google account as Owner on project `aletheia` in the Firebase console, then switch the default project id.

Without the public web config the app boots in **local foundation mode**: structured catalog and device-local sessions.

## Connect Auth / Firestore

1. Enable Email/Password authentication on `aletheia-world`.
2. Create a Firestore Standard database and Cloud Storage bucket.
3. Copy the public web config into `.env.local` from `.env.example`.
4. Deploy rules: `npx -y firebase-tools@latest deploy --only firestore:rules,storage`
5. For live payments, enable Blaze billing and follow `PAYMENTS.md`.
6. The founding administrator is `dr.coachachu@btheducationgroup.org`. The custom claim `aletheiaRole: administrator` is set on that Auth user. Sign out and in (or open Administration) to refresh the token. Further role changes go through Administration → People.

Public Firebase values may live in the client. Service-account keys, payment secrets, and Admin SDK credentials must not.

## Services in scope

| Service | Use |
| --- | --- |
| Authentication | Email/password. Google can be added later |
| Cloud Firestore | Catalog, profiles, private user data, entitlements |
| Storage | Covers, avatars, private user files |
| Hosting | Classic Hosting from `out/` after a static export, or App Hosting for Next.js |
| Cloud Functions | Stripe Checkout session + webhook; later custom claims, search, FCM |
| Cloud Messaging (later) | Push. VAPID key is reserved in env |

## Hosting

Two Classic Hosting sites on project `aletheia-world`:

| Site | Target | Public | URL |
| --- | --- | --- | --- |
| `aletheia-world` | `aletheia-world` | `out/` | [app.aletheiaworld.org](https://app.aletheiaworld.org) and [aletheia-world.web.app](https://aletheia-world.web.app) |
| `aletheia-landing` | `aletheia-landing` | `landing/` | [aletheiaworld.org](https://aletheiaworld.org) |

PWA (does not upload the parent site):

```bash
npm run deploy:hosting
```

That builds a static export into `out/` (`FIREBASE_HOSTING=1`) and deploys `--only hosting:aletheia-world`.

Parent site (does not replace the PWA):

```bash
npm run build:landing
npx -y firebase-tools@latest deploy --only hosting:aletheia-landing
```

See `landing/README.md`. Firebase App Hosting remains the later path if a server is required. Do not fold the marketing pages into the PWA routes.

## Emulators (optional)

```
npx -y firebase-tools@latest emulators:start --only auth,firestore,storage,hosting
```
