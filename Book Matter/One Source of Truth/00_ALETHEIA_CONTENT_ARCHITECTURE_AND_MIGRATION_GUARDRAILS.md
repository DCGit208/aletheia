# Aletheia Content Architecture & Migration Guardrails

## Purpose

This document is the master architectural reference for the Aletheia content migration and for the completion of:

1. **One Source of Truth — The Doctrine of the Graphē** as the canonical 85-chapter book.
2. **One Source of Truth — Guided Study & Mastery Course** as the companion formation/assessment course.
3. The subsequent Foundation School architecture built around the Six First Principles.
4. Preservation and correct mapping of all other existing Aletheia works.

This document is an architectural guardrail. It exists to prevent duplication, accidental deletion, ambiguous relationships, premature doctrinal material, and collateral changes to independent works.

---

# 1. Non-Negotiable Preservation Rule

> **No existing Aletheia work is to be deleted merely because another work is being revised, replaced, or reorganized.**

An existing work may only be removed after all of the following have been established:

- it is genuinely a duplicate or obsolete record;
- a canonical work has been identified;
- every dependency and reference has been mapped;
- legitimate content has been preserved or deliberately superseded;
- product/access relationships have been reconciled;
- no independent publication identity is being lost.

The default action is therefore:

**RETAIN unless proven otherwise.**

---

# 2. Canonical Identity Principle

Aletheia is not to be treated as a collection of duplicated books and courses.

It is a library of **canonical works** connected to distinct:

- educational experiences;
- programs;
- access products;
- publication surfaces;
- community or other application contexts.

A single canonical work may legitimately appear in several contexts.

For example:

**One Source of Truth**

may appear as:

- a publication;
- a Learn resource;
- a course resource;
- a Shop/product object;
- a program resource.

That does **not** create five books.

It remains one canonical work with one canonical identity.

---

# 3. Four Distinct Architectural Objects

## 3.1 WORK

A published intellectual work.

Examples:

- One Source of Truth — The Doctrine of the Graphē
- The Great Deception
- Doctrine of Faith
- Doctrine of Baptisms
- Doctrine of Repentance from Dead Works
- Doctrine of Resurrection of the Dead
- Doctrine of Eternal Judgment
- other existing Aletheia publications

A work has its own canonical identity.

## 3.2 COURSE

A pedagogical experience.

A course may:

- use one or more books;
- organize material into modules and lessons;
- provide exercises and drills;
- require written work;
- provide assessments;
- establish competence or readiness.

A course is **not automatically another copy of its book**.

## 3.3 PROGRAM

A structured collection or progression of courses and resources.

Examples include:

- Foundation School;
- The Walk;
- The Intensive;
- other Aletheia programs.

A program may grant access to books and courses without becoming those books or courses.

## 3.4 PRODUCT / OFFER

A commercial or access object.

A product may grant access to:

- a book;
- a course;
- several books;
- several courses;
- a program;
- a bundle.

Product identity must not be confused with intellectual-work identity.

---

# 4. Core Educational Architecture

The intended progression is:

**Graphē / Holy Writ**

↓

**One Source of Truth — The Doctrine of the Graphē**  
*Canonical Book*

↓

**One Source of Truth — Guided Study & Mastery**  
*Canonical Course*

↓

**Readiness / Gate Assessment**

↓

**Foundation School**

↓

**Six First Principles**

The important distinction is:

> **The book establishes the doctrine.**
>
> **The course forms the student through the doctrine.**
>
> **The assessment establishes readiness.**

The Gate is a function of the educational progression. It is not a seventh doctrine or a seventh first principle.

---

# 5. One Source of Truth — Canonical Book

## Canonical work

**One Source of Truth — The Doctrine of the Graphē**

Stable application identity:

`book-one-source-of-truth`

The application identity should be preserved while its obsolete legacy content is replaced.

## Authoritative manuscript

The completed manuscript in:

`Book Matter/One Source of Truth/`

is the authoritative source for the application book.

The completed manuscript contains **85 chapters**.

The 85-chapter structure is authoritative.

## Critical migration rule

Do **not** append chapters 44–85 to the old app book.

The old application version is a legacy 43-chapter structure.

The correct operation is:

> **Replace the obsolete 43-chapter content with the canonical 85-chapter work.**

The old 43-chapter version must not survive as a second reader-facing edition of the same work.

## Six First Principles boundary

The obsolete app version prematurely contained dedicated chapters on the Six First Principles.

The completed 85-chapter manuscript deliberately ends with:

**Chapter 85 — From Graphē to the Six First Principles**

The book establishes the gate into the Six First Principles.

It does not become a seventh principle and does not prematurely function as the six-principle curriculum.

Therefore:

**Do not restore the old six-principle chapters to One Source of Truth.**

---

# 6. One Source of Truth — Course

## Canonical course

The existing Graphē course identity is to be preserved, but its content and references must be redesigned around the completed 85-chapter book.

The course should ultimately be presented as:

**One Source of Truth — Guided Study & Mastery**

or an equivalent final reader-facing title approved during implementation.

Its function is:

> To guide the student through the Doctrine of the Graphē, require intellectual and textual work, exercise the student's handling of Scripture, and establish readiness to proceed to the Six First Principles.

## Book vs Course

### The Book

The book is:

- scholarly exposition;
- progressive argument;
- doctrinal development;
- sustained reasoning;
- the complete 85-chapter text.

### The Course

The course is:

- guided formation;
- structured study;
- exercises;
- Word drills;
- distinctions;
- Scripture work;
- reasoning exercises;
- written responses;
- assessments;
- final readiness demonstration.

Therefore:

> **The course must not become an electronic duplicate of all 85 chapters.**

It should organize and pedagogically compress the book's material into meaningful learning units.

A course unit may draw from multiple chapters.

A course lesson may direct the student to read selected chapters and then require work that demonstrates understanding.

---

# 7. Course Architecture

The final course structure is to be determined from the completed 85-chapter book, but its pedagogical pattern should generally be:

**Read → Study → Drill → Reason → Write → Demonstrate → Assess**

Possible formation areas include:

1. Graphē and Holy Writ
2. Written authority and competing courts
3. Interpretation under the writing
4. Hearing and maturity
5. Unskillfulness and the babe
6. Scholarly labour and `spoudazō`
7. Perception, learning, reasoning, and knowledge
8. Exercise of the Word
9. Rightly dividing and interpretive discipline
10. Readiness for the Six First Principles

These are architectural directions, not a license to invent material that the completed manuscript does not support.

---

# 8. Foundation School

Foundation School is the next educational stage after readiness.

Its purpose is to teach the Six First Principles.

The six remain exactly six:

1. Repentance from Dead Works
2. Faith Toward God
3. The Doctrine of Baptisms
4. Laying on of Hands
5. Resurrection of the Dead
6. Eternal Judgment

The Graphē Gate does not become a seventh principle.

---

# 9. Foundation Handbook

The existing:

**The Principles of the Doctrine of Christ — Foundations for Christian Understanding & Maturity**

has its own canonical identity and remains a separate Foundation School handbook.

Application identity:

`book-principles-doctrine-christ`

It must not be merged into One Source of Truth.

It must not be confused with the individual Six Principle books.

It may function as a common Foundation School resource while the individual principle books and courses remain distinct works.

---

# 10. Six First Principles: Book + Course Architecture

Each First Principle may legitimately have both:

1. an independent book; and
2. an educational course.

The intended relationship is:

| Principle | Independent Work | Course |
|---|---|---|
| Repentance from Dead Works | Doctrine of Repentance from Dead Works | Repentance Course |
| Faith Toward God | Doctrine of Faith | Faith Course |
| Doctrine of Baptisms | Doctrine of Baptisms | Baptisms Course |
| Laying on of Hands | Doctrine of Laying on of Hands | Hands Course |
| Resurrection of the Dead | Doctrine of Resurrection of the Dead | Resurrection Course |
| Eternal Judgment | Doctrine of Eternal Judgment | Judgment Course |

The exact canonical titles/IDs must be verified against the repository before modification.

The important rule is:

> **A principle book and its course are related objects, not duplicate objects.**

A course may use its corresponding book as a primary resource.

The book remains independently publishable.

---

# 11. Independent Aletheia Works

Existing works outside the Foundation School remain independent works.

Examples already identified in the Aletheia catalog/content architecture include:

- The Great Deception
- Doctrine of Man
- Beyond AI Man
- Real Man AI
- Parables / Hidden Treasure
- Maker Bible
- other existing publications and companion works

These works are not to be absorbed into the Foundation School simply because the Foundation School is being reorganized.

They retain their own publication identities unless a separate audit establishes otherwise.

---

# 12. Companions Are Not Automatically Primary Textbooks

A companion work may support a course or program without becoming:

- the course itself;
- the primary Foundation handbook;
- One Source of Truth;
- or another work.

The repository already contains companion content such as Faith and Repentance companions.

Their exact relationship must be mapped before any content is moved or deleted.

---

# 13. One Canonical Work, Many Legitimate Surfaces

A canonical work can appear in:

**Publications**

↓

**Learn**

↓

**Course resources**

↓

**Programs**

↓

**Shop / Products**

without creating duplicate work records.

The architecture therefore follows:

**ONE WORK → MANY CONTEXTS**

not:

**ONE CONTEXT → ONE COPY OF THE WORK**

---

# 14. Product and Access Architecture

Products/offers are access mechanisms.

They should grant canonical works/courses/programs rather than create alternate intellectual identities.

Example:

**product-one-source-of-truth**

may grant:

**book-one-source-of-truth**

The product is not another version of the book.

Likewise a program may grant several canonical books and courses.

Existing product/access relationships must be preserved unless the dependency audit establishes that a relationship is wrong.

---

# 15. Migration Status Vocabulary

Every existing asset should receive one of these statuses during the master audit:

### RETAIN

Canonical and valid.

### UPDATE

Same work; content or metadata needs updating.

### REMAP

Valid work; references or relationships need correction.

### MERGE

Proven duplicate of another canonical work.

### ARCHIVE

Historical/obsolete material retained outside the active publication structure.

### REMOVE

Only after proof that it is genuinely redundant/obsolete and all dependencies have been resolved.

Default:

> **RETAIN unless proven otherwise.**

---

# 16. Required Master Audit Before Broad Refactoring

Before modifying unrelated works, establish a master inventory covering:

## Publications

For every book/work:

- canonical ID;
- title;
- author;
- type;
- status;
- content source;
- publication surface;
- course relationship;
- program relationship;
- product relationship;
- duplicate/ambiguity status.

## Courses

For every course:

- canonical ID;
- subject;
- associated book(s);
- associated handbook(s);
- prerequisite;
- subsequent course;
- program membership;
- assessment structure.

## Programs

For every program:

- constituent courses;
- constituent books;
- access grants;
- progression logic.

## Products

For every product:

- what it represents;
- what it grants;
- whether it is a book, course, program, bundle, or access object.

## Cross-links

Map:

**Book → Course → Program → Product**

and also:

**Work → Publications → Learn → Shop**

---

# 17. Specific One Source Migration

The immediate workstream is:

### Step 1 — Preserve identity

Retain:

`book-one-source-of-truth`

and its legitimate product/access identity.

### Step 2 — Replace legacy content

Remove the old 43-chapter reader content as the active content representation.

Replace it with the completed 85-chapter manuscript.

### Step 3 — Preserve reader infrastructure

Retain:

- book routing;
- reader;
- chapter navigation;
- progress;
- search;
- publication page;
- access/entitlement logic.

### Step 4 — Remap course

The existing Graphē course contains references to the old chapter numbering and old book architecture.

Those references must be rewritten against the 85-chapter manuscript.

### Step 5 — Separate resources

The Graphē course should primarily use:

**One Source of Truth**

as its principal book/resource.

The existing Foundation handbook relationship must be reviewed rather than automatically retained.

### Step 6 — Preserve Foundation School

Do not alter the six principle courses or their handbook merely because the Graphē book is being replaced.

Only change them if the dependency audit identifies a real architectural dependency.

### Step 7 — Verify

After implementation:

- no obsolete 43-chapter One Source remains reader-facing;
- all 85 chapters appear exactly once;
- no chapter is duplicated;
- no old chapter references remain;
- no Six Principle material has been accidentally restored to One Source;
- One Source does not become a seventh principle;
- Foundation handbook remains distinct;
- Six principle books remain distinct;
- Six principle courses remain distinct;
- independent books remain intact;
- products/access remain coherent;
- Learn/Publications/Shop references resolve correctly.

---

# 18. Reader-Facing Cleanliness Rule

Internal production material must not be exposed as reader-facing book content.

The reader should see the finished scholarly work.

Do not expose:

- writing methodology;
- source integration protocol;
- audit files;
- Cursor instructions;
- production notes;
- internal chapter-generation scaffolding;
- editorial status notes;
- internal source labels;
- development instructions.

The application book should present the finished work, not its production environment.

---

# 19. Boundary Between Book and Course

The following distinction is authoritative for implementation:

> **The Book is the scholarly work.**
>
> **The Course is the pedagogical pathway through the work.**
>
> **The Assessment establishes demonstrated readiness.**
>
> **The Foundation School teaches the Six First Principles.**
>
> **The Six Principle books remain independent works.**
>
> **Other Aletheia books remain independent works.**

---

# 20. No-Collateral-Damage Rule

During the One Source migration:

### Do not delete

- The Great Deception
- other independent books;
- Six Principle books;
- Foundation handbook;
- legitimate companion works;
- unrelated courses;
- unrelated products;
- unrelated program resources.

### Do not merge

- One Source with the Foundation handbook;
- One Source with any Six Principle book;
- a Six Principle book with its course;
- independent publications into Foundation School.

### Do not duplicate

- the 85 chapters;
- Six Principle content inside One Source;
- book content as a second canonical book;
- courses as duplicate books.

### Do preserve

- canonical IDs;
- legitimate URLs/routes;
- access entitlements;
- product relationships;
- publication identities;
- independent works.

---

# 21. Final Architecture

The intended high-level architecture is:

**ALETHEIA**

### Publications / Library

Canonical works of many kinds:

- One Source of Truth
- Six Principle books
- The Great Deception
- Doctrine of Man
- Beyond AI Man
- Real Man AI
- Maker Bible
- other works
- companion works

### Learn

Courses and learning experiences:

- One Source of Truth Course
- Foundation School courses
- other courses

### Foundation School

Common handbook + Six Principle curriculum:

- Repentance
- Faith
- Baptisms
- Laying on of Hands
- Resurrection
- Eternal Judgment

### Programs

Collections/progressions such as:

- The Walk
- The Intensive
- other programs

### Shop / Access

Products and offers granting access to canonical works/courses/programs.

---

# 22. Immediate Execution Order

The work should proceed in this order:

**A. Master architecture/dependency audit**

↓

**B. Confirm canonical identities of all existing books, courses, companions, programs and products**

↓

**C. Clear One Source of Truth of legacy/duplicate content**

↓

**D. Install the completed 85-chapter One Source manuscript as the canonical book**

↓

**E. Rebuild/remap the One Source Course as a genuine guided study/mastery course**

↓

**F. Verify the Gate/readiness boundary**

↓

**G. Verify Foundation School and Six Principle book/course relationships**

↓

**H. Verify independent publications remain intact**

↓

**I. Verify product/access relationships**

↓

**J. Build/test the application**

↓

**K. Move to the next Aletheia workstream**

---

# 23. Governing Principle

> **Aletheia must have one source of truth for each work, not one copy of each work for every context.**
>
> **Books remain books. Courses remain courses. Programs remain programs. Products remain access mechanisms.**
>
> **A work may serve many contexts without becoming many works.**
>
> **Revision of one work must never silently destroy another.**
>
> **One Source of Truth is the canonical Graphē gate work; its course forms the student through that work; readiness opens the way to the Six First Principles; the Six Principles retain their own books and courses; and every other legitimate Aletheia publication remains part of the library.**

---

## Current One Source Reference Set

The authoritative 85-chapter manuscript and its existing governance documents remain in:

`Book Matter/One Source of Truth/`

Key documents:

- `00_MASTER_WRITING_METHODOLOGY.md`
- `00_SOURCE_INTEGRATION_AND_EVIDENCE_PROTOCOL.md`
- `00_FINAL_MANUSCRIPT_AUDIT_TASKS.md`
- `One_Source_of_Truth_Final_TOC_and_Guidance.md`
- `One_Source_of_Truth_Book_Architecture.md`
- `ARCHITECTURE_AND_WRITING_PROCESS.md`
- Chapters 1–85

The 85-chapter manuscript has already passed the final manuscript audit. This document governs the **application/library migration and content relationship layer**, not the scholarly content itself.
