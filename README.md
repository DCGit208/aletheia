# Aletheia

Aletheia is the digital platform of **Aletheia World**.

It is one Progressive Web Application for learning, publication, reading, community, and commerce — not a set of disconnected sites.

- Master brand: Aletheia World — [aletheiaworld.org](https://aletheiaworld.org)
- Live host: [aletheia-world.web.app](https://aletheia-world.web.app)
- Later host: [app.aletheiaworld.org](https://app.aletheiaworld.org) (same app)
- `MAKER_BIBLE.md` — Lordship Edition product lock (KJV; product page + Genesis 1 sample)
- Imprint: Aletheia Publications
- Positioning: Truth · Identity · Dominion

Primary navigation (locked): **Home · Learn · Publications · Community · Shop · Account**

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:43147](http://127.0.0.1:43147).

Without Firebase environment variables the app uses **local foundation mode**: a structured catalog and device-local accounts.

- Member: `member@aletheia.local` / `aletheia`
- Administrator: `admin@aletheia.local` / `aletheia`

Copy `.env.example` to `.env.local` when you have a Firebase web config. See `FIREBASE.md`.

## Documentation

- `FOUNDATION_SCHOOL.md` — consultant brief for Foundation School (school, six courses, textbook, companion books, pricing)
- `MAKER_BIBLE.md` — Maker Bible first ship
- `study/` — end-to-end study of Aletheia Libraries 1 (source map, Scripture matrix, chronology, lesson map)
- Foundation School Year 1 is in the app: seven textbook chapters, six courses (95 lessons), a written exam per course, and the week-52 final. Learn → Schools → Foundation School. The Walk writes one page per lesson; The Intensive writes three on the same cluster.
- `IMPLEMENTATION_ASSESSMENT.md` — empty-repo inspection and sequence
- `ARCHITECTURE.md` — locked product and technical decisions
- `DATA_MODEL.md` — Firestore map
- `FIREBASE.md` — project connection
- `SECURITY.md` — rules and authorization
- `DEVELOPMENT.md` — how to work on a phase

## Stack

Next.js, TypeScript, Tailwind, shadcn/ui, Firebase (Auth, Firestore, Storage, Hosting), IndexedDB for reader data.
