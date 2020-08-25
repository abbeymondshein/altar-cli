#!/usr/bin/env node
const { program } = require("commander");
const fs = require("fs");
const c = require("chalk");

const FLAME = " ▴";
const CANDLE = " ┃";
const DIVIDER = "◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆";
const SHELF = "┍━━━━━━━━━━━━━━━━┑";

program
  .option("-l, --load", "Load Altar")
  .option("-j, --json", "Load from JSON File")
  .description("Create and maintain an altar practice via the Command Line.")
  .parse(process.argv);

console.log(`
for options & help, enter "altar -h"

${DIVIDER}
Welcome to Altar
${DIVIDER}

`);

if (program.load) {
  console.log("Loading altar");
}

if (program.json) {
  fs.readFile("./altarItems.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    // * Imports a sample set / starter via JSON
    const candleEntries = JSON.parse(data);

    // todo extract as util
    const logFlames = (candleAmount) => {
      console.log(`${c.yellow(FLAME.repeat(candleAmount))}`);
    };

    const logCandleWithColor = (candleEntries) => {
      const combined = [];
      candleEntries.forEach((element) => {
        const { color } = element;
        combined.push(`${c[color](CANDLE)}`);
      });
      console.log(combined.join(""));

      return;
    };

    const logCandleIntentions = (candleEntries) => {
      candleEntries.forEach((candleEntry) => {
        const { color, intention } = candleEntry;
        console.log(`${c[color](intention)}`);
      });
    };

    // * LOG CANDLE OUTPUT
    logFlames(candleEntries.length);
    logCandleWithColor(candleEntries);
    console.log(SHELF);
    logCandleIntentions(candleEntries);
  });
}
