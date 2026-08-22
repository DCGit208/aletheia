# Architecture

## Brand

| Layer | Name | Role |
| --- | --- | --- |
| Master brand | Aletheia World | Global house. Domain: aletheiaworld.org |
| Platform | Aletheia | This PWA. Hosts: aletheia.web.app → app.aletheiaworld.org |
| Imprint | Aletheia Publications | Publishing identity inside the platform |

Positioning: **Truth · Identity · Dominion**. One application. No satellite products for Books, Library, Courses, or Boards.

## Locked navigation

Home · Learn · Publications · Community · Shop · Account

Library lives under Learn. Discussion boards live under Community. Admin is a protected route, not a seventh tab.

## One entity, many contexts

A **Book** is a single record. It can appear as a publication, a learning resource, a library item, a shop product, and a search hit without being copied.

A **Course** is a single record. It can appear in Learn, a path, Shop, and Account.

A **Product** is a commercial offer pointing at content. An **Order** is a transaction. An **Entitlement** is the resulting access. The client must never grant access because it believes a payment succeeded.

Course hierarchy: Learning path → Course → Module → Lesson → Resource → Assessment → Completion.

Journal hierarchy: Journal → Issue → Article.

Community hierarchy: Community → Board → Topic → Post → Reply.

## Application shape

- Next.js App Router, TypeScript, Tailwind, shadcn/ui
- Client Firebase Auth / Firestore / Storage when `NEXT_PUBLIC_FIREBASE_*` is present
- Local catalog (`src/lib/data/catalog.ts`) and local sessions when Firebase is not configured
- UI strings in `src/lib/i18n/messages.ts` (English, French). Content language is a field on records
- Roles come from the Firebase custom claim `aletheiaRole`, never from a client-writable document field
- PWA: web app manifest + production service worker. IndexedDB holds reader progress and optional offline books

## Routing

Matches the locked information architecture: `/`, `/learn`, `/learn/courses/:courseId`, `/learn/read/:bookId`, `/publications`, `/community`, `/shop`, `/account`, `/admin`.

## Phasing

Phase 1 (this commit): foundation + a coherent discovery/learning/reading/commerce slice.

Later: CMS writes, payment verification functions, FCM, remote search index, hardening audits.
