# Development

## Commands

```bash
npm install
cp .env.example .env.local   # optional; omit Firebase to use local foundation mode
npm run dev                  # http://127.0.0.1:43147
npm run typecheck
npm run lint
npm test
npm run build
```

## Local foundation accounts

When Firebase env is absent:

- `member@aletheia.local` / `aletheia`
- `admin@aletheia.local` / `aletheia`

Sign-up creates a local member. Roles in this mode are for UX only. Live authorization uses custom claims.

## What was built (Phase 1)

| Area | Where | Notes |
| --- | --- | --- |
| Design system | `src/app/globals.css`, shadcn primitives | Warm ivory, ink, restrained gold. Fraunces + Source Sans 3 |
| Shell / nav | `src/components/layout/app-shell.tsx` | Locked six items. Bottom nav on small screens |
| Catalog | `src/lib/data/catalog.ts`, `repository.ts` | Paginated reads. Not page-hardcoded |
| Auth | `src/lib/auth/` | Firebase or local session |
| Entitlements | `src/lib/access/`, `src/lib/state/user-library.tsx` | Separate from products |
| Reader | `src/app/learn/read/[bookId]/page.tsx` | Chapters, TOC, resume, search, type size, IndexedDB progress |
| i18n | `src/lib/i18n/` | EN/FR UI strings. Content language is data |
| PWA | `public/manifest.webmanifest`, `public/sw.js` | SW registers in production. Does not cache `/account` or `/admin` |
| Rules | `firestore.rules`, `storage.rules` | Prototype; review before a public launch |

## Testing a change

1. Typecheck and lint
2. `npm test` for access invariants
3. Walk Home → Learn → a course lesson → a book reader → Publications → Community reply (as member) → Shop cart → Account
4. Confirm `/admin` is denied for members and open for the local admin account
5. When Firebase is connected, confirm rules with the emulator before deploy

## Do not

- Add top-level navigation
- Duplicate Book records per surface
- Grant access with `paid: true`
- Copy SBD Network business logic
