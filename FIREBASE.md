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

Paid book chapters and Foundation School lessons are generated into the Cloud Functions package and served only by the `getProtectedContent` callable. The callable verifies the user's entitlement (or an administrator claim) before returning text. One Source of Truth has no free preview; its book entitlement must be granted by a verified purchase or by an administrator. Do not import the full-content source modules from browser code; regenerate indexes and the server content manifest with `npm run generate:protected-content` after editing manuscripts or lessons. Hosting builds also scan `out/` and fail if protected sample passages appear in public assets.

Administrators can grant or revoke content for individual users under **Administration → People**. The same panel provides a confirmation-protected operation to revoke the One Source book entitlement from every account while preserving order records; access can then be granted individually again.

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
## Automatic app deployment

The `.github/workflows/deploy-app-hosting.yml` workflow runs on app or manuscript changes pushed to `main`. It checks canonical manuscript parity, builds the app, and deploys only the `aletheia-world` Hosting target for [app.aletheiaworld.org](https://app.aletheiaworld.org). It does not deploy the parent `aletheiaworld.org` site.

Before the workflow can deploy, add the GitHub Actions repository secret `FIREBASE_SERVICE_ACCOUNT_ALETHEIA_WORLD` containing a service-account JSON key with Firebase Hosting deployment access to project `aletheia-world`. Store the key only in GitHub Actions Secrets; do not commit it to the repository.

The Hosting build also needs the Firebase **web app** configuration in GitHub Actions. Add `NEXT_PUBLIC_FIREBASE_API_KEY`, `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`, `NEXT_PUBLIC_FIREBASE_PROJECT_ID`, `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`, `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`, and `NEXT_PUBLIC_FIREBASE_APP_ID` under **Settings → Secrets and variables → Actions → Secrets**. The workflow reads these values as secrets. They are public web configuration values, not Admin SDK/service-account credentials; obtain them from Firebase Console → Project settings → General → Your apps → Web app configuration. `NEXT_PUBLIC_FIREBASE_PROJECT_ID` must be `aletheia-world`. Optional secrets are `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`, `NEXT_PUBLIC_FIREBASE_VAPID_KEY`, and `NEXT_PUBLIC_VAPID_PUBLIC_KEY`. The workflow fails before build if required values are absent or the project ID is wrong.

## Automatic Functions deployment

The `.github/workflows/deploy-functions.yml` workflow runs when Cloud Functions code, the trusted commerce offerings, or Firebase deployment configuration changes on `main`. It installs the pinned Functions dependencies and deploys only Cloud Functions to `aletheia-world`. It uses the same `FIREBASE_SERVICE_ACCOUNT_ALETHEIA_WORLD` secret; that service account must also have the Google Cloud permissions required to deploy Functions and act as the Functions runtime service account. This workflow does not create or replace Stripe or VAPID secrets stored in Firebase Secret Manager.

## Emulators (optional)

```
npx -y firebase-tools@latest emulators:start --only auth,firestore,storage,hosting
```
