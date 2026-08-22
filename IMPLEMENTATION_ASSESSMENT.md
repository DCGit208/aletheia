# Implementation assessment

Inspected 22 August 2026. The repository was an empty root commit (`a93b983 Initialize project`). No application, Firebase project files, authentication, Firestore, service worker, manifest, or design system existed.

Firebase MCP reported: no `firebase.json`, no authenticated CLI user, no active project. The intended public hosts remain `https://aletheia.web.app` and later `https://app.aletheiaworld.org` — the same PWA.

## 1. What already existed

- Git history only
- No reusable application code

## 2. What can be reused

- Nothing in-repo. Official scaffolds only: Next.js App Router, Tailwind v4, shadcn/ui

## 3. What must be modified

- Replace the default Next.js welcome surface with the locked Aletheia information architecture
- Treat Firebase as optional until project credentials are provided (local catalog + local sessions)

## 4. What must be created

- Phase 1 foundation: design system, locked navigation, routing, PWA shell, i18n, Firebase client, security rules
- A usable slice of Home, Learn, Publications, Community, Shop, Account, and Admin
- Unified Book entity and Content → Product → Order → Entitlement access
- Project documentation required by the brief

## 5. Architectural conflicts

- None with an empty tree
- Classic Firebase Hosting (`aletheia.web.app`) prefers a static export; Next.js App Hosting is the better long-term host for this stack. `firebase.json` is prepared for a static `out/` deploy. The app runs as a Next.js server in development.
- Guest discovery requires published-catalog reads. Rules are not `allow read: true`; they are status- and access-level-scoped. This is an explicit product requirement.

## 6. Proposed implementation sequence

1. Scaffold Next.js + shadcn + design tokens
2. Domain types, catalog repository, local fallback
3. Auth + permissions + entitlements
4. Shell, locked nav, primary routes
5. Reader + course progress
6. Firebase rules, PWA, docs
7. Connect a live Firebase project when credentials are available — do not invent a second app

Phase 1 is complete in this repository. Later phases deepen CMS, payments, push, and remote search without changing the locked navigation or brand.
