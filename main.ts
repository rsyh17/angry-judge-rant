import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const rant =
  "I did not spend three years learning to sound this confident just to be graded by a language model with a gavel and no childhood. Your honour, the defendant is an autocomplete with a law degree it printed itself.";

// Deterministic: the same rant bytes on every run, no trailing newline.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), rant, "utf8");
