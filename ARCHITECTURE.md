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

**School hierarchy (Learn only, not a seventh tab):** School → Program → the same Course records.

A **School** is a house of study (Foundation School, later others). It is not a second app, not a membership, and not a new user role.

A **Program** is what a person enrols in. It is a cadence over a shared curriculum: The Walk and The Intensive are two programs of one school, not two copies of the teaching.

A **Learning path** remains the lighter sequence (for example Truth · Identity · Dominion). Paths are not year-bearing schools.

Journal hierarchy: Journal → Issue → Article.

Community hierarchy: Community → Board → Topic → Post → Reply.

## Application shape

- Next.js App Router, TypeScript, Tailwind, shadcn/ui
- Client Firebase Auth / Firestore / Storage when `NEXT_PUBLIC_FIREBASE_*` is present
- Local catalog (`src/lib/data/catalog.ts`) and local sessions when Firebase is not configured
- UI strings in `src/lib/i18n/messages.ts` (English, French). Content language is a field on records
- Roles come from the Firebase custom claim `aletheiaRole`, never from a client-writable document field
- Enrolment in a school program does not mint a new platform role. `student` may be assigned by an administrator; the enrolment record is the fact of study.
- PWA: web app manifest + production service worker. IndexedDB holds reader progress and optional offline books

## Routing

Matches the locked information architecture: `/`, `/learn`, `/learn/schools/:schoolId`, `/learn/programs/:programId`, `/learn/courses/:courseId`, `/learn/read/:bookId`, `/publications`, `/community`, `/shop`, `/account`, `/admin`.

## Schools and programs

Do not add Schools to the six-tab bar. They live under Learn.

| Entity | Meaning | Enrol? |
| --- | --- | --- |
| School | Named house (Foundation School). Holds one ordered curriculum. | No |
| Program | A year-bearing offering of that curriculum (The Walk or The Intensive). | Yes |
| Course | A reusable unit (one first principle, or a standalone course). | Yes, also via program |
| Path | A short sequence of courses. Not a school year. | No (courses inside it) |

One curriculum, two cadences:

- **The Walk** — 52 weeks, the six principles divided across the year (~8–9 weeks each), about three hours a week.
- **The Intensive** — the same 52 weeks and the same six courses, about eight hours a week. Not a second syllabus.

A leaflet or book (Aletheia Libraries 1) is a **Book** resource attached to lessons. It is not a third copy of the school.

A **Product** points at a program, a course, or a book. Foundation School pricing and the textbook plan are in `FOUNDATION_SCHOOL.md` (consultant review). Tuition is not a flag on the school record.

A school may later have a Community board, created by an administrator, still under Community — not a new tab.

## Phasing

Phase 1 (this commit): foundation + a coherent discovery/learning/reading/commerce slice.

Later: CMS writes, payment verification functions, FCM, remote search index, hardening audits.
