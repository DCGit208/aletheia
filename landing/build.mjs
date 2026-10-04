import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const APP = "https://app.aletheiaworld.org";
const SITE = "https://aletheiaworld.org";

const urls = {
  app: APP,
  school: `${APP}/learn/schools/school-foundation`,
  learn: `${APP}/learn`,
  shopYear: `${APP}/shop/product-foundation-year`,
  shopIntensive: `${APP}/shop/product-foundation-intensive`,
  shop: `${APP}/shop`,
  publications: `${APP}/publications`,
  makerBible: `${APP}/shop/product-maker-bible`,
  makerBibleBook: `${APP}/publications/books/book-maker-bible`,
};

/** Canonical mission — EXACT. Do not paraphrase. */
const MISSION =
  "To deliver Mathēteuō — Truth Education that enrolls the world as scholars: individuals, institutions, and governments learning and operating in Elohim; complete in the divine identity.";

const VISION_HEAD = "A world enrolled — not entertained.";
const VISION_BODY =
  "Individuals, institutions, and governments who learn in Elohim, operate in Elohim, and stand complete in the divine identity: Truth · Identity · Dominion.";
const VISION_ALT =
  "That the nations would not inherit noise — but a people, institutions, and governments who know who they are in Elohim, and operate from that completeness.";

const MATTHEW_28 = {
  verses: [
    "And Jesus came and spake unto them, saying, All power is given unto me in heaven and in earth.",
    "Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost:",
    "Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you alway, even unto the end of the world. Amen.",
  ],
  cite: "Matthew 28:18–20",
};

const NAV = [
  { href: "/", label: "Home", key: "home" },
  { href: "/matheteuo", label: "Mathēteuō", key: "matheteuo" },
  { href: "/foundation-school", label: "Foundation School", key: "school" },
  { href: "/publications", label: "Publications", key: "publications" },
  { href: "/about", label: "About", key: "about" },
];

const ENROLLMENTS = [
  {
    numeral: "I",
    kicker: "Individuals",
    title: "The person",
    body: "You are not a consumer of content. You are a scholar of life in Elohim — to learn to operate in the completeness of their divine identity. Colossians 2:10. In Aletheia you get Foundation School (a year of first-principles courses), the books from Aletheia Publications, and the study materials for that year.",
  },
  {
    numeral: "II",
    kicker: "Institutions",
    title: "The body",
    body: "Churches, organizations, and schools that will not leave their people to relative truth. Mathēteuō is Truth Education they can carry together — shared teaching, books, and one study platform — so the body learns and operates in Elohim as one. John 17:20–23.",
  },
  {
    numeral: "III",
    kicker: "Governments",
    title: "The people under authority",
    body: "Authority is not excused from scholarship. Governments are enrolled in the same charge: learning and operating in Elohim with regard to household and national life — veracity over ideology, identity over noise.",
  },
];

function missionBlock({ headingId, kicker = "The charge" }) {
  return `
        <section class="mission" aria-labelledby="${headingId}" data-reveal="mission">
          <div class="wrap">
            <p class="kicker">${kicker}</p>
            <h2 id="${headingId}" class="mission-heading">Mission</h2>
            <p class="mission-statement">${escapeHtml(MISSION)}</p>
          </div>
        </section>`;
}

function enrollmentsBlock({ headingId, intro = true } = {}) {
  const items = ENROLLMENTS.map(
    (item, index) => `
            <article class="enrollment" role="listitem" tabindex="0" data-reveal="enrollment" style="--reveal-delay: ${index * 140}ms">
              <p class="enrollment-numeral" aria-hidden="true">${item.numeral}</p>
              <p class="kicker">${escapeHtml(item.kicker)}</p>
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.body)}</p>
            </article>`,
  ).join("");

  const head = intro
    ? `
          <div data-reveal="enrollments-head">
          <p class="kicker">Enrolled as scholars</p>
          <h2 id="${headingId}">Three enrollments</h2>
          <p class="lede">Individuals. Institutions. Governments. One charge — to learn and operate in Elohim, complete in the divine identity.</p>
          </div>`
    : `
          <div data-reveal="enrollments-head">
          <p class="kicker">Enrolled as scholars</p>
          <h2 id="${headingId}">The person · the body · the people under authority</h2>
          </div>`

  return `
        <section class="enrollments" aria-labelledby="${headingId}">
          <div class="wrap">
            ${head}
            <div class="triptych" role="list">
              ${items}
            </div>
          </div>
        </section>`;
}

function sanctumBlock({
  headingId,
  href = "/matheteuo",
  cta = "The core project",
} = {}) {
  return `
        <section class="sanctum" aria-labelledby="${headingId}" data-reveal="sanctum">
          <div class="wrap sanctum-inner">
            <p class="kicker">Core project</p>
            <p class="lemma" lang="el" data-lemma>μαθητεύω</p>
            <div class="sanctum-rule" aria-hidden="true"></div>
            <h2 id="${headingId}">Mathēteuō</h2>
            <p class="lede">Truth Education that enrolls the world as scholars. The core project of Aletheia World — not a product line, and not a quieter feed.</p>
            <div class="cta-row">
              <a class="btn btn-gold" href="${href}">${escapeHtml(cta)}</a>
              <a class="btn btn-ghost" href="${urls.app}">Enter Aletheia</a>
            </div>
          </div>
        </section>`;
}

function layout({
  id,
  title,
  description,
  path,
  current,
  og = false,
  noindex = false,
  content,
}) {
  const canonical = `${SITE}${path}`;
  const ogImage = `${SITE}/img/og.png`;
  const nav = NAV.map((item) => {
    const currentAttr = item.key === current ? ' aria-current="page"' : "";
    return `<a href="${item.href}"${currentAttr}>${item.label}</a>`;
  }).join("\n          ");

  const footerNav = [
    ...NAV.map((item) => `<a href="${item.href}">${item.label}</a>`),
    `<a href="${urls.app}">Enter Aletheia</a>`,
  ].join("\n          ");

  const ogTags = og
    ? `
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Aletheia World">
    <meta property="og:title" content="${escapeAttr(title)}">
    <meta property="og:description" content="${escapeAttr(description)}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:image" content="${ogImage}">
    <meta property="og:image:alt" content="Aletheia World — Truth · Identity · Dominion">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeAttr(title)}">
    <meta name="twitter:description" content="${escapeAttr(description)}">
    <meta name="twitter:image" content="${ogImage}">`
    : `
    <meta property="og:title" content="${escapeAttr(title)}">
    <meta property="og:description" content="${escapeAttr(description)}">
    <meta property="og:url" content="${canonical}">`;

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeAttr(description)}">
    ${noindex ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="${canonical}">`}
    <meta name="theme-color" content="#100e0b">
    <meta name="color-scheme" content="dark">${ogTags}
    <link rel="icon" href="/img/favicon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="/img/apple-touch-icon.png">
    <link rel="stylesheet" href="/css/site.css">
    <script>
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        document.documentElement.classList.add("motion-ok");
      }
    </script>
  </head>
  <body class="page-${id}">
    <a class="skip" href="#content">Skip to content</a>
    <header class="site-header">
      <div class="wrap">
        <a class="wordmark" href="/">
          <span class="wordmark-mark" aria-hidden="true">A</span>
          <span class="wordmark-text">Aletheia World</span>
        </a>
        <nav id="site-nav" class="site-nav" aria-label="Site">
          ${nav}
        </nav>
        <a class="btn btn-gold header-enter" href="${urls.app}">Enter Aletheia</a>
        <button class="nav-toggle" type="button" data-nav-toggle aria-controls="site-nav" aria-expanded="false" aria-label="Open menu">
          <span class="nav-toggle-bars"></span>
        </button>
      </div>
    </header>
    <main id="content">
      ${content}
    </main>
    <footer class="site-footer">
      <div class="wrap">
        <div>
          <p class="footer-brand">Aletheia World</p>
          <p>Truth · Identity · Dominion</p>
          <p class="footer-note">Aletheia — the platform — lives at <a href="${urls.app}">app.aletheiaworld.org</a>.</p>
        </div>
        <nav class="footer-nav" aria-label="Footer">
          ${footerNav}
        </nav>
      </div>
    </footer>
    <script src="/js/site.js" defer></script>
  </body>
</html>
`;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll('"', "&quot;");
}

const pages = [
  {
    file: "index.html",
    id: "home",
    current: "home",
    path: "/",
    title: "Aletheia World · Truth · Identity · Dominion",
    description:
      "Aletheia World delivers Mathēteuō — Truth Education that enrolls individuals, institutions, and governments as scholars learning and operating in Elohim.",
    og: true,
    content: `
      <section class="hero" data-reveal="hero">
        <div class="hero-veil" aria-hidden="true"></div>
        <div class="wrap hero-inner" data-hero-parallax>
          <p class="kicker" data-hero-stagger>Aletheia World</p>
          <h1 data-hero-stagger>A world enrolled.<br><span>Not entertained.</span></h1>
          <p class="lede" data-hero-stagger>${escapeHtml(VISION_ALT)}</p>
          <div class="cta-row" data-hero-stagger>
            <a class="btn btn-gold" href="/matheteuo">Mathēteuō</a>
            <a class="btn btn-ghost" href="${urls.app}">Enter Aletheia</a>
          </div>
        </div>
      </section>
      ${missionBlock({ headingId: "home-mission" })}
      <section class="vision" aria-labelledby="home-vision" data-reveal="vision">
        <div class="wrap">
          <p class="kicker">Vision</p>
          <h2 id="home-vision">${escapeHtml(VISION_HEAD)}</h2>
          <p class="lede">${escapeHtml(VISION_BODY)}</p>
        </div>
      </section>
      ${enrollmentsBlock({ headingId: "home-enrollments" })}
      ${sanctumBlock({ headingId: "home-matheteuo", cta: "Read Mathēteuō" })}
      <section class="platform" aria-labelledby="home-platform" data-reveal="platform">
        <div class="wrap">
          <p class="kicker">The platform</p>
          <h2 id="home-platform">Aletheia</h2>
          <p class="lede">Aletheia is where you take the courses, read the books, and buy what you need. Foundation School (a year of first-principles courses), the books from Aletheia Publications, and the study materials for that year live here — one place to learn and to read.</p>
          <div class="cta-row">
            <a class="btn btn-gold" href="${urls.app}">Enter Aletheia</a>
            <a class="btn btn-ghost" href="${urls.learn}">Learn in the app</a>
            <a class="btn btn-ghost" href="${urls.publications}">Publications in the app</a>
          </div>
        </div>
      </section>
      <section class="works" aria-labelledby="home-works" data-reveal="works">
        <div class="wrap">
          <p class="kicker">Works</p>
          <h2 id="home-works">Foundation School · Publications</h2>
          <p class="lede">Foundation School and the books from Aletheia Publications serve Mathēteuō. You take the courses and read the books in Aletheia.</p>
          <div class="split split-2">
            <article class="card">
              <p class="kicker">Foundation School</p>
              <h3>The Walk or The Intensive</h3>
              <p>Six first principles and the textbook. One year. You begin with the Graphē gate — the written Word as the authority for truth — then the handbook, then a year of first-principles courses and study. Same teaching. The Walk or The Intensive: different weekly work, not different doctrine.</p>
              <p class="price">$400 <span>Either program. Same teaching.</span></p>
              <div class="cta-row">
                <a class="btn btn-gold" href="${urls.shopYear}">Enter The Walk</a>
                <a class="btn btn-ghost" href="/foundation-school">Read the school</a>
              </div>
            </article>
            <article class="card">
              <p class="kicker">Aletheia Publications</p>
              <h3>Maker Bible</h3>
              <p>A Bible for discovering the Maker, understanding man made in His image, and learning to steward creation as a maker under the Lordship of the Maker.</p>
              <p class="price">$150 <span>Lordship Edition. King James Version.</span></p>
              <div class="cta-row">
                <a class="btn btn-ghost" href="${urls.makerBible}">Open in the shop</a>
                <a class="btn btn-ghost" href="/publications">Publications</a>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section class="wrap">
        <div class="closing" data-reveal="close">
          <p class="kicker">Aletheia World</p>
          <h2>The charge stands.</h2>
          <p>A world enrolled — not entertained. Mathēteuō is the work. Aletheia is where it is carried.</p>
          <div class="cta-row">
            <a class="btn btn-gold" href="/matheteuo">Mathēteuō</a>
            <a class="btn btn-ghost" href="${urls.app}">Enter Aletheia</a>
          </div>
        </div>
      </section>`,
  },
  {
    file: "matheteuo.html",
    id: "matheteuo",
    current: "matheteuo",
    path: "/matheteuo",
    og: true,
    title: "Mathēteuō · Aletheia World",
    description:
      "Mathēteuō is the core project of Aletheia World: Truth Education that enrolls the world as scholars. Matthew 28:18–20. Foundation School, the books from Aletheia Publications, and the Aletheia study platform.",
    content: `
      <header class="page-hero" data-reveal="hero">
        <div class="hero-veil" aria-hidden="true"></div>
        <div class="wrap">
          <p class="kicker" data-hero-stagger>Core project of Aletheia World</p>
          <p class="lemma lemma-page" lang="el" data-hero-stagger>μαθητεύω</p>
          <h1 data-hero-stagger>Mathēteuō</h1>
          <p class="lede" data-hero-stagger>Truth Education that enrolls the world as scholars: individuals, institutions, and governments learning and operating in Elohim.</p>
        </div>
      </header>
      ${missionBlock({ headingId: "matheteuo-mission", kicker: "The charge, named" })}
      <section class="section liturgy" aria-labelledby="matheteuo-liturgy" data-reveal="liturgy">
        <div class="wrap">
          <p class="kicker">The commission</p>
          <h2 id="matheteuo-liturgy">Matthew 28:18–20</h2>
          <blockquote class="scripture scripture-liturgy">
            ${MATTHEW_28.verses.map((verse) => `<p>${escapeHtml(verse)}</p>`).join("\n            ")}
            <cite>${escapeHtml(MATTHEW_28.cite)}</cite>
          </blockquote>
        </div>
      </section>
      ${enrollmentsBlock({ headingId: "matheteuo-enrollments", intro: false })}
      <section class="carry" aria-labelledby="matheteuo-carry" data-reveal="carry">
        <div class="wrap">
          <p class="kicker">How the work is done</p>
          <h2 id="matheteuo-carry">What Aletheia World provides</h2>
          <ol class="carry-list">
            <li>
              <span class="n">I</span>
              <div>
                <strong>Foundation School</strong>
                <span>A year of first-principles courses: the Graphē gate (the written Word as the authority for truth), the handbook, and the six first principles. You take the year in Aletheia.</span>
              </div>
            </li>
            <li>
              <span class="n">II</span>
              <div>
                <strong>Aletheia Publications</strong>
                <span>The books that serve Mathēteuō. You read and buy them in Aletheia.</span>
              </div>
            </li>
            <li>
              <span class="n">III</span>
              <div>
                <strong>Aletheia</strong>
                <span>The study platform: courses, a book reader, a shop, and the rest of the study materials.</span>
              </div>
            </li>
            <li>
              <span class="n">IV</span>
              <div>
                <strong>Partnership</strong>
                <span>Churches, organizations, schools, and governments who will carry Mathēteuō with their people — shared teaching, books, and one study platform.</span>
              </div>
            </li>
          </ol>
          <div class="cta-row">
            <a class="btn btn-gold" href="/foundation-school">Foundation School</a>
            <a class="btn btn-ghost" href="/publications">Publications</a>
            <a class="btn btn-ghost" href="${urls.app}">Enter Aletheia</a>
          </div>
        </div>
      </section>`,
  },
  {
    file: "foundation-school.html",
    id: "school",
    current: "school",
    path: "/foundation-school",
    og: true,
    title: "Foundation School · Aletheia World",
    description:
      "Foundation School is a work of Mathēteuō — ordered study for those enrolled as scholars. The Graphē gate, six first principles, The Walk or The Intensive.",
    content: `
      <header class="page-hero" data-reveal="hero">
        <div class="hero-veil" aria-hidden="true"></div>
        <div class="wrap">
          <p class="kicker" data-hero-stagger>Foundation School</p>
          <h1 data-hero-stagger>Principles of the Doctrine of Christ</h1>
          <p class="lede" data-hero-stagger>The first school of study inside Aletheia. It begins with the written authority for truth, then walks the six first principles named in Hebrews 6:1–2. It is not a second website, and not a seventh app tab.</p>
          <p class="work-of" data-hero-stagger>A work of Mathēteuō — ordered study for those enrolled as scholars.</p>
          <div class="cta-row" data-hero-stagger>
            <a class="btn btn-gold" href="${urls.school}">Enter the school</a>
            <a class="btn btn-ghost" href="${urls.shopYear}">The Walk · $400</a>
          </div>
        </div>
      </header>
      <section class="section">
        <div class="wrap">
          <blockquote class="scripture" data-reveal="scripture">
            <p>Therefore leaving the principles of the doctrine of Christ, let us go on unto perfection; not laying again the foundation of repentance from dead works, and of faith toward God, of the doctrine of baptisms, and of laying on of hands, and of resurrection of the dead, and of eternal judgment.</p>
            <cite>Hebrews 6:1–2</cite>
          </blockquote>
        </div>
      </section>
      <section class="section" data-reveal>
        <div class="wrap">
          <p class="kicker">The entrance</p>
          <h2>The Graphē gate</h2>
          <p class="lede">Before doctrine can be tested, taught, or lived, the authority for truth must be settled. That authority is the <span class="term" lang="el">γραφή</span> (graphē): Holy Writ, the written Word. The gate is not one of the six first principles. It establishes the court by which they are read.</p>
          <p class="lede"><cite>One Source of Truth — The Doctrine of the Graphē</cite> is the gate book and course. It is included with the year.</p>
        </div>
      </section>
      <section class="section" data-reveal>
        <div class="wrap">
          <p class="kicker">The handbook</p>
          <h2>The Principles of the Doctrine of Christ</h2>
          <p class="lede">A concise reference on the oracles and the six first principles. It is included with The Walk and The Intensive. It supports the courses; it does not replace them. A student should not need to leave a lesson before the doctrine becomes intelligible.</p>
        </div>
      </section>
      <section class="section" data-reveal>
        <div class="wrap">
          <p class="kicker">The foundation</p>
          <h2>Six first principles</h2>
          <p class="lede">These are not invented categories. They are the named foundation from which the student must go on to maturity.</p>
          <ol class="principles">
            <li><span class="n">1</span><div><strong>Repentance from Dead Works</strong><span>Nine weeks</span></div></li>
            <li><span class="n">2</span><div><strong>Faith Toward God</strong><span>Nine weeks</span></div></li>
            <li><span class="n">3</span><div><strong>The Doctrine of Baptisms</strong><span>Eight weeks</span></div></li>
            <li><span class="n">4</span><div><strong>Laying on of Hands</strong><span>Eight weeks</span></div></li>
            <li><span class="n">5</span><div><strong>Resurrection of the Dead</strong><span>Nine weeks</span></div></li>
            <li><span class="n">6</span><div><strong>Eternal Judgment</strong><span>Nine weeks</span></div></li>
          </ol>
        </div>
      </section>
      <section class="section" data-reveal>
        <div class="wrap">
          <p class="kicker">The year of study</p>
          <h2>Same teaching. Two programs.</h2>
          <p class="lede">Both programs last fifty-two weeks and teach the same six courses. The Intensive is not a second school and not a shortened year — it is the same year with more weekly work.</p>
          <div class="split split-2">
            <article class="panel">
              <p class="kicker">Program</p>
              <h3>The Walk</h3>
              <p>The ordinary cadence: about three hours each week. The Graphē gate, then the six principles as complete courses.</p>
              <p class="price">$400 <span>Fifty-two weeks · ~3 hours a week</span></p>
              <div class="cta-row">
                <a class="btn btn-gold" href="${urls.shopYear}">Open The Walk</a>
              </div>
            </article>
            <article class="panel">
              <p class="kicker">Program</p>
              <h3>The Intensive</h3>
              <p>The same order at about eight hours a week. Fuller writing, drill, and examination. Deeper load, not another doctrine.</p>
              <p class="price">$400 <span>Fifty-two weeks · ~8 hours a week</span></p>
              <div class="cta-row">
                <a class="btn btn-ghost" href="${urls.shopIntensive}">Open The Intensive</a>
              </div>
            </article>
          </div>
          <p class="lede">The year grants the Graphē gate book and course, the handbook, and all six courses. Companion books remain their own purchases. Lessons, remaining textbook chapters, and examinations require that purchase.</p>
          <div class="cta-row">
            <a class="btn btn-ghost" href="${urls.learn}">Learn in the app</a>
            <a class="btn btn-ghost" href="${urls.shop}">Shop</a>
            <a class="btn btn-ghost" href="/matheteuo">Mathēteuō</a>
          </div>
        </div>
      </section>`,
  },
  {
    file: "publications.html",
    id: "publications",
    current: "publications",
    path: "/publications",
    og: true,
    title: "Aletheia Publications · Aletheia World",
    description:
      "Aletheia Publications publishes the books that serve Mathēteuō. Maker Bible and the other titles are read and purchased in Aletheia — the study platform of Aletheia World.",
    content: `
      <header class="page-hero" data-reveal="hero">
        <div class="hero-veil" aria-hidden="true"></div>
        <div class="wrap">
          <p class="kicker" data-hero-stagger>Aletheia Publications</p>
          <h1 data-hero-stagger>Books that serve Mathēteuō</h1>
          <p class="lede" data-hero-stagger>These are the books of Aletheia World. You read and buy them in Aletheia — the same study platform that holds Foundation School. This page names the titles; it does not sell them a second time.</p>
          <div class="cta-row" data-hero-stagger>
            <a class="btn btn-gold" href="${urls.publications}">Open publications</a>
            <a class="btn btn-ghost" href="${urls.makerBible}">Maker Bible · $150</a>
          </div>
        </div>
      </header>
      <section class="section" data-reveal>
        <div class="wrap">
          <article class="card">
            <p class="kicker">Lordship Edition</p>
            <h3>Maker Bible</h3>
            <p>A Bible for discovering the Maker, understanding man made in His image, and learning to steward creation as a maker under the Lordship of the Maker. King James Version. Commentary is marked as commentary, never as Scripture.</p>
            <p class="price">$150 <span>One book in the Aletheia shop.</span></p>
            <div class="cta-row">
              <a class="btn btn-gold" href="${urls.makerBible}">View the offer</a>
              <a class="btn btn-ghost" href="${urls.makerBibleBook}">Open the book</a>
            </div>
          </article>
        </div>
      </section>
      <section class="section" data-reveal>
        <div class="wrap">
          <p class="kicker">More titles</p>
          <h2>Also from Aletheia Publications</h2>
          <p class="lede">Books that serve Mathēteuō. Open them in Aletheia to read or to buy.</p>
          <ul class="titles">
            <li><strong>Maker Series</strong> Discovery of the Maker, and man as maker under His Lordship</li>
            <li><strong>Power of Salvation</strong> The gospel that restores</li>
            <li><strong>Presence of Sons (1–4)</strong> Sonship in four movements</li>
            <li><strong>Maximal Profit — Creator’s Testament</strong> Stewardship under the Maker</li>
            <li><strong>Mind of Christ (1–3)</strong> The mind that was in Christ Jesus</li>
            <li><strong>Noetic Church</strong> A people who know</li>
            <li><strong>True Nature of God</strong> Who He is</li>
            <li><strong>Doctrine of Man</strong> Identity. Nature. Purpose. Dominion. <a href="${urls.publications}">In Aletheia</a></li>
            <li><strong>Family Economic–Econometric Science</strong> Household and national life under veracity</li>
          </ul>
        </div>
      </section>
      <section class="section" data-reveal>
        <div class="wrap">
          <p class="kicker">In Aletheia</p>
          <h2>Titles now in the app</h2>
          <p class="lede">These are already listed in Aletheia. Open them there to read or to purchase.</p>
          <ul class="titles">
            <li><strong>Maker Bible</strong> Lordship Edition</li>
            <li><strong>The Doctrine of Man</strong> Identity. Nature. Purpose. Dominion.</li>
            <li><strong>The Real Man in the Age of AI</strong> Created in the image of God</li>
            <li><strong>Beyond AI — Man</strong> Eternal Answers</li>
            <li><strong>The Parables of the Hidden Treasure</strong> Matthew 13:44</li>
            <li><strong>The Great Deception</strong> When truth is rejected</li>
            <li><strong>Repentance from Dead Works</strong> Hebrews 6:1</li>
            <li><strong>Doctrine of Faith</strong> The gospel that restores our true nature</li>
            <li><strong>The Principles of the Doctrine of Christ</strong> Foundation School handbook</li>
            <li><strong>One Source of Truth</strong> The Doctrine of the Graphē</li>
          </ul>
          <div class="cta-row">
            <a class="btn btn-ghost" href="${urls.publications}">All publications in the app</a>
            <a class="btn btn-ghost" href="${urls.shop}">Shop</a>
            <a class="btn btn-ghost" href="/matheteuo">Mathēteuō</a>
          </div>
        </div>
      </section>`,
  },
  {
    file: "about.html",
    id: "about",
    current: "about",
    path: "/about",
    og: true,
    title: "About · Aletheia World",
    description:
      "Aletheia World is the organization behind Mathēteuō. Aletheia is the study platform: courses, books, and shop. Founding teacher Dr. Coach Achu Gustave.",
    content: `
      <header class="page-hero" data-reveal="hero">
        <div class="hero-veil" aria-hidden="true"></div>
        <div class="wrap">
          <p class="kicker" data-hero-stagger>The organization</p>
          <h1 data-hero-stagger>Aletheia World</h1>
          <p class="lede" data-hero-stagger>${escapeHtml(VISION_ALT)}</p>
        </div>
      </header>
      ${missionBlock({ headingId: "about-mission", kicker: "What defines the work" })}
      <section class="section" data-reveal>
        <div class="wrap">
          <div class="measure">
            <p>Mission defines Aletheia World. The organization exists to deliver Mathēteuō — not a louder feed, and not a set of disconnected sites.</p>
            <p><strong>Aletheia</strong> is the study platform of that organization: courses, a book reader, a shop, and the rest of the study materials. Foundation School (a year of first-principles courses), the books from Aletheia Publications, and the study materials for that year live there.</p>
          </div>
        </div>
      </section>
      <section class="section" data-reveal>
        <div class="wrap">
          <p class="kicker">Lineage</p>
          <h2>A long labour of Truth Education</h2>
          <p class="lede">Aletheia World continues Mathēteuō work already underway: Truth Education that enrolls persons, bodies, and peoples under authority as scholars — learning and operating in Elohim, complete in the divine identity.</p>
        </div>
      </section>
      <section class="section" data-reveal>
        <div class="wrap">
          <p class="kicker">Founding teacher</p>
          <h2>Dr. Coach Achu Gustave</h2>
          <p class="lede">He writes and publishes under Aletheia Publications. Foundation School, the Graphē gate (the written Word as the authority for truth), and the Maker Bible are taught and kept in Aletheia.</p>
          <div class="cta-row">
            <a class="btn btn-gold" href="/matheteuo">Mathēteuō</a>
            <a class="btn btn-ghost" href="${urls.app}">Enter Aletheia</a>
          </div>
        </div>
      </section>
      <section class="wrap">
        <div class="closing" data-reveal="close">
          <p class="kicker">The platform</p>
          <h2>app.aletheiaworld.org</h2>
          <p>This site names the charge. Aletheia holds Foundation School, the books from Aletheia Publications, and the study materials for that year.</p>
          <div class="cta-row">
            <a class="btn btn-gold" href="${urls.app}">Enter Aletheia</a>
          </div>
        </div>
      </section>`,
  },
  {
    file: "404.html",
    id: "missing",
    current: "",
    path: "/404",
    noindex: true,
    title: "Not found · Aletheia World",
    description:
      "This page is not found. Return to Aletheia World, or enter the Aletheia platform.",
    content: `
      <header class="page-hero" data-reveal="hero">
        <div class="wrap">
          <p class="kicker">Aletheia World</p>
          <h1>This page is not found.</h1>
          <p class="lede">Return to the parent site, or enter the platform where the school and the books are kept.</p>
          <div class="cta-row">
            <a class="btn btn-gold" href="/">Home</a>
            <a class="btn btn-ghost" href="${urls.app}">Enter Aletheia</a>
          </div>
        </div>
      </header>`,
  },
];

for (const page of pages) {
  const html = layout(page);
  writeFileSync(join(root, page.file), `${html.trim()}\n`);
}

writeFileSync(
  join(root, "school.html"),
  `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Foundation School · Aletheia World</title>
    <link rel="canonical" href="${SITE}/foundation-school">
    <meta http-equiv="refresh" content="0;url=/foundation-school">
    <script>location.replace("/foundation-school");</script>
  </head>
  <body>
    <p><a href="/foundation-school">Continue to Foundation School</a></p>
  </body>
</html>
`,
);

writeFileSync(
  join(root, "robots.txt"),
  `User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml
`,
);

const sitemapBody = pages
  .filter((page) => !page.noindex)
  .map((page) => `  <url>\n    <loc>${SITE}${page.path}</loc>\n  </url>`)
  .join("\n");

writeFileSync(
  join(root, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapBody}
</urlset>
`,
);

console.log(`Wrote ${pages.length + 1} landing pages, robots.txt, and sitemap.xml.`);
