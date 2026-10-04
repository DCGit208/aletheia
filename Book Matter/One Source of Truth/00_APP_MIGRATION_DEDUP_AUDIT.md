# Aletheia — One Source of Truth App Migration / De-Duplication Audit

**Audit status:** IN PROGRESS  
**Audit phase:** Phase 1 — Master Content & Dependency Audit  
**Repository:** `DCGit208/aletheia`  
**Audit purpose:** Establish the actual current application architecture before changing the canonical One Source book or Graphē Gate Course.

## Audit Standard

This audit follows:

- `00_ALETHEIA_CONTENT_ARCHITECTURE_AND_MIGRATION_GUARDRAILS.md`
- `00_ALETHEIA_ONE_SOURCE_MIGRATION_TASK_LIST.md`
- `00_FINAL_MANUSCRIPT_AUDIT_TASKS.md`
- `00_MASTER_WRITING_METHODOLOGY.md`
- `00_SOURCE_INTEGRATION_AND_EVIDENCE_PROTOCOL.md`
- `FOUNDATION_SCHOOL.md`
- the completed 85-chapter One Source manuscript
- current Aletheia application source.

**Rule:** no production content migration is declared safe until the relevant dependency has been inspected and verified.

---

# 1. EXECUTIVE FINDINGS

## Finding 1 — One Source in the application is legacy
**Status: CONFIRMED — UPDATE REQUIRED**

The active application content source `src/lib/content/book-one-source-of-truth.ts` currently contains **43 chapters**, ending at Chapter 43.

This is not the completed authoritative 85-chapter manuscript.

**Required action:** replace the active One Source chapter representation with the canonical 85-chapter manuscript.

**Do not append Chapters 44–85.**

---

## Finding 2 — The old One Source prematurely contains the Six First Principles
**Status: CONFIRMED — UPDATE REQUIRED**

The current 43-chapter One Source includes the six First Principles as Chapters **35–40**:

35. Repentance from Dead Works  
36. Faith Toward God  
37. The Doctrine of Baptisms  
38. Laying on of Hands  
39. Resurrection of the Dead  
40. Eternal Judgment

The completed 85-chapter manuscript establishes a different boundary: Chapter 85 is the gateway from the Doctrine of the Graphē into the Six First Principles, and the six principles are not chapters of One Source.

**Required action:** remove these legacy chapters from the active One Source representation by replacing the entire legacy structure with the 85-chapter canonical work.

---

## Finding 3 — Foundation School intentionally consumes One Source
**Status: CONFIRMED — DEPENDENCY**

`src/lib/data/foundation-school.ts` imports:

- `oneSourceBook`
- `oneSourceChapters`
- `oneSourceCourse`
- `ONE_SOURCE_BOOK_ID`

and constructs `foundationChapters` using:

`...oneSourceChapters`

This means replacing One Source content will automatically affect the Foundation School's shared catalog chapter source.

**Required action:** preserve the dependency, but verify that it points to the new 85-chapter canonical work and does not create duplicate Foundation handbook chapters.

---

## Finding 4 — The Foundation handbook is a separate work
**Status: CONFIRMED — RETAIN**

Canonical ID:

`book-principles-doctrine-christ`

It has its own seven chapter content sources:

- `textbook-ch1.ts`
- `textbook-ch2.ts`
- `textbook-ch3.ts`
- `textbook-ch4.ts`
- `textbook-ch5.ts`
- `textbook-ch6.ts`
- `textbook-ch7.ts`

It is not the One Source book.

**Required action:** retain as an independent Foundation School handbook.

---

## Finding 5 — The six First Principle books already exist as independent works
**Status: CONFIRMED — RETAIN**

Current canonical IDs found in the catalog:

- `book-repentance-from-dead-works`
- `book-doctrine-of-faith`
- `book-doctrine-of-baptism`
- `book-doctrine-of-laying-on-of-hands`
- `book-doctrine-of-resurrection`
- `book-doctrine-of-eternal-judgment`

They are represented as separate books with separate products.

**Required action:** preserve them. Do not recreate them inside One Source.

---

## Finding 6 — The Great Deception exists independently
**Status: CONFIRMED — RETAIN**

Canonical ID:

`book-great-deception`

It has its own product:

`product-great-deception`

and its own publication entry.

**Required action:** retain. It is not part of the One Source migration.

---

# 2. CURRENT BOOK INVENTORY

The current catalog contains the following distinct book records.

| Canonical ID | Work | Current status | Migration decision |
|---|---|---|---|
| `book-maker-bible` | MAKER BIBLE — Lordship Edition | Published | RETAIN |
| `book-beyond-ai-man` | Beyond AI — Man | Published | RETAIN |
| `book-doctrine-of-man` | The Doctrine of Man | Published | RETAIN |
| `book-real-man-ai` | The Real Man in the Age of AI | Published | RETAIN |
| `book-parables-hidden-treasure` | The Parables of the Hidden Treasure | Published | RETAIN |
| `book-repentance-from-dead-works` | Repentance from Dead Works | Published | RETAIN |
| `book-doctrine-of-faith` | Doctrine of Faith | Published | RETAIN |
| `book-doctrine-of-baptism` | Doctrine of Baptism | Published | RETAIN |
| `book-doctrine-of-laying-on-of-hands` | Doctrine of Laying on of Hands | Published | RETAIN |
| `book-doctrine-of-resurrection` | Doctrine of Resurrection of the Dead | Published | RETAIN |
| `book-doctrine-of-eternal-judgment` | Doctrine of Eternal Judgment | Published | RETAIN |
| `book-great-deception` | The Great Deception | Published | RETAIN |
| `book-one-source-of-truth` | One Source of Truth — The Doctrine of the Graphē | Published | UPDATE |
| `book-principles-doctrine-christ` | The Principles of the Doctrine of Christ | Published | RETAIN |

**Conclusion:** there is no evidence from this catalog inventory that the other works should be deleted as part of the One Source migration.

---

# 3. SIX FIRST PRINCIPLE BOOK / COURSE STRUCTURE

The catalog and Foundation School data establish separate courses:

- `course-fs-repentance`
- `course-fs-faith`
- `course-fs-baptisms`
- `course-fs-hands`
- `course-fs-resurrection`
- `course-fs-judgment`

The Foundation School therefore already has the intended six-course object structure.

The six independent doctrinal books are also present.

**Architectural conclusion:** the six principles should remain parallel Book + Course objects, not be restored as chapters inside One Source.

---

# 4. FOUNDATION SCHOOL STRUCTURE

Current `foundation-school.ts` establishes:

### School
`school-foundation`

### Gate
`foundationGateCourseId = oneSourceCourse.id`

### Foundation handbook
`foundationHandbookBookId = book-principles-doctrine-christ`

### Six courses
The six `course-fs-*` courses.

### Programs
- `program-foundation-year` — The Walk
- `program-foundation-intensive` — The Intensive

### Program resource relationship
The programs grant:

- One Source book
- Foundation handbook
- Graphē Gate Course
- six First Principle courses.

This is structurally consistent with the intended architecture, subject to the Graphē Course remapping audit.

---

# 5. CRITICAL CONTENT DEPENDENCY

Current Foundation School chapter aggregation is:

`...oneSourceChapters`

followed by the seven Foundation handbook chapters.

This is not itself a duplicate book. It is a shared catalog aggregation.

After migration, it must result in:

- One Source = 85 chapters
- Foundation handbook = 7 chapters
- no chapter from either work accidentally assigned to the other.

The migration must therefore test the resulting catalog chapter set after the One Source replacement.

---

# 6. GRAPHĒ COURSE — REVIEW REQUIRED

The Graphē Gate Course is:

`course-doctrine-of-the-graphe`

It is intentionally separate from the six Foundation principle courses.

However, the existing Graphē course source has legacy references to the previous One Source chapter architecture.

Known legacy reference ranges include:

- Chapters 1–6
- Chapters 7–10
- Chapters 11–14
- Chapters 15–20
- Chapters 21–32
- lesson-level references to old chapter numbers
- capstone references to the former Parts I–XII structure.

**Status: REMAP REQUIRED.**

The course must be remapped against the final 85-chapter structure.

---

# 7. GRAPHĒ COURSE RESOURCE AMBIGUITY

The current Graphē course lessons include both:

- `ONE_SOURCE_BOOK_ID`
- `book-principles-doctrine-christ`

as resource IDs.

This requires deliberate review.

The Foundation School architecture states that:

- One Source is the **gate book and course**
- The Principles of the Doctrine of Christ is the **school handbook**
- the six principle courses are complete courses.

Therefore, the Graphē course should not accidentally appear to depend on the Foundation handbook as though the handbook were the Graphē textbook.

**Status: REVIEW**

Do not remove the relationship until each lesson/resource dependency is inspected.

---

# 8. PRODUCT / OFFER STRUCTURE

Current offerings establish:

### One Source
`product-one-source-of-truth`

Grants:

`book-one-source-of-truth`

Price currently represented as $100.

### Graphē Course
`product-course-doctrine-of-the-graphe`

Grants:
- Graphē Course
- One Source book as support.

### Foundation handbook
`product-principles-doctrine-christ`

Grants:
- Foundation handbook.

### Six principle courses
Each has its own product.

### Six principle books
Each has its own product.

### Foundation programs
The Walk and The Intensive grant:
- One Source book
- Foundation handbook
- Graphē Course
- six principle courses.

**Initial assessment:** product identity architecture is coherent and should be preserved while content is migrated.

---

# 9. DUPLICATION / COLLATERAL-DAMAGE ASSESSMENT

## Confirmed true migration target
**One Source legacy content** → UPDATE / REPLACE

## Confirmed separate works
- The Great Deception → RETAIN
- MAKER BIBLE → RETAIN
- Beyond AI — Man → RETAIN
- The Doctrine of Man → RETAIN
- The Real Man in the Age of AI → RETAIN
- The Parables of the Hidden Treasure → RETAIN
- six First Principle books → RETAIN
- Foundation handbook → RETAIN

## No deletion authorized by this audit

Nothing in this audit authorizes deletion of another book merely because it participates in Foundation School, shares a theme, or has a related course.

---

# 10. MIGRATION RISKS IDENTIFIED

### Risk A — Appending instead of replacing
Would leave two incompatible One Source architectures.

**Control:** full replacement of the legacy chapter array.

### Risk B — Foundation School accidentally retaining old chapter structure
Because it imports `oneSourceChapters`.

**Control:** verify the new shared array contains exactly the 85 canonical chapters.

### Risk C — Six Principles reappearing inside One Source
Because the old 43-chapter source contained them.

**Control:** final One Source must end at Chapter 85, whose function is the gateway to the six principles.

### Risk D — Graphē Course stale references
The course was built against the old chapter numbering.

**Control:** complete reference remap before release.

### Risk E — Graphē Course / handbook ambiguity
Current lessons may reference both books.

**Control:** lesson-by-lesson resource dependency review.

### Risk F — Unintended collateral deletion
A broad refactor could affect independent books and courses.

**Control:** retain-by-default rule and final catalog/product comparison.

---

# 11. CURRENT PHASE STATUS

| Task | Status |
|---|---|
| 1. Inventory existing Works | **PASS — initial inventory** |
| 2. Inventory Courses | **IN PROGRESS** |
| 3. Inventory Programs | **PASS — initial inventory** |
| 4. Inventory Products/Offers | **PASS — initial inventory** |
| 5. Duplicate/Ambiguity Audit | **IN PROGRESS** |
| 6–36 | **PENDING** |

The initial inventory is strong enough to establish the principal migration boundary, but the audit is **not yet closed** because course-level and repository-wide reference checks still need completion.

---

# 12. NEXT AUDIT ACTIONS

Before modifying One Source content:

1. Complete repository-wide search for all One Source references.
2. Inspect the complete Graphē Course modules and lessons.
3. Identify every old chapter/Part reference.
4. Inspect all six principle course dependencies.
5. Verify all product/offer grants against catalog IDs.
6. Verify all Foundation School resource relationships.
7. Verify the reader/publication routes consume the same canonical book object.
8. Produce the final Phase 1 dependency matrix.
9. Mark Phase 1 PASS only when no unexplained dependency remains.
10. Then begin Phase 2 — One Source replacement.

---

# AUDIT DECISION

**One Source is confirmed as the only canonical work requiring replacement in this migration.**

The correct operation is:

> **Replace the legacy 43-chapter One Source with the authoritative 85-chapter One Source.**

It is **not**:

> delete Aletheia books → rebuild everything → recreate the six principles.

The existing independent works, six principle books, Foundation handbook, courses, programs, and products are preserved unless a later dependency audit proves a specific relationship must change.

**Current gate:** DO NOT perform the production content replacement until the remaining Phase 1 dependency checks are complete.
