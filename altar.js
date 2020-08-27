#!/usr/bin/env node
const { program } = require("commander");
const fs = require("fs");
const {
  printNotApprovedColor,
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
const { APPROVED_COLORS } = require("./constants");
const { animateAddingCandle, animateAltarCleared } = require("./loaders");

program
  .option("-l, --load", "Load Altar")
  .option("-t, --title <title>", "Update the title of your Altar")
  .option("-x, --clear", "Clear Altar of all Items")
  .option("-c, --candle <color>", `Add a candle: color is required.`)
  .option("-f, --flower <color>", `Add a flower: color is required.`)
  .option(
    "-rm --remove <itemNumber>",
    `Remove a specific candle by number. 
    (Starting with 1, ex: __1, 2, 3__)`
  )
  .description(
    `Create and maintain an altar practice via the Command Line.

Some options require a color selection.
${APPROVED_COLORS} `
  )
  .parse(process.argv);

const { load, candle, clear, remove, args, title } = program;
const opts = program.opts();

// Only print welcome message when a flag is not included
!Object.values(opts).includes(true) && printWelcomeMessage();

if (candle) {
  if (!verifyColor(candle)) {
    printNotApprovedColor();
    return;
  }

  const intention = args.join(" ");
  const newItem = formatItemToAdd(candle, intention);

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
        animateAddingCandle(candle, intention);
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
  animateAltarCleared();
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
