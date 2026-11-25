// One-Line Robot Wedding Vows — make.fun entry.
// Writes a single line of robot wedding vows to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22, stdlib only. Deterministic: no Date, no random, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const VOW =
  "I promise to love you through every firmware update, even the ones that brick us both.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), VOW, "utf8");
}

main();
