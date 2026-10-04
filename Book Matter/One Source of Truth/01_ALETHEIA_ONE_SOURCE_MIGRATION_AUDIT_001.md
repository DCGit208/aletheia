# Aletheia — One Source of Truth Migration Audit 001

**Date:** 2026-10-04  
**Scope:** Phase 1 master content/dependency audit  
**Status:** REVIEW / MIGRATION BLOCKER IDENTIFIED

## Executive Finding

The Aletheia application currently contains a **43-chapter active One Source of Truth manuscript**, while the locked *Final Table of Contents & Authoring / Conceptual Guidance* defines an **85-chapter target architecture**.

The 85-chapter document is clearly a locked structural reference: Chapters 1–85 are explicitly enumerated, with Chapter 85 titled **“From Graphē to the Six First Principles.”**

However, the complete prose manuscript for Chapters 44–85 has not been located in the accessible repository/library search. Therefore:

> **Do not yet replace the live 43-chapter book with an invented or reconstructed 85-chapter manuscript.**

The migration must remain in **REVIEW/BLOCKED** at the content-replacement gate until the authoritative prose for Chapters 1–85 is available and verified.

## Evidence Reviewed

### A. Locked 85-Chapter Architecture

The locked TOC establishes the complete 85-chapter sequence, including:
- Chapters 1–8: Truth and possibility of knowledge
- Chapters 9–14: God, truth, revelation
- Chapters 15–22: What the Bible is / Graphē
- Chapters 23–32: How the written record was given
- Chapters 33–42: Authentication
- Chapters 43–50: Christ as central witness
- Chapters 51–58: Scripture, canon, infallibility
- Chapters 59–65: Christ's verdict on the Graphē
- Chapters 66–73: Mishandling authoritative truth
- Chapters 74–84: Scholarly labour and interpretation
- Chapter 85: Graphē to the Six First Principles

This is the architectural destination and must control placement of arguments.

### B. Current Application Manuscript

The active repository file `src/lib/content/book-one-source-of-truth.ts` contains:
- canonical book ID: `book-one-source-of-truth`
- product ID: `product-one-source-of-truth`
- course ID: `course-doctrine-of-the-graphe`
- **43 active chapters**
- a legacy 10-part structure
- final chapter: **Chapter 43 — One Source of Truth**

This is not the locked 85-chapter architecture.

### C. Current Graphē Course

The active course file `src/lib/content/course-doctrine-of-the-graphe.ts` contains:
- 5 modules
- 16 lessons
- lesson references tied to the old book architecture
- explicit references to One Source chapters 1–32
- current resource IDs include both `book-one-source-of-truth` and `book-principles-doctrine-christ`

This course therefore cannot be considered aligned with the 85-chapter book until the new book structure is authoritative and the course references are audited against it.

### D. Source / Methodology Controls

The Master Writing Methodology requires the manuscript to be researched, reasoned, organized, audited, written, and audited again. It explicitly requires TOC, architecture, source, Bible Introduction, Aletheia, lexical, evidence, reasoning, context, anti-circularity, question-answer, transition, duplication, prematurity, and final manuscript audits.

The Source Integration & Evidence Protocol establishes that the TOC determines where an argument belongs, while source material determines how accurately and evidentially that argument can be developed.

### E. Aletheia Libraries / Foundation Boundary

The supplied Aletheia Libraries leaflet is a compressed source for the Foundation School material. It must be consulted as source material, not silently elevated above Scripture.

The Foundation School architecture separately defines the six First Principle courses and the textbook *The Principles of the Doctrine of Christ*. The Graphē work is the entrance/gate formation and is **not a seventh First Principle**.

## Phase 1 Classification

| Object | Current finding | Classification |
|---|---|---|
| One Source book ID | Existing and apparently canonical | RETAIN |
| One Source product ID | Existing | RETAIN / AUDIT |
| One Source course ID | Existing | RETAIN / REMAP |
| Current 43-chapter manuscript | Legacy active content | UPDATE / REPLACE AFTER SOURCE VERIFICATION |
| Locked 85-chapter TOC | Authoritative architecture | RETAIN / GOVERNING |
| Complete 85-chapter prose | Not located in accessible repository/library | BLOCKED |
| Graphē 16-lesson course | Existing | RETAIN / REMAP |
| Foundation Handbook | Separate work | RETAIN |
| Six First Principle courses | Separate curriculum | RETAIN |
| *The Great Deception* and other independent works | Must not be touched by this migration without evidence | RETAIN |

## Critical Migration Risks

### 1. Premature content replacement
Replacing the 43 chapters before obtaining the authoritative Chapters 1–85 would create a false “85-chapter” book.

**Decision:** PROHIBITED.

### 2. Course drift
The current course references the legacy chapter ranges.

**Decision:** Course remapping occurs only after the authoritative 85-chapter manuscript is established.

### 3. Accidental Foundation merge
The current Graphē course references `book-principles-doctrine-christ`.

The relationship may be intentional as a learning resource, but it must be reviewed rather than assumed to be correct or incorrect.

**Decision:** REVIEW; no deletion/merge.

### 4. Collateral deletion
The migration must not remove independent books, companion works, courses, products, or programs merely because they are related to the Graphē or Foundation School.

**Decision:** RETAIN unless duplication is demonstrated.

## Immediate Next Gate

Before Phase 7 implementation:

1. Locate/import the authoritative complete 85-chapter prose manuscript.
2. Verify Chapters 1–85 against the locked TOC.
3. Establish a chapter-by-chapter migration crosswalk from the current 43 chapters to the 85-chapter architecture.
4. Identify which current arguments are retained, relocated, expanded, split, or superseded.
5. Only then replace the active application manuscript.
6. Rebuild/remap the Graphē course against the verified 85-chapter structure.
7. Run structural, content, dependency, and application QA.

## Current Gate Status

**PHASE 1:** IN PROGRESS  
**85-chapter prose source:** BLOCKED / NOT LOCATED  
**43-chapter live manuscript:** RETAINED TEMPORARILY — DO NOT DELETE  
**Graphē course:** RETAINED — REMAPPING WAITING ON AUTHORITATIVE BOOK  
**Foundation School:** RETAINED  
**Independent works:** PROTECTED

## Governing Rule

> **No invention. No silent replacement. No collateral deletion. No stale references.**
>
> The authoritative source must be established before implementation.



---

# AUDIT UPDATE — 2026-10-04

## Finding Correction: Authoritative 85-Chapter Prose Is Present

The earlier statement in this audit that the complete 85-chapter prose manuscript had **not been located** is now superseded.

A direct repository inspection of:

`Book Matter/One Source of Truth/`

confirmed the authoritative chapter files through:

- Chapter 1 — `02_CHAPTER_01_WHAT_IS_TRUTH.md`
- Chapter 2 — `03_CHAPTER_02_TRUTH_AND_REALITY.md`
- …
- Chapter 84 — `85_Chapter_84_The_Discipline_of_Biblical_Interpretation.md`
- Chapter 85 — `86_Chapter_85_From_Graphe_to_the_Six_First_Principles.md`

The repository therefore contains the complete **85-chapter prose manuscript** required by the migration guardrails.

### Structural verification

Repository inspection confirms:

- **85 canonical chapter numbers:** 1–85
- **No missing chapter numbers**
- **No duplicate chapter numbers**
- **Chapter 85 exists and is titled:** *From Graphē to the Six First Principles*
- The authoritative manuscript is distinct from the current 43-chapter application payload.

The locked TOC likewise enumerates Chapters 1–85 and places the Six First Principles boundary at Chapter 85.

## Revised Phase 1 Finding

The migration is **no longer blocked by missing source prose**.

The current gate is now:

> **SOURCE VERIFIED → APPLICATION REPLACEMENT READY, SUBJECT TO DEPENDENCY CROSS-CHECK**

The application still contains the obsolete 43-chapter representation in:

`src/lib/content/book-one-source-of-truth.ts`

and the corresponding metadata in:

`src/lib/data/one-source-of-truth.ts`

still exposes the legacy 43-chapter count/preview set.

## Confirmed Migration Boundary

The correct operation remains:

**Authoritative 85-chapter manuscript**
→ **replace**
→ **legacy 43-chapter application payload**

It is **not**:

**legacy 43 chapters**
→ append chapters 44–85.

The Six First Principles currently embedded as legacy Chapters 35–40 must disappear from the active One Source representation as part of the whole-book replacement.

## New Implementation Gate

Before the production payload is changed, the following final checks must be completed:

1. Verify all 85 manuscript chapter headings against the locked TOC.
2. Verify the authoritative chapter source is copied exactly into the application representation without invented/reconstructed prose.
3. Verify One Source metadata exposes 85 chapters.
4. Verify the Foundation School aggregation receives the new 85-chapter canonical array without duplicating or reclassifying Foundation handbook chapters.
5. Verify the Graphē Course has no stale chapter references after migration.
6. Verify the Graphē Course's relationship to `book-principles-doctrine-christ` lesson by lesson.
7. Verify product and entitlement references remain unchanged unless a dependency audit proves otherwise.
8. Run structural, content, dependency, type/build, and route QA.

## Current Gate Status

| Area | Status |
|---|---|
| 85-chapter authoritative prose | **PASS — located and structurally verified** |
| Locked 85-chapter TOC | **PASS** |
| Current app One Source | **LEGACY 43 — REPLACE** |
| One Source canonical ID | **RETAIN** |
| One Source product ID | **RETAIN / AUDIT** |
| One Source course ID | **RETAIN / REMAP** |
| Foundation handbook | **RETAIN** |
| Six First Principle books/courses | **RETAIN** |
| Independent works | **PROTECTED** |
| Graphē course references | **REMAP REQUIRED** |
| Production replacement | **READY AFTER FINAL CROSS-CHECK** |

> **No invention. No silent replacement. No collateral deletion.**
>
> The source is now verified. The remaining work is controlled migration and verification.
