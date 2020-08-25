const {
  printFlame,
  printCandleWithColor,
  printCandleIntentions,
  printShelf,
} = require("./print");
const { SHELF } = require("./constants");

module.exports = Object.freeze({
  printAltar: (altarItems) => {
    printFlame(altarItems.length);
    printCandleWithColor(altarItems);
    printShelf();
    printCandleIntentions(altarItems);
  },
});
