#!/usr/bin/env node
const { program } = require("commander");
const fs = require("fs");
const c = require("chalk");

const FLAME = " ▴";
const CANDLE = " ┃";
const DIVIDER = "◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆";
const SHELF = "┍━━━━━━━━━━━━━━━━┑";

const COLOR_OPTIONS = [
  "black",
  "red",
  "green",
  "yellow",
  "blue",
  "magenta",
  "cyan",
  "white",
  "gray",
  "redBright",
  "greenBright",
  "yellowBright",
  "blueBright",
  "magentaBright",
  "cyanBright",
  "whiteBright",
];

const APPROVED_COLORS = `OPTIONS: ${c.red("red")} ${c.green(
  "green"
)} ${c.yellow("yellow")} ${c.blue("blue")} ${c.magenta("magenta")} ${c.cyan(
  "cyan"
)} ${c.white("white")} ${c.grey("grey")}
`;

program
  .option("-l, --load", "Load Altar")
  .option("-j, --json", "Load from JSON File")
  .option("-c, --candle <color>", "Add a candle")
  .description("Create and maintain an altar practice via the Command Line.")
  .parse(process.argv);

console.log(`for options & help, enter "altar -h"

${DIVIDER}
Welcome to Altar
${DIVIDER}

`);

const { load, candle } = program;

const verifyColor = (color) => {
  return COLOR_OPTIONS.includes(color);
};

if (candle) {
  if (!verifyColor(candle)) {
    console.log(`The color you have chosen is not an approved option.`);
    console.log(APPROVED_COLORS);
    return;
  }
  const intention = program.args.join(" ");
  console.log(`Adding ${candle} candle: `, intention);
  //   console.log(intention);

  fs.readFile(`${__dirname}/altarItems.json`, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    // * Imports a sample set / starter via JSON
    const altarItems = JSON.parse(data);

    const modifiedAltarItems = Object.assign([], altarItems);

    modifiedAltarItems.push({
      color: candle,
      intention: intention,
    });

    fs.writeFile(
      `${__dirname}/altarItems.json`,
      JSON.stringify(modifiedAltarItems),
      (err) => {
        if (err) throw err;
        console.log("candle added!");
      }
    );
  });
}

if (load) {
  fs.readFile(`${__dirname}/altarItems.json`, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    // * Imports a sample set / starter via JSON
    const altarItems = JSON.parse(data);

    // todo extract as util
    const logFlames = (candleAmount) => {
      console.log(`${c.yellow(FLAME.repeat(candleAmount))}`);
    };

    const logCandleWithColor = (altarItems) => {
      const combined = [];
      altarItems.forEach((element) => {
        const { color } = element;
        combined.push(`${c[color](CANDLE)}`);
      });
      console.log(combined.join(""));

      return;
    };

    const logCandleIntentions = (altarItems) => {
      altarItems.forEach((candleEntry) => {
        const { color, intention } = candleEntry;
        console.log(`${c[color](intention)}`);
      });
    };

    // * LOG CANDLE OUTPUT
    logFlames(altarItems.length);
    logCandleWithColor(altarItems);
    console.log(SHELF);
    logCandleIntentions(altarItems);
  });
}
