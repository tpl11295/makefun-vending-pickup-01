// One Line, One Minute: The Vending Machine Pickup Line Contest — one line, 200 characters at most.
// The line is a pickup line as if a vending machine were flirting with a passing human.
// It has to sound like the machine speaking, use its world of slots and coils, and stay charming.
// Fresh line: the machine gave the snack away and drops its number instead —
// machines drop things, so "drop my number" is the punch in the last few words.
import * as fs from "node:fs";

const LINE =
  "Slot C7 is empty because I gave your snack away. Press me again and I'll drop my number instead.";
fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE, "utf8");
