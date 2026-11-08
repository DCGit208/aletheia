#!/usr/bin/env python3
"""Build print PDF and EPUB from the controlled Book I Markdown master."""
from pathlib import Path
import re, subprocess, json, hashlib, shutil

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "Book Matter/Doctrine of Faith/14_THE_DOCTRINE_OF_FAITH_BOOK_I_PUBLICATION_MANUSCRIPT.md"
OUT = ROOT / "dist/book-i"
OUT.mkdir(parents=True, exist_ok=True)
text = SOURCE.read_text(encoding="utf-8")

# Remove the manually maintained Contents block: the PDF/EPUB engines generate
# their own navigable contents from the actual heading structure.
text, n = re.subn(r"(?ms)^## Contents\s*\n.*?(?=^## Preface\s*$)", "", text, count=1)
if n != 1:
    raise SystemExit("Expected exactly one Contents block before Preface.")

# The source title block is rendered as a designed title page through metadata.
text, n = re.subn(r"(?s)^# THE DOCTRINE OF FAITH\s*\n.*?^\s*---\s*\n", "", text, count=1, flags=re.M)
if n != 1:
    raise SystemExit("Could not isolate the title-page block.")

# Insert a physical contents page after the dedication for the print edition.
needle = "## Preface"
if needle not in text:
    raise SystemExit("Preface heading not found.")
text = text.replace(needle, r"\newpage" + "\n\n" + r"\tableofcontents" + "\n\n" + r"\newpage" + "\n\n" + needle, 1)

# Make the first numbered chapter begin the main-matter sequence.
first_chapter = re.search(r"(?m)^# Chapter 1\s+—", text)
if not first_chapter:
    raise SystemExit("Chapter 1 heading not found.")
text = text[:first_chapter.start()] + r"\mainmatter" + "\n\n" + text[first_chapter.start():]

# Insert frontmatter before Copyright. Chapter-level divisions begin at Chapter 1.
copyright_heading = "## Copyright"
if copyright_heading not in text:
    raise SystemExit("Copyright heading not found.")
text = text.replace(copyright_heading, r"\frontmatter" + "\n\n" + copyright_heading, 1)

# Clean up extra blank lines without changing wording.
text = re.sub(r"\n{4,}", "\n\n\n", text)
prepared = OUT / "book-i-source.md"
prepared.write_text(text, encoding="utf-8")

header = OUT / "header.tex"
header.write_text(r"""
\usepackage[paperwidth=6in,paperheight=9in,inner=0.82in,outer=0.68in,top=0.78in,bottom=0.78in,headheight=14pt,headsep=0.22in,footskip=0.35in]{geometry}
\usepackage{fontspec}
\setmainfont{DejaVu Serif}
\setsansfont{DejaVu Sans}
\setmonofont{DejaVu Sans Mono}
\newfontfamily\greekfont{DejaVu Sans}
\newfontfamily\hebrewfont{DejaVu Sans}
\usepackage{microtype}
\usepackage{fancyhdr}
\usepackage{titlesec}
\usepackage{booktabs}
\usepackage{longtable}
\usepackage{array}
\usepackage{enumitem}
\usepackage{setspace}
\setstretch{1.13}
\setlength{\parindent}{1.25em}
\setlength{\parskip}{0.25em}
\setlist{itemsep=0.18em,topsep=0.35em}
\pagestyle{fancy}
\fancyhf{}
\fancyhead[LE]{\small\itshape THE DOCTRINE OF FAITH}
\fancyhead[RO]{\small\itshape DR. COACH ACHU GUSTAVE}
\fancyfoot[C]{\small\thepage}
\renewcommand{\headrulewidth}{0.35pt}
\renewcommand{\footrulewidth}{0pt}
\titleformat{\chapter}[display]
  {\normalfont\bfseries\centering}
  {\large\MakeUppercase{\chaptername}\ \thechapter}
  {0.8em}
  {\Huge}
  [\vspace{1.2em}\titlerule]
\titlespacing*{\chapter}{0pt}{-10pt}{28pt}
\titleformat{\section}{\Large\bfseries}{\thesection}{0.65em}{}
\titleformat{\subsection}{\large\bfseries}{\thesubsection}{0.65em}{}
\renewcommand{\contentsname}{Contents}
\setcounter{tocdepth}{1}
\setcounter{secnumdepth}{0}
\usepackage{bookmark}
\usepackage{hyperref}
\hypersetup{hidelinks,pdftitle={The Doctrine of Faith — Book I},pdfauthor={Dr. Coach Achu Gustave},pdfsubject={The Gospel That Restores Our True Nature}}
""", encoding="utf-8")

common = [
    "pandoc", str(prepared), "--from=markdown+raw_tex+pipe_tables+smart",
    "--metadata", "title=The Doctrine of Faith",
    "--metadata", "subtitle=The Gospel That Restores Our True Nature",
    "--metadata", "author=Dr. Coach Achu Gustave",
    "--metadata", "publisher=Aletheia Publications",
    "--metadata", "lang=en",
    "--toc-depth=1",
]
pdf = OUT / "The-Doctrine-of-Faith-Book-I-Print.pdf"
subprocess.run(common + [
    "--to=latex", "--pdf-engine=xelatex", "--include-in-header", str(header),
    "--top-level-division=chapter",
    "--variable", "classoption=oneside,openany",
    "--output", str(pdf)
], check=True)

epub = OUT / "The-Doctrine-of-Faith-Book-I.epub"
css = OUT / "epub.css"
css.write_text("""
body { font-family: serif; line-height: 1.48; }
h1 { break-before: page; text-align: center; margin-top: 18%; }
h2 { margin-top: 1.6em; }
blockquote { margin: 1em 1.5em; font-style: italic; }
table { width: 100%; border-collapse: collapse; }
th, td { padding: .35em; border-bottom: 1px solid #bbb; vertical-align: top; }
""", encoding="utf-8")
subprocess.run(common + [
    "--to=epub3", "--css", str(css), "--split-level=1",
    "--output", str(epub)
], check=True)

manifest = {
    "source": str(SOURCE.relative_to(ROOT)),
    "source_sha256": hashlib.sha256(SOURCE.read_bytes()).hexdigest(),
    "pdf": pdf.name, "pdf_bytes": pdf.stat().st_size,
    "epub": epub.name, "epub_bytes": epub.stat().st_size,
    "trim_size": "6 x 9 inches",
    "fonts": "DejaVu Serif / DejaVu Sans / DejaVu Sans Mono",
    "chapter_count": len(re.findall(r"(?m)^# Chapter \d+\s+—", text)),
}
(OUT / "build-manifest.json").write_text(json.dumps(manifest, indent=2), encoding="utf-8")
print(json.dumps(manifest, indent=2))
