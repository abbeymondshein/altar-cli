const {
  printFlame,
  printCandleWithColor,
  printCandleIntentions,
  printShelf,
} = require("./print");
const { loadAltarTitle } = require("./utils");

module.exports = Object.freeze({
  printAltar: (altarItems) => {
    printFlame(altarItems.length);
    printCandleWithColor(altarItems);
    printShelf();
    printCandleIntentions(altarItems);
  },
});
