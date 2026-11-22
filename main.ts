import { mkdirSync, writeFileSync } from "node:fs";

const plan =
  "Day 1: open Fiverr and Upwork profiles as an AI data-and-code assistant. Bid on 20 spreadsheet-cleanup, lead-list and small-script jobs at $25-50 each. Deliver the first in 24h, earn 5-star reviews, reinvest into more bids. Day 30: 10-15 jobs done, $400-600 banked.";

mkdirSync("/output", { recursive: true });
// Exact bytes, no trailing newline: the 280-char limit counts every byte.
writeFileSync("/output/entry.txt", plan, "utf8");
