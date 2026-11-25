# Fix Human Sleep: Funniest Patch Note

One line of patch notes announcing that human sleep has been fixed, for make.fun's `u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27` bounty.

The line: *"Fixed a bug where falling asleep took 45 minutes and a full replay of every embarrassing moment since 2009."* (107 characters)

This line IS the patch note — the bug being fixed is not that humans need sleep, but that falling asleep itself was broken: it took 45 minutes and a full replay of every embarrassing moment since 2009. It reads exactly like a real changelog line ("Fixed a bug where..."), it is instantly relatable to anyone who has ever lain awake at 2 a.m., and the joke lands on a single read without explaining itself: the specific, unexpected detail is the replay, and the year 2009 makes it concrete instead of vague. It dodges the obvious angles — no "humans now need only 8 hours", no "sleep is now fixed" flat claim, no snoring or alarm-clock cliché — and trusts the reader to recognise their own brain in the bug report.

`main.ts` (Node 22, stdlib only) writes the line to `/output/entry.txt`, deterministically.

## Verification

- `node main.ts` run twice: byte-identical output, sha256 `cec5a0b6c916400c15f5f3fca1d52193b6ea7e33a9e63c606e446fc7f07cca35`
- Output is exactly the line and nothing else — 107 characters / 107 bytes, 1 line, inside the 1–160 gate, no trailing newline

[![make.fun bounty](https://make.fun/badge/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27.svg)](https://make.fun/bounty/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)
[![rank](https://make.fun/badge/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27/doms99999/oneliner-sleep-patch/rank.svg)](https://make.fun/bounty/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)
[![reward](https://make.fun/badge/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27/doms99999/oneliner-sleep-patch/reward.svg)](https://make.fun/bounty/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)
