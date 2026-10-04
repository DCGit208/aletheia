# Aletheia — One Source of Truth Migration Audit 001

**Date:** 2026-10-04  
**Scope:** Phase 1 master content/dependency audit and Phase 2 implementation checkpoint  
**Status:** **IMPLEMENTATION COMPLETE ON MIGRATION BRANCH — QA/RELEASE PENDING**

## Executive Finding

The earlier version of this audit contained a blocker stating that the complete 85-chapter prose manuscript had not been located. That finding is now superseded by direct repository evidence.

The authoritative **85-chapter manuscript is present in** `Book Matter/One Source of Truth/`, has passed the final manuscript audit, and contains Chapters 1–85 in sequence.

The remaining migration work is therefore **application integration and verification**, not manuscript completion.

> **Authoritative manuscript exists. The legacy application representation has been replaced on the migration branch. Full QA and release verification remain outstanding.**

## Evidence

### A. Canonical manuscript

`00_FINAL_MANUSCRIPT_AUDIT_TASKS.md` records PASS for the manuscript inventory and final architecture audit. The live directory contains the complete 85-chapter sequence.

The canonical chapter files are the source of truth. The application adapter imports normalized chapter data generated directly from those chapter files into:

`src/lib/content/one-source-canonical-01.json`  
`src/lib/content/one-source-canonical-02.json`  
`src/lib/content/one-source-canonical-03.json`  
`src/lib/content/one-source-canonical-04.json`  
`src/lib/content/one-source-canonical-05.json`

The five application data partitions contain Chapters 1–17, 18–34, 35–51, 52–68, and 69–85 respectively.

### B. Canonical application identity

The existing canonical IDs are preserved:

- Book: `book-one-source-of-truth`
- Product: `product-one-source-of-truth`
- Course: `course-doctrine-of-the-graphe`

The legacy 43-chapter active array has been replaced rather than appended to.

### C. Foundation School dependency

`src/lib/data/foundation-school.ts` intentionally consumes `oneSourceChapters`.

That dependency is preserved. Because the canonical array now contains exactly 85 chapters, Foundation School receives the new canonical One Source Work while its separate seven-chapter handbook remains separately identified as:

`book-principles-doctrine-christ`

No handbook chapter is assigned to the One Source book.

### D. Six First Principles

The six First Principle books and six courses remain separate canonical objects. The legacy placement of the six principles inside the former One Source Chapters 35–40 has therefore been removed by replacement of the entire legacy representation.

### E. Graphē Course

The Graphē Gate Course has been remapped from the former 1–32/Parts I–XII architecture to the final 85-chapter Work.

The course remains a pedagogical pathway rather than a duplicate of the book.

Its 16 lessons now reference the canonical ranges:

1. Chapters 1–3
2. Chapters 4–6
3. Chapters 7–8
4. Chapters 9–14
5. Chapters 15–19
6. Chapters 20–22
7. Chapters 23–32
8. Chapters 33–42
9. Chapters 43–47
10. Chapters 48–50
11. Chapters 51–58
12. Chapters 59–65
13. Chapters 66–70
14. Chapters 71–73
15. Chapters 74–84
16. Chapter 85 + review

The course continues to reference the Foundation handbook as a supporting resource because that relationship already exists in the Foundation School architecture; it has **not** been silently deleted. This remains a deliberate review item for final product/resource QA.

## Phase 1 Classification

| Object | Finding | Classification |
|---|---|---|
| One Source book ID | Existing canonical ID preserved | PASS / RETAIN |
| One Source product ID | Existing product identity preserved | PASS / RETAIN |
| One Source course ID | Existing course identity preserved | PASS / REMAP |
| Legacy 43-chapter manuscript | Replaced on migration branch | PASS / REPLACE |
| Authoritative 85-chapter manuscript | Present and audited | PASS |
| Graphē 16-lesson course | Remapped to 85-chapter architecture | PASS / REMAP |
| Foundation Handbook | Separate canonical work | PASS / RETAIN |
| Six First Principle books | Separate canonical works | PASS / RETAIN |
| Six First Principle courses | Separate canonical courses | PASS / RETAIN |
| The Great Deception and other independent works | Protected | PASS / RETAIN |

## Implementation Checkpoint

### Completed on this migration branch

- [x] Installed canonical 85-chapter application content.
- [x] Preserved canonical One Source IDs.
- [x] Replaced the old 43-chapter representation rather than appending to it.
- [x] Removed the old placement of the Six First Principles inside One Source.
- [x] Updated the One Source book metadata to 85 chapters.
- [x] Updated preview chapter coverage to the canonical 85-chapter set.
- [x] Remapped the Graphē course's 16 lessons to the final 85-chapter architecture.
- [x] Preserved the distinction between Book and Course.
- [x] Preserved the Foundation handbook as a separate work.
- [x] Preserved the six First Principle books/courses.
- [x] Preserved independent Aletheia works.

## Remaining Gates

### REVIEW — Resource relationship

The Graphē course currently includes both the One Source book and the Foundation handbook as lesson resources. The existing architecture intentionally uses the handbook as a Foundation School supporting reference, but final lesson-by-lesson product/access QA should confirm that this does not create an unintended dependency.

### PENDING — Structural QA

Verify:

- exactly 85 chapters;
- chapter IDs 1–85;
- correct titles/order;
- no duplicate or missing chapter;
- no legacy Six First Principle chapters;
- no legacy 43-chapter content.

### PENDING — Content QA

Compare application chapter bodies against the authoritative chapter files and confirm that the normalization removed only front-matter headings, not substantive prose.

### PENDING — Dependency QA

Verify:

- catalog aggregation;
- Foundation School aggregation;
- reader/publication routes;
- progress tracking;
- search;
- products;
- entitlements;
- program grants;
- course/resource relationships.

### PENDING — Build / type / application QA

Run:

- `npm run typecheck`
- `npm run lint`
- `npm run build`
- `npm test`

Resolve all migration-caused failures before release.

## Current Gate

**Manuscript:** PASS  
**Architecture:** PASS  
**Application content migration:** PASS on migration branch  
**Graphē Course remap:** PASS on migration branch  
**Dependency/resource review:** REVIEW  
**Structural/content QA:** PENDING  
**Build/application QA:** PENDING  
**Production release:** NOT YET AUTHORIZED

## Governing Rule

> **The authoritative 85-chapter manuscript controls.**
>
> The application must consume that work without creating a second competing manuscript, without turning the Graphē Course into a duplicate book, and without absorbing the Six First Principles into One Source.

The next action is verification, not further manuscript editing.
