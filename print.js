const c = require("chalk");
const {
  CANDLE,
  FLAME,
  SHELF,
  APPROVED_COLORS,
  NOT_APPROVED_COLOR_MESSAGE,
  ADDED_MESSAGE,
  addingMessage,
  DIVIDER,
  HELP_MESSAGE,
  EMPTY_MESSAGE,
  ALTAR_CALVIN,
} = require("./constants");

module.exports = Object.freeze({
  printFlame: (itemQuantity) => {
    console.log(`${c.yellow(FLAME.repeat(itemQuantity))}`);
  },
  printNotApprovedColor: () => {
    console.log(NOT_APPROVED_COLOR_MESSAGE);
    console.log(APPROVED_COLORS);
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
    // TODO: add second shelf when need additional space
    console.log(SHELF);
  },
  printAddingNewItem: (color, intention) => {
    console.log(addingMessage(color, intention));
  },
  printWelcomeMessage: () => {
    console.log(` ${DIVIDER} 
  ⟄ welcome to ⟃
${ALTAR_CALVIN}
 ${DIVIDER}
    
${HELP_MESSAGE}
    `);
  },
  printEmptyMessage: () => {
    console.log(EMPTY_MESSAGE);
  },
  printRemoveItem: (itemNumber, removedItem) => {
    const { color, intention } = removedItem[0];
    console.log(`candle ${itemNumber} removed (${color}, ${intention})`);
  },
  printAltarTitle: (title) => {
    //   ⟄❂ ❂⟃
    console.log(` ⟢  ${title} ⟣  `);
  },
});
