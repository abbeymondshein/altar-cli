#!/usr/bin/env node
const { program } = require("commander");
const fs = require("fs");
const {
  printNotApprovedColor,
  printCandleLit,
  printAddingNewItem,
  printWelcomeMessage,
} = require("./print");
const { printAltar } = require("./printAltar");
const { verifyColor, formatItemToAdd, formatAltarUpdate } = require("./utils");

program
  .option("-l, --load", "Load Altar")
  .option("-j, --json", "Load from JSON File")
  .option("-c, --candle <color>", "Add a candle")
  .description("Create and maintain an altar practice via the Command Line.")
  .parse(process.argv);

printWelcomeMessage();

const { load, candle } = program;

if (candle) {
  if (!verifyColor(candle)) {
    printNotApprovedColor();
    return;
  }

  const intention = program.args.join(" ");
  const newItem = formatItemToAdd(candle, intention);
  // TODO: add in "loading/lighting" indicators using ora
  printAddingNewItem(candle, intention);

  fs.readFile(`${__dirname}/altarItems.json`, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    fs.writeFile(
      `${__dirname}/altarItems.json`,
      JSON.stringify(formatAltarUpdate(data, newItem)),
      (err) => {
        if (err) throw err;
        printCandleLit();
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

    printAltar(JSON.parse(data));
  });
}
