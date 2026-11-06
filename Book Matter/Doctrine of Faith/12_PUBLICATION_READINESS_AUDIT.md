# 12 — Book I Publication-Readiness Audit

**Book:** *The Doctrine of Faith* — Book I  
**Audit date:** 2026-11-06  
**Current manuscript:** `14_THE_DOCTRINE_OF_FAITH_BOOK_I_PUBLICATION_MANUSCRIPT.md`  
**Controlling source:** *Aletheia Libraries 1* (2015), “Faith toward God”  
**Status:** Phase 1 technical publication verified on the 2026-11-06 deployment; later manuscript and reader-sync commits are being redeployed. Phase 2 has undergone substantive editorial, Scripture, and lexical work; final proof remains open. Publication readiness is not yet certified.

---

## Current verified position — 2026-11-06

This section supersedes earlier status snapshots below wherever they conflict.

### Phase 1 — Technical publication

- The Firebase Functions runtime was upgraded from decommissioned Node.js 20 to supported Node.js 22.
- Firebase Functions deployment completed successfully for codebase `aletheia`; the deployment log confirms `getProtectedContent(us-central1)` was updated successfully.
- GitHub Actions run `42199497512` completed successfully. On that run, the following passed: canonical manuscript parity, Doctrine of Faith publication integrity, public Firebase configuration validation, Hosting build, protected-content function build/tests, deployment of `getProtectedContent`, anonymous preview smoke test, deployment of `app.aletheiaworld.org`, and live catalogue page/title/original-cover smoke test.
- The anonymous callable test returned Chapter 1 only. The live catalogue smoke test confirmed the book page, title, and existing `doctrine-of-faith-seal.png` cover.
- The repository now has a second live smoke test for the entitled reader path through the unit test suite: an ordinary visitor receives only `ch-faith-1`; an entitled reader receives all ten chapter records. A real signed-in entitled account has not yet been used for an end-to-end live test.
- Subsequent editorial updates after run `42199497512` have triggered a new deployment. The latest run must complete before the latest manuscript revision can be called live.

### Phase 2 — Manuscript

### Source-coverage map — 2015 “Faith toward God” teaching

Book I is the treatment of the **Faith toward God** first principle; it is not intended to reproduce every other first principle in Hebrews 6:1–2 as separate subject matter. Within that scope, the leaflet's relevant teachings have substantive chapter locations:

| 2015 Aletheia teaching / source passage | Book I treatment |
|---|---|
| *Pistis* / credence; faith defines the state of God's children | Chapters 1–2 |
| True nature, acceptance/approval, and design from creation | Chapters 2–3 |
| Adoption as sons, the Father's pleasure, and natural heirship (Galatians 4:5–7; Romans 8:14–17; Ephesians 1:5) | Chapters 2 and 8 |
| *’Ĕlōhîm*, image and likeness (Genesis 1:26–27) | Chapter 3 |
| “Ye are gods” in Psalm 82 and Jesus' use of the passage in John 10 | Chapter 4 |
| Partakers of divine nature (2 Peter 1:4) | Chapter 5 |
| Coming short of glory, free justification, and the restoration/design argument (Romans 3:23–24; 1 Corinthians 11:7) | Chapter 6 |
| *Dikaioō*, *dikaiosynē*, *apolutrōsis*, and 2 Corinthians 5:21 | Chapter 7 |
| The Son, heirship, and Hebrews 1; the former Hebrews 1:8 question remains abandoned | Chapter 8 |
| Oneness and glory (John 17:20–23) | Chapter 9 |
| The image of God and the glory in the face of Jesus Christ (2 Corinthians 4:4, 6) | Chapter 10 |

The leaflet's other First Principles—baptisms, laying on of hands, resurrection of the dead, and eternal judgment—remain outside this book's subject scope. Their omission from Book I is a scope decision, not a claim that the leaflet does not teach them.


- Document 14 is the controlled ten-chapter publication master. Document 11 is marked as a superseded working copy.
- The ten chapter bodies in `src/lib/content/companion-faith.ts` have been synchronized exactly to document 14. A direct comparison confirmed exact character-for-character parity across all ten chapters; Chapter 10 excludes bibliography/back matter from the reader body.
- `scripts/check-doctrine-of-faith-publication.mjs` now enforces exact chapter-by-chapter parity, ten chapter IDs/titles, catalogue status, entitled access, one preview chapter, and preservation of the legacy archive.
- The protected-content tests now explicitly verify that an ordinary visitor receives only Chapter 1 and an entitled reader receives all ten chapter records.
- The prose pass removed internal production notes and converted chapter charges into reader-facing study questions. The Matthew 5:48 discussion was aligned with its immediate context; Chapter 3's *’ĕlōhîm* wording and source attribution were clarified; Chapters 6–7's internal charges were converted into teaching questions.
- The 2015 Aletheia leaflet remains the controlling doctrinal source. The supplementary Dake introduction remains a method reference only.
- The quotation register now contains 45 chapter-level Scripture passage entries marked targeted checked, plus eight original-language entries covering *’ĕlōhîm*, *hypostasis*, *pistis*, *dikaioō*, *dikaiosynē*, *apolutrōsis*, and *spoudē*. Hebrew H430 and Greek G4102, G5287, G1343, G1344, G629, G4710, and G4704 have been checked against lexical/interlinear references.
- The manuscript-level Scripture and original-language audit is complete for the 45 registered passage entries and eight language entries. The prose/editorial pass has removed internal production language, retained teaching questions, and checked chapter continuity and source coverage. Final proof of the designed pages remains a Phase 3 task; it must be checked against this controlled manuscript.

### Remaining gates

1. Complete the latest deployment and verify the updated live reader after the final editorial commits.
2. Test a real entitled account end-to-end to confirm access to all ten chapters.
3. Complete Phase 3 production and proof the designed pages against the approved manuscript.
4. Complete Phase 4 final approval and publication.

## 1. Author doctrinal decisions

| Direction | Audit status | Manuscript location |
|---|---|---|
| Abandon the former Hebrews 1:8 question | Incorporated; no longer an open decision | Ch. 8; register 90 |
| Develop fully “Jesus represents who we are by Design” | Incorporated as governing thesis; representation and accomplishment held together | Ch. 3, 6, 8, 10 |
| Faith is our state by design | Incorporated | Ch. 1–3, 5, 10 |
| Image and likeness of Elohim; partakers of divine nature | Incorporated | Ch. 3–5 |
| As sons, we are natural heirs | Incorporated with Galatians 4:5–7 and Romans 8:14–17 | Ch. 2, 8 |
| The Father's will and pleasure is for sons to operate in their state | Incorporated with Ephesians 1:5, Matthew 3:17 and Hebrews 11:2, 5–6 | Ch. 2 |
| *Dikaioō* from Romans 3:24; complete supplied G1344 entry | Incorporated; Strong's and Thayer's components now distinguished | Ch. 7 |
| Romans 3:23–24 quoted in full as one movement | Incorporated | Ch. 6 and 7 |
| Sin as falling short of designed glory/state; justification as restoration | Incorporated as author's doctrinal interpretation | Ch. 6–7 |
| 1 Corinthians 15:41 and glory/identity reasoning | Incorporated with immediate context distinguished | Ch. 7 |
| Genesis 1:27 Living Bible quotation | Verified and incorporated | Ch. 3, 7 |
| *Apolutrōsis*: complete ransom and restoration to original design | Incorporated; lexical gloss distinguished from full doctrinal interpretation | Ch. 7 |
| Mark 11:22 underscores design identity and operating in the state of God | Incorporated; Mark 11:20–25 context and Greek genitive retained | Ch. 1, 3 |
| Matthew 5:48 and 1 John 4:17 as identity affirmations | Incorporated with love/enemies and love/confidence contexts | Ch. 3, 8 |

No further author doctrinal answer is presently required for these directions. The remaining items below are scholarly, editorial, rights, or production checks.

## 2. Source and Scripture audit

### 2.1 Controlling Aletheia source

- The 2015 leaflet is the controlling doctrinal source for this book.
- Its teaching on *pistis* / credence, state of children of God, true nature, adoption as sons, image and likeness, divine nature, glory, free justification, redemption, righteousness, heirship, oneness, and the image/glory in Christ has been mapped into the ten chapters.
- The original leaflet's wording and questions are preserved as source evidence. The Hebrews 1:8 question is abandoned by author direction; this does not remove Hebrews 1:8 from Scripture or from the Son's biblical portrait.
- The distinction among leaflet wording, Scripture wording, and authorial formulations is an attribution control, not a qualification of the leaflet's doctrinal authority.

### 2.2 Scripture quotation proof

**Verified/checked in the current revision:**
- Genesis 1:27 — Living Bible (TLB) full wording supplied by the author, checked against Bible Gateway's TLB display.
- Romans 3:23–24 — full KJV quotation included as a continuous movement.
- 1 Corinthians 15:41 — full KJV quotation included.
- Matthew 3:17, Ephesians 1:5, Hebrews 11:2, 5–6 — full KJV quotations added in Chapter 2.
- Galatians 4:5–7 and Romans 8:14–17 — full passages retained in Chapter 2.
- Mark 11:22 and Matthew 5:43–48 — quoted with surrounding context developed.
- 1 John 4:17 — quoted with its immediate context of perfected love and confidence retained.

**Still required:** A line-by-line proof of every quotation, verse range, punctuation mark, translation label, and reference in all ten chapters against the chosen Bible editions. The list above is a targeted verification record, not a claim that every quotation has been proofed.

### 2.3 Translation attribution and permissions

- The supplied Genesis 1:27 wording is confirmed as The Living Bible (TLB), copyright © 1971 by Tyndale House Foundation.
- The 2015 leaflet separately attributes the phrase “Like God did God make man” to the Life Application Bible. The manuscript preserves this source-history distinction while attributing the complete wording supplied by the owner to TLB.
- Tyndale's current published guidelines permit up to 500 TLB verses in print/eBook work without express written permission, provided the quoted verses do not exceed 25% of the work and a complete biblical book is not quoted. The current manuscript uses one TLB verse. The required multiple-translation credit line must appear on the copyright page:
  
  > Scripture quotations marked (TLB) are taken from The Living Bible, copyright © 1971 by Tyndale House Foundation. Used by permission of Tyndale House Publishers, Inc., Carol Stream, Illinois 60188. All rights reserved.

- The King James Version is public domain according to Tyndale's guidelines.
- Before release, verify that the final page layout includes the required TLB credit and that the published quotation remains verbatim. Tyndale permissions guidance: https://www.tyndale.com/permissions

## 3. Lexical and original-language audit

| Term | Work completed | Remaining work |
|---|---|---|
| *Hypostasis* (G5287) | Chapter 1 now records Thayer's full range and explicitly notes that Thayer places Hebrews 11:1 under confidence/assurance while associating the nature/substance sense with Hebrews 1:3; Cambridge and Expositor's commentaries are compared | Complete specialist lexical/contextual verification; retain the genuine scholarly disagreement while explaining why the owner's substance reading governs this doctrine |
| *Pistis* (G4102) | Leaflet's gloss “credence” and state-of-children teaching integrated | Verify all lexical statements and ensure no later chapter accidentally treats *pistis* as a simple synonym for *hypostasis* |
| *Dikaioō* (G1344) | Romans 3:24's form δικαιούμενοι (*dikaioumenoi*) is identified as present passive participle, nominative masculine plural; Strong's core gloss/AV usage and Thayer's three extended definitions are attributed separately, including Thayer's caution that the “make righteous” sense is extremely rare, if not altogether doubtful | Final edition/citation proof and contextual study of the participle in Romans 3:21–26 |
| *Dikaiosynē* | Leaflet's explanation and “back on course” conceptual wording preserved | Complete lexical/contextual verification; keep source formulation distinct from any dictionary gloss |
| *Apolutrōsis* (G629) | Strong's derivation from G575 and G3083, “ransom in full”/“riddance,” and Thayer's “release effected by payment of ransom” checked | Verify final citation details and ensure restoration to original design is presented as the author's doctrinal interpretation from the whole Scripture framework, not as a literal gloss of every Greek component |

Initial references consulted:
- Strong's G1344 / Thayer's definitions: https://kingjamesbibledictionary.com/StrongsNo/G1344/Justified and https://www.studylight.org/lexicons/eng/greek/1344.html
- Strong's G629: https://biblehub.com/strongs/greek/629.htm
- Thayer's G629: https://biblehub.com/thayers/629.htm

The lexical checks for G1344 and G629 are initial verification, not a substitute for a specialist review of every original-language claim in Book I. The supplied *BIBLE INTRODUCTION.pdf* (Dake Study Bible Notes) has also been reviewed: its preface states a literal-reading principle—take Scripture literally where possible and identify the intended literal truth when symbolic, figurative, or typical language is used. It is treated as a supplementary interpretive-method reference only; it does not replace or outrank the 2015 Aletheia leaflet as the controlling doctrinal source.

## 4. Continuous-manuscript and editorial audit

### Editorial method reference

The supplied Dake Study Bible introduction is retained as a supplementary guide to interpretive method. Its stated preference is to take Scripture literally where possible and, where symbolic, figurative, or typical language is used, seek the literal truth intended. This is a method note, not a doctrinal authority for the book; the 2015 Aletheia leaflet remains the controlling doctrinal source.

**Completed:**
- Ten coordinated chapter manuscripts exist.
- A continuous reading manuscript has been assembled in document 11.
- Automated integrity checks confirmed ten chapter headings and the presence of the principal author-directed passages and formulations.
- The continuous copy was refreshed after the latest edits to Chapters 1, 5 and 7.
- The current continuous copy contains no stale open Hebrews 1:8 inference, no unresolved owner formulation for *dikaioō*, and no “developing representation thesis” wording.

**Still required:**
1. Human line-by-line copy edit of the continuous manuscript.
2. Chapter-to-chapter transition and argument-continuity review.
3. Repetition and terminology consistency review.
4. Proofreading for grammar, punctuation, capitalization, transliteration, Greek/Hebrew fonts, verse formatting and heading hierarchy.
5. Confirm that every source-map item and owner note has a substantive home.
6. Check the final chapter conclusion and Book II handoff after the entire manuscript is edited.

## 5. Book-production items

The following have not yet been completed as publication artifacts:

- Final title/subtitle and author-line confirmation.
- Title page, copyright page, dedication (if any), preface/introduction and acknowledgements.
- Final table of contents with page numbers after layout.
- Complete references/bibliography and glossary.
- Endnotes/footnotes and source acknowledgements.
- Back matter and author/publisher information.
- Final page design, trim size, typography, headers/footers, pagination and print/eBook export.
- Cover design, spine and back-cover copy.
- ISBN/imprint/retail metadata and printer/distributor specifications, if required.
- Final author proof of the designed pages.

## 6. Publication-readiness decision

**Current decision: NOT YET PUBLICATION-READY.**

The main owner doctrinal directions are now incorporated, the ten chapters are assembled, and key lexical and quotation checks have been performed. The remaining blockers are not unresolved doctrinal questions from the owner. They are the full scholarly verification, complete quotation proof, human editorial pass, front/back matter, permissions/copyright-page completion, and final production proof.

The book may move into the final editorial and production phase. It should not be described as publication-ready until each remaining gate above is completed and the owner approves the final proof.


## 7. First integrated editorial pass — 2026-11-05

A first editorial pass has now been completed across all ten chapter manuscripts, and document 11 has been refreshed from the latest chapter files.

### Chapter-by-chapter revision record

1. **Chapter 1 — Hypostasis:** Updated the chapter status; clarified the distinction between lexical range and contextual sense; explicitly recorded that Thayer places Hebrews 11:1 under confidence/assurance while citing the substance/nature sense at Hebrews 1:3; added the Cambridge and Expositor's commentary comparison; aligned the study questions with the owner's settled faith-as-state direction.
2. **Chapter 2 — Pistis and Sonship:** Updated the chapter status; clarified the inference from Ephesians 1:3–5; strengthened the connection among the Father's pleasure, Matthew 3:17, Ephesians 1:5, Galatians 4:5–7, Romans 8:14–17, and Hebrews 11:2, 5–6; revised the study questions so they no longer treat the owner's direction as unresolved.
3. **Chapter 3 — Elohim, image and likeness:** Updated the chapter status; removed obsolete question framing around Mark 11:22; stated the owner's settled interpretation while preserving the Greek genitive distinction; clarified Matthew 5:48 with 1 John 4:17 and retained the immediate love/enemies and love/confidence contexts.
4. **Chapter 4 — Psalm 82 and John 10:** Updated the chapter status; made the owner's design direction explicit; clarified that Psalm 82:6 is read with verses 7–8 and Jesus' complete John 10 exchange, without making the verse carry the entire doctrine alone.
5. **Chapter 5 — Partakers of divine nature:** Updated the chapter status; tightened the movement through 2 Peter 1:2–8; retained the promises, escape from corruption, diligence, and qualities that follow; aligned the conclusion with the owner's settled restoration/design direction.
6. **Chapter 6 — Why Jesus came:** Updated the chapter status; revised the opening and representation sections to state the governing thesis directly; retained the Aletheia source's “deviation from true nature” gloss and kept Christ's accomplishment joined to representation.
7. **Chapter 7 — Justification and redemption:** Updated the chapter status; identified δικαιούμενοι (*dikaioumenoi*) in Romans 3:24 as a present passive participle, nominative masculine plural; attributed Strong's core gloss/AV usage separately from Thayer's three extended definitions; included Thayer's caution about the rarity of the “make righteous” sense; clarified the complete-ransom/restoration argument without misrepresenting the lexical gloss.
8. **Chapter 8 — The Son and heir:** Updated the chapter status; strengthened the distinction between the Son's unique place as appointed heir and the inheritance believers share through Him; kept the former Hebrews 1:8 question abandoned.
9. **Chapter 9 — Oneness and glory:** Updated the chapter status and title; clarified the synthesis between Genesis design and John 17 without making the prayer repeat Genesis verbatim.
10. **Chapter 10 — Image in the face of Christ:** Clarified that the owner's doctrinal direction is established while the lexical, contextual and editorial proof remains.

### Integrity checks after the editorial pass

The refreshed continuous manuscript is 133,672 characters and contains ten chapter headings. Automated checks confirmed the presence of the principal author-directed content: representation, faith as designed state, natural heirship, Matthew 3:17, Ephesians 1:5, Hebrews 11:2, 5–6, 2 Peter 1:4, Mark 11:22, Matthew 5:48, 1 John 4:17, Romans 3:23–24, 1 Corinthians 15:41, Genesis 1:27 TLB, the G1344 morphology and Thayer qualification, the G629 ransom/restoration explanation, and the abandoned Hebrews 1:8 question. The check found no stale open Hebrews 1:8 decision or provisional “developing representation thesis” language in the continuous copy.

**Scope limitation:** This is the first integrated editorial pass, not the final line-by-line copy edit. Automated checks confirm structure and required content, not every quotation, grammatical detail, theological nuance, footnote, or production element.


## 8. Targeted Bible quotation and morphology checks — 2026-11-05

The following targeted KJV quotations and original-language details were checked against online Bible text/interlinear references during this pass:

- Genesis 1:26–28 (KJV): image, likeness, and dominion wording checked against Bible Gateway.
- Genesis 1:27 (TLB): the complete three-line wording supplied by the owner checked against Bible Gateway; copyright line and attribution retained.
- Galatians 4:4–7 (KJV): sending of the Son, redemption, adoption, “because ye are sons,” and heirship checked.
- Romans 8:14–17 (KJV): Spirit-led sonship, adoption, witness, heirs, joint-heirs, suffering, and shared glory checked.
- Matthew 5:43–48 (KJV): love/enemies context and the perfection command checked together.
- Mark 11:20–25 (KJV): fig tree, “Have faith in God,” speech, prayer, and forgiveness context checked together.
- John 17:20–23 (KJV): oneness, indwelling, glory given, and stated purpose checked.
- 1 John 4:17 (KJV): perfected love, confidence in judgment, and “as he is, so are we in this world” checked.
- 2 Corinthians 4:1–6 and 5:17–21 (KJV): the image/glory passage and reconciliation/new-creation/righteousness passage checked.
- Romans 3:24 Greek: δικαιούμενοι (*dikaioumenoi*) verified as a present passive participle, nominative masculine plural, from δικαιόω (G1344); ἀπολυτρώσεως is identified as the G629 noun in the same verse.
- G1344 Thayer entry: the first “make righteous” sense and Thayer's qualification were checked against the entry itself.
- G629 Strong's and Thayer entries: “ransom in full,” “riddance,” and “release effected by payment of ransom” checked.

References consulted:
- [Genesis 1:26–28 KJV](https://www.biblegateway.com/passage/?search=Genesis+1%3A26-28&version=KJV)
- [Genesis 1:27 TLB](https://www.biblegateway.com/passage/?search=Genesis+1%3A27&version=TLB)
- [Galatians 4:4–7 KJV](https://www.biblegateway.com/passage/?search=Galatians+4%3A4-7&version=KJV)
- [Romans 8:14–17 KJV](https://www.biblegateway.com/passage/?search=Romans+8%3A14-17&version=KJV)
- [Matthew 5:43–48 KJV](https://www.biblegateway.com/passage/?search=Matthew+5%3A43-48&version=KJV)
- [Mark 11:20–25 KJV](https://www.biblegateway.com/passage/?search=Mark+11%3A20-25&version=KJV)
- [John 17:20–23 KJV](https://www.biblegateway.com/passage/?search=John+17%3A20-23&version=KJV)
- [1 John 4:17 KJV](https://www.biblegateway.com/passage/?search=1+John+4%3A17&version=KJV)
- [2 Corinthians 4:1–6 and 5:17–21 KJV](https://www.biblegateway.com/passage/?search=2+Corinthians+4-6&version=KJV)
- [Romans 3:24 Greek text and morphology](https://www.openbible.com/text/romans/3-24.htm)
- [Thayer G1344](https://biblehub.com/thayers/1344.htm); [Strong's G629 and Thayer G629](https://biblehub.com/strongs/greek/629.htm)

**Scope limitation:** These are targeted checks of key quotations and terms, not yet a line-by-line proof of every biblical quotation and reference in all ten chapters. The full quotation audit remains open until each occurrence is checked against the selected edition and marked off in the chapter-level proof record.


## 9. Chapter-by-chapter Scripture quotation register

Created document 13, SCRIPTURE_QUOTATION_PROOF_REGISTER.md, to track substantial quotations by chapter, translation/source, current verification status, and final proofing requirements. The register distinguishes targeted checks from final proof and separates Bible quotations from Aletheia source quotations. It must be completed after all quotations have been checked against the selected editions and again after page layout.


## 10. Second-pass prose refinement — 2026-11-05

Chapter 7 received an additional prose refinement to remove overly conversational phrasing and clarify the relation among the leaflet's printed gloss, free justification, grace, faith/credence, and the complete ransom. The continuous manuscript 11 was refreshed after this edit. The revised copy remains a working manuscript; the complete quotation proof and second full-manuscript copy edit remain open.


## 11. Aletheia World publication target — author instruction, 2026-11-06

The author has confirmed that the eBook is to be published through **app.aletheiaworld.org**, not Amazon KDP. The owner has also confirmed that the existing *The Doctrine of Faith* artwork is already present on Aletheia World.

Production controls:
- Preserve the existing Aletheia World book record and its artwork. Do not create a duplicate title, redesign the cover, or replace the existing artwork as part of this manuscript pass.
- Amazon KDP packaging and distribution are out of scope.
- Prepare the manuscript as an eBook for the Aletheia World reading experience. The platform's accepted upload format, metadata fields, and publishing workflow must be confirmed from the actual admin interface before export or upload; do not assume that a generic EPUB upload is supported.
- The content-migration decision has now been implemented: document 14 is the publication master, the ten reader chapter bodies in `src/lib/content/companion-faith.ts` match it exactly, and the former eight-chapter companion is preserved in document 15.
- Publication is not complete until the final manuscript is proofed, the correct content is attached to the existing book record, and the live reader is checked end-to-end.

**Status after owner instruction:** publication destination and artwork are confirmed. Manuscript proofing, front/back matter, final eBook export, Aletheia World CMS upload, and live-reader verification remain open. This section records the production decision; it does not certify the manuscript as publication-ready.


## 12. Existing Aletheia World catalogue/content reconciliation — 2026-11-06

Repository inspection identified the existing catalogue record for `book-doctrine-of-faith` in `src/lib/data/catalog.ts`:
- Display title: **Doctrine of Faith**
- Subtitle: **The Gospel That Restores Our True Nature**
- Author: Dr. Coach Achu Gustave
- Publisher: Aletheia Publications
- Existing cover asset: `/covers/doctrine-of-faith-seal.png` (with alternate cover artwork choices already configured)
- Catalogue status: `published`
- Chapter count at the time of this historical snapshot: **8**; subsequently updated to **10**.
- Product description at the time of this historical snapshot described an eight-chapter companion book for Course 2; it was subsequently reconciled with the ten-chapter Book I record.

The existing app reading content is separately defined in `src/lib/content/companion-faith.ts` as `faithCompanionChapters`, under the same book ID. The new canonical Book I continuous manuscript contains **10 chapters**. This is a material version/content mismatch, not a cover problem.

**Required migration decision and implementation:** preserve the existing book ID, cover artwork, author/publisher identity, and live companion source. Prepare the new ten-chapter Book I as a distinct canonical content source and explicitly map it to the intended reader/catalogue release only after the manuscript is proofed. Reconcile the former eight-chapter companion relationship, product description, chapter count, preview chapter, and protected-content index together. Do not simply change `chapterCount` from 8 to 10 or overwrite `companion-faith.ts`; that would risk a catalogue/reader mismatch and loss of the existing app content.

**Historical snapshot superseded:** the catalogue entry still uses the existing book ID and cover, but its chapter count and protected reader payload have since been updated to ten. A successful deployment and live smoke test were observed on 2026-11-06; later manuscript edits are being redeployed.


## 7. Legacy companion preservation and migration control

On 2026-11-05, the complete pre-revision eight-chapter app companion was retrieved from the parent of commit `6dd76d9217bb030b2c4760f5dd11a16c591a7068` and preserved verbatim at:

`15_LEGACY_EIGHT_CHAPTER_COMPANION_ARCHIVE.md`

The archive is an editorial preservation copy, not a reader-facing publication. The current ten-chapter companion is substantially longer and reorganized. The existence of the expanded version does not, by itself, certify that every substantive passage from the earlier eight chapters has been retained. A chapter-by-chapter migration comparison remains required before the app companion can be certified as a lossless revision.

## 8. Scripture proof progress — 2026-11-05

A further targeted KJV comparison was completed against Bible Gateway for:
- Hebrews 6:1
- Matthew 3:17
- Hebrews 11:2, 5–6
- Romans 3:21–22
- 1 Corinthians 11:7
- Ephesians 1:7
- Colossians 1:13–14
- 1 Corinthians 15:41
- Romans 3:27–28
- Hebrews 1:1–4, 8
- John 17:1 and 18–19

The proof register records these as **targeted checked**, not final publication proof. Final proof still requires checking the actual chapter source and the designed output. Hebrews 11:1, Ephesians 1:5 and other rows still marked “Needs final proof” remain open. Original-language proof items remain open pending a complete source-by-source lexical review.


## 13. Reader-index and protected-function deployment correction — 2026-11-06

The ten-chapter reader source was compared with the generated reader index. The index now contains all ten canonical chapter IDs and exact titles, and the reader text itself is checked for exact parity with publication manuscript 14.

A repository integrity test was added at `scripts/check-doctrine-of-faith-publication.mjs`. It checks ten chapter IDs and titles, catalogue publication status, entitled access, one preview chapter, and existence of the legacy archive. The Hosting workflow runs this test before building.

A further deployment gap was identified: the callable `getProtectedContent` function reads `functions/src/protected-content-data.json`, while the existing Hosting workflow deployed only Firebase Hosting. A Hosting deployment alone therefore would not update the server-side chapter payload used by the entitled reader. The workflow now also installs Functions dependencies, runs the Functions build (which regenerates protected content from the canonical source), authenticates using the existing Firebase service-account secret, and deploys only `functions:getProtectedContent`.

**Historical note superseded:** a successful GitHub Actions run and production deployment were subsequently observed on 2026-11-06. See the current verified position at the top of this audit.

## 9. Reader-content deployment correction — 2026-11-06

A deployment review found that the existing app workflow deployed Firebase Hosting but did not deploy the callable `getProtectedContent` function used by the reader to retrieve protected chapter bodies. A Hosting deployment alone was therefore insufficient to establish that the current ten-chapter manuscript had reached the live reader.

**Repository correction committed:** `.github/workflows/deploy-app-hosting.yml` now:
- triggers when `functions/**` or the protected-content generator changes;
- installs the Functions dependencies;
- runs the protected-content function build and access-control tests;
- authenticates with the existing `FIREBASE_SERVICE_ACCOUNT_ALETHEIA_WORLD` secret;
- deploys only `functions:getProtectedContent` to project `aletheia-world`;
- then deploys the app Hosting target `aletheia-world`.

The function export was confirmed in `functions/src/protected-content.ts`, and its generated chapter manifest is produced by `scripts/generate-protected-content.cjs`. The access-control tests cover preview-only access, verified entitlements, administrator access, denial of unauthorized full-content access, and a specific ten-chapter Doctrine of Faith scenario (Chapter 1 only for visitors; all ten for entitled readers).

**Verification boundary:** the anonymous preview and live catalogue page have passed automated production smoke tests. A real signed-in entitled-reader test remains outstanding; the latest manuscript update is also awaiting its current deployment run. The publication remains **NOT YET PUBLICATION-READY** pending the editorial, Scripture/lexical, production, and owner-proof gates recorded above.

## 14. Authorial-voice editorial pass — 2026-11-06

A focused editorial pass was completed on the ten-chapter publication manuscript (document 14). The pass removed manuscript-internal production language that repeatedly referred to the doctrinal positions as “the owner's thesis,” “the owner's direction,” or similar formulations. Those references have been recast in the voice of the book itself—for example, as the governing doctrinal position, the thesis developed in this book, or the doctrinal synthesis developed here.

A post-edit search of the complete manuscript found no remaining occurrences of “owner.” This is a limited authorial-voice and presentation correction, not a full copy edit. It does not certify argument continuity, quotation accuracy, lexical claims, bibliography, or designed-page proof. Those gates remain open, and the manuscript remains **NOT YET PUBLICATION-READY**.
