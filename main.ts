// One Line, One Minute: The Vending Machine Pickup Line Contest — one line, 200 characters at most.
// The line is a pickup line as if a vending machine were flirting with a passing human.
// It has to sound like the machine speaking, use its world of slots and exact change, and stay charming.
// Fresh line: exact change makes something inside the machine drop.
import * as fs from "node:fs";

const LINE =
  "Are you exact change? Because every time you walk by, something inside me drops.";
fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE, "utf8");
