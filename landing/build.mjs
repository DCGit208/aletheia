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
  const nav = [
    { href: "/", label: "Home", key: "home" },
    { href: "/foundation-school", label: "Foundation School", key: "school" },
    { href: "/publications", label: "Publications", key: "publications" },
    { href: "/about", label: "About", key: "about" },
  ]
    .map((item) => {
      const currentAttr = item.key === current ? ' aria-current="page"' : "";
      return `<a href="${item.href}"${currentAttr}>${item.label}</a>`;
    })
    .join("\n          ");

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
          <p class="footer-note">The platform lives at <a href="${urls.app}">app.aletheiaworld.org</a>.</p>
        </div>
        <nav class="footer-nav" aria-label="Footer">
          <a href="/">Home</a>
          <a href="/foundation-school">Foundation School</a>
          <a href="/publications">Publications</a>
          <a href="/about">About</a>
          <a href="${urls.app}">Enter Aletheia</a>
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
      "A house for truth. You were given a charge. Foundation School, Aletheia Publications, and the Aletheia platform live at app.aletheiaworld.org.",
    og: true,
    content: `
      <section class="hero">
        <div class="wrap">
          <p class="kicker">Truth · Identity · Dominion</p>
          <h1>A house for truth.<br><span>You were given a charge.</span></h1>
          <p class="lede">You were not given more noise.</p>
          <div class="cta-row">
            <a class="btn btn-gold" href="${urls.app}">Enter the app</a>
            <a class="btn btn-ghost" href="${urls.school}">Foundation School</a>
          </div>
          <div class="house">
            <p>Aletheia World is the house. Aletheia is the platform — one environment for learning, publication, reading, community, and commerce. The year is walked there. The books are kept there.</p>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="wrap">
          <p class="kicker">Foundation School</p>
          <h2>The Walk · fifty-two weeks</h2>
          <p class="lede">Six first principles and the textbook. One year. One charge. The Graphē gate first; then the handbook; then the labour of the year.</p>
          <div class="split split-2">
            <article class="card">
              <p class="kicker">The year</p>
              <h3>The Walk or The Intensive</h3>
              <p>Same year. Different labour. About three hours a week, or about eight. Not a second syllabus.</p>
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
              </div>
            </article>
          </div>
        </div>
      </section>
      <section class="wrap">
        <div class="closing">
          <p class="kicker">Aletheia</p>
          <h2>The platform is open.</h2>
          <p>Foundation School, the imprint, and the year’s labour are kept in one place. Enter the house there.</p>
          <div class="cta-row">
            <a class="btn btn-gold" href="${urls.app}">Enter Aletheia</a>
            <a class="btn btn-ghost" href="${urls.publications}">Publications in the app</a>
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
      "The Graphē gate, the school handbook, and six first principles from Hebrews 6:1–2. The Walk or The Intensive. Same year. Different labour. $400.",
    content: `
      <header class="page-hero">
        <div class="wrap">
          <p class="kicker">Foundation School</p>
          <h1>Principles of the Doctrine of Christ</h1>
          <p class="lede">The first house of study inside Aletheia. It begins with the written authority for truth, then walks the six first principles named in Hebrews 6:1–2. It is not a second website, and not a seventh app tab.</p>
          <div class="cta-row">
            <a class="btn btn-gold" href="${urls.school}">Enter the school</a>
            <a class="btn btn-ghost" href="${urls.shopYear}">The Walk · $400</a>
          </div>
        </div>
      </header>
      <section class="section">
        <div class="wrap">
          <blockquote class="scripture">
            <p>Therefore leaving the principles of the doctrine of Christ, let us go on unto perfection; not laying again the foundation of repentance from dead works, and of faith toward God, of the doctrine of baptisms, and of laying on of hands, and of resurrection of the dead, and of eternal judgment.</p>
            <cite>Hebrews 6:1–2</cite>
          </blockquote>
        </div>
      </section>
      <section class="section">
        <div class="wrap">
          <p class="kicker">The entrance</p>
          <h2>The Graphē gate</h2>
          <p class="lede">Before doctrine can be tested, taught, or lived, the authority for truth must be settled. That authority is the <span class="term" lang="el">γραφή</span> (graphē): Holy Writ, the written Word. The gate is not one of the six first principles. It establishes the court by which they are read.</p>
          <p class="lede"><cite>One Source of Truth — The Doctrine of the Graphē</cite> is the gate book and course. It is included with the year.</p>
        </div>
      </section>
      <section class="section">
        <div class="wrap">
          <p class="kicker">The handbook</p>
          <h2>The Principles of the Doctrine of Christ</h2>
          <p class="lede">A concise reference on the oracles and the six first principles. It is included with The Walk and The Intensive. It supports the courses; it does not replace them. A student should not need to leave a lesson before the doctrine becomes intelligible.</p>
        </div>
      </section>
      <section class="section">
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
      <section class="section">
        <div class="wrap">
          <p class="kicker">The labour</p>
          <h2>Same year. Different labour.</h2>
          <p class="lede">Both programs last fifty-two weeks and teach the same six courses. Intensive is not a second school and not a shortened year.</p>
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
      "The imprint of Aletheia World. Maker Bible — Lordship Edition, $150, and the books kept in the Aletheia app.",
    content: `
      <header class="page-hero">
        <div class="wrap">
          <p class="kicker">Aletheia Publications</p>
          <h1>The imprint of the house</h1>
          <p class="lede">Books, journals, and studies live inside Aletheia — not on a second site. The publishing environment is the same platform that holds Foundation School.</p>
          <div class="cta-row">
            <a class="btn btn-gold" href="${urls.publications}">Open publications</a>
            <a class="btn btn-ghost" href="${urls.makerBible}">Maker Bible · $150</a>
          </div>
        </div>
      </header>
      <section class="section">
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
      <section class="section">
        <div class="wrap">
          <p class="kicker">In the house</p>
          <h2>Titles now in the app</h2>
          <p class="lede">These are already listed in Aletheia. Open them there to read or to purchase. This page does not sell them a second time.</p>
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
      "Aletheia World is the house. Dr. Coach Achu Gustave is the founding teacher. The platform Aletheia lives at app.aletheiaworld.org.",
    content: `
      <header class="page-hero">
        <div class="wrap">
          <p class="kicker">The house</p>
          <h1>Aletheia World</h1>
          <p class="lede">A house for truth, identity, and dominion. Not a louder feed. Not a set of disconnected sites.</p>
        </div>
      </header>
      <section class="section">
        <div class="wrap measure">
          <p>Aletheia World is the master house. Aletheia is the digital platform of that house — one application for learning, publication, reading, community, and commerce. Aletheia Publications is the imprint inside the platform.</p>
          <p>The work is ordered toward a higher humanity: to know what is true, to stand in the identity given, and to walk in the charge that follows.</p>
        </div>
      </section>
      <section class="section">
        <div class="wrap">
          <p class="kicker">Founding teacher</p>
          <h2>Dr. Coach Achu Gustave</h2>
          <p class="lede">He writes and publishes under Aletheia Publications. Foundation School, the Graphē gate, and the Maker Bible are taught and kept in the platform that bears the house’s name.</p>
          <div class="cta-row">
            <a class="btn btn-gold" href="${urls.app}">Enter Aletheia</a>
            <a class="btn btn-ghost" href="/foundation-school">Foundation School</a>
          </div>
        </div>
      </section>
      <section class="wrap">
        <div class="closing">
          <p class="kicker">The platform</p>
          <h2>app.aletheiaworld.org</h2>
          <p>The parent site invites. The platform holds the school, the books, and the year’s labour.</p>
          <div class="cta-row">
            <a class="btn btn-gold" href="${urls.app}">Enter the app</a>
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
    description: "This page is not in the house. Return home, or enter the Aletheia app.",
    content: `
      <header class="page-hero">
        <div class="wrap">
          <p class="kicker">Aletheia World</p>
          <h1>This page is not in the house.</h1>
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

console.log(`Wrote ${pages.length + 1} landing pages.`);
