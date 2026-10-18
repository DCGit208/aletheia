# The Doctrine of Faith — Master Manuscript Blueprint

**Document role:** Canonical control document for planning, drafting, revising, and auditing Book I of *The Doctrine of Faith* series.  
**Book I:** *The Doctrine of Faith*  
**Book II:** *Faith Is Evidence*  
**Repository:** `DCGit208/aletheia`  
**Control status:** Initial baseline established; chapter architecture is controlled but remains subject to owner review and source audit. This document must be updated deliberately when an owner decision changes the manuscript plan.

---

## 1. Purpose and authority of this document

This is the master control document for the **reader-facing Book I manuscript**. It governs:

- the book's identity and boundary;
- the chapter architecture and each chapter's function;
- source and Scripture coverage;
- integration of owner-supplied notes;
- drafting standards and review gates;
- status tracking and unresolved owner decisions;
- the handoff from Book I to Book II.

It is not itself a chapter manuscript, course lesson, product page, or substitute for the source material.

**Control rule:** Do not begin a new chapter, add a new chapter, or substantially reorganize the book merely because a new note arrives. First determine where the material belongs in this blueprint, update the relevant chapter brief or decision record, and then draft or revise the affected manuscript.

## 2. Repository audit: what was found

The following distinctions are important.

### 2.1 Existing study/reference material

The repository's `study/` directory contains the Foundation School source study, including:

- `study/01_SOURCE_MAP.md`
- `study/02_SCRIPTURE_MATRIX.md`
- `study/03_SIX_PRINCIPLE_KNOWLEDGE_MAP.md`
- `study/04_BOOK_COURSE_CROSSWALK.md`
- `study/06_GLOSSARY.md`
- `study/07_DISTINCTIONS.md`
- `study/09_LESSON_MAP.md`
- `study/11_OWNER_DECISIONS.md`
- `study/15_ADDITIONAL_NOTES_FAITH_SONSHIP_DESIGN.md`

These are valuable source and course references. They are **not, by themselves, the master manuscript blueprint for the separate book *The Doctrine of Faith*.**

### 2.2 Existing app companion manuscript

The repository also contains `src/lib/content/companion-faith.ts`, described in its own header as a companion volume for Course 2, drawn from Foundation textbook Chapter 3. It contains eight chapter entries:

1. **Πίστις (*pistis*) — Credence That Defines Sons**
2. **’Ĕlōhîm — Image and Likeness**
3. **Psalm 82 with John 10**
4. **True Nature — Partakers**
5. **Why Did Jesus Come?**
6. **Δικαιόω (*dikaioō*) — Justified Freely**
7. **Hebrews 1:8 and the Heir**
8. **Oneness, Face, and the Stone Laid**

This is substantive existing prose and must be audited and preserved as existing work. It must **not** automatically be assumed to be the complete, owner-approved canonical Markdown manuscript for Book I. The app file is course-companion content; the reader-facing canonical manuscript needs its own controlled Markdown files.

### 2.3 Blueprint search result

The repository search did not locate an existing file specifically serving as the **Master Manuscript Blueprint for *The Doctrine of Faith***. The existing `study/04_BOOK_COURSE_CROSSWALK.md` mentions *Doctrine of Faith* (Compendium) as a back-list companion but does not define the complete chapter architecture of this book.

**Decision:** This file is created as the canonical control document for Book I. It does not silently replace the existing app content or claim that all source auditing is complete.

---

## 3. Book identity and series boundary

### Book I — *The Doctrine of Faith*

**Function:** Establish and develop the doctrine of faith through the source's teaching and its connected Scripture architecture. The work should make clear what faith is in relation to *pistis*, sonship, adoption, image and likeness, God's nature, the original design of humanity, redemption, justification, righteousness, heirship, oneness, and the present reality in Christ, to the extent established by the source and owner-approved synthesis.

Book I must do more than offer definitions. It must develop a connected doctrinal argument, preserving the sequence and force of the source.

### Book II — *Faith Is Evidence*

**Function:** Develop the subject further after Book I has established its doctrinal foundation. Book II is not a replacement title for Book I and must not be merged into it. Its distinctive focus includes Hebrews 11:1, *hypostasis*, and the relationship between faith, substance, and evidence.

Book II may build on Book I's conclusions, but it should not require readers to encounter a repeated Book I under a different title. Any overlap must be purposeful: concise recap, necessary premise, or explicit forward reference.

### Boundary rule

Do not make Book I a generic introductory book that follows a prefabricated “What is faith? Why do we need faith?” structure. Let the Aletheia source, Scripture clusters, existing argument, and owner decisions determine the architecture.

---

## 4. Governing doctrinal and source method

Every substantial claim in the manuscript must be traceable to one of these categories:

1. **Source teaching** — what the Aletheia source explicitly teaches.
2. **Scripture** — what the cited text says in its own wording and immediate context.
3. **Synthesis** — a conclusion developed by connecting multiple passages.
4. **Owner's doctrinal formulation** — a supplied interpretation or thesis that the manuscript must investigate and develop.

Do not silently collapse these categories. Do not replace source terminology with generic theological language. Do not correct, reconcile, or soften source material without recording the issue and following the owner-approved decision.

### Scripture protocol

For every key passage:

- preserve the translation used by the source when it is material;
- study the passage in its immediate context;
- study it with the Scripture cluster in which the source places it;
- distinguish explicit statement from inference;
- record any citation ambiguity, lexical uncertainty, or tension for review rather than silently fixing it.

### Lexical protocol

Preserve the source's and owner's working lexical formulations, including *pistis*, *dikaioō*, *dikaiosynē*, and *apolytrōsis*. If a word study is expanded or corrected through later research, record the evidence and the decision. Do not quietly substitute a general dictionary gloss for the intended source argument.

### Writing protocol

Write substantive chapters in canonical Markdown under a dedicated Book I manuscript directory. App/course files are downstream publishing surfaces; they must not become the sole source of truth for the book manuscript.

---

## 5. Working chapter architecture

The eight existing companion chapter titles provide the **initial baseline**, not a declaration that the final architecture is already approved. The first manuscript phase must audit these eight chapters against the complete source, Scripture clusters, and the additional notes. Keep a chapter if it has a distinct argumentative function; merge only when the content is genuinely duplicative; split only when a substantial argument cannot be developed coherently in one chapter.

| ID | Existing chapter / working title | Required function in the book | Principal source/Scripture anchors | Initial status |
|---|---|---|---|---|
| DF-01 | **Πίστις (*pistis*) — Credence That Defines Sons** | Establish the source's meaning of *pistis* and its relationship to faith toward God, sonship, adoption, and the distinction between state and mood. Preserve the sequence of the adoption texts. | Hebrews 6:1; Galatians 4:1–7; Romans 8:14–17; Ephesians 1:3–5 | Existing app prose; canonical Markdown audit required |
| DF-02 | **’Ĕlōhîm — Image and Likeness** | Develop the creation/design foundation; image, likeness, blessing, dominion, and the source's treatment of *’ĕlōhîm*. Integrate the relevant owner notes without making a later synthesis appear to be a verbatim phrase in Genesis. | Genesis 1:26–28; 1 John 4:17; Romans 8:17; John 14:12; Psalm 82:6 | Existing app prose; integrate owner notes and audit context |
| DF-03 | **Psalm 82 with John 10** | Examine Psalm 82 with the response in John 10; preserve the full argumentative context and the source's use of these texts. Do not detach Psalm 82:6 from the judgment and conduct context of the psalm. | Psalm 82:1–8; John 10:31–39 | Existing app prose; canonical Markdown audit required |
| DF-04 | **True Nature — Partakers** | Develop the source's argument about true nature and partaking of the divine nature, distinguishing source statement, text, and wider doctrinal synthesis. | 2 Peter 1:3–4; connected creation/likeness texts as established in source | Existing app prose; canonical Markdown audit required |
| DF-05 | **Why Did Jesus Come?** | Develop the source's connection between coming short of God's glory, Christ, redemption, and the restoration argument. Preserve both questions: what Christ accomplished and what Christ represents. | Romans 3:23–24; Ephesians 1:7; Colossians 1:14; Hebrews 1:2 | Existing app prose; integrate owner notes and audit context |
| DF-06 | **Δικαιόω (*dikaioō*) — Justified Freely** | Examine free justification, *dikaioō*, *dikaiosynē*, redemption, and the owner's “back on course” formulation with explicit distinctions between lexical meaning and theological synthesis. | Romans 3:23–24; Romans 5 where source supports; 2 Corinthians 5:21; Ephesians 1:7; Colossians 1:14 | Existing app prose; lexical/source audit required |
| DF-07 | **Hebrews 1:8 and the Heir** | Develop the source's question about what the justification/sonship argument makes the believer, and the meaning of heirship. Preserve the exact role of Hebrews 1:8 in the source; use Hebrews 1:2 and Romans 8:17 where appropriate to the connected argument. | Hebrews 1:8; Hebrews 1:2; Galatians 4:5–7; Romans 8:17 | Existing app prose; canonical Markdown audit required |
| DF-08 | **Oneness, Face, and the Stone Laid** | Bring the source's oneness and image/light texts together; answer the source question about John 17 without flattening its context. Establish the appropriate close of Book I and the bridge to Book II without prematurely turning Book I into a full exposition of Hebrews 11:1. | John 17:20–23; 2 Corinthians 4:4, 6; 1 Corinthians 11:7; Hebrews 6:1 | Existing app prose; integrate owner notes and audit chapter ending |

### Architecture decision rule

Do not add a ninth chapter simply to accommodate the newly supplied notes. First test whether each note strengthens one or more of DF-01 through DF-08. Add a new chapter only if the source audit reveals a distinct, substantial argument that cannot be placed coherently in the existing structure, and record the rationale and owner decision here.

The final table may change after the source and manuscript audit. Until that review is complete, treat it as a controlled working architecture, not an owner-approved final table of contents.

---

## 6. Required integration of the additional owner notes

The file `study/15_ADDITIONAL_NOTES_FAITH_SONSHIP_DESIGN.md` is a standing reference and must be consulted throughout drafting. Its material is not to be appended as disconnected notes. The following map establishes the initial placement.

| Owner note / conceptual line | Primary chapter placement | Cross-chapter links | Handling rule |
|---|---|---|---|
| Hebrews 11:2, 5–6: good report and pleasing God | DF-01 as a supporting inquiry if it advances the Book I argument | DF-02, DF-08; Book II | Do not turn Book I into a full Hebrews 11 exposition. The link between pleasing God and the state of Sonship is synthesis unless the source explicitly states it. |
| Matthew 3:17: beloved Son, Father's pleasure | DF-01 / DF-02 | DF-05, DF-08; Book II | Treat “Sonship is the state of faith” as a developing doctrinal synthesis, not a direct lexical definition in Matthew 3:17. |
| Jesus represents who humanity is by design | DF-02 and DF-05 | DF-04, DF-07, DF-08 | Develop cumulatively; do not present one verse as proving the entire thesis. |
| Romans 8:17: children, heirs, joint-heirs | DF-01 and DF-07 | DF-02, DF-08 | Preserve son → heir logic and the full verse context. |
| 1 John 4:17: “as he is, so are we in this world” | DF-02 and DF-08 | DF-04, DF-05 | Preserve the immediate context of love and confidence. |
| John 17:20–23: oneness | DF-08 | DF-02, DF-04, DF-07 | Answer the source's question through the cluster, not a detached proof-text. |
| Hebrews 1:2: Son, heir of all things, creation through Him | DF-05 and DF-07 | DF-02, DF-08 | Distinguish explicit wording from the wider representation thesis. |
| *Apolytrōsis*: “riddance, ransom in full”; restoration / back on course | DF-05 and DF-06 | DF-01, DF-07 | Preserve the owner's working gloss and mark the conceptual restoration claim as synthesis where appropriate. |
| *Dikaioō*: “to render righteous or such as he ought to be” | DF-06 | DF-05, DF-07 | Preserve as owner-supplied lexical formulation pending source/lexical verification; do not silently overwrite. |
| Genesis 1:26–28, Mark 11:22, Matthew 5:48: design, divine operation, perfection | DF-02, with relevant parts in DF-04 | DF-05, DF-08; Book II | Respect each passage's context; distinguish the owner's ontological/design reading from explicit wording. |
| Faith as state, not merely a mental belief or mood | DF-01 as governing line | All Book I chapters | Test and demonstrate through source and Scripture, not by slogan alone. |

### Working conceptual chain

Use this as an argument-development aid, not as a claim that every connection is explicitly stated by one verse:

**God → God's nature → image and likeness → humanity's original design/state → sonship/heirship → faith → pleasing God/good report → deviation/coming short of glory → Christ as representation → redemption → justification/righteousness → restoration → sonship/joint-heirship → divine nature → oneness → present reality → substance → evidence.**

The terminal concepts **substance** and **evidence** must be handled with special care: they form the explicit bridge to Book II and should not consume Book I's distinct purpose.

---

## 7. Source and Scripture coverage register

The following coverage is required for Book I, based on the existing course-companion manuscript and source study. The audit must verify that each item is adequately treated, not merely mentioned.

### Core course/source cluster

- Hebrews 6:1 — faith toward God as one of the principles.
- *Pistis* (credence), sonship, acceptance, adoption.
- Galatians 4:1–7; Romans 8:14–17; Ephesians 1:3–5.
- *’Ĕlōhîm*; Genesis 1:26–28; image, likeness, blessing, dominion.
- Psalm 82:1–8 with John 10:31–39.
- 2 Peter 1:3–4 — partakers of the divine nature.
- Romans 3:23–24 — sin, coming short of glory, justification freely by grace, redemption in Christ.
- *Dikaioō* and *dikaiosynē* according to the source's usage and the owner-approved formulations.
- *Apolytrōsis* — redemption / ransom in full according to the source's word study.
- 2 Corinthians 5:21.
- Hebrews 1:8 and the source's question, “What does that make you?”
- Hebrews 1:2, where it serves the connected Son/heir argument.
- Galatians 4:5–7 and Romans 8:17 — heirship and joint-heirship.
- John 17:20–23 — oneness.
- 1 Corinthians 11:7 — man as image/glory in the source's argument.
- 2 Corinthians 4:4, 6 — image, light, and the face of Christ.

### Additional owner-supplied cluster

- Hebrews 11:2, 5–6.
- Matthew 3:17.
- Matthew 5:48.
- Mark 11:22.
- Ephesians 1:7.
- Colossians 1:14.
- 1 John 4:17.
- Any further connected texts already present in `study/02_SCRIPTURE_MATRIX.md`, the source manuscript, and the owner decisions.

**Coverage rule:** If a source question is not answered, record it. If a Scripture appears only in the source but is not developed in the companion draft, record the gap. If a proposed addition is not supported by the source, label it as Scripture-derived synthesis or owner interpretation rather than silently attributing it to the source.

---

## 8. Chapter manuscript contract

Each canonical chapter manuscript must contain the following elements where appropriate to the chapter's actual argument. Do not force empty headings into every chapter merely for uniformity.

1. **Chapter title and purpose** — what this chapter establishes that the book needs.
2. **Governing question** — a real doctrinal question arising from the source/Scripture, not a generic filler question.
3. **Source propositions** — the specific source claims or sequence being developed.
4. **Scripture argument** — passages in context and as a connected cluster.
5. **Terminology / word study** — source usage and owner-approved lexical formulations, with uncertainties visible.
6. **Reasoning** — show how the conclusion follows; do not merely stack verses.
7. **Required distinctions** — preserve the distinctions listed in `study/07_DISTINCTIONS.md` and the relevant source files.
8. **Owner-note integration** — integrate any relevant additional note into the argument.
9. **Limits and tensions** — distinguish explicit text, synthesis, and open questions; do not invent reconciliation.
10. **Chapter conclusion** — state what has been established and what question or premise the next chapter needs.
11. **Source and Scripture trace** — internal references to source page/section, Scripture matrix IDs, or owner decisions where available.

### Prose standard

- Substantive, rigorous, direct, and readable.
- No generic self-help treatment of faith.
- No slogans in place of argument.
- No padding, repeated conclusions, or forced chapter splitting.
- No softening or intensifying a source claim without recording the reason.
- No claims of lexical certainty where the evidence is not established.
- No treating synthesis as a verbatim biblical statement.
- No treating the existing course companion as automatically final or owner-approved merely because it exists in the app.

---

## 9. Canonical manuscript file plan

Create a dedicated directory:

`Book Matter/Doctrine of Faith/`

Use these canonical Markdown files:

- `00_DOCTRINE_OF_FAITH_MASTER_MANUSCRIPT_BLUEPRINT.md` — this control document.
- `01_CHAPTER_01_PISTIS_CREDENCE_THAT_DEFINES_SONS.md`
- `02_CHAPTER_02_ELOHIM_IMAGE_AND_LIKENESS.md`
- `03_CHAPTER_03_PSALM_82_WITH_JOHN_10.md`
- `04_CHAPTER_04_TRUE_NATURE_PARTAKERS.md`
- `05_CHAPTER_05_WHY_DID_JESUS_COME.md`
- `06_CHAPTER_06_DIKAIOO_JUSTIFIED_FREELY.md`
- `07_CHAPTER_07_HEBREWS_1_8_AND_THE_HEIR.md`
- `08_CHAPTER_08_ONENESS_FACE_AND_THE_STONE_LAID.md`
- `90_OPEN_QUESTIONS_AND_OWNER_DECISIONS.md` — only real unresolved questions and decisions; do not reopen locked decisions.
- `91_SOURCE_AND_SCRIPTURE_COVERAGE_AUDIT.md` — coverage ledger for the book.
- `92_CHANGELOG.md` — concise record of architecture and owner-approved changes.

The chapter file names are a stable starting convention. If the owner approves an architectural change, update this blueprint and the file plan together before creating, moving, or deleting chapter manuscripts.

---

## 10. Drafting workflow and approval gates

### Gate A — Inventory and preservation

- Read the full eight existing app companion chapters.
- Compare them with the source study, Scripture matrix, glossary, distinctions, owner decisions, and additional-notes file.
- Identify any other canonical Markdown manuscript or draft already present elsewhere in the repository.
- Record the status of every chapter: existing app prose, canonical manuscript present/absent, source coverage verified/unverified, additional notes integrated/unintegrated.
- Do not overwrite existing prose or assume it is approved without evidence.

### Gate B — Architecture review

- Validate the eight-chapter working architecture.
- Decide whether any chapter must be merged, split, renamed, or expanded.
- Confirm the intended closing boundary between Book I and Book II.
- Record any required owner decisions in Section 11 or `90_OPEN_QUESTIONS_AND_OWNER_DECISIONS.md`.

### Gate C — Chapter briefs

Before writing or rewriting a chapter, complete a brief with:

- chapter purpose and governing question;
- source propositions and source location;
- Scripture cluster and immediate-context notes;
- lexical terms;
- owner notes to integrate;
- required distinctions;
- dependencies on prior/next chapters;
- known gaps and unresolved questions;
- acceptance criteria.

### Gate D — Drafting

Draft one chapter at a time in canonical Markdown. The app companion may be consulted as existing work, but the canonical manuscript is the authoritative book text once reviewed and approved.

### Gate E — Chapter review

Review the draft for:

- source fidelity;
- Scripture/context fidelity;
- argument completeness;
- lexical integrity;
- owner-note integration;
- coherence with other chapters;
- redundancy and omissions;
- clear boundary from Book II.

### Gate F — Book-level audit

After all chapters reach reviewed status:

- run the source/Scripture coverage audit;
- verify all source questions are answered or explicitly unresolved;
- inspect repeated content and contradictions;
- check chapter transitions and the cumulative argument;
- confirm the book ends where Book I should end, leaving the distinct *Faith Is Evidence* investigation for Book II;
- present the assembled architecture and audit for owner review.

**No chapter is “final” merely because a draft exists or because prose already appears in the app.**

---

## 11. Owner decisions and unresolved matters

Do not reopen questions that the owner has already locked in `study/11_OWNER_DECISIONS.md`.

The following are review tasks, not assumed decisions:

1. Confirm whether the eight existing app companion chapters are the approved final chapter architecture for Book I.
2. Determine whether the canonical Markdown chapters exist elsewhere in the repository or need to be created from audited existing prose.
3. Decide, after full coverage review, whether Hebrews 11:1 and the detailed *hypostasis* argument belong entirely in Book II or whether Book I needs a short framing transition.
4. Determine how much of the Hebrews 11:2, 5–6 / Matthew 3:17 connection belongs in Book I without turning it into the full Book II argument.
5. Resolve only genuine source, lexical, or argument conflicts that cannot be answered from the existing source and owner decisions.

No new doctrinal conclusion is to be silently made to avoid asking a real owner question.

---

## 12. Status dashboard

Status at creation of this blueprint:

| Work item | Status | Next action |
|---|---|---|
| Book I / Book II distinction | Established by owner | Preserve throughout |
| Foundation School source study | Exists | Use as reference, not as substitute for Book I architecture |
| Eight-chapter app companion prose | Exists in `src/lib/content/companion-faith.ts` | Full audit and preservation |
| Dedicated Book I master blueprint | **Created here** | Owner review; update as decisions are made |
| Canonical Markdown chapter manuscripts in dedicated directory | Not located in the audited paths; not yet verified elsewhere | Search repository and create/transfer after audit |
| Additional owner notes | Recorded in `study/15_ADDITIONAL_NOTES_FAITH_SONSHIP_DESIGN.md` | Integrate according to Section 6 |
| Source and Scripture coverage of each chapter | Not yet fully audited against all manuscript prose | Complete Gate A and maintain coverage ledger |
| Final approved chapter architecture | Working eight-chapter baseline | Complete Gate B |
| Book I final manuscript | Not yet established as complete | Draft/revise through Gates C–F |
| Book II manuscript | Later work | Begin after Book I foundation and boundary are reviewed |

---

## 13. Standing control instruction

This blueprint is the single control document for Book I manuscript development.

Whenever the owner adds a note:

1. Preserve the note in the appropriate reference file if it is substantive and durable.
2. Determine which chapter(s) it affects.
3. Update the chapter brief/coverage ledger and this blueprint if the architecture or requirements change.
4. Integrate it into the argument, not as a detached appendage.
5. Preserve the distinction between source teaching, Scripture, synthesis, and owner interpretation.
6. Record unresolved questions rather than silently filling gaps.

**Book I is *The Doctrine of Faith*. Book II is *Faith Is Evidence*. Develop Book I first, from the source and its Scripture architecture, and keep Book II's distinct purpose intact.**
