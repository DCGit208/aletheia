# Aletheia — One Source of Truth Migration Execution Task List

**Status:** MASTER EXECUTION CHECKLIST  
**Purpose:** Execute the One Source of Truth migration in a controlled, evidence-based, dependency-aware manner while preserving every valid existing work and preventing duplication, ambiguity, stale references, rework, and collateral damage.

> **Core rule:** Audit first → preserve everything valid → eliminate only proven duplication → replace legacy One Source → remap the Graphē Course → verify the Gate → then proceed to the Six First Principles.

## Status Vocabulary

- **PENDING** — not started
- **IN PROGRESS** — actively being worked
- **PASS** — verified complete
- **REVIEW** — requires a decision/evidence
- **BLOCKED** — dependency unresolved
- **NOT APPLICABLE** — explicitly determined not to apply

No task is complete merely because code was changed. Completion requires verification.

# PHASE 1 — MASTER CONTENT & DEPENDENCY AUDIT

### 1. Inventory every existing Work — PASS
Record canonical ID, title, content source, chapter count, author, publication status, related courses/products/programs, companions, and independent/dependent status. Special attention: *The Great Deception*, the six First Principle books, and all other existing works.

### 2. Inventory every Course — PASS — initial catalog/dependency inventory
Map IDs, titles, modules, lessons, referenced books/chapters, exercises, assessments, products/offers, and program relationships.

### 3. Inventory every Program — PASS — initial program inventory
Map Foundation School, The Walk, The Intensive, other programs, and the books/courses each grants, requires, or references.

### 4. Inventory every Product / Offer — PASS — initial offer/grant inventory
Determine what is sold, what access it grants, canonical Work/Course relationships, duplicate records, and entitlement relationships.

### 5. Duplicate & Ambiguity Audit — REVIEW — no deletion/merge authorized; Graphē resource relationship remains under review
Classify every relevant object as **RETAIN / UPDATE / REMAP / MERGE / ARCHIVE / REMOVE**. Default is **RETAIN**. Remove or merge only when duplication/obsolescence is proven.

# PHASE 2 — ONE SOURCE OF TRUTH MIGRATION

### 6. Establish canonical One Source identity — PASS
Canonical ID: `book-one-source-of-truth`.  
Canonical title: **One Source of Truth — The Doctrine of the Graphē**.  
Canonical content: the completed 85-chapter manuscript.

### 7. Replace; do not append — PASS — implemented on migration branch
Replace the legacy 43-chapter active representation with the authoritative 85-chapter structure. Do **not** create Chapters 44–85 on top of the old book.

### 8. Preserve valid application infrastructure — PASS — IDs/routes/reader/progress/access identities preserved for QA
Preserve canonical ID, routes, reader, progress, search, publication identity, access/entitlement, and product identity wherever valid.

### 9. Verify the 85-chapter sequence — PASS — canonical app partitions cover Chapters 1–85 in order
Confirm exactly 85 chapters, correct order/titles, no missing or duplicate chapters, no active legacy content, and no Six First Principles chapters inside One Source.

# PHASE 3 — GRAPHĒ GATE COURSE

### 10. Audit existing Graphē Course — PASS — legacy chapter/Part references remapped
Find every legacy One Source chapter/Part reference, lesson reference, capstone reference, description, and resource relationship.

### 11. Remap course to the 85-chapter book — PASS — 16 lessons remapped
The course guides learners through the authoritative book.

**Book = scholarly/textual work.**  
**Course = pedagogical pathway through the work.**

### 12. Rebuild all chapter references — PASS on migration branch
Verify and remap every chapter reference. No stale references may remain.

### 13. Review Graphē resource relationships — REVIEW — One Source + Foundation handbook relationship retained pending product/access QA
Audit the current relationship to `book-principles-doctrine-christ`. Do not change it until evidence shows whether it is justified, unnecessary, or ambiguous.

### 14. Preserve pedagogical distinction — PASS — course remains a guided pathway, not a duplicate manuscript
The course must not become an electronic duplicate of the book. Preserve appropriate orientation, guided study, questions, exercises, reflection, comprehension, application, assessment, and readiness.

# PHASE 4 — FOUNDATION SCHOOL BOUNDARY

### 15. Verify Foundation Handbook — PASS — separate canonical work retained
Preserve **The Principles of the Doctrine of Christ**, canonical ID `book-principles-doctrine-christ`, as a separate work. Never merge the 85 One Source chapters into it.

### 16. Verify Six First Principle books — PASS — six independent canonical works retained
Establish actual canonical IDs/content sources for:
1. Repentance from Dead Works
2. Faith Toward God
3. The Doctrine of Baptisms
4. Laying on of Hands
5. Resurrection of the Dead
6. Eternal Judgment

Each remains an independent canonical Work unless evidence proves otherwise.

### 17. Verify Six First Principle courses — PASS — six independent canonical courses retained
Verify the book/course relationship for each. Target: **One Principle → One canonical Book + One canonical Course**.

### 18. Enforce Graphē → Principles boundary — PASS — Chapter 85 is the gateway; principles are not One Source chapters
Maintain:

> Graphē → Doctrine of the Graphē → Preparation → Readiness → Six First Principles

The Six First Principles are not chapters inside One Source.

# PHASE 5 — PROTECTION OF OTHER WORKS

### 19. Verify independent works — PASS — independent works retained
Explicitly audit *The Great Deception* and every other existing publication. Independent works are **RETAINED**.

### 20. Identify only genuine duplicates — PASS — no deletion/merge authorized by current audit
Merge/archive/remove only where two records demonstrably represent the same canonical work or an obsolete duplicate. Related works are not duplicates merely because they share themes or educational relationships.

# PHASE 6 — CROSS-SYSTEM DEPENDENCY CHECK

### 21. Audit every One Source reference — REVIEW — known application dependency graph audited; final repository-wide QA remains
Search the repository for `book-one-source-of-truth` and `One Source of Truth`. Review Learn, Publications, Reader, Catalog, Foundation School, Graphē Course, Programs, Shop, Products, Offers, Entitlements, Search, navigation, and metadata.

### 22. Audit all legacy chapter references — REVIEW — Graphē course remapped; final repository-wide stale-reference QA remains
Search for old Parts I–XII, old Chapters 1–32, legacy 43-chapter references, and old Six First Principles placement. Every active reference must be remapped or explicitly proven unrelated.

# PHASE 7 — IMPLEMENTATION

**Gate:** Phases 1–6 must be sufficiently resolved before production content is changed.

### 23. Replace One Source content — PASS on migration branch
Implement the verified 85-chapter canonical content.

### 24. Remap the Graphē Course — PASS on migration branch
Update chapter, lesson, module, capstone, and pedagogical sequencing references.

### 25. Clean resource relationships — PASS — Graphē Gate lessons reference One Source only; Foundation handbook remains program-scoped
Change only relationships proven to be incorrect, ambiguous, or unnecessary.

### 26. Preserve all valid other works — PASS on migration branch
Verify no unrelated books, courses, or programs were deleted, overwritten, or detached.

### 27. Verify products and access — PENDING
Verify One Source product, Graphē Course product, Foundation handbook product, The Walk, The Intensive, Foundation School, and Six First Principle products/courses.

# PHASE 8 — QUALITY ASSURANCE & RELEASE GATE

### 28. Structural QA — PENDING
Verify exactly 85 chapters, correct sequence, titles/IDs, no duplicates, and no missing chapters.

### 29. Content QA — PENDING
Verify application content against the authoritative manuscript. Confirm no silent omissions, unintended additions, legacy fragments, or Six Principle material inside One Source.

### 30. Course QA — PENDING
Verify chapter/book references, lesson/module coherence, assessments, and pedagogical progression.

### 31. Dependency QA — PENDING
Every relevant Work, Course, Program, Product, Offer, Entitlement, and Route must resolve correctly.

### 32. Build / type / application QA — PENDING
Run available type checks, builds, lint/static checks where applicable, route checks, and content-integrity checks. Resolve migration-caused errors before release.

### 33. Final architecture audit — PENDING
Produce a final PASS/REVIEW report covering content, dependencies, duplication, references, architecture, products, access, course relationships, and release readiness.

# PHASE 9 — MOVE FORWARD

### 34. Freeze One Source — PENDING
Once verified, the 85-chapter work becomes the canonical Gate text.

### 35. Finalize the Graphē Gate Course — PENDING
Complete the book/course relationship as the Aletheia Graphē Gate.

### 36. Move to the Six First Principles — PENDING
Only after the Gate is clean, proceed systematically through:
1. Repentance from Dead Works
2. Faith Toward God
3. The Doctrine of Baptisms
4. Laying on of Hands
5. Resurrection of the Dead
6. Eternal Judgment

Each is handled as its own canonical work/course relationship.

# REFERENCE CONTROL

Execution must consult, not merely remember:

1. `00_ALETHEIA_CONTENT_ARCHITECTURE_AND_MIGRATION_GUARDRAILS.md`
2. `00_FINAL_MANUSCRIPT_AUDIT_TASKS.md`
3. `00_MASTER_WRITING_METHODOLOGY.md`
4. `00_SOURCE_INTEGRATION_AND_EVIDENCE_PROTOCOL.md`
5. `One_Source_of_Truth_Final_TOC_and_Guidance.md`
6. The completed 85-chapter One Source manuscript
7. Relevant Aletheia application source files
8. `FOUNDATION_SCHOOL.md`
9. Authoritative Six First Principles source material when those works are reached

**Conflict rule:** if references conflict, stop and resolve the conflict explicitly. Do not silently choose one.

# NO-SKIP QUALITY RULE

Completion follows:

**Source → Evidence → Implementation → Dependency Check → Verification → PASS**

A task depending on unresolved earlier work remains **BLOCKED** or **REVIEW**.

# NO-COLLATERAL-DAMAGE RULE

> **Preserve every valid canonical work.**
>
> **Replace only what is demonstrably obsolete.**
>
> **Remap only what is demonstrably incorrect.**
>
> **Merge/remove only proven duplicates or obsolete records.**

# FINAL ARCHITECTURE

**Graphē**  
↓  
**Doctrine of the Graphē**  
↓  
**One Source of Truth — The Doctrine of the Graphē**  
↓  
**Graphē Gate Course**  
↓  
**Preparation / Readiness**  
↓  
**Foundation School**  
↓  
**Six First Principles**  
↓  
**Six Principle Books + Six Principle Courses**

Independent Aletheia works remain independent.

# FINAL RELEASE GATE

- [ ] 85-chapter One Source manuscript is the active canonical text.
- [ ] Legacy 43-chapter One Source content is no longer an active competing version.
- [ ] No stale One Source chapter references remain.
- [ ] Graphē Course is aligned to the 85-chapter work.
- [ ] Book/course roles are distinct.
- [ ] Foundation handbook remains separate.
- [ ] Six First Principles remain separate.
- [ ] Independent works remain intact.
- [ ] No unexplained duplicate canonical works remain.
- [ ] Products and entitlements resolve correctly.
- [ ] Programs resolve correctly.
- [ ] Reader/publication/learn routes resolve correctly.
- [ ] Build/type/application checks pass.
- [ ] Final dependency audit passes.
- [ ] No unresolved REVIEW or BLOCKED item remains without an explicit documented decision.

## Governing Principle

> **The repository is the operational record of truth for this migration.**
>
> We do not depend on conversational memory for critical decisions. We consult the authoritative manuscript, architecture documents, source-integration protocol, application source, and relevant references at the point where each decision is made.
>
> **Quality is not a final cosmetic pass. Quality is built into every phase.**
