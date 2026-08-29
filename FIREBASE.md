# Firebase

## Current status

Signed-in deploy account: the Google account used with the Firebase CLI.

| Host | Project | Status |
| --- | --- | --- |
| [aletheia-world.web.app](https://aletheia-world.web.app) | `aletheia-world` | This is the project we can deploy. Classic Hosting. |
| [aletheia.web.app](https://aletheia.web.app) | `aletheia` | Project exists. This Google account is **not a member**, so we cannot upload there. |

`.firebaserc` defaults to `aletheia-world`. To put the same app on `aletheia.web.app`, add this Google account as Owner on project `aletheia` in the Firebase console, then switch the default project id.

Without the public web config the app boots in **local foundation mode**: structured catalog and device-local sessions.

## Connect Auth / Firestore (later)

1. Enable Email/Password authentication on `aletheia-world`.
2. Create a Firestore Standard database and Cloud Storage bucket.
3. Copy the public web config into `.env.local` from `.env.example`.
4. Deploy rules: `npx -y firebase-tools@latest deploy --only firestore:rules,storage`
5. Set the first administrator with a custom claim — never a hidden UI flag:

```js
await admin.auth().setCustomUserClaims(uid, { aletheiaRole: "administrator" });
```

Public Firebase values may live in the client. Service-account keys, payment secrets, and Admin SDK credentials must not.

## Services in scope

| Service | Use |
| --- | --- |
| Authentication | Email/password. Google can be added later |
| Cloud Firestore | Catalog, profiles, private user data, entitlements |
| Storage | Covers, avatars, private user files |
| Hosting | Classic Hosting from `out/` after a static export, or App Hosting for Next.js |
| Cloud Functions (later) | Custom claims, payment verification, search index, FCM |
| Cloud Messaging (later) | Push. VAPID key is reserved in env |

## Hosting

```bash
npm run deploy:hosting
```

That builds a static export into `out/` (`FIREBASE_HOSTING=1`) and deploys Classic Hosting to the active project.

Firebase App Hosting remains the later path if a server is required. Do not stand up a second codebase for the branded domain.

## Emulators (optional)

```
npx -y firebase-tools@latest emulators:start --only auth,firestore,storage,hosting
```
