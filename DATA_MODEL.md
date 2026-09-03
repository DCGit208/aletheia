# Data model

Conceptual entities are not all top-level collections. The live map:

## Top-level collections

| Collection | Purpose |
| --- | --- |
| `profiles` | Public identity. No email |
| `usersPrivate` | Owner-only record (email). Subcollections below |
| `authors` | First-class people. Publishing rights are separate |
| `books` | Unified book entity |
| `bookChapters` | Chapter bodies, keyed independently for pagination |
| `courses` | Course metadata |
| `learningPaths` | Ordered course lists (light sequences) |
| `schools` | Houses of study inside Learn |
| `programs` | Enrolable cadences of a school's curriculum |
| `modules` | Course modules |
| `lessons` | Lesson bodies |
| `journals` | Journal metadata |
| `journalIssues` | Issues of a journal |
| `articles` | Articles belonging to an issue |
| `communities` | Groups. Created by administrators |
| `boards` | Boards inside a community |
| `topics` | Threads |
| `posts` | Posts and replies (reply is a post with a parent in later phases) |
| `products` | Commercial offers pointing at content |
| `announcements` | Platform notices |
| `home` | Featured composition for Home |
| `searchIndex` | Token documents written by backend jobs |
| `reports` | User reports |
| `auditLogs` | Privileged-action log. Client write denied |
| `manualPayments` | Pending Mobile Money for the year SKUs. Client write denied. Grants happen only after `confirmManualPayment` |

## User subcollections (`usersPrivate/{uid}/…`)

`entitlements`, `enrollments`, `programEnrollments`, `readingProgress`, `bookmarks`, `orders`, `notifications`

Orders and purchase entitlements are written by trusted backend after verification. Clients may create **enrollment** entitlements only for published public/free courses **or programs**.

A Mobile Money submit creates `manualPayments/{id}` and a **pending** order. Confirming that payment writes the same purchase entitlements as Stripe. The submit path must never grant.

Privileged admin actions (roles, grants, announcement publish, report resolve) append to `auditLogs`. Client write remains denied.

## Content lifecycle

`draft` → `review` → `published` → `archived`

New records are not public by default.

## Access

`public` and `free` are readable without an entitlement. `entitled` and `private` require a grant (or a declared preview chapter). Preview is not `paid = true`.

## Local catalog

Until Firestore is populated, `src/lib/data/catalog.ts` is the structured source consumed by the same repository functions. Pages do not hard-code titles into templates.
