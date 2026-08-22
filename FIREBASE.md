# Firebase

## Current status

The CLI in this environment is **not authenticated** and no live project is attached. The app therefore boots in **local foundation mode**: structured catalog data and local sessions. This is a fallback, not a second product.

Intended project host: `aletheia.web.app` (same app as `app.aletheiaworld.org`).

`.firebaserc` defaults to project id `aletheia`. Confirm or replace that id before deploy.

## Connect a live project

1. Provide an existing Firebase project id (preferred) or create one.
2. Register a Web app. Copy the public config into `.env.local` using `.env.example`.
3. Enable Email/Password authentication.
4. Create a Firestore Standard database and Cloud Storage bucket.
5. Deploy rules: `npx -y firebase-tools@latest deploy --only firestore:rules,storage`
6. Set the first administrator with a custom claim — never a hidden UI flag:

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

`firebase.json` is prepared for a static export to `out/` with SPA rewrites. For this Next.js app, Firebase App Hosting is the better production path if SSR is needed. Do not stand up a second codebase for the branded domain.

## Emulators (optional)

```
npx -y firebase-tools@latest emulators:start --only auth,firestore,storage,hosting
```
