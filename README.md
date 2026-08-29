# Aletheia

Aletheia is the digital platform of **Aletheia World**.

It is one Progressive Web Application for learning, publication, reading, community, and commerce — not a set of disconnected sites.

- Master brand: Aletheia World — [aletheiaworld.org](https://aletheiaworld.org)
- Platform hosts: [aletheia.web.app](https://aletheia.web.app) and later [app.aletheiaworld.org](https://app.aletheiaworld.org) (same app)
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

- `FOUNDATION_SCHOOL.md` — consultant brief for Foundation School (school, six courses, textbook, companion books, pricing). Share this file for review.
- `IMPLEMENTATION_ASSESSMENT.md` — empty-repo inspection and sequence
- `ARCHITECTURE.md` — locked product and technical decisions
- `DATA_MODEL.md` — Firestore map
- `FIREBASE.md` — project connection
- `SECURITY.md` — rules and authorization
- `DEVELOPMENT.md` — how to work on a phase

## Stack

Next.js, TypeScript, Tailwind, shadcn/ui, Firebase (Auth, Firestore, Storage, Hosting), IndexedDB for reader data.
