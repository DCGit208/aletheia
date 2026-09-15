# Aletheia

Aletheia is the digital platform of **Aletheia World**.

It is one Progressive Web Application for learning, publication, reading, community, and commerce — not a set of disconnected sites.

- Master brand: Aletheia World — [aletheiaworld.org](https://aletheiaworld.org)
- Live platform: [app.aletheiaworld.org](https://app.aletheiaworld.org) (same app as [aletheia-world.web.app](https://aletheia-world.web.app))
- `landing/` — parent/marketing site for the apex domain (Firebase Hosting site `aletheia-landing`)
- `MAKER_BIBLE.md` — Lordship Edition product lock (KJV; product page + Genesis 1 sample; $150)
- `PAYMENTS.md` — Stripe on the existing account; webhook, entitlements, and year Mobile Money
- Imprint: Aletheia Publications
- Positioning: Truth · Identity · Dominion

Primary navigation (locked): **Home · Learn · Publications · Community · Shop · Account**

Administration is a protected route at `/admin` (Account → Administration), not a seventh tab. The founding administrator is `dr.coachachu@btheducationgroup.org`.

`/admin` sections: People, Analytics, Purchases, Commerce (Mobile Money), Notices (broadcasts), Reports, Audit.

Community is boards inside Commons — including **Projects**. Members watch a board to be notified of new posts. There is no Chat tab and no private messenger.

Account → Notifications holds the in-app inbox. After installing the PWA on a home screen (Account or Notifications → Add to home screen), **Enable home-screen alerts** registers Web Push on that device.

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
- `landing/README.md` — parent site at aletheiaworld.org (`firebase deploy --only hosting:aletheia-landing`)
- `MAKER_BIBLE.md` — Maker Bible first ship ($150)
- `PAYMENTS.md` — Stripe (same account as SBD Network; separate Aletheia webhook; year Mobile Money)
- `study/` — writer archive of the 2015 Aletheia Libraries 1 manuscript (not a student resource; not sold)
- Foundation School Year 1 is in the app: seven textbook chapters, six courses (95 lessons), a written exam per course, and the week-52 final. Learn → Schools → Foundation School. The Walk writes one page per lesson; The Intensive writes three on the same cluster.
- `IMPLEMENTATION_ASSESSMENT.md` — empty-repo inspection and sequence
- `ARCHITECTURE.md` — locked product and technical decisions
- `DATA_MODEL.md` — Firestore map
- `FIREBASE.md` — project connection
- `SECURITY.md` — rules and authorization
- `DEVELOPMENT.md` — how to work on a phase

## Stack

Next.js, TypeScript, Tailwind, shadcn/ui, Firebase (Auth, Firestore, Storage, Hosting), IndexedDB for reader data.
