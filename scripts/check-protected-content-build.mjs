import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const output = new URL("../out/", import.meta.url);
const forbiddenPassages = [
  "Metanoia is one of the original words for repentance. The authorized list for this school is seven.",
  "The Living Bible (TLB) gloss, kept as a gloss beside the KJV, not as a rival Bible:",
  "Holy Writ — the graphē — is the primary authority for hearing from God and for spiritual growth. Foundation School rests on the writing, not on religious imitation.",
  "The graphē carries the unchallenged authority. Persons are under it. Organizations are under it.",
];
const matches = [];

function scan(directory) {
  for (const name of readdirSync(directory)) {
    const file = join(directory, name);
    if (statSync(file).isDirectory()) {
      scan(file);
      continue;
    }
    if (!/\.(?:html|js|json|css)$/.test(name)) continue;
    const contents = readFileSync(file, "utf8");
    for (const passage of forbiddenPassages) {
      if (contents.includes(passage)) matches.push({ file, passage });
    }
  }
}

scan(output.pathname);
assert.deepEqual(matches, [], `Protected manuscript text found in public Hosting output: ${JSON.stringify(matches)}`);
console.log(`Protected-content build check passed; scanned ${output.pathname}.`);
