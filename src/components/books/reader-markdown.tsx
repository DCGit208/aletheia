"use client";

import type { ReactNode } from "react";

type Block =
  | { type: "paragraph" | "quote" | "heading"; text: string; level?: number }
  | { type: "rule" }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "table"; rows: string[][] };

function highlightText(text: string, keyPrefix: string, terms: string[]): ReactNode[] {
  const safeTerms = [...new Set(terms.map((term) => term.trim()).filter(Boolean))].sort((a, b) => b.length - a.length);
  if (!safeTerms.length) return [text];
  const escaped = safeTerms.map((term) => term.replace(/([\\^$.*+?()[\]{}|])/g, "\\$1"));
  const expression = new RegExp(escaped.join("|"), "ig");
  const parts: ReactNode[] = [];
  let cursor = 0;
  let match: RegExpExecArray | null;
  while ((match = expression.exec(text))) {
    if (match.index > cursor) parts.push(text.slice(cursor, match.index));
    parts.push(<mark key={keyPrefix + "-saved-" + match.index} style={{ backgroundColor: "var(--reader-highlight)" }} className="rounded-sm px-0.5 text-inherit">{match[0]}</mark>);
    cursor = match.index + match[0].length;
  }
  if (cursor < text.length) parts.push(text.slice(cursor));
  return parts.length ? parts : [text];
}

function inline(text: string, keyPrefix: string, depth = 0, highlightTerms: string[] = []): ReactNode[] {
  if (depth > 5) return [text];
  const token = /(\[\[.+?\]\]|\*\*.+?\*\*|__.+?__|\*[^*\n]+\*|_[^_\n]+_|\x60[^\x60]+\x60|\[[^\]]+\]\([^\s)]+\))/g;
  const parts = text.split(token);
  return parts.map((part, index) => {
    const key = `${keyPrefix}-${index}`;
    if (part.startsWith("[[") && part.endsWith("]]")) {
      return <mark key={key} style={{ backgroundColor: "var(--reader-highlight)" }} className="rounded-sm px-0.5 text-inherit">{part.slice(2, -2)}</mark>;
    }
    if ((part.startsWith("**") && part.endsWith("**")) || (part.startsWith("__") && part.endsWith("__"))) {
      return <strong key={key}>{inline(part.slice(2, -2), key, depth + 1, highlightTerms)}</strong>;
    }
    if ((part.startsWith("*") && part.endsWith("*")) || (part.startsWith("_") && part.endsWith("_"))) {
      return <em key={key}>{inline(part.slice(1, -1), key, depth + 1, highlightTerms)}</em>;
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={key} className="rounded bg-black/5 px-1 py-0.5 text-[0.9em]">{part.slice(1, -1)}</code>;
    }
    const link = part.match(/^\[([^\]]+)\]\(([^\s)]+)\)$/);
    if (link) {
      const [, label, href] = link;
      if (/^(https?:|mailto:|\/|#)/i.test(href)) {
        return <a key={key} href={href} className="text-[#73551c] underline underline-offset-2" rel={/^https?:/i.test(href) ? "noreferrer" : undefined}>{inline(label, key, depth + 1, highlightTerms)}</a>;
      }
      return <>{label}</>;
    }
    return highlightText(part, key, highlightTerms);
  });
}

function cells(line: string) {
  return line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((cell) => cell.trim());
}

function parseBlocks(source: string): Block[] {
  const lines = source.replace(/\r\n?/g, "\n").split("\n");
  const blocks: Block[] = [];
  for (let i = 0; i < lines.length;) {
    const line = lines[i].trim();
    if (!line) { i++; continue; }
    if (/^(---+|\*\*\*+|___+)$/.test(line)) { blocks.push({ type: "rule" }); i++; continue; }
    const heading = line.match(/^(#{1,6})\s+(.+?)\s*#*$/);
    if (heading) { blocks.push({ type: "heading", level: heading[1].length, text: heading[2] }); i++; continue; }
    if (line.startsWith("|") && i + 1 < lines.length && /^\s*\|?\s*:?-{3,}/.test(lines[i + 1])) {
      const rows = [cells(line)];
      i += 2;
      while (i < lines.length && lines[i].trim().startsWith("|")) rows.push(cells(lines[i++]));
      blocks.push({ type: "table", rows });
      continue;
    }
    if (/^>\s?/.test(line)) {
      const quoted: string[] = [];
      while (i < lines.length && /^\s*>/.test(lines[i])) quoted.push(lines[i++].replace(/^\s*>\s?/, ""));
      blocks.push({ type: "quote", text: quoted.join(" ") });
      continue;
    }
    const list = line.match(/^\s*(?:([-+*])|(\d+)[.)])\s+(.+)$/);
    if (list) {
      const ordered = Boolean(list[2]);
      const items: string[] = [];
      while (i < lines.length) {
        const match = lines[i].match(/^\s*(?:([-+*])|(\d+)[.)])\s+(.+)$/);
        if (!match || Boolean(match[2]) !== ordered) break;
        items.push(match[3]);
        i++;
      }
      blocks.push({ type: "list", ordered, items });
      continue;
    }
    const paragraph = [line];
    i++;
    while (i < lines.length && lines[i].trim() && !/^(#{1,6})\s|^>|^\s*(?:[-+*]|\d+[.)])\s+|^(---+|\*\*\*+|___+)$/.test(lines[i].trim())) {
      if (lines[i].trim().startsWith("|")) break;
      paragraph.push(lines[i].trim());
      i++;
    }
    blocks.push({ type: "paragraph", text: paragraph.join(" ") });
  }
  return blocks;
}

export function ReaderMarkdown({
  content,
  className,
  fontSize,
  highlightTerms = [],
}: {
  content: string;
  className?: string;
  fontSize: number;
  highlightTerms?: string[];
}) {
  const blocks = parseBlocks(content);
  return (
    <div className={className} style={{ ["--reader-size" as string]: `${fontSize}rem` }}>
      {blocks.map((block, index) => {
        const key = `block-${index}`;
        if (block.type === "rule") return <hr key={key} className="my-8 border-[var(--reader-border)]" />;
        if (block.type === "heading") {
          const Tag = block.level === 1 ? "h2" : block.level === 2 ? "h3" : "h4";
          return <Tag key={key} className="mb-4 mt-8 font-heading leading-snug text-[var(--reader-heading)]">{inline(block.text, key, 0, highlightTerms)}</Tag>;
        }
        if (block.type === "quote") {
          return <blockquote key={key} className="my-6 border-l-2 border-[var(--reader-accent)] pl-4 text-[var(--reader-muted)]">{inline(block.text, key)}</blockquote>;
        }
        if (block.type === "list") {
          const Tag = block.ordered ? "ol" : "ul";
          return <Tag key={key} className={block.ordered ? "my-5 list-decimal space-y-2 pl-7" : "my-5 list-disc space-y-2 pl-7"}>{block.items.map((item, itemIndex) => <li key={itemIndex}>{inline(item, `${key}-${itemIndex}`, 0, highlightTerms)}</li>)}</Tag>;
        }
        if (block.type === "table") {
          const [head, ...body] = block.rows;
          return <div key={key} className="my-6 overflow-x-auto rounded-lg border border-[#6a542c]/20"><table className="w-full border-collapse text-left text-[0.92em]"><thead className="bg-[#6a542c]/10"><tr>{head.map((cell, cellIndex) => <th key={cellIndex} className="border-b border-[#6a542c]/20 px-3 py-2 font-semibold">{inline(cell, `${key}-h-${cellIndex}`, 0, highlightTerms)}</th>)}</tr></thead><tbody>{body.map((row, rowIndex) => <tr key={rowIndex}>{head.map((_, cellIndex) => <td key={cellIndex} className="border-b border-[#6a542c]/10 px-3 py-2 align-top last:border-0">{inline(row[cellIndex] ?? "", `${key}-r-${rowIndex}-${cellIndex}`, 0, highlightTerms)}</td>)}</tr>)}</tbody></table></div>;
        }
        return <p key={key} className="mb-5 leading-relaxed">{inline(block.text, key)}</p>;
      })}
    </div>
  );
}
