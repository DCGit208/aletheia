# 91 — Book I Source and Scripture Coverage Audit

**Book:** *The Doctrine of Faith* (Book I)  
**Repository:** `DCGit208/aletheia`  
**Audit phase:** Gate A completed; canonical draft implementation status updated  
**Status:** Initial source audit and first nine-chapter drafting pass completed. The nine drafts are preserved working material; the final architecture is being reconstructed from the owner's direction that Hebrews 11:1 / *hypostasis* is foundational to Book I. This remains a working audit, not final doctrinal or publication approval. The existing app companion remains preserved.

## 1. Executive finding

The repository already contains a substantial eight-entry app companion in `src/lib/content/companion-faith.ts`. It is not a blank starting point. It preserves much of the Course 2 / “Faith toward God” material and develops a connected argument through *pistis*, sonship, image and likeness, Psalm 82 and John 10, partaking of divine nature, Christ's coming, justification, heirship, John 17, and the image/light in 2 Corinthians 4.

However, the app companion is **not yet a verified canonical Book I manuscript**. The eight array entries contain **thirteen internal section headings** (I–XIII), and some entries carry multiple substantial movements. Therefore, the existing eight-entry architecture should not be accepted automatically as eight final book chapters. The correct next step is to preserve this prose, make the section structure explicit, audit the added reasoning, and then decide whether the reader-facing book should retain eight chapters or reorganize the existing material into a more coherent chapter sequence.

The 2015 leaflet is the compressed source for the Course 2 teaching. The attached *BIBLE INTRODUCTION.pdf* is a broad Bible-study/reference introduction (Dake Study Bible notes and related introductory material), not a second source manuscript for the Faith Toward God principle. It supplies a stated Bible-study/interpretive framework and general reference material, but it does not independently establish the specific Aletheia doctrine developed in the leaflet. Its contents should be used as contextual/reference material only where a specific relevant passage or method is actually engaged—not cited as though it were the source of the leaflet's doctrinal claims.

## 2. Source hierarchy and audit method

The audit keeps four categories separate:

1. **Aletheia source statement** — what the 2015 leaflet explicitly says.
2. **Scripture text/context** — what the cited passage says, including surrounding verses where needed.
3. **Synthesis / development** — reasoning that connects several source statements or passages.
4. **Owner's developing formulation** — an interpretation or thesis explicitly supplied in the owner's notes.

A statement can be forceful and still require its category to be visible. Categorization is not an attempt to weaken the teaching; it prevents the manuscript from attributing a later expansion to the compressed leaflet or to a single verse when the conclusion is cumulative.

## 3. Source documents reviewed

### 3.1 *Aletheia Libraries 1* (2015), five-page leaflet

The relevant Course 2 source is on page 2 under the heading “Faith toward God.” Its explicit content includes:

- Faith defines the state as children of God.
- Greek *pistis* is glossed as “credence.”
- Faith is connected to acceptance / true nature and espousal / adoption as sons.
- The leaflet connects this with Galatians 4:5–7, Romans 8:15, and Ephesians 1:5.
- It connects oneness with God to Hebrew *’ĕlōhîm* (the leaflet states “plural: Trinity”) and Genesis 1:26.
- It says acceptance/approval is based on true nature from creation.
- It uses Genesis 1:26–27, a TLB gloss of Genesis 1:27, 2 Peter 1:4, and Psalm 82:6.
- Under “Why did Jesus come?” it cites Romans 3:23–24 and explains coming short of glory as deviation from true nature; it cites 1 Corinthians 11:7.
- It glosses *dikaioō* as “render just or innocent (free from evil or guilt).”
- It glosses *dikaiosynē* as righteousness/justification, equity, impartiality to and conformity with the nature of God, “original: back on course.”
- It asks and answers, “Has man been justified? Yes! And FREELY!” through *apolutrōsis*, glossed “redemption; ransom in full.”
- It states that the reader is the *dikaiosynē* of God in Christ, citing 2 Corinthians 5:21.
- It poses unresolved teaching questions: according to Hebrews 1:8, what does that make you? Who is heir of God? What does “heir” mean? How would you liken John 17:20–23?
- It quotes 2 Corinthians 4:4 and 4:6.
- It directs further reading to *The Doctrine of Man*, *Why Men Die*, *True Nature of God*, and *Who’s Jesus to You?* at the respective points in the source.

These are the controlling source propositions for the Faith Toward God material. The course source map `study/01_SOURCE_MAP.md` and Scripture matrix `study/02_SCRIPTURE_MATRIX.md` provide the more detailed ordered inventory and the wider course context.

### 3.2 *BIBLE INTRODUCTION.pdf* (26 pages)

The supplied PDF is identified as “Dake Study Bible Notes,” with a preface by Finis Jennings Dake and introductory Bible-reference material. It states an interpretive preference for taking the Bible literally where possible and looking for the literal truth intended by symbolic, figurative, or typical language. It also emphasizes cross-references, word definitions, and checking what related passages actually say.

**Use in this project:** This is supplementary Bible-study context. It is not the 2015 Aletheia leaflet and must not be treated as if it supplies Aletheia's particular glosses for *pistis*, *dikaioō*, *dikaiosynē*, or *apolutrōsis*. A broad statement in the PDF about Scripture or faith does not substitute for passage-specific study. Where a particular Dake note is used later, record the exact note/page and label it as an external reference rather than Aletheia source teaching. The current audit did not identify a passage-specific Dake note that changes the leaflet's Course 2 architecture.

## 4. Chapter-by-chapter audit of the existing app companion

Status labels:
- **Preserve:** substantive material worth retaining.
- **Expand / verify:** content needs closer source/context checking before canonical publication.
- **Distinguish:** the manuscript must identify whether the claim is source statement, Scripture, synthesis, or owner formulation.
- **Structural review:** the current app entry combines multiple movements that may or may not belong in one reader-facing chapter.

### DF-01 — “Πίστις (*pistis*) — Credence That Defines Sons”

**Existing content:** Hebrews 6:1; *pistis* as credence; Galatians 4:1–7; Romans 8:14–17; Ephesians 1:3–5; sonship, adoption, servant/son contrast, heirship; concluding student charge.

**Preserve:** The opening claim that faith is not being treated as a mood; the source's “credence” terminology; the ordered son/adoption/heir argument; the treatment of Romans 8:17 that retains both joint-heirship and suffering/glory; the direct charge to reason from the texts.

**Audit points:**
1. The leaflet explicitly names Galatians 4:5–7, Romans 8:15, and Ephesians 1:5. The app companion responsibly opens wider contexts (Galatians 4:1–7; Romans 8:14–17; Ephesians 1:3–5), but should mark this as contextual expansion rather than imply the leaflet printed every verse.
2. “Credence is the mind’s agreement with what God has said and done” is an interpretive explanatory sentence. Preserve as manuscript exposition only if the author confirms it accurately expresses the intended meaning; do not label it as a complete lexical definition of *pistis*.
3. “Repentance received you into the new creature” is a compressed theological transition from Course 1 into Course 2. Ensure it does not accidentally make repentance itself the agent of new creation where the source says the only way out is Christ and cites 2 Corinthians 5:17.
4. The claim that Ephesians 1:3–5 means adoption is not an “emergency repair” is a synthesis from the passage's language about being chosen in Christ before the foundation of the world. It should remain traceable to that reasoning.
5. “The cry follows the sonship. The Spirit does not invent a child” is a strong interpretation of Galatians 4:6 and should be categorized as exposition/synthesis.
6. The “state, not mood” contrast is central to the manuscript's argument but must be demonstrated from the source and connected Scripture, not repeated as a slogan.

**Initial readiness:** Substantive prose exists; requires source/context review and classification of interpretive sentences.

### DF-02 — “’Ĕlōhîm — Image and Likeness”

**Existing content:** Genesis 1:26–28; *’ĕlōhîm*; image, likeness, blessing, dominion; TLB gloss beside KJV; John 14:12; 1 John 4:17; Psalm 82:6; Romans 8:17; forward reference to John 17.

**Preserve:** The source's emphasis on image, likeness, blessing, and dominion as a connected Genesis unit; the explicit marking of the TLB sentence as a gloss rather than a replacement for the KJV; the insistence that Genesis 1:26–28 be taught rather than displaced by a generic statement.

**Audit points:**
1. The leaflet says *’ĕlōhîm* is plural and glosses this as “Trinity.” Preserve that as the leaflet's own claim. If additional Hebrew grammar or interpretive material is introduced, label it as external verification and do not silently rewrite the source's formulation.
2. The companion's statement “The ‘us’ and the ‘our’ are the speech of God concerning God” is a doctrinal interpretation, not the literal wording of Genesis 1:26. Retain only with its interpretive status understood.
3. John 14:12 and 1 John 4:17 are not quoted in the Course 2 paragraph of the leaflet. They are connected Scripture additions / owner-note material, not direct quotations from the leaflet's Course 2 section.
4. Psalm 82:6 is in the leaflet; Romans 8:17 is a source-supported connection through the adoption/heirship cluster. Their use here should be mapped to the wider argument rather than presented as if the leaflet's short paragraph developed them fully.
5. The owner’s “Jesus represents who we are by Design” thesis belongs here and in the Christ/redemption chapter, but must be shown as the cumulative conclusion of the cluster, not attributed to Genesis alone.
6. The source's use of “as Gods” in the owner's notes is a theological framing. Genesis itself says “image,” “likeness,” and “dominion”; keep that wording distinction visible.

**Initial readiness:** Strong design foundation; expanded Scripture cluster and theological inferences need explicit classification.

### DF-03 — “Psalm 82 with John 10”

**Existing content:** Psalm 82:1–8; John 10:30–38; the judgment context; “Ye are gods”; “the scripture cannot be broken”; charge to read Psalm 82:6–7 together.

**Preserve:** The insistence on reading Psalm 82:6 with verse 7 and the whole judgment scene; the inclusion of John 10's actual argument rather than using only one phrase; the source's concern for the authority of the *graphē*.

**Audit points:**
1. The leaflet cites Psalm 82:6 and earlier cites John 10:35 as a statement about the authority of Holy Writ. The full Psalm 82 / John 10:31–39 exposition is an expansion of those anchors, not a fully printed argument in the leaflet.
2. Preserve both the assertion in Psalm 82:6 and the judgment in verses 1–8. Do not use the judgment context to erase verse 6, or use verse 6 to erase the rest of the psalm.
3. John 10:34–36 quotes Psalm 82:6 and says the Scripture cannot be broken. The manuscript should distinguish Jesus' immediate argument in John 10 from any broader conclusion about the nature of all believers.
4. “That oneness will return in John 17” is a legitimate cross-chapter link, but its implications belong to the later synthesis and should not be presented as a direct statement of Psalm 82.

**Initial readiness:** Good contextual development; needs source-vs-expansion labels and careful control of the conclusion drawn from “gods.”

### DF-04 — “True Nature — Partakers”

**Existing content:** 2 Peter 1:2–8, especially 1:4; divine power, promises, partakers of divine nature, escape from corruption, virtues and diligence; connection to Genesis and Psalm 82:5.

**Preserve:** The reading of 2 Peter 1:4 together with the escape from corruption in the same sentence; the connection between “partakers” and the source's “true nature” line; the reminder not to cite verse 4 while ignoring verses 5–8.

**Audit points:**
1. The leaflet directly cites 2 Peter 1:4, not the full 1:2–8 passage. The broader context is an intentional Scripture expansion.
2. “You are not being made into another nature” / “returned to the one Genesis named” is synthesis. The wording must not imply that 2 Peter 1:4 itself uses the leaflet's phrase “true nature from creation.”
3. The companion links “foundations of the earth are out of course” in Psalm 82:5 to “back on course” in the glossary and Romans 3:23. This is a conceptual synthesis; record the link rather than implying a direct lexical equivalence across those verses.
4. The use of *dikaiosynē* inside this chapter is a forward reference; keep the main lexical argument in the justification chapter to avoid duplication.

**Initial readiness:** Useful bridge; verify the argument's transitions and keep source wording distinct from the “back on course” synthesis.

### DF-05 — “Why Did Jesus Come?”

**Existing content:** Romans 3:21–26; Romans 3:23–24; 1 Corinthians 11:7; coming short of glory as deviation from true nature; Christ as the one who justifies; chapter charge.

**Preserve:** The source's governing question, “Why did Jesus come?”; the relationship between Romans 3:23–24 and 1 Corinthians 11:7; the fact that the source explicitly interprets “come short of the glory” as deviation from true nature.

**Audit points:**
1. Romans 3:21–22 and 3:25–26 are contextual expansion around the leaflet's quoted Romans 3:23–24. Keep that distinction visible.
2. The immediate context of 1 Corinthians 11:7 concerns head covering / headship in the assembly. The leaflet selects its “image and glory of God” clause for the argument. The book should preserve that source use while acknowledging the verse's immediate setting rather than implying that the entire context is exclusively about the doctrine of human nature.
3. “He came that the man made in the image might be justified freely and set back on course” is a synthesis of Romans 3:23–24, Genesis 1, and the source's glosses. It should be shown as the argument the manuscript is building, not as a verbatim sentence from Romans.
4. The owner’s thesis that Christ represents humanity by design belongs here, but the distinction between **what Christ accomplished** and **what Christ represents** must be developed cumulatively and not made to sound as if Romans 3:23–24 alone spells out every element.

**Initial readiness:** Strong central chapter candidate; contextual expansion and representation thesis need explicit argumentation.

### DF-06 — “Δικαιόω (*dikaioō*) — Justified Freely”

**Existing content:** *dikaioō*, *dikaiosynē*, *apolutrōsis*; Romans 3:24 and 3:27–28; 2 Corinthians 5:17–21; free justification; righteousness of God in Christ; present-state claim.

**Preserve:** The leaflet's definitions and formulations exactly enough that the source's teaching is not lost: *dikaioō* = render just or innocent/free from evil or guilt; *dikaiosynē* = righteousness/justification, equity, impartiality to and conformity with God's nature, “original: back on course”; *apolutrōsis* = redemption/ransom in full; “Has man been justified? Yes! And FREELY!”; “you are the *dikaiosynē* of God in Christ” from 2 Corinthians 5:21.

**Audit points:**
1. The owner’s additional formulation, *dikaioō* = “to render righteous or such as he ought to be,” is not identical to the leaflet's printed gloss. Preserve both in their correct categories. Do not silently replace one with the other; decide later whether a verified lexical note is needed.
2. The leaflet's “back on course” is a conceptual gloss. Do not present it as the sole or undisputed dictionary meaning of *dikaiosynē*.
3. The leaflet cites 2 Corinthians 5:21, while the companion expands 5:17–21. That expansion is pedagogically useful because it links new creation, reconciliation, and righteousness; record it as contextual development.
4. The companion's “There is no unpaid remainder on that ransom” and “If you add a fee to a ransom in full…” are rhetorical applications of the leaflet's “ransom in full” gloss. Preserve only if the author wants this emphasis and the surrounding argument does not accidentally reduce justification to a commercial analogy.
5. The sentence “This is the state *pistis* credits” is synthesis connecting the lexical/sonship chapter to justification. It should be argued rather than treated as an explicit definition from one verse.
6. Review the Greek spelling/transliteration consistently: source uses a form rendered *apolutrōsis*; the companion uses *apolutrōsis* with Greek ἀπολύτρωσις. Keep transliteration consistent throughout the manuscript.

**Structural review:** The app's sixth entry contains sections VI and VII. Decide whether justification and the present righteousness claim form one chapter with two movements or need separate treatment. Do not split only to match internal headings; assess argumentative completeness.

**Initial readiness:** Core source material is present; this is one of the highest-priority lexical/fidelity reviews.

### DF-07 — “Hebrews 1:8 and the Heir”

**Existing content:** Hebrews 1:1–8; Son as heir of all things; express image; Son distinct from angels; Hebrews 1:8; question “what does that make you?”; Galatians 4:1–7; Romans 8:17; meaning of heir.

**Preserve:** The companion takes the leaflet's unanswered questions seriously and does not merely place them as rhetorical decoration; the opening of Hebrews 1 and the adoption/heir texts are brought together; the chapter retains the requirement to reason rather than invent a title.

**Audit points:**
1. The leaflet asks, “according to Hebrews 1:8, what does that make you?” but does not provide the extended Hebrews 1:1–8 exposition. The current companion is an expansion designed to answer the source's question.
2. The question is not itself an explicit verse saying that every believer is addressed with the title used in Hebrews 1:8. The chapter must show every step of its reasoning from 2 Corinthians 5:21, Hebrews 1:3, Hebrews 1:8, Genesis 1:26–28, and 1 John 4:17. Do not leap from “the Father addresses the Son as God” to an unqualified title for believers without showing the argument and its limits.
3. The definition “An heir is the one to whom the father's estate belongs by sonship” is explanatory wording, not a quotation from Galatians 4. Keep it grounded in the adoption/heir context and avoid over-legalizing the metaphor beyond the text.
4. The companion says “joint-heirs. Not a junior partner who might be cut out if the week goes badly.” This is rhetorical exposition; review for precision and consistency with the full Romans 8:17 clause about suffering and glory.
5. The app entry has internal sections VIII and IX. This is a real structural decision point: the Hebrews 1:8 argument and the heir-definition argument are related but not identical questions. The final architecture should decide whether they form one integrated chapter or two.

**Initial readiness:** Source question correctly identified; answer remains a major doctrinal reasoning task and owner-review checkpoint.

### DF-08 — “Oneness, Face, and the Stone Laid”

**Existing content:** John 17:1, 18–23; oneness, glory, “as” relationship, being in the Father and Son; 2 Corinthians 4:1–6; image of God, light and the face of Jesus Christ; concluding recap and course-forward reference.

**Preserve:** The source's question “How would you liken John 17:20–23?” is answered through the prayer's own language; 2 Corinthians 4:4 and 4:6 are treated together; the closing recap attempts to gather the doctrine's line rather than ending with an unrelated exhortation.

**Audit points:**
1. The leaflet asks the John 17 question and quotes 2 Corinthians 4:4 and 4:6. The companion expands John 17 into its surrounding prayer and 2 Corinthians 4 into verses 1–6. These are context additions.
2. The immediate referents and movement in John 17 matter: Jesus speaks first about those given Him and then extends the prayer to those who believe through their word. Preserve this sequence.
3. The interpretation of “the glory which thou gavest me I have given them” as the same glory file discussed in Romans 3:23 and 1 Corinthians 11:7 is a synthesis. The chapter should demonstrate that relationship, not assume the words automatically have identical scope in each context.
4. “Faith toward God is credence of this light, this image, this sonship, this free justification” is a cumulative thesis; retain only with the chain of reasoning shown.
5. The chapter currently contains sections X, XI, XII, and XIII: John 17, image/face, a recap/application section, and further reading. This is a major structural review point. It may be too much for one final chapter, but no split should be decided before the whole argument and reader flow are reviewed.
6. The concluding statement that the next chapter will teach baptism belongs to the course's six-principle sequence. For a standalone Book I titled *The Doctrine of Faith*, it may be a course-companion artifact rather than an appropriate book ending. The canonical book must not preserve course-transition language automatically.

**Initial readiness:** Significant content and a plausible closing synthesis exist; the book-specific ending and internal structure need review.

## 5. Cross-chapter structural findings

The existing app array has eight entries, but their internal section headings run I–XIII:
- Entry 1: section I.
- Entry 2: section II.
- Entry 3: section III.
- Entry 4: section IV.
- Entry 5: section V.
- Entry 6: sections VI–VII.
- Entry 7: sections VIII–IX.
- Entry 8: sections X–XIII.

This means the eight entries are not a one-to-one match with the current thirteen argumentative sections. The book architecture should be reviewed using **argumentative function and reader flow**, not array count alone. In particular:
- DF-06 has justification and present righteousness as two movements.
- DF-07 has Hebrews 1:8 and heirship as two related but separate questions.
- DF-08 combines John 17, 2 Corinthians 4, book-level recap, and course further-reading/transition material.
- The app prose has several explicit references to “Course 1,” “Course 3,” “this school,” “this course,” and the next baptism principle. Those should be reviewed for removal or transformation in the standalone book, not copied mechanically.
- “Further reading” names should be retained as source provenance / bibliographic direction but formatted according to the book's own editorial design; they are not automatically chapter content or mandatory reading.

## 6. Coverage ledger: source and owner-note clusters

| Source / cluster | Present in app companion? | Audit finding / required action |
|---|---|---|
| Hebrews 6:1 — faith toward God | Yes | Anchor is present. Keep Book I's subject boundary clear from the whole six-principle course. |
| *Pistis* as credence; state as children; adoption | Yes | Core source claim present. Distinguish lexical gloss from explanatory synthesis. |
| Galatians 4:5–7; Romans 8:15; Ephesians 1:5 | Yes, expanded context | Covered. Verify each expanded verse's role and preserve sonship → heirship sequence. |
| *’Ĕlōhîm* / Genesis 1:26–27; image and likeness | Yes | Core source present. Source's “plural: Trinity” formulation needs faithful treatment and separate verification if expanded. |
| Genesis 1:28 — blessing and dominion | Yes | Present in the app companion; preserve as part of the Genesis unit. |
| TLB gloss of Genesis 1:27 | Yes | Companion explicitly marks it as a gloss. Keep this distinction. |
| Psalm 82:6 | Yes | Present and expanded with Psalm 82:1–8 and John 10. Context and inference require careful treatment. |
| John 10:34–35 / Scripture cannot be broken | Yes | Relevant expansion from the source's John 10:35 authority reference and Psalm 82:6. |
| 2 Peter 1:4 | Yes, expanded to 1:2–8 | Present. Mark wider context and synthesis. |
| Romans 3:23–24 / coming short of glory | Yes, expanded to 3:21–28 | Present. The source's “deviation from true nature” gloss must remain identifiable as source formulation. |
| 1 Corinthians 11:7 | Yes | Present. Retain immediate context of head covering/headship in the assembly while explaining the source's selected clause. |
| *Dikaioō* / *dikaiosynē* | Yes | Present. Compare leaflet gloss, owner formulation, and any later lexical study without merging them. |
| *Apolutrōsis* / redemption, ransom in full | Yes | Present. Preserve source gloss; label “restoration/back on course” as conceptual synthesis. |
| 2 Corinthians 5:21 | Yes, expanded to 5:17–21 | Present. Central to present righteousness claim; argue “in Him” carefully. |
| Hebrews 1:8 — “what does that make you?” | Yes, extended exposition | Question addressed but the inference is high-stakes doctrinal reasoning. Require explicit step-by-step argument and owner review. |
| Hebrews 1:2 — Son, heir of all things | Yes, in Hebrews 1:1–2 | Present as an expansion. Also integrate the owner's representation question. |
| Meaning of heir; Galatians 4:5–7; Romans 8:17 | Yes | Present. Keep inheritance and suffering/glory together in Romans 8:17. |
| John 17:20–23 — oneness | Yes | Present with context. Owner question is addressed; the relation of glory and oneness remains synthesis to demonstrate. |
| 2 Corinthians 4:4 and 4:6 | Yes, expanded to 4:1–6 | Present. Preserve image/light/face connection and distinguish synthesis. |
| Ephesians 1:7 / Colossians 1:14 | Not substantively developed in the eight entries | Add to the redemption coverage register and decide whether the source's *apolutrōsis* argument needs these parallel texts. Do not mark as fully covered until developed. |
| Hebrews 11:2, 5–6 — good report / pleasing God | Not present as developed argument | Owner-note gap. Decide whether a concise forward bridge belongs in Book I or whether the substantial faith/pleasing argument belongs to Book II. Do not force it into Book I merely because it is in the notes. |
| Matthew 3:17 — beloved Son / Father's pleasure | Not present | Owner-note gap. Consider with sonship/pleasing synthesis; do not claim it directly defines faith. |
| Mark 11:22 | Not present | Owner-note gap. Requires careful treatment of the translation/Greek construction if included; do not assert “God's faith” without evidence. |
| Matthew 5:48 | Not present | Owner-note gap. If included, retain the context of love/enemies and distinguish ontological/design synthesis from explicit wording. |
| 1 John 4:17 | Present in DF-02 | Owner-note cluster partly covered. Keep the immediate context of love and confidence. |
| “Jesus represents who we are by Design” | Partly developed across DF-02, DF-05, DF-07, DF-08 | Central owner thesis is present implicitly but needs a deliberate cumulative argument and explicit owner review. |
| Faith as state, not merely mental belief/mood | Present throughout | Core working thesis, not a standalone proof. Demonstrate rather than repeat. |
| *Dikaioō*: “render righteous or such as he ought to be” | Not clearly integrated as the distinct owner formulation | Add to the lexical decision record beside the leaflet's printed gloss. |
| “Design → deviation → Christ → redemption → restoration → righteousness → sonship/heirship → present reality” | Partly developed | Use as an argument map; do not treat each arrow as explicitly stated in one passage. |
| Hebrews 11:1 / *hypostasis* / substance foundation | Not developed in the original nine drafts | This is a major foundational gap to correct in Book I. Book II develops faith as evidence from that foundation. See documents 94–95. |

## 7. Editorial and doctrinal review flags

The following are not automatic errors; they are items that need deliberate authorial handling before the app prose becomes canonical book prose.

### High priority
1. **Hebrews 1:8 inference:** Show each reasoning step from the cited passages. The leaflet asks a question; it does not print the answer. Do not turn the question into an unexamined conclusion.
2. **Lexical formulations:** Preserve the leaflet's *dikaioō*, *dikaiosynē*, and *apolutrōsis* glosses and the owner's additional *dikaioō* formulation as distinct recorded items.
3. **Architecture:** Review the current 8-entry / 13-section mismatch and determine the actual reader-facing chapter sequence.
4. **Standalone-book adaptation:** Identify and revise course-specific language (“Course 1,” “this school,” “Course 3,” “next chapter will baptize…”) where it does not serve the book.
5. **Owner-note integration:** Plan where Hebrews 11:2, 5–6; Matthew 3:17; Mark 11:22; and Matthew 5:48 belong, including the possibility that some are better reserved for Book II or a controlled forward reference.

### Medium priority
6. **Psalm 82 / John 10:** Keep the whole argument in view and distinguish Jesus' immediate argument from the broader doctrine being synthesized.
7. **Genesis 1 and *’ĕlōhîm*:** Preserve the leaflet's stated interpretation; any further grammatical or historical study must be explicit rather than silently substituted.
8. **1 Corinthians 11:7:** Retain the source's use of “image and glory” while acknowledging the immediate passage context.
9. **John 17:** Demonstrate the link between glory, oneness, and the other image/sonship passages; do not assume that “glory” has identical scope in every passage.
10. **2 Corinthians 5:21:** Keep “in Him” integral to the present righteousness claim.
11. **Source additions:** Ephesians 1:7 and Colossians 1:14 are in the owner's Scripture cluster but are not substantively treated in the app companion; determine their exact function.
12. **Dake reference:** Cite a specific note/page only if it contributes a relevant argument; do not let the general introduction become an untracked doctrinal authority.

## 8. Recommended architecture review—not yet a final table of contents

Do not rename or split chapters immediately. First test these possible argumentative movements against the whole source and reader flow:

1. *Pistis*, credence, sonship, and adoption.
2. Image, likeness, *’ĕlōhîm*, and original design.
3. Psalm 82 and John 10.
4. True nature and partaking of divine nature.
5. Why Christ came: glory, deviation, and representation.
6. Free justification, *dikaioō*, *dikaiosynē*, and *apolutrōsis*.
7. The Son, Hebrews 1:8, and the question of what justification makes the believer.
8. Heirship and joint-heirship.
9. Oneness, glory, and John 17.
10. Image, light, and the face of Christ; Book I synthesis and controlled bridge to Book II.

This is a **review map**, not a recommendation to create ten chapters automatically. Some movements may remain combined; others may need a distinct chapter. Decide only after reviewing the prose's dependencies, repetition, and the owner notes. Preserve all existing content in the audit trail during any reorganization.

## 9. Gate A outcome

- [x] Located and read the eight existing app-companion entries.
- [x] Identified the relevant Course 2 propositions in the 2015 leaflet and compared them with the app prose.
- [x] Reviewed the attached *BIBLE INTRODUCTION.pdf* at the document level and identified its supplementary/reference role.
- [x] Mapped major Scripture/source coverage and identified important gaps.
- [x] Identified the eight-entry / thirteen-section structural issue.
- [x] Identified high-priority inference, lexical, and course-to-book adaptation decisions.
- [ ] Owner has approved the final Book I architecture.
- [ ] Every chapter's source and Scripture coverage has been checked at passage level against the full source matrix and owner decisions.
- [ ] The owner has reviewed the Hebrews 1:8 reasoning and other major doctrinal synthesis.
- [ ] Canonical Markdown chapters have been created and drafted/revised.

**Gate A conclusion:** The initial inventory and preservation review is complete enough to proceed to Gate B (architecture validation), but not enough to call the manuscript doctrinally or editorially final. Do not overwrite or discard the existing app prose. Use this audit to make the architecture decision and then draft canonical Markdown chapters from the preserved material.

## 10. Change control

When new notes arrive:
1. Add the note to the correct existing study/reference file.
2. Update this coverage ledger and the relevant chapter brief.
3. Identify whether it changes the architecture or only strengthens an existing argument.
4. Preserve any unresolved conflict for owner decision.
5. Update the blueprint and changelog before making a material chapter reorganization.


## 11. Implementation status — 2026-10-18

The original nine-chapter first drafting pass has canonical Markdown working drafts for all chapters. Following the owner's correction, these are preserved source-bearing drafts, not a validated final chapter sequence:

| Chapter | Canonical manuscript | Main audit focus still required |
|---|---|---|
| 1 | `01_PISTIS_CREDENCE_THAT_DEFINES_SONS.md` | Verify source coverage; keep Hebrews 11 / Matthew 3 relationship labeled as synthesis. |
| 2 | `02_ELOHIM_IMAGE_LIKENESS_AND_DESIGN.md` | Verify owner-note integration; preserve source wording and the contexts of Mark 11:22 and Matthew 5:48. |
| 3 | `03_PSALM_82_WITH_JOHN_10.md` | Keep Psalm 82:6–7 and John 10 together. |
| 4 | `04_TRUE_NATURE_PARTAKERS_OF_DIVINE_NATURE.md` | Preserve 2 Peter 1:2–8 sequence and distinguish “back on course” from lexical definition. |
| 5 | `05_WHY_DID_JESUS_COME_GLORY_DEVIATION_REPRESENTATION.md` | Verify glory/representation synthesis and immediate context of 1 Corinthians 11:7. |
| 6 | `06_DIKAIOO_JUSTIFIED_FREELY_RIGHTEOUSNESS_IN_CHRIST.md` | Keep the leaflet's and owner's lexical formulations distinct pending decision. |
| 7 | `07_HEBREWS_1_8_AND_THE_HEIR.md` | High-priority owner review of the provisional answer and each step of the Hebrews 1:8 inference. |
| 8 | `08_ONENESS_AND_GLORY_JOHN_17.md` | Preserve John 17's “as,” glory, indwelling, sending, and purpose clauses. |
| 9 | `09_IMAGE_FACE_OF_JESUS_CHRIST.md` | Audit the Book I synthesis and preserve the boundary with *Faith Is Evidence*. |

**Important:** “Draft exists” means the chapter has been created as a canonical working manuscript. It does not mean every claim is approved, every source gap is closed, or the book is ready for publication. The next phase is a controlled source-fidelity and doctrinal review, prioritizing the open owner decisions recorded in `90_OPEN_QUESTIONS_AND_OWNER_DECISIONS.md`.


**Follow-on review record:** The first-draft source-fidelity review is documented in `93_FIRST_DRAFT_SOURCE_FIDELITY_REVIEW.md`. That review also records the Chapter 2 contextual additions for Mark 11:22 and Matthew 5:48 and the substantive integration of Ephesians 1:7 / Colossians 1:13–14 in Chapter 5. See the open-decision register for questions that remain unresolved despite the passages now being included.


## 12. Foundation-first architecture correction — 2026-10-18

The original nine-chapter structure and its source-fidelity review remain useful as records of the first drafting pass, but they do not validate the architecture after the owner's clarification that Hebrews 11:1 and hypostasis are the foundation and core of Book I. The former instruction to reserve that foundation primarily for Book II is superseded.

**Critical source finding:** The 2015 leaflet's Faith Toward God section explicitly uses Hebrews 6:1 and says pistis / credence defines the state of children of God. It connects that state with true nature, adoption, image/likeness, divine nature, justification, righteousness, heirship, and oneness. It does not explicitly quote Hebrews 11:1 or use hypostasis. The book must not attribute the latter to the leaflet; it must reason from the wider Scripture/lexical study into the leaflet's state/nature teaching.

**Lexical control:** The initial public lexical cross-check confirms a semantic range including substance/actual reality/nature and confidence/assurance. Hebrews 1:3, 3:14, and 11:1 must be compared contextually. Etymology alone is not a sufficient proof of the owner's full doctrinal thesis.

**Current architecture work:** See `94_FOUNDATIONAL_ARGUMENT_RECONSTRUCTION.md` for the source-and-reasoning map and `95_REVISED_BOOK_I_ARCHITECTURE_PROPOSAL.md` for the ten-chapter working proposal. The chapter count is provisional. Existing nine drafts remain preserved and are to be mapped into the corrected structure rather than discarded.

**Next gate:** Validate chapter sequence and argument dependencies against the complete source map, Scripture matrix, owner notes, and all existing drafts. Only then begin coordinated substantive chapter rewrites. Hebrews 1:8 and lexical decisions remain open for owner review.


## 13. Corrected foundation-first audit direction — 2026-10-18

The previous audit treated the absence of a full Hebrews 11:1 / *hypostasis* exposition as a Book II boundary. That was incorrect. It is now a Book I foundation gap. The 2015 leaflet's Faith Toward God section explicitly teaches *pistis* / credence as defining the state of children of God, but does not itself quote Hebrews 11:1 or use *hypostasis*. The required work is to reason carefully from Hebrews 11:1 and the lexical/contextual study into the Aletheia source's state/nature teaching, preserving source attribution and distinguishing the owner's doctrinal thesis from explicit source wording.

The new reconstruction dossier is `94_FOUNDATIONAL_ARGUMENT_RECONSTRUCTION.md`; the revised architecture proposal is `95_REVISED_BOOK_I_ARCHITECTURE_PROPOSAL.md`. The ten-chapter count is provisional. No existing drafts or app companion have been deleted. The next gate is a full dependency/coverage audit of the proposed structure before coordinated substantive rewrites.


## 14. First working foundation chapter — 2026-10-18

Created `00_HYPOSTASIS_SUBSTANCE_FOUNDATION.md` as the first working draft of the new foundational chapter. It develops Hebrews 11:1, compares the uses of *hypostasis* in Hebrews 1:3 and 3:14, reads Hebrews 11:1 in the flow of Hebrews 10:32–39 and 11:1–6, distinguishes the lexical alternatives (substance / underlying reality and assurance / confidence), and explicitly connects the investigation to the Aletheia leaflet's *pistis* / state-of-children teaching without falsely attributing Hebrews 11:1 or *hypostasis* to the leaflet. The draft establishes the argument's task and open questions; it is not final doctrinal approval. Existing nine drafts and the app companion remain preserved.


## 15. Foundation-first working manuscripts created

The coordinated foundation-first working manuscripts now exist at: 00_HYPOSTASIS_SUBSTANCE_FOUNDATION.md; 02_PISTIS_CREDENCE_AND_SONSHIP.md; 03_ELOHIM_IMAGE_LIKENESS_AND_DESIGN.md; 04_PSALM_82_WITH_JOHN_10.md; 05_TRUE_NATURE_PARTAKERS_OF_DIVINE_NATURE.md; 06_WHY_DID_JESUS_COME_GLORY_DEVIATION_REPRESENTATION.md; 07_REDEMPTION_JUSTIFICATION_RIGHTEOUSNESS.md; 08_THE_SON_HEBREWS_1_8_AND_THE_HEIR.md; 09_ONENESS_AND_GLORY_JOHN_17.md; and 10_IMAGE_FACE_OF_JESUS_CHRIST.md.

The existing nine first-pass drafts remain preserved. The new files carry forward their source-bearing exposition while adding explicit dependencies and transitions under the corrected architecture. This is a working manuscript set; final source quotation proofing, lexical review, owner doctrinal decisions, and book-level editing remain open.
