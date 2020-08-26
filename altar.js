#!/usr/bin/env node
const { program } = require("commander");
const fs = require("fs");
const {
  printNotApprovedColor,
  printCandleLit,
  printAddingNewItem,
  printWelcomeMessage,
  printEmptyMessage,
  printRemoveItem,
  printAltarTitle,
} = require("./print");
const { printAltar } = require("./printAltar");
const {
  verifyColor,
  formatItemToAdd,
  formatAltarUpdate,
  loadAltarTitle,
} = require("./utils");

program
  .option("-l, --load", "Load Altar")
  .option("-j, --json", "Load from JSON File")
  .option("-c, --candle <color>", "Add a candle")
  .option("-x, --clear", "Clear Altar of all Items")
  .option("-t, --title <title>", "Update the title of your Altar")
  .option(
    "-rm --remove <candleNumberLTR>",
    "Remove a specific candle by number. (Right-To-Left, Starting with 1)"
  )
  .description("Create and maintain an altar practice via the Command Line.")
  .parse(process.argv);

const { load, candle, clear, remove, args, title } = program;
const opts = program.opts();

// Only print welcome message a flag is not included
!Object.values(opts).includes(true) && printWelcomeMessage();

if (candle) {
  if (!verifyColor(candle)) {
    printNotApprovedColor();
    return;
  }

  const intention = args.join(" ");
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

    if (JSON.parse(data).length < 1) {
      printEmptyMessage();
    }

    printAltarTitle(loadAltarTitle());
    printAltar(JSON.parse(data));
  });
}

if (clear) {
  fs.writeFile(`${__dirname}/altarItems.json`, JSON.stringify([]), (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
  // TODO: Extract and animate with ora
  console.log("ALTAR CLEARED");
}

if (remove) {
  fs.readFile(`${__dirname}/altarItems.json`, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const currentAltarItems = JSON.parse(data);

    if (currentAltarItems.length < 1) {
      printEmptyMessage();
    }

    const removedAltarItem = currentAltarItems.splice(remove - 1, remove);

    fs.writeFile(
      `${__dirname}/altarItems.json`,
      JSON.stringify(currentAltarItems),
      (err) => {
        if (err) throw err;
        printRemoveItem(remove, removedAltarItem);
      }
    );
  });
}

if (title) {
  const newTitle = args ? title + " " + args.join(" ") : title;

  fs.writeFile(
    `${__dirname}/altarCustomization.json`,
    JSON.stringify([
      {
        title: newTitle,
      },
    ]),
    (err) => {
      if (err) {
        console.error(err);
        return;
      }
    }
  );

  console.log(`Altar re-named: ${newTitle}`);
}
