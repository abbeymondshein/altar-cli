const c = require("chalk");
const {
  CANDLE,
  FLAME,
  SHELF,
  APPROVED_COLORS,
  NOT_APPROVED_COLOR_MESSAGE,
  ADDED_MESSAGE,
} = require("./constants");

module.exports = Object.freeze({
  printFlame: (itemQuantity) => {
    console.log(`${c.yellow(FLAME.repeat(itemQuantity))}`);
  },
  printNotApprovedColor: () => {
    console.log(NOT_APPROVED_COLOR_MESSAGE);
    console.log(APPROVED_COLORS);
  },
  printCandleLit: () => {
    console.log(ADDED_MESSAGE);
  },
  printCandleWithColor: (altarItems) => {
    const combined = [];
    altarItems.forEach((element) => {
      const { color } = element;
      combined.push(`${c[color](CANDLE)}`);
    });
    console.log(combined.join(""));
  },
  printCandleIntentions: (altarItems) => {
    altarItems.forEach((candleEntry) => {
      const { color, intention } = candleEntry;
      console.log(`${c[color](intention)}`);
    });
  },
  printShelf: () => {
    console.log(SHELF);
  },
});
