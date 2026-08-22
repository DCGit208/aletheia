import { BRAND } from "@/lib/brand";
import type { CatalogSnapshot } from "@/lib/data/types";

const miriam = { id: "author-okoro", displayName: "Miriam Okoro" };
const samuel = { id: "author-adeyemi", displayName: "Samuel Adeyemi" };
const faculty = { id: "author-faculty", displayName: "Aletheia Faculty" };

export const catalog: CatalogSnapshot = {
  authors: [
    {
      id: miriam.id,
      displayName: miriam.displayName,
      title: "Theologian and educator",
      biography:
        "Miriam Okoro writes on truth-telling, formation, and the moral life of institutions. She teaches across the Aletheia learning paths.",
      publicationIds: ["book-unveiling", "article-unveiled-speech"],
      bookIds: ["book-unveiling"],
      articleIds: ["article-unveiled-speech"],
      courseIds: ["course-truth"],
    },
    {
      id: samuel.id,
      displayName: samuel.displayName,
      title: "Writer and pastor-teacher",
      biography:
        "Samuel Adeyemi works at the intersection of identity, calling, and public life. His books and courses treat naming as a moral act.",
      publicationIds: ["book-named", "book-steward"],
      bookIds: ["book-named", "book-steward"],
      articleIds: ["article-steward-city"],
      courseIds: ["course-identity", "course-dominion"],
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
      id: "book-unveiling",
      title: "The Unveiling",
      subtitle: "Truth as a way of seeing",
      description:
        "A meditation on aletheia — not information collected, but reality disclosed. Okoro argues that truth is received before it is deployed, and that learning begins with the courage to be addressed.",
      authors: [miriam],
      contributors: [],
      publisher: BRAND.publications,
      publishedAt: "2025-09-01",
      isbn: "978-0-000000-01-1",
      language: "en",
      edition: "First",
      categories: ["Truth", "Formation"],
      tags: ["aletheia", "discernment", "foundations"],
      coverTone: "ink",
      status: "published",
      accessLevel: "public",
      previewChapterIds: ["ch-unveiling-1"],
      productId: "product-unveiling",
      chapterCount: 3,
    },
    {
      id: "book-named",
      title: "Named and Known",
      subtitle: "Identity without performance",
      description:
        "Identity is not a brand we assemble. Adeyemi traces how people are named, received, and formed — and how a truth-centered life resists the market of self-invention.",
      authors: [samuel],
      contributors: [],
      publisher: BRAND.publications,
      publishedAt: "2026-01-15",
      isbn: "978-0-000000-02-8",
      language: "en",
      edition: "First",
      categories: ["Identity", "Formation"],
      tags: ["identity", "calling", "personhood"],
      coverTone: "gold",
      status: "published",
      accessLevel: "entitled",
      previewChapterIds: ["ch-named-1"],
      productId: "product-named",
      chapterCount: 3,
    },
    {
      id: "book-steward",
      title: "The Steward's Charge",
      subtitle: "Dominion as faithful responsibility",
      description:
        "Dominion, in this account, is not conquest. It is the charge to keep, cultivate, and answer for a place, a people, and a trust. A book for those who lead without needing to own.",
      authors: [samuel],
      contributors: [miriam],
      publisher: BRAND.publications,
      publishedAt: "2026-06-01",
      isbn: "978-0-000000-03-5",
      language: "en",
      edition: "First",
      categories: ["Dominion", "Ethics"],
      tags: ["stewardship", "leadership", "responsibility"],
      coverTone: "earth",
      status: "published",
      accessLevel: "entitled",
      previewChapterIds: ["ch-steward-1"],
      productId: "product-steward",
      chapterCount: 3,
    },
  ],
  chapters: [
    {
      id: "ch-unveiling-1",
      bookId: "book-unveiling",
      number: 1,
      title: "What is disclosed",
      body: `Aletheia is an old word for a simple, costly act: the covering is taken away.

We often treat truth as a possession — a set of statements we can store, brand, and defend. That habit makes us noisy and unwise. A statement can be correct and still be used to hide. A person can win an argument and remain unaddressed by what is real.

This book begins elsewhere. Truth is first something that happens to us. Reality shows itself. We are not its authors. We are its witnesses, and then, if we are faithful, its servants.

The work of learning, then, is not the accumulation of opinions. It is apprenticeship to what is there. That apprenticeship requires attention, patience, and a willingness to be corrected. It also requires a community that will not reward the clever disguise.

Aletheia World exists because this work is too large for a single classroom and too important to leave to the market. The platform you are reading on is one room in that house: a place to study, to publish, to converse, and to keep what we have been given.`,
    },
    {
      id: "ch-unveiling-2",
      bookId: "book-unveiling",
      number: 2,
      title: "The discipline of attention",
      body: `Attention is the first moral act of the mind.

Without it, we do not meet the world; we meet our haste. Screens reward the skim. Institutions reward the summary. A truth-centered life requires the opposite motion: staying long enough for a thing to become itself in our sight.

This is why Aletheia treats reading as a first-class practice, not a leftover from print culture. A chapter is not a feed item. It asks for time. It forms the person who gives that time.

The discipline is ordinary. Close the extra door. Read aloud when the mind slips. Return tomorrow to the same page. Refuse the flattering lie that you already know.

In later courses we will speak of method, sources, and argument. None of that substitutes for this: a person who can remain present to what is in front of them.`,
    },
    {
      id: "ch-unveiling-3",
      bookId: "book-unveiling",
      number: 3,
      title: "Truth in common",
      body: `No one unveils the world alone.

Private insight has its hour, but a people needs shared language, shared tests, and shared repair when we have been wrong. That is why this platform holds learning, publication, and community in one house. A book without conversation becomes a relic. A conversation without books becomes weather.

The test of a community is not how loudly it agrees. It is whether it can receive correction without humiliation, and whether it can keep the weak from being used as evidence.

If you continue from this chapter into the learning path, you will find courses that treat truth as formation, identity as gift, and dominion as a charge. They belong together. Separated, each becomes a slogan.

Read on. Then talk. Then live as if you were witnessed.`,
    },
    {
      id: "ch-named-1",
      bookId: "book-named",
      number: 1,
      title: "Before the market of the self",
      body: `The present age trains us to assemble an identity the way a shop assembles a window: select, arrange, refresh, defend.

That training is not neutral. It makes the person into a product and the neighbor into an audience. Exhaustion follows, then contempt.

This book refuses the shop window as a model of the soul. You were named before you performed. You were known before you were useful. Identity, in the older sense, is received — from God, from a people, from the long work of being addressed and answering.

The first chapter is therefore a clearing. We will not begin with branding advice. We will begin with the fact that someone else had to speak you into a story.`,
    },
    {
      id: "ch-named-2",
      bookId: "book-named",
      number: 2,
      title: "Name, vocation, and limit",
      body: `A name is not a mood. It is a location.

To be named is to be placed: in a family, a language, a history, a set of duties that do not vanish when they become inconvenient. Vocation grows from that placement. It is not the same as ambition, and it is not the same as preference.

Limit is part of the gift. The person who can do anything in theory often does nothing in particular. The person who knows their charge can become faithful in a small place.

Aletheia's learning path treats this as curriculum, not decoration. Identity studies that never arrive at duty are entertainment. Duty that never remembers the name becomes machinery.`,
    },
    {
      id: "ch-named-3",
      bookId: "book-named",
      number: 3,
      title: "Being known without display",
      body: `There is a kind of visibility that heals, and a kind that consumes.

To be known by a wise friend, a teacher, a congregation, a household — this is shelter. To be displayed without remainder is exposure. The difference is not always obvious on a platform. It must be practiced.

This chapter is an invitation to rebuild practices of being known: confession without spectacle, achievement without self-advertisement, disagreement without exile.

If you have purchased this book, you have not bought a personality. You have bought time with an argument. Take the time. Let it argue with you.`,
    },
    {
      id: "ch-steward-1",
      bookId: "book-steward",
      number: 1,
      title: "The word we misused",
      body: `Dominion is a damaged word. In too many mouths it has meant taking, exhausting, and calling the ruin success.

Scripture and the older moral vocabulary meant something else: a charge. The garden is given, and the gardener will answer for it. Rule, in this sense, is measured by the flourishing of what is not you.

This book recovers that charge for households, schools, enterprises, and public trust. It is not a manifesto for seizing institutions. It is a school for keeping them.`,
    },
    {
      id: "ch-steward-2",
      bookId: "book-steward",
      number: 2,
      title: "Keep, cultivate, answer",
      body: `Three verbs will carry us.

Keep: refuse the casual loss of what was entrusted. Cultivate: improve without erasing. Answer: live as one who will be asked.

These verbs scale. They fit a child with a garden bed and a minister with a city. They do not fit the person who wants the title without the audit.

In the accompanying course we will apply them to teaching, publishing, and community moderation — the actual work of Aletheia, not an abstract kingdom.`,
    },
    {
      id: "ch-steward-3",
      bookId: "book-steward",
      number: 3,
      title: "Power that can be audited",
      body: `A platform that speaks of dominion must submit its own power to the same charge.

That is why Aletheia separates content from product, product from order, and order from entitlement. Access is not a rumor the browser tells itself. It is a record that can be granted, reviewed, and revoked.

It is also why community roles are assigned, not assumed, and why administration is a protected room rather than a hidden button.

If this architecture feels slower than a campaign site, that is the point. Stewards move at the speed of answerability.`,
    },
  ],
  courses: [
    {
      id: "course-truth",
      title: "Foundations of Truth",
      subtitle: "Seeing, testing, and speaking",
      description:
        "A first course in the Aletheia path. Students practice attention, source discipline, and truthful speech — then write a short public argument.",
      instructor: miriam,
      category: "Truth",
      difficulty: "introductory",
      durationMinutes: 240,
      coverTone: "ink",
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
        "How a person is named and made. Readings from Named and Known, with exercises in biography, limit, and calling.",
      instructor: samuel,
      category: "Identity",
      difficulty: "intermediate",
      durationMinutes: 300,
      coverTone: "gold",
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
        "A course on responsible rule: households, institutions, and public trust. Paired with The Steward's Charge.",
      instructor: samuel,
      category: "Dominion",
      difficulty: "intermediate",
      durationMinutes: 280,
      coverTone: "earth",
      status: "published",
      accessLevel: "entitled",
      productId: "product-course-dominion",
      learningPathIds: ["path-aletheia"],
      prerequisiteCourseIds: ["course-identity"],
      certificateEligible: true,
      moduleCount: 2,
      lessonCount: 3,
    },
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
  ],
  lessons: [
    {
      id: "les-truth-1",
      courseId: "course-truth",
      moduleId: "mod-truth-1",
      number: 1,
      title: "Aletheia as unveiling",
      durationMinutes: 25,
      resourceIds: ["book-unveiling"],
      body: "Read chapter one of The Unveiling. Then write six sentences describing one thing you have been skimming — a person, a text, or a place — and what it would cost to give it attention.",
    },
    {
      id: "les-truth-2",
      courseId: "course-truth",
      moduleId: "mod-truth-1",
      number: 2,
      title: "Practicing attention",
      durationMinutes: 30,
      resourceIds: ["book-unveiling"],
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
      resourceIds: ["book-named"],
      body: "Read the opening of Named and Known. List three ways you have treated your own name as a product this month. Do not share the list unless you choose to.",
    },
    {
      id: "les-id-2",
      courseId: "course-identity",
      moduleId: "mod-id-1",
      number: 2,
      title: "Received names",
      durationMinutes: 35,
      resourceIds: ["book-named"],
      body: "Write the story of your name as you received it — family, language, faith, or place. Stay with facts before interpretation.",
    },
    {
      id: "les-id-3",
      courseId: "course-identity",
      moduleId: "mod-id-2",
      number: 3,
      title: "Vocation and limit",
      durationMinutes: 40,
      resourceIds: ["book-named"],
      body: "Name one charge that is actually yours this year, and one ambition that is not. The course asks for the first to become a practice.",
    },
    {
      id: "les-dom-1",
      courseId: "course-dominion",
      moduleId: "mod-dom-1",
      number: 1,
      title: "A damaged word",
      durationMinutes: 30,
      resourceIds: ["book-steward"],
      body: "Read The Steward's Charge, chapter one. Replace 'dominion' in one sentence of your public life with 'charge I will answer for.' Does the sentence still hold?",
    },
    {
      id: "les-dom-2",
      courseId: "course-dominion",
      moduleId: "mod-dom-1",
      number: 2,
      title: "Keep, cultivate, answer",
      durationMinutes: 35,
      resourceIds: ["book-steward"],
      body: "Apply the three verbs to one concrete trust: a classroom, a budget, a household, a forum. Write the audit you would accept.",
    },
    {
      id: "les-dom-3",
      courseId: "course-dominion",
      moduleId: "mod-dom-2",
      number: 3,
      title: "Auditable power",
      durationMinutes: 40,
      resourceIds: ["book-steward"],
      body: "Study how Aletheia separates content, product, order, and entitlement. Design the same separation for one ministry or enterprise you know.",
    },
  ],
  journals: [
    {
      id: "journal-aletheia",
      title: "Aletheia Journal",
      description:
        "A reviewed journal for studies in truth, formation, and public responsibility. Issues, not a loose pile of articles.",
      editor: miriam,
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
      authors: [miriam],
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
      authors: [samuel],
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
    { id: "board-studies", communityId: "commons", title: "Studies", description: "Course and reading conversations.", topicCount: 2 },
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
      authorName: "Miriam Okoro",
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
      authorName: "Samuel Adeyemi",
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
      authorName: "Miriam Okoro",
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
      authorName: "Samuel Adeyemi",
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
  ],
  products: [
    {
      id: "product-unveiling",
      title: "The Unveiling",
      description: "Digital edition. Preview is open; full text is granted on purchase or promotional entitlement.",
      kind: "book",
      contentId: "book-unveiling",
      priceCents: 0,
      currency: "USD",
      status: "published",
      coverTone: "ink",
    },
    {
      id: "product-named",
      title: "Named and Known",
      description: "Digital edition of the identity volume.",
      kind: "book",
      contentId: "book-named",
      priceCents: 1800,
      currency: "USD",
      status: "published",
      coverTone: "gold",
    },
    {
      id: "product-steward",
      title: "The Steward's Charge",
      description: "Digital edition of the dominion volume.",
      kind: "book",
      contentId: "book-steward",
      priceCents: 1800,
      currency: "USD",
      status: "published",
      coverTone: "earth",
    },
    {
      id: "product-course-dominion",
      title: "Dominion as Stewardship — course access",
      description: "Enrollment entitlement for the third course on the Aletheia Path.",
      kind: "course",
      contentId: "course-dominion",
      priceCents: 4500,
      currency: "USD",
      status: "published",
      coverTone: "earth",
    },
  ],
  announcements: [
    {
      id: "ann-foundation",
      title: "Aletheia foundation is open",
      body: "The platform now holds Home, Learn, Publications, Community, Shop, and Account as one application. Firebase connection is the next operational step, not a second product.",
      publishedAt: "2026-08-22",
      status: "published",
      important: true,
    },
    {
      id: "ann-journal",
      title: "Aletheia Journal, Issue 1",
      body: "Unveiling is available under Publications. Articles remain attached to their issue.",
      publishedAt: "2026-03-01",
      status: "published",
      important: false,
    },
  ],
  home: {
    featuredCourseIds: ["course-truth", "course-identity"],
    featuredBookIds: ["book-unveiling", "book-named"],
    featuredJournalIds: ["journal-aletheia"],
    announcementIds: ["ann-foundation", "ann-journal"],
    featuredProductIds: ["product-named", "product-course-dominion"],
    featuredTopicIds: ["topic-attention", "topic-city"],
  },
};
