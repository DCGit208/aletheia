# Aletheia Content Audit Ledger

## Purpose

This ledger is the unit-by-unit preservation and verification record for learner-facing changes. It prevents necessary improvements from deleting accurate doctrine, unique Scripture work, required distinctions, or useful learning labour.

Every entry must identify the source basis, what the current text contributes, the smallest justified action, and the verification completed. Internal controls belong here; they must not be copied into student-facing prose.

## Entry template

| Field | Record |
| --- | --- |
| Unit | Course, lesson, chapter, book section, interface, or control affected |
| Source basis | Scripture, manuscript page/section, and applicable locked owner decision |
| Current contribution | Doctrine, Scriptures, distinctions, learner charge, or product behavior that must remain |
| Classification | Preserve / clarify / rewrite / correct / remove |
| Change | Precise description of the smallest justified change |
| Preservation check | What was retained and how it was compared |
| Verification | Guard, test, visual check, typecheck, lint, build, or manual review |
| Status | Planned / in review / complete / blocked |

## Completed entries

### CA-001 — Learner-content guard restoration

| Field | Record |
| --- | --- |
| Unit | `src/lib/content/companion-repentance.ts`, old-man section |
| Source basis | Aletheia Libraries 1, pages 1-2: the old man as spirit and nature of the devil working in men of disobedience; John 8:44; Ephesians 2:2; 2 Corinthians 4:4; 1 John 3:8-9; 1 John 5:18; Ephesians 4:22 |
| Current contribution | Six Scripture references and the distinction that the old man is not a habit or a vague category |
| Classification | Clarify |
| Change | Replaced the internal-sounding label “Cluster held” with a complete learner-facing sentence beginning “Taken together,” and retained every cited Scripture and the doctrinal claim. |
| Preservation check | Compared the old and new sentence; all six references, the one-old-thing conclusion, and the stated doctrine remain. |
| Verification | `npm test` passes: `access checks passed`. |
| Status | Complete |

## Upcoming units

| ID | Unit | Scope | Status |
| --- | --- | --- | --- |
| CA-002 | Governing-document reconciliation | Program grants, course support grants, Graphē inclusion, reviewer identity | Complete |
| CA-003 | Graphē gate course | 16 lessons | In review |
| CA-004 | Course 1 — Repentance from Dead Works | 17 lessons and examination | Planned |
| CA-005 | Course 2 — Faith Toward God | 17 lessons and examination | Planned |
| CA-006 | Course 3 — Doctrine of Baptisms | 16 lessons and examination | Planned |
| CA-007 | Course 4 — Laying on of Hands | 12 lessons and examination | Planned |
| CA-008 | Course 5 — Resurrection of the Dead | 18 lessons and examination | Planned |
| CA-009 | Course 6 — Eternal Judgment | 15 lessons and examination | Planned |
| CA-010 | Week-52 final | Final assessment | Planned |
| CA-011 | Foundation School handbook | Chapters 1-7 | Planned |
| CA-012 | One Source of Truth | Full Graphē book | Planned |
| CA-013 | Independent doctrinal books | Repentance, Faith, and remaining companions | Planned |

### CA-002 — Governing-document reconciliation

| Field | Record |
| --- | --- |
| Unit | `FOUNDATION_SCHOOL.md`, `study/04_BOOK_COURSE_CROSSWALK.md`, and `SECURITY.md` |
| Source basis | Current implementation in `src/lib/commerce/offerings.ts`, `functions/src/offerings.ts`, and `src/lib/access/entitlements.ts`; approved Foundation School hierarchy |
| Current contribution | Clear learner/product roles, correct school grants, and distinct review/payment authorities |
| Classification | Correct |
| Change | Updated the school and crosswalk documents to state the implemented Graphē gate book/course, handbook, and six-course grants. Clarified that Foundation course products include the handbook as support and that courses remain complete. Documented the separate platform-administrator, all-content-review, and publication-review roles without widening any authority. |
| Preservation check | Preserved the six-course structure, $400 pricing, no-companion-library rule, and claim-based Firebase administration. |
| Verification | Compared every stated grant and identity with the client access layer and server-trusted offerings; `npm test` passes. |
| Status | Complete |
