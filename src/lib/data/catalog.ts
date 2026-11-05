import { genesis1Body, genesis1Verses } from "@/lib/content/genesis-1";
import { MAKER_BIBLE_CHAPTER_ID, MAKER_BIBLE_ID, MAKER_BIBLE_POSITIONING, MAKER_BIBLE_PRODUCT_ID } from "@/lib/content/maker-bible";
import { BRAND } from "@/lib/brand";
import type { CatalogSnapshot } from "@/lib/data/types";
import {
  foundationBooks,
  foundationCourses,
  foundationModules,
  foundationPrograms,
  foundationSchools,
} from "@/lib/data/foundation-school-metadata";
import { productsFromOffers } from "@/lib/commerce/offerings";
import { protectedChapterIndex, protectedLessonIndex } from "@/lib/data/protected-content-index";

const achu = { id: "author-achu", displayName: "Dr. Coach Achu Gustave" };
const faculty = { id: "author-faculty", displayName: "Aletheia Faculty" };

export const catalog: CatalogSnapshot = {
  authors: [
    {
      id: achu.id,
      displayName: achu.displayName,
      title: "Author and publisher",
      biography:
        "Dr. Coach Achu Gustave writes and publishes under Aletheia Publications. The work is ordered toward truth, identity, and dominion — a higher humanity, not a louder feed.",
      publicationIds: [
        "book-maker-bible",
        "book-beyond-ai-man",
        "book-doctrine-of-man",
        "book-real-man-ai",
        "book-parables-hidden-treasure",
        "book-great-deception",
        "book-repentance-from-dead-works",
        "book-doctrine-of-faith",
        "book-doctrine-of-baptism",
        "book-doctrine-of-laying-on-of-hands",
        "book-doctrine-of-resurrection",
        "book-doctrine-of-eternal-judgment",
        "book-one-source-of-truth",
        "book-god-of-pleasure",
        "book-death-absence-of-knowledge",
        "book-principles-doctrine-christ",
        "article-unveiled-speech",
        "article-steward-city",
      ],
      bookIds: [
        "book-maker-bible",
        "book-beyond-ai-man",
        "book-doctrine-of-man",
        "book-real-man-ai",
        "book-parables-hidden-treasure",
        "book-great-deception",
        "book-repentance-from-dead-works",
        "book-doctrine-of-faith",
        "book-doctrine-of-baptism",
        "book-doctrine-of-laying-on-of-hands",
        "book-doctrine-of-resurrection",
        "book-doctrine-of-eternal-judgment",
        "book-one-source-of-truth",
        "book-god-of-pleasure",
        "book-death-absence-of-knowledge",
        "book-principles-doctrine-christ",
      ],
      articleIds: ["article-unveiled-speech", "article-steward-city"],
      courseIds: [
        "course-truth",
        "course-identity",
        "course-dominion",
        "course-doctrine-of-the-graphe",
        "course-fs-repentance",
        "course-fs-faith",
        "course-fs-baptisms",
        "course-fs-hands",
        "course-fs-resurrection",
        "course-fs-judgment",
      ],
    },
    {
      id: faculty.id,
      displayName: faculty.displayName,
      title: "Editorial faculty",
      biography: "The resident teaching and editorial body of Aletheia Publications.",
      publicationIds: [],
      bookIds: [],
      articleIds: [],
      courseIds: [],
    },
  ],
  books: [
    {
      id: MAKER_BIBLE_ID,
      title: "MAKER BIBLE",
      subtitle: "Lordship Edition",
      description: MAKER_BIBLE_POSITIONING,
      authors: [achu],
      contributors: [],
      publisher: BRAND.publications,
      publishedAt: "2026-09-01",
      language: "en",
      edition: "Lordship",
      categories: ["Truth", "Dominion"],
      tags: ["bible", "kjv", "maker", "genesis", "lordship", "dominion"],
      coverTone: "gold",
      coverImage: "/covers/maker-bible-lordship.jpg",
      status: "published",
      accessLevel: "entitled",
      previewChapterIds: [MAKER_BIBLE_CHAPTER_ID],
      productId: MAKER_BIBLE_PRODUCT_ID,
      chapterCount: 1,
    },
    {
      id: "book-god-of-pleasure",
      title: "The God of Pleasure",
      subtitle: "Understanding Who He Is, What It Says, and Why This Book",
      description:
        "What if pleasure is not an embarrassment in the character of God, but belongs to the very purpose of creation? Beginning with Revelation 4:11 and reading its declaration alongside the wider scriptural witness, this book examines the pleasure of the Creator, the meaning of human enjoyment, and the relationship between pleasure, goodness, righteousness, and abundant life. It challenges religious portrayals of God as an oppressor and cultural ideas that reduce pleasure to selfish indulgence. From personal life and moral responsibility to leadership and the flourishing of societies, it argues for the recovery of pleasure rightly understood: delight in what is truly good, ordered by the character and purpose of God.",
      authors: [achu],
      contributors: [],
      publisher: BRAND.publications,
      publishedAt: "2026-10-18",
      language: "en",
      edition: "First",
      categories: ["God", "Nature of God", "Truth", "Ethics"],
      tags: ["god", "pleasure", "revelation-4-11", "john-10-10", "divine-nature", "goodness", "ethics", "abundant-life"],
      coverTone: "gold",
      coverImage: "/covers/god-of-pleasure.PNG",
      status: "published",
      accessLevel: "public",
      previewChapterIds: ["ch-god-of-pleasure-introduction"],
      chapterCount: 12,
    },
    {
      id: "book-death-absence-of-knowledge",
      title: "Death Is the Absence of Knowledge",
      subtitle: "My People Are Destroyed for Lack of Knowledge",
      description:
        "A study framed by Hosea 4:6 and the relationship between knowledge and destruction. This in-app entry currently contains an introductory study record; the complete manuscript must be supplied before the full book can be represented as available.",
      authors: [achu],
      contributors: [],
      publisher: BRAND.publications,
      publishedAt: "2026-10-18",
      language: "en",
      edition: "First",
      categories: ["Truth", "Knowledge", "Formation"],
      tags: ["knowledge", "hosea-4-6", "scripture", "learning", "truth"],
      coverTone: "ink",
      status: "published",
      accessLevel: "public",
      previewChapterIds: ["ch-death-absence-knowledge-introduction"],
      chapterCount: 1,
    },
    {
      id: "book-beyond-ai-man",
      title: "Beyond AI — Man",
      subtitle: "Eternal Answers",
      description:
        "AI is the creation; man is the creator by design. Genesis 1:27–28. Truth | Identity | Dominion. The in-app manuscript is being prepared; the published cover and thesis are here now.",
      authors: [achu],
      contributors: [],
      publisher: BRAND.publications,
      publishedAt: "2026-01-01",
      language: "en",
      edition: "First",
      categories: ["Identity", "Dominion"],
      tags: ["ai", "man", "genesis", "dominion"],
      coverTone: "ink",
      coverImage: "/covers/beyond-ai-man.jpg",
      status: "published",
      accessLevel: "entitled",
      previewChapterIds: ["ch-beyond-1"],
      productId: "product-beyond-ai-man",
      chapterCount: 1,
    },
    {
      id: "book-doctrine-of-man",
      title: "The Doctrine of Man",
      subtitle: "Identity. Nature. Purpose. Dominion.",
      description:
        "A biblical foundation for a redefined generation. Created in His image. Restored in His glory. Called to dominion. Cover and thesis are live; full chapters follow.",
      authors: [achu],
      contributors: [],
      publisher: BRAND.publications,
      publishedAt: "2026-01-01",
      language: "en",
      edition: "First",
      categories: ["Identity", "Truth"],
      tags: ["doctrine", "identity", "image", "dominion"],
      coverTone: "gold",
      coverImage: "/covers/doctrine-of-man.jpg",
      status: "published",
      accessLevel: "entitled",
      previewChapterIds: ["ch-doctrine-1"],
      productId: "product-doctrine-of-man",
      chapterCount: 1,
    },
    {
      id: "book-real-man-ai",
      title: "The Real Man in the Age of AI",
      subtitle: "Created in the Image of God, Restored in Christ, Called to Dominion",
      description:
        "The future is not about how powerful AI becomes. It is about how well we understand who man really is. Created for purpose. Redeemed by Christ. Restored to identity. Called to dominion.",
      authors: [achu],
      contributors: [],
      publisher: BRAND.publications,
      publishedAt: "2026-01-01",
      language: "en",
      edition: "First",
      categories: ["Identity", "Dominion"],
      tags: ["man", "ai", "christ", "dominion"],
      coverTone: "earth",
      coverImage: "/covers/real-man-age-of-ai.jpg",
      status: "published",
      accessLevel: "entitled",
      previewChapterIds: ["ch-real-man-1"],
      productId: "product-real-man-ai",
      chapterCount: 1,
    },
    {
      id: "book-parables-hidden-treasure",
      title: "The Parables of the Hidden Treasure",
      subtitle: "Discover the Kingdom. Value the Treasure. Live the Truth.",
      description:
        "Matthew 13:44. A volume on finding, valuing, and living the kingdom. Cover mockup is published; the reader text is being prepared.",
      authors: [achu],
      contributors: [],
      publisher: BRAND.publications,
      publishedAt: "2026-01-01",
      language: "en",
      edition: "First",
      categories: ["Truth", "Formation"],
      tags: ["parables", "kingdom", "matthew"],
      coverTone: "gold",
      coverImage: "/covers/parables-hidden-treasure.jpg",
      status: "published",
      accessLevel: "entitled",
      previewChapterIds: ["ch-parables-1"],
      productId: "product-parables-hidden-treasure",
      chapterCount: 1,
    },
    {
      id: "book-repentance-from-dead-works",
      title: "Repentance from Dead Works",
      subtitle: "Hebrews 6:1",
      description:
        "Μετάνοια (metanoia, G3341): a change of mind over sin and its cause, not only its consequence. Christ is the way out of dead works. Eight chapters. The companion volume for Course 1 — Repentance from Dead Works.",
      authors: [achu],
      contributors: [],
      publisher: BRAND.publications,
      publishedAt: "2026-09-03",
      language: "en",
      edition: "First",
      categories: ["Formation", "Truth"],
      tags: ["repentance", "metanoia", "hebrews", "foundation"],
      coverTone: "earth",
      coverImage: "/covers/repentance-from-dead-works-chains.png",
      coverArtworks: [
        { id: "chains", label: "Chains", image: "/covers/repentance-from-dead-works-chains.png" },
        { id: "path", label: "Path", image: "/covers/repentance-from-dead-works-path.png" },
      ],
      status: "published",
      accessLevel: "entitled",
      previewChapterIds: ["ch-repentance-1"],
      productId: "product-repentance-from-dead-works",
      chapterCount: 8,
    },
    {
      id: "book-doctrine-of-faith",
      title: "Doctrine of Faith",
      subtitle: "The Gospel That Restores Our True Nature",
      description:
        "Eight chapters on πίστις (pistis): credence toward God, image, free justification, heirship, and the face of Christ. Companion volume for Course 2; preview Chapter 1 free.",
      authors: [achu],
      contributors: [],
      publisher: BRAND.publications,
      publishedAt: "2026-09-03",
      language: "en",
      edition: "First",
      categories: ["Faith", "Formation"],
      tags: ["faith", "sonship", "justification", "redemption", "identity", "hebrews"],
      coverTone: "earth",
      coverImage: "/covers/doctrine-of-faith-seal.png",
      coverArtworks: [
        { id: "seal", label: "Seal", image: "/covers/doctrine-of-faith-seal.png" },
        { id: "arch", label: "Arch", image: "/covers/doctrine-of-faith-arch.png" },
        { id: "stone", label: "Stone", image: "/covers/doctrine-of-faith-stone.png" },
        { id: "gate", label: "Gate", image: "/covers/doctrine-of-faith-gate.png" },
      ],
      status: "published",
      accessLevel: "entitled",
      previewChapterIds: ["ch-faith-1"],
      productId: "product-doctrine-of-faith",
      chapterCount: 8,
    },
    {
      id: "book-doctrine-of-baptism",
      title: "Doctrine of Baptism",
      subtitle: "Immersion in the Divine. One in Nature. Complete in Christ.",
      description:
        "Born of the Word. Baptized into Christ. Baptized in the Holy Spirit. United with Christ — one in nature. The companion volume for Course 3 — The Doctrine of Baptisms.",
      authors: [achu],
      contributors: [],
      publisher: BRAND.publications,
      publishedAt: "2026-09-03",
      language: "en",
      edition: "First",
      categories: ["Formation", "Truth"],
      tags: ["baptism", "christ", "spirit", "word", "hebrews", "sonship"],
      coverTone: "ink",
      coverImage: "/covers/doctrine-of-baptism-triquetra.png",
      coverArtworks: [
        { id: "triquetra", label: "Triquetra", image: "/covers/doctrine-of-baptism-triquetra.png" },
        { id: "immersion", label: "Immersion", image: "/covers/doctrine-of-baptism-immersion.png" },
        { id: "dove", label: "Dove", image: "/covers/doctrine-of-baptism-dove.png" },
      ],
      status: "published",
      accessLevel: "entitled",
      previewChapterIds: ["ch-baptism-1"],
      productId: "product-doctrine-of-baptism",
      chapterCount: 1,
    },
    {
      id: "book-doctrine-of-laying-on-of-hands",
      title: "Doctrine of Laying on of Hands",
      subtitle: "Hebrews 6:2",
      description:
        "The fourth first principle. Resultant ministry, not a substitute for the foundation. The companion volume for Course 4 — Laying on of Hands.",
      authors: [achu],
      contributors: [],
      publisher: BRAND.publications,
      publishedAt: "2026-09-03",
      language: "en",
      edition: "First",
      categories: ["Formation", "Truth"],
      tags: ["laying-on-of-hands", "hebrews", "ministry", "foundation"],
      coverTone: "earth",
      coverImage: "/covers/doctrine-of-laying-on-of-hands.png",
      status: "published",
      accessLevel: "entitled",
      previewChapterIds: ["ch-hands-1"],
      productId: "product-doctrine-of-laying-on-of-hands",
      chapterCount: 1,
    },
    {
      id: "book-doctrine-of-resurrection",
      title: "Doctrine of Resurrection of the Dead",
      subtitle: "Hebrews 6:2",
      description:
        "Two kinds. Two bodily issues a thousand years apart. Five companies in the first resurrection. The companion volume for Course 5 — Resurrection of the Dead.",
      authors: [achu],
      contributors: [],
      publisher: BRAND.publications,
      publishedAt: "2026-09-03",
      language: "en",
      edition: "First",
      categories: ["Formation", "Truth"],
      tags: ["resurrection", "hebrews", "tomb", "foundation"],
      coverTone: "earth",
      coverImage: "/covers/doctrine-of-resurrection-stone.png",
      coverArtworks: [
        { id: "stone", label: "Stone", image: "/covers/doctrine-of-resurrection-stone.png" },
        { id: "linen", label: "Linen", image: "/covers/doctrine-of-resurrection-linen.png" },
        { id: "crosses", label: "Crosses", image: "/covers/doctrine-of-resurrection-crosses.png" },
      ],
      status: "published",
      accessLevel: "entitled",
      previewChapterIds: ["ch-resurrection-1"],
      productId: "product-doctrine-of-resurrection",
      chapterCount: 1,
    },
    {
      id: "book-doctrine-of-eternal-judgment",
      title: "Doctrine of Eternal Judgment",
      subtitle: "Hebrews 6:2",
      description:
        "It is appointed unto men once to die, but after this the judgment. The companion volume for Course 6 — Eternal Judgment. Eternal punishment, the book of life, three deaths, and five prisons.",
      authors: [achu],
      contributors: [],
      publisher: BRAND.publications,
      publishedAt: "2026-09-03",
      language: "en",
      edition: "First",
      categories: ["Formation", "Truth"],
      tags: ["judgment", "hebrews", "eternal", "foundation"],
      coverTone: "ink",
      coverImage: "/covers/doctrine-of-eternal-judgment-seal.png",
      coverArtworks: [
        { id: "seal", label: "Seal", image: "/covers/doctrine-of-eternal-judgment-seal.png" },
        { id: "visage", label: "Visage", image: "/covers/doctrine-of-eternal-judgment-visage.png" },
        { id: "hourglass", label: "Hourglass", image: "/covers/doctrine-of-eternal-judgment-hourglass.png" },
      ],
      status: "published",
      accessLevel: "entitled",
      previewChapterIds: ["ch-judgment-1"],
      productId: "product-doctrine-of-eternal-judgment",
      chapterCount: 1,
    },
    {
      id: "book-great-deception",
      title: "The Great Deception",
      subtitle: "When Truth Is Rejected, Lies Become Believable",
      description:
        "A study of 2 Thessalonians 2:3–12. When truth is refused, a lie does not have to shout. It only has to become familiar. Cover is live; full study text follows.",
      authors: [achu],
      contributors: [],
      publisher: BRAND.publications,
      publishedAt: "2026-01-01",
      language: "en",
      edition: "First",
      categories: ["Truth"],
      tags: ["deception", "thessalonians", "truth"],
      coverTone: "ink",
      coverImage: "/covers/great-deception.jpg",
      status: "published",
      accessLevel: "entitled",
      previewChapterIds: ["ch-deception-1"],
      productId: "product-great-deception",
      chapterCount: 1,
    },

    ...foundationBooks,
  ],
  chapters: [
    {
      id: MAKER_BIBLE_CHAPTER_ID,
      bookId: MAKER_BIBLE_ID,
      number: 1,
      title: "Genesis 1",
      body: genesis1Body,
      verses: genesis1Verses,
    },
    {
      id: "ch-beyond-1",
      bookId: "book-beyond-ai-man",
      number: 1,
      title: "Thesis",
      body: `AI is the creation. Man is the creator by design.

Genesis 1:27–28 is not a caption added after the machine. It is the ground the machine stands on. This volume asks a generation to recover that order before it asks what artificial intelligence can do.

Truth. Identity. Dominion.

The full manuscript is being prepared for this reader. What you hold here is the published thesis and the cover as it stands in the world.`,
    },
    {
      id: "ch-doctrine-1",
      bookId: "book-doctrine-of-man",
      number: 1,
      title: "Thesis",
      body: `A biblical foundation for a redefined generation.

Identity. Nature. Purpose. Dominion.

Created in His image. Restored in His glory. Called to dominion.

This book treats man as a doctrine, not a trend. The published cover is open now. Additional chapters will enter this reader as they are prepared.`,
    },
    {
      id: "ch-real-man-1",
      bookId: "book-real-man-ai",
      number: 1,
      title: "Thesis",
      body: `Created in the image of God. Restored in Christ. Called to dominion in the age of AI.

The future is not about how powerful AI becomes. It is about how well we understand who man really is.

Created for purpose. Redeemed by Christ. Restored to identity. Called to dominion.

Full chapters will follow this published cover into the app.`,
    },
    {
      id: "ch-parables-1",
      bookId: "book-parables-hidden-treasure",
      number: 1,
      title: "Thesis",
      body: `Discover the kingdom. Value the treasure. Live the truth.

Matthew 13:44.

A man finds what was hidden, sells what he had, and buys the field. This volume reads that parable as a charge: see the worth, pay the cost, live inside the find.

The published cover is open now. The complete text is being prepared for this reader.`,
    },
    {
      id: "ch-baptism-1",
      bookId: "book-doctrine-of-baptism",
      number: 1,
      title: "Thesis",
      body: `Immersion in the Divine. One in nature. Complete in Christ.

United with Christ — one in nature.

Born of the Word — Ephesians 5:26; 1 Peter 1:23.
Baptized into Christ — Galatians 3:26–27; Colossians 2:10.
Baptized in the Holy Spirit — Spirit without measure; John 3:34.

This volume is the companion reading for Course 3 — The Doctrine of Baptisms. Hebrews 6:2 names the doctrine of baptisms among the first principles. The published cover and thesis are open now. Full chapters will enter this reader as they are prepared.

The Word. Into Christ. Water baptism. In the Spirit. Sonship and fullness.`,
    },
    {
      id: "ch-hands-1",
      bookId: "book-doctrine-of-laying-on-of-hands",
      number: 1,
      title: "Thesis",
      body: `Hebrews 6:2 — the doctrine of laying on of hands.

This is the fourth first principle of the doctrine of Christ. It is resultant: it follows repentance, faith, and baptisms. It is not a substitute for the foundation already laid.

Nine biblical occasions will open in the full teaching. The published cover and thesis are open now. Full chapters will enter this reader as they are prepared.

This volume is the companion reading for Course 4 — Laying on of Hands.`,
    },
    {
      id: "ch-resurrection-1",
      bookId: "book-doctrine-of-resurrection",
      number: 1,
      title: "Thesis",
      body: `Hebrews 6:2 — the resurrection of the dead.

The tomb is empty. The stone is rolled away. The linen remains.

This is the fifth first principle of the doctrine of Christ. Two kinds of resurrection. Two bodily issues a thousand years apart. Five companies in the first resurrection. Rapture 2 is not the second advent.

This volume is the companion reading for Course 5 — Resurrection of the Dead. The published cover and thesis are open now. Full chapters will enter this reader as they are prepared.`,
    },
    {
      id: "ch-judgment-1",
      bookId: "book-doctrine-of-eternal-judgment",
      number: 1,
      title: "Thesis",
      body: `Hebrews 6:2 — eternal judgment.

It is appointed unto men once to die, but after this the judgment.

This is the sixth first principle of the doctrine of Christ. Eternal punishment. The book of life. Three deaths. Five prisons — none of them the grave.

This volume is the companion reading for Course 6 — Eternal Judgment. The published cover and thesis are open now. Full chapters will enter this reader as they are prepared.`,
    },
    {
      id: "ch-deception-1",
      bookId: "book-great-deception",
      number: 1,
      title: "Thesis",
      body: `When truth is rejected, lies become believable.

A study of 2 Thessalonians 2:3–12.

A people that will not receive the truth does not become empty. It becomes occupied. This book is a study, not a slogan: how refusal prepares the ground for a lie that feels like home.

The cover is published. The full study will enter this reader next.`,
    },
    {
      id: "ch-god-of-pleasure-introduction",
      bookId: "book-god-of-pleasure",
      number: 1,
      title: "Introduction — The Question Religion Was Afraid to Ask",
      body: `Why should the word pleasure make a religious person uncomfortable? Why is pain so often treated as though it were more spiritual than joy? The existence of corrupt pleasures does not make pleasure itself corrupt. Food can nourish or poison; power can protect or oppress; speech can tell truth or deceive. The misuse of a good does not establish that the good itself is evil.

The governing question of this book is not whether pleasure can be abused. It can. The question is what pleasure means in the order of God's creation, and what the Creator reveals about its place in human life.

Revelation 4:11 places the question before the throne. The elders declare God worthy because He is the Creator and because all things exist by His will and for His pleasure. John 10:10 brings the question into the mission of Christ: He came that people might have life, and have it more abundantly. Abundant life is not a licence for selfish excess; it is life in the fullness of God's purpose.

This book argues that pleasure, understood as delight in what is truly good, belongs to the purpose of God for creation and human existence. It challenges both religious suspicion of enjoyment and ungoverned appetite. It will define pleasure, examine Scripture, distinguish good pleasure from corrupt gratification, and consider the consequences for people, leaders, institutions, and societies.`,
    },
    {
      id: "ch-god-of-pleasure-02",
      bookId: "book-god-of-pleasure",
      number: 2,
      title: "The Throne and the Declaration of Purpose",
      body: `Revelation 4:11 is spoken in the setting of the heavenly throne. The elders declare: “Thou art worthy, O Lord, to receive glory and honour and power,” and give the reason: “for thou hast created all things, and for thy pleasure they are and were created” (KJV). Worthiness, glory, honour, power, creation, and pleasure are joined in one declaration.

The KJV wording deserves careful handling. The Greek phrase commonly rendered “because of your will” uses the word thelēma, meaning will, desire, or that which is willed. The KJV renders the thought “for thy pleasure.” This lexical observation does not cancel the theological force of the verse; it helps us see that divine pleasure is bound to divine will and purpose, not an arbitrary mood detached from God's character.

The verse explicitly declares that all things were created by God's will and that their existence is related to His pleasure. This book develops the further theological conclusion that pleasure belongs to the purpose of all things by reading this declaration alongside the wider scriptural witness. God is not judged by creation; creation is understood in relation to God.

The first conclusion is foundational: existence is purposeful, and its purpose must be understood from the One who created it.`,
    },
    {
      id: "ch-god-of-pleasure-03",
      bookId: "book-god-of-pleasure",
      number: 3,
      title: "Who Is the God Whose Pleasure Matters?",
      body: `God's pleasure must be understood in relation to who He is. Scripture describes Him as good (Psalm 100:5; Mark 10:18), righteous (Psalm 11:7), merciful (Exodus 34:6–7), truthful (Titus 1:2), loving (1 John 4:8), and wise (Romans 16:27). His will is not morally empty. He does not call evil good because He happens to desire it.

Scripture speaks of God taking pleasure in His people (Psalm 149:4), in those who fear Him and hope in His mercy (Psalm 147:11), and in the well-being of His servant (Psalm 35:27). Zephaniah 3:17 portrays God rejoicing over His people; Luke 12:32 says it is the Father's good pleasure to give the kingdom. These are not portraits of a God hostile to the good of His creatures.

God's pleasure is not selfishness. Selfishness seeks gratification by disregarding the good of others. God's pleasure is the delight of perfect goodness; it does not compete with the good of His creation. To call God the God of Pleasure is to recognize that His creative will, His delight in goodness, and His purpose for creation belong together.`,
    },
    {
      id: "ch-god-of-pleasure-04",
      bookId: "book-god-of-pleasure",
      number: 4,
      title: "What Is Pleasure? A Full Account of the Word",
      body: `Pleasure is not one sensation. It includes delight, enjoyment, satisfaction, gladness, gratification, contentment, joy, appreciation, and fulfilment. It may be bodily, emotional, intellectual, relational, aesthetic, moral, spiritual, or contemplative.

The pleasure of a meal differs from the pleasure of understanding a difficult truth. The delight of music differs from the satisfaction of reconciliation. There is immediate pleasure—the taste of food, laughter, warmth, rest—and reflective pleasure, such as the joy of keeping a promise or seeing a student understand. There is intellectual pleasure in discovery, relational pleasure in affection and belonging, moral pleasure in justice and generosity, and spiritual pleasure in worship, gratitude, hope, and communion with God.

Pleasure must be distinguished from neighbouring ideas. Happiness often describes a broader state of well-being. Joy can persist through difficulty. Gratification is the satisfaction of an appetite and may be good or bad. Contentment is settled sufficiency. Fulfilment concerns the realization of a meaningful purpose. Satisfaction is the experience that a desire, task, or need has been adequately met.

This book defines pleasure as the positive experience of delight, enjoyment, satisfaction, or fulfilment arising from an object, action, relationship, condition, or reality experienced as desirable. Its moral quality depends upon the object, the truth of the desire, the means by which it is pursued, and its consequences for the person and others.`,
    },
    {
      id: "ch-god-of-pleasure-05",
      bookId: "book-god-of-pleasure",
      number: 5,
      title: "Pleasure, Goodness, and the Highest Good",
      body: `The question “What is pleasurable?” is not identical to “What is good?” A person can enjoy what is destructive. The fact that an action produces pleasure does not, by itself, establish its moral worth. A complete ethical account must explain the relationship between pleasure and goodness.

This book argues that pleasure reaches its highest form when it is the delight of what is truly good. The highest good cannot be an isolated sensation, because sensations pass and can be produced by corrupt objects. If God is the supreme good, then delight in God and in what accords with His goodness has a claim higher than temporary gratification. Psalm 16:11 speaks of fullness of joy in God's presence; Psalm 37:4 calls the reader to delight in the Lord.

Hedonism has several philosophical meanings. Psychological hedonism concerns motivation; ethical hedonism concerns the place of pleasure in moral value. Neither should be reduced to the slogan “do whatever feels good.” The theological argument here is that the Creator is the source and measure of the good; therefore pleasure must be understood in relation to His will and character.

Pleasure divorced from goodness becomes an unreliable guide. Goodness understood as hostility to all delight becomes a distorted account of the life God gives. The pleasure worth defending is consistent with truth, justice, love, and the flourishing of persons.`,
    },
    {
      id: "ch-god-of-pleasure-06",
      bookId: "book-god-of-pleasure",
      number: 6,
      title: "The Difference Between Pleasure and Indulgence",
      body: `Scripture warns about the pleasures of sin (Hebrews 11:25), disordered desires (James 4:1–3), and people who become lovers of pleasures more than lovers of God (2 Timothy 3:4). These passages must be faced directly. They do not establish that all pleasure is evil; they establish that desire can become disordered and that pleasure can be pursued against God.

Indulgence is the ungoverned or excessive satisfaction of appetite, especially where desire ignores truth, responsibility, proportion, or the well-being of others. The pleasurable feeling does not sanctify the object. The pleasure of exploitation, cruelty, deception, or domination is not made good by the fact that someone enjoys it.

Pain is not automatically virtuous, just as pleasure is not automatically righteous. Pain can warn or accompany sacrifice, but it can also be needless and cruel. Pleasure can be wholesome or corrupt. Both must be understood in relation to truth and the good.

Holiness is not permission for appetite to rule; neither is it a command to despise every form of delight. It is a life ordered toward God, in which desires are examined, disciplined, and directed toward what is good.`,
    },
    {
      id: "ch-god-of-pleasure-07",
      bookId: "book-god-of-pleasure",
      number: 7,
      title: "The Pleasure of God in the Scriptural Record",
      body: `The theme of divine pleasure does not rest on one verse alone. Psalm 149:4 says that the Lord takes pleasure in His people. Psalm 147:11 says that He takes pleasure in those who fear Him and hope in His mercy. Psalm 35:27 speaks of the Lord taking pleasure in the well-being of His servant. Zephaniah 3:17 describes God rejoicing over His people; Luke 12:32 says it is the Father's good pleasure to give the kingdom. Ephesians 1:5 and 1:9 speak of the good pleasure of His will.

Scripture also speaks of what does not please God. He does not delight in wickedness (Psalm 5:4); He rejects injustice and hypocrisy and calls for righteousness, mercy, and truth. Divine pleasure is morally defined, not indiscriminate approval.

The Bible Introduction supplied for this project emphasizes gathering relevant biblical information across Scripture rather than treating the Bible as a systematic discourse on every subject in one location. This study follows that approach: Revelation 4:11 is the anchor, and the wider scriptural record illuminates God's will, delight, goodness, and the life He gives.

The cumulative picture is not a God embarrassed by pleasure, but a God whose delight is inseparable from His goodness and whose will gives creation its purpose.`,
    },
    {
      id: "ch-god-of-pleasure-08",
      bookId: "book-god-of-pleasure",
      number: 8,
      title: "Human Pleasure: Gift, Responsibility, and Abundant Life",
      body: `The biblical account of human life includes enjoyment. Ecclesiastes 2:24; 3:12–13; and 5:18–20 speak of eating, drinking, and finding satisfaction in labour as gifts from God. First Timothy 6:17 describes God as the One who gives richly all things to enjoy. These texts resist the claim that enjoyment is inherently suspect.

The gift carries responsibility. Enjoyment is not an excuse to forget the Giver, waste what has been entrusted, or harm another person. John 10:10 declares Christ's purpose in terms of abundant life. Abundance is not reducible to possessions, constant excitement, or the fulfilment of every appetite. It includes reconciliation with God, truth, freedom from destructive bondage, meaningful relationships, purposeful work, peace, wisdom, and the capacity to give and receive good.

The connection between Revelation 4:11 and John 10:10 is theological: the life Christ gives is consistent with the Creator's purpose, not a rival to it. Human pleasure is a gift to receive with gratitude, a capacity to exercise with wisdom, and a responsibility to order toward the good.`,
    },
    {
      id: "ch-god-of-pleasure-09",
      bookId: "book-god-of-pleasure",
      number: 9,
      title: "The Ethics of Pleasure: The Good of the Other",
      body: `If pleasure is to be defended as an ethical principle, the argument must pass beyond the private individual. The ethical question is not only “What gives me pleasure?” but “What kind of pleasure can be pursued without denying the good, dignity, and rightful claims of another?”

A pleasure founded on another person's degradation contradicts the goodness this book seeks to defend. Exploitation may gratify the exploiter, but it is not a worthy expression of the Creator's purpose. The pleasure of power must be distinguished from the goodness of responsible authority.

Human beings can take pleasure in another's success, recovery, learning, freedom, or happiness. Such delight expands rather than diminishes the good. Families, institutions, economies, and communities are transformed when they make room for truthful relationships, meaningful work, education, safety, justice, creativity, rest, and the flourishing of persons.

The principle is not that every preference must be satisfied. Some desires are unjust. The principle is that enjoyment worthy of the Creator's goodness must be consistent with truth, justice, love, and the good of others.`,
    },
    {
      id: "ch-god-of-pleasure-10",
      bookId: "book-god-of-pleasure",
      number: 10,
      title: "Kings, Power, and the Pleasure of a Just Society",
      body: `Those who govern shape the conditions in which people live. Power can create conditions for flourishing, or manufacture misery. A ruler may take pleasure in wealth, praise, control, and obedience, but these pleasures are not proof of worthy leadership.

Revelation 4:11 places every ruler under an ultimate truth: the Creator is worthy; the ruler is not the creator. Authority is accountable. A king who treats people as instruments for personal gratification has confused office with ownership.

A just ruler should take pleasure in the good of the people: security, honest courts, meaningful work, education, opportunity, peace, and protection of the vulnerable. Scripture condemns rulers who exploit the poor, manipulate justice, and use power for private gain. The issue is not pleasure itself, but pleasure detached from righteousness.

Kings should tremble—not because the book threatens them with theatre, but because it reminds them that power is not ultimate and that the Creator's goodness is the measure by which human authority is judged.`,
    },
    {
      id: "ch-god-of-pleasure-11",
      bookId: "book-god-of-pleasure",
      number: 11,
      title: "The Stigma of Pleasure and the Awakening of Society",
      body: `The stigma surrounding pleasure often grows from confusion. Some treat the abuse of pleasure as proof that pleasure itself is evil. Others use religious language to justify control, deprivation, or suspicion toward ordinary human enjoyment. Commercial culture can make the opposite error by reducing pleasure to consumption and instant gratification.

The recovery of pleasure requires intellectual honesty. We must acknowledge biblical warnings against corrupt desire while also acknowledging the celebration of joy, delight, gratitude, feasting, beauty, rest, friendship, and the enjoyment of God's gifts. Neither group of texts should be silenced.

This book challenges religious beliefs that portray God as an oppressor who begrudges human happiness. It also challenges cultural beliefs that define freedom as the right to satisfy every appetite without regard for consequence. The first produces needless guilt; the second produces bondage under desire. Neither is abundant life.

A transformed person learns to desire what is good. A transformed society values the conditions in which people can live, learn, create, work, rest, love, worship, and flourish without being crushed by the appetites or power of others.`,
    },
    {
      id: "ch-god-of-pleasure-conclusion",
      bookId: "book-god-of-pleasure",
      number: 12,
      title: "Conclusion — For Thy Pleasure",
      body: `The declaration of Revelation 4:11 remains: all things were created by God's will and in relation to His pleasure. The Creator is worthy. Creation is purposeful. Pleasure cannot be dismissed as an embarrassing subject, because the scriptural witness places divine pleasure within the account of who God is and why all things exist.

This book has not argued that every desire is righteous, every gratification beneficial, or every experience called pleasure should be pursued. Scripture rejects the pleasures of sin and warns against loving pleasure more than God. Those warnings establish the need for truth, order, and moral discernment; they do not abolish pleasure.

The central claim is that pleasure rightly understood belongs to the good purpose of God. The highest delight is not found in rebellion against the Creator but in the enjoyment of what is truly good. The abundant life Christ announces is consistent with the Creator's purpose and calls human beings out of destructive bondage into life.

For individuals, this means refusing both shame-driven denial and appetite-driven slavery. For families, it means making room for joy, affection, safety, and mutual flourishing. For institutions, it means measuring success by the good they produce. For rulers, it means recognizing that authority is accountable to the Creator.

The invitation is to recover pleasure without surrendering truth, to pursue delight without abandoning righteousness, and to understand abundant life in the light of the One who created all things.

“Thou art worthy, O Lord, to receive glory and honour and power: for thou hast created all things, and for thy pleasure they are and were created.” — Revelation 4:11 (KJV)`,
    },
    {
      id: "ch-death-absence-knowledge-introduction",
      bookId: "book-death-absence-of-knowledge",
      number: 1,
      title: "Introduction",
      body: `Hosea 4:6 is the stated scriptural anchor of Death Is the Absence of Knowledge: “My people are destroyed for lack of knowledge.”

This book takes the relationship between knowledge and destruction as its central question. Its full argument, chapter structure, and supporting material must be drawn from the author's manuscript rather than reconstructed from the title alone.

This is an introductory catalogue reading, not the complete manuscript. The full author-approved text must be added before the book can be presented as a complete study.`,
    },
    ...protectedChapterIndex,
  ],
  courses: [
    {
      id: "course-truth",
      title: "Foundations of Truth",
      subtitle: "Seeing, testing, and speaking",
      description:
        "A first course in the Aletheia path, read beside The Great Deception. Students practice attention, source discipline, and truthful speech.",
      instructor: achu,
      category: "Truth",
      difficulty: "introductory",
      durationMinutes: 240,
      coverTone: "ink",
      coverImage: "/covers/great-deception.jpg",
      status: "published",
      accessLevel: "free",
      learningPathIds: ["path-aletheia"],
      prerequisiteCourseIds: [],
      certificateEligible: true,
      moduleCount: 2,
      lessonCount: 4,
    },
    {
      id: "course-identity",
      title: "Identity Formed",
      subtitle: "Name, story, and vocation",
      description:
        "How a person is named and made. Readings from The Doctrine of Man, with exercises in identity, nature, purpose, and dominion.",
      instructor: achu,
      category: "Identity",
      difficulty: "intermediate",
      durationMinutes: 300,
      coverTone: "gold",
      coverImage: "/covers/doctrine-of-man.jpg",
      status: "published",
      accessLevel: "free",
      learningPathIds: ["path-aletheia"],
      prerequisiteCourseIds: ["course-truth"],
      certificateEligible: true,
      moduleCount: 2,
      lessonCount: 3,
    },
    {
      id: "course-dominion",
      title: "Dominion as Stewardship",
      subtitle: "The charge to keep a place",
      description:
        "A course on responsible rule in the age of machines. Paired with The Real Man in the Age of AI and Beyond AI — Man.",
      instructor: achu,
      category: "Dominion",
      difficulty: "intermediate",
      durationMinutes: 280,
      coverTone: "earth",
      coverImage: "/covers/real-man-age-of-ai.jpg",
      status: "published",
      accessLevel: "entitled",
      productId: "product-course-dominion",
      learningPathIds: ["path-aletheia"],
      prerequisiteCourseIds: ["course-identity"],
      certificateEligible: true,
      moduleCount: 2,
      lessonCount: 3,
    },
    ...foundationCourses,
  ],
  paths: [
    {
      id: "path-aletheia",
      title: "The Aletheia Path",
      description:
        "Truth, Identity, and Dominion as one curriculum rather than three slogans. Three courses, sequenced.",
      courseIds: ["course-truth", "course-identity", "course-dominion"],
      coverTone: "ink",
      status: "published",
      estimatedHours: 14,
    },
  ],
  modules: [
    { id: "mod-truth-1", courseId: "course-truth", number: 1, title: "Seeing", description: "Attention and disclosure." },
    { id: "mod-truth-2", courseId: "course-truth", number: 2, title: "Speaking", description: "Testimony and argument." },
    { id: "mod-id-1", courseId: "course-identity", number: 1, title: "Named", description: "Gift and limit." },
    { id: "mod-id-2", courseId: "course-identity", number: 2, title: "Called", description: "Vocation without display." },
    { id: "mod-dom-1", courseId: "course-dominion", number: 1, title: "Charge", description: "Keep, cultivate, answer." },
    { id: "mod-dom-2", courseId: "course-dominion", number: 2, title: "Audit", description: "Power that can be reviewed." },
    ...foundationModules,
  ],
  lessons: [
    {
      id: "les-truth-1",
      courseId: "course-truth",
      moduleId: "mod-truth-1",
      number: 1,
      title: "Aletheia as unveiling",
      durationMinutes: 25,
      resourceIds: ["book-great-deception"],
      body: "Read the thesis of The Great Deception. Then write six sentences describing one claim you have repeated without a source — and what it would cost to test it.",
    },
    {
      id: "les-truth-2",
      courseId: "course-truth",
      moduleId: "mod-truth-1",
      number: 2,
      title: "Practicing attention",
      durationMinutes: 30,
      resourceIds: ["book-great-deception"],
      body: "Spend twenty uninterrupted minutes with a single page. Note every time you reach for a second screen. The lesson is the noticing, not the score.",
    },
    {
      id: "les-truth-3",
      courseId: "course-truth",
      moduleId: "mod-truth-2",
      number: 3,
      title: "Sources and witnesses",
      durationMinutes: 35,
      resourceIds: [],
      body: "Choose a public claim you have repeated. Locate its source. If you cannot, do not repeat it again until you can. Bring the source to the discussion board.",
    },
    {
      id: "les-truth-4",
      courseId: "course-truth",
      moduleId: "mod-truth-2",
      number: 4,
      title: "A short public argument",
      durationMinutes: 40,
      resourceIds: [],
      body: "Write 400 words that could be published. Claim, warrant, limit. No slogans. Submit it as a draft; publication remains an editorial act, not a student right.",
    },
    {
      id: "les-id-1",
      courseId: "course-identity",
      moduleId: "mod-id-1",
      number: 1,
      title: "The shop window",
      durationMinutes: 30,
      resourceIds: ["book-doctrine-of-man"],
      body: "Read the thesis of The Doctrine of Man. List three ways you have treated your own name as a product this month. Do not share the list unless you choose to.",
    },
    {
      id: "les-id-2",
      courseId: "course-identity",
      moduleId: "mod-id-1",
      number: 2,
      title: "Received names",
      durationMinutes: 35,
      resourceIds: ["book-doctrine-of-man"],
      body: "Write the story of your name as you received it — family, language, faith, or place. Stay with facts before interpretation.",
    },
    {
      id: "les-id-3",
      courseId: "course-identity",
      moduleId: "mod-id-2",
      number: 3,
      title: "Vocation and limit",
      durationMinutes: 40,
      resourceIds: ["book-doctrine-of-man"],
      body: "Name one charge that is actually yours this year, and one ambition that is not. The course asks for the first to become a practice.",
    },
    {
      id: "les-dom-1",
      courseId: "course-dominion",
      moduleId: "mod-dom-1",
      number: 1,
      title: "A damaged word",
      durationMinutes: 30,
      resourceIds: ["book-real-man-ai"],
      body: "Read the thesis of The Real Man in the Age of AI. Replace 'dominion' in one sentence of your public life with 'charge I will answer for.' Does the sentence still hold?",
    },
    {
      id: "les-dom-2",
      courseId: "course-dominion",
      moduleId: "mod-dom-1",
      number: 2,
      title: "Keep, cultivate, answer",
      durationMinutes: 35,
      resourceIds: ["book-beyond-ai-man"],
      body: "Apply the three verbs to one concrete trust: a classroom, a budget, a household, a forum. Write the audit you would accept.",
    },
    {
      id: "les-dom-3",
      courseId: "course-dominion",
      moduleId: "mod-dom-2",
      number: 3,
      title: "Auditable power",
      durationMinutes: 40,
      resourceIds: ["book-beyond-ai-man"],
      body: "Study how Aletheia separates content, product, order, and entitlement. Design the same separation for one ministry or enterprise you know.",
    },
    ...protectedLessonIndex,
  ],
  journals: [
    {
      id: "journal-aletheia",
      title: "Aletheia Journal",
      description:
        "A reviewed journal for studies in truth, formation, and public responsibility. Issues, not a loose pile of articles.",
      editor: achu,
      frequency: "Twice yearly",
      coverTone: "ink",
      status: "published",
      accessLevel: "public",
      language: "en",
    },
  ],
  issues: [
    {
      id: "issue-1",
      journalId: "journal-aletheia",
      number: 1,
      title: "Issue 1 — Unveiling",
      publishedAt: "2026-03-01",
      status: "published",
      accessLevel: "public",
      articleIds: ["article-unveiled-speech", "article-steward-city"],
    },
  ],
  articles: [
    {
      id: "article-unveiled-speech",
      journalId: "journal-aletheia",
      issueId: "issue-1",
      title: "Unveiled Speech",
      abstract: "On testimony, rhetoric, and the difference between winning and witnessing.",
      body: "Public speech can be accurate and still be a covering. This article distinguishes testimony from performance and proposes editorial tests for Aletheia Publications: source, limit, and the presence of the person spoken about.",
      authors: [achu],
      categories: ["Truth", "Rhetoric"],
      tags: ["speech", "ethics"],
      status: "published",
      accessLevel: "public",
      publishedAt: "2026-03-01",
    },
    {
      id: "article-steward-city",
      journalId: "journal-aletheia",
      issueId: "issue-1",
      title: "The Steward and the City",
      abstract: "Dominion language in civic life, recovered as answerable charge.",
      body: "Cities are not trophies. This study reads stewardship against extraction and sketches practices for schools, congregations, and municipal trust — including why platforms that teach dominion must themselves be auditable.",
      authors: [achu],
      categories: ["Dominion", "Public life"],
      tags: ["city", "stewardship"],
      status: "published",
      accessLevel: "public",
      publishedAt: "2026-03-01",
    },
  ],
  communities: [
    {
      id: "commons",
      title: "Aletheia Commons",
      description: "The primary public community of the platform. Boards are assigned; creation of new communities is not a member privilege.",
      status: "published",
      memberCount: 128,
    },
  ],
  boards: [
    { id: "board-announce", communityId: "commons", title: "Announcements", description: "Official notices from Aletheia.", topicCount: 1 },
    { id: "board-studies", communityId: "commons", title: "Studies", description: "Course, book, and programme conversations.", topicCount: 2 },
    { id: "board-projects", communityId: "commons", title: "Projects", description: "Work the house is doing — not a seventh tab. Updates, collaborators, and ideas in motion.", topicCount: 1 },
    { id: "board-general", communityId: "commons", title: "General", description: "Open discussion under moderation.", topicCount: 1 },
  ],
  topics: [
    {
      id: "topic-welcome",
      communityId: "commons",
      boardId: "board-announce",
      title: "Welcome to the Commons",
      excerpt: "How this community is governed, and why not every member administers a group.",
      authorName: "Aletheia Faculty",
      replyCount: 1,
      pinned: true,
      locked: false,
      status: "published",
      updatedAt: "2026-08-01",
    },
    {
      id: "topic-attention",
      communityId: "commons",
      boardId: "board-studies",
      title: "Attention as a first assignment",
      excerpt: "Students of Foundations of Truth are posting their source work here.",
      authorName: "Dr. Coach Achu Gustave",
      replyCount: 2,
      pinned: false,
      locked: false,
      status: "published",
      updatedAt: "2026-08-12",
    },
    {
      id: "topic-name",
      communityId: "commons",
      boardId: "board-studies",
      title: "Stories of a received name",
      excerpt: "Optional sharing from the Identity Formed course.",
      authorName: "Dr. Coach Achu Gustave",
      replyCount: 1,
      pinned: false,
      locked: false,
      status: "published",
      updatedAt: "2026-08-18",
    },
    {
      id: "topic-city",
      communityId: "commons",
      boardId: "board-general",
      title: "What would a steward ask of this platform?",
      excerpt: "A public thread on auditable power.",
      authorName: "Member",
      replyCount: 1,
      pinned: false,
      locked: false,
      status: "published",
      updatedAt: "2026-08-20",
    },
    {
      id: "topic-projects-open",
      communityId: "commons",
      boardId: "board-projects",
      title: "What is a project here?",
      excerpt: "Projects are work the house is doing — not a separate app. Post updates, ask for collaborators, keep the thread on the work.",
      authorName: "Aletheia Faculty",
      replyCount: 1,
      pinned: true,
      locked: false,
      status: "published",
      updatedAt: "2026-09-03",
    },
  ],
  posts: [
    {
      id: "post-welcome-1",
      topicId: "topic-welcome",
      authorName: "Aletheia Faculty",
      createdAt: "2026-08-01",
      body: "Aletheia Commons is a governed room. Members may post on open boards. Moderators keep the room. Administrators create communities. That order is intentional.",
    },
    {
      id: "post-attention-1",
      topicId: "topic-attention",
      authorName: "Dr. Coach Achu Gustave",
      createdAt: "2026-08-12",
      body: "Bring a source, not a slogan. If you cannot locate the claim, say so. That sentence is already a form of truth-telling.",
    },
    {
      id: "post-attention-2",
      topicId: "topic-attention",
      authorName: "Student",
      createdAt: "2026-08-13",
      body: "I repeated a statistic for a year without a citation. I have withdrawn it from my notes until I find the study.",
    },
    {
      id: "post-name-1",
      topicId: "topic-name",
      authorName: "Dr. Coach Achu Gustave",
      createdAt: "2026-08-18",
      body: "Share only what you can stand behind without performing. The exercise is formation, not content.",
    },
    {
      id: "post-city-1",
      topicId: "topic-city",
      authorName: "Member",
      createdAt: "2026-08-20",
      body: "If dominion is a charge, then entitlements, moderation logs, and role changes should be reviewable. I would rather a slower shop than a silent grant of access.",
    },
    {
      id: "post-projects-1",
      topicId: "topic-projects-open",
      authorName: "Aletheia Faculty",
      createdAt: "2026-09-03",
      body: "A project is a piece of work with a name: a book still being written, a course in rehearsal, a programme about to open, a civic charge. It is not a chat product. Watch this board to be notified when someone posts.",
    },
  ],
  products: productsFromOffers(),
  schools: foundationSchools,
  programs: foundationPrograms,
  announcements: [
    {
      id: "ann-foundation",
      title: "Foundation School is open",
      body: "Foundation School Year 1 is open: the Graphē gate, the school handbook, ninety-five lessons across six first-principle courses, a written examination per course, and the week-52 final. Enter The Walk or The Intensive. Same year. Different labour. $400.",
      publishedAt: "2026-08-28",
      status: "published",
      important: true,
    },
    {
      id: "ann-journal",
      title: "Aletheia Journal, Issue 1",
      body: "Issue 1 remains available under Publications. Articles stay attached to their issue.",
      publishedAt: "2026-03-01",
      status: "published",
      important: false,
    },
  ],
  home: {
    featuredCourseIds: ["course-truth", "course-identity", "course-dominion"],
    featuredBookIds: [
      "book-maker-bible",
      "book-doctrine-of-man",
      "book-real-man-ai",
      "book-beyond-ai-man",
      "book-parables-hidden-treasure",
      "book-great-deception",
      "book-repentance-from-dead-works",
      "book-doctrine-of-faith",
      "book-doctrine-of-baptism",
      "book-doctrine-of-laying-on-of-hands",
      "book-doctrine-of-resurrection",
      "book-doctrine-of-eternal-judgment",
      "book-god-of-pleasure",
      "book-death-absence-of-knowledge",
    ],
    featuredJournalIds: ["journal-aletheia"],
    announcementIds: ["ann-foundation", "ann-journal"],
    featuredProductIds: [
      "product-one-source-of-truth",
      "product-maker-bible",
      "product-foundation-year",
      "product-foundation-intensive",
      "product-foundations-bundle",
    ],
    featuredTopicIds: ["topic-attention", "topic-city"],
    featuredSchoolIds: ["school-foundation"],
  },
};
