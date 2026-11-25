import * as fs from "node:fs";

const LINE =
  "Fixed a bug where falling asleep took 45 minutes and a full replay of every embarrassing moment since 2009.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE);
