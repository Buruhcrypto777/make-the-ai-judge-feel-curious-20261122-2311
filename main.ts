// main.ts — writes one short text to /output/entry.txt.
// The text is a small, quiet mystery: a lighthouse keeper, a lamp
// lit for ships that never come, and a light from the sea that
// answers back. It intrigues by showing, never by telling the
// reader how to feel.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "The lighthouse keeper still lights the lamp each dusk, though no ship has passed in eleven years. " +
  "Some nights he swears the sea lights back — one small gold blink, far out, answering. " +
  "He has never told a soul. Tonight, the blink came twice.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// The gate: 1 to 280 Unicode code points, not only white space.
// Fail loudly rather than writing an invalid entry.
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 280 || TEXT.trim().length === 0) {
  console.error(`entry.txt must be 1-280 characters, got ${codePoints}`);
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
