# Aletheia — One Source of Truth Migration Audit 002

**Date:** 2026-10-04  
**Scope:** Phase 1 closure + Phase 2 controlled implementation  
**Branch:** `work/one-source-85-chapter-migration`  
**Status:** IMPLEMENTED — QA GATE PENDING

## 1. Source Verification

The authoritative manuscript in `Book Matter/One Source of Truth/` contains the complete numbered sequence **Chapters 1–85**.

Verified:
- 85 chapter source files
- no missing chapter numbers
- no duplicate chapter numbers
- Chapter 85: **From Graphē to the Six First Principles**
- source content was extracted directly from the manuscript files; no chapter prose was invented or reconstructed.

## 2. Application Book Migration

The legacy `src/lib/content/book-one-source-of-truth.ts` 43-chapter payload has been replaced by a canonical composition of typed chapter-set modules.

The stable identity remains:

`book-one-source-of-truth`

The 85 chapters are composed into the single canonical `oneSourceChapters` array.

The six First Principles are no longer represented as legacy One Source chapters 35–40.

## 3. Metadata

`src/lib/data/one-source-of-truth.ts` now exposes all 85 chapter IDs in `previewChapterIds`.

`chapterCount` remains derived from `oneSourceChapters.length`, so the canonical count is 85.

## 4. Graphē Course

The existing course identity remains:

`course-doctrine-of-the-graphe`

Reader-facing course title is now:

**One Source of Truth — Guided Study & Mastery**

The 16-lesson course has been remapped from the obsolete 1–32 chapter references to the new 85-chapter architecture.

The course now uses the canonical One Source book as its direct lesson resource.

The previous blanket lesson-level dependency on:

`book-principles-doctrine-christ`

has been removed. The Foundation handbook remains a separate canonical work and remains available through Foundation School/program relationships.

## 5. Foundation School Boundary

The Foundation handbook remains:

`book-principles-doctrine-christ`

The six First Principle books/courses remain independent.

Foundation School continues to consume the canonical One Source object through its existing dependency rather than maintaining a second copy.

## 6. Title Reconciliation — REVIEW

Three chapter-title differences remain between the locked TOC and the authoritative manuscript headings:

| Chapter | Manuscript heading | Locked TOC |
|---|---|---|
| 17 | The Bible in History: Record, Continuity, and Historical Correspondence | The Bible as Historical Testimony |
| 30 | Inspiration | Inspiration — 2 Timothy 3:15–17 |
| 35 | Eyewitnesses and Credible Witnesses | Eyewitnesses and Credible Witness |

**Decision:** do not silently alter either authority. The application currently follows the authoritative manuscript headings. These three title conflicts require an explicit editorial decision before final release.

## 7. Temporary Migration Artifacts

All temporary extraction JSON files used during the controlled migration have been removed from the branch.

## 8. QA Still Required

Before merging/releasing:

1. Run TypeScript typecheck.
2. Run ESLint.
3. Run application tests.
4. Run production build.
5. Verify reader/catalog routes.
6. Verify Foundation School chapter aggregation = 85 One Source chapters + 7 handbook chapters.
7. Verify no duplicate `ch-ost-*` IDs.
8. Verify no stale legacy 43-chapter content remains active.
9. Verify no stale Graphē course chapter references remain.
10. Resolve the three title conflicts.
11. Perform final product/entitlement regression check.

## Current Gate

**Source:** PASS  
**Architecture:** PASS  
**One Source migration:** IMPLEMENTED  
**Graphē course remap:** IMPLEMENTED  
**Foundation boundary:** PRESERVED  
**Independent works:** PROTECTED  
**Title reconciliation:** REVIEW  
**Build/type/test QA:** PENDING  
**Release:** NOT YET AUTHORIZED

> **The content migration is not declared complete until the QA gate passes.**
