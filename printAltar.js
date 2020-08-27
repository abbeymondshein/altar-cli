const {
  printCandleIntentions,
  printShelf,
  printAltarItems,
} = require("./print");
const { loadAltarTitle } = require("./utils");

module.exports = Object.freeze({
  printAltar: (altarItems) => {
    printAltarItems(altarItems);
    printShelf();
    printCandleIntentions(altarItems);
  },
});
