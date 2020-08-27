const c = require("chalk");
const {
  CANDLE,
  FLAME,
  SHELF,
  APPROVED_COLORS,
  NOT_APPROVED_COLOR_MESSAGE,
  addingMessage,
  DIVIDER,
  HELP_MESSAGE,
  EMPTY_MESSAGE,
  ALTAR_CALVIN,
  FLOWER,
  STEM,
} = require("./constants");

module.exports = Object.freeze({
  printNotApprovedColor: () => {
    console.log(NOT_APPROVED_COLOR_MESSAGE);
    console.log(APPROVED_COLORS);
  },
  printAltarItems: (altarItems) => {
    const topRow = [];
    const bottomRow = [];
    altarItems.forEach(({ color, isFlower }) => {
      if (isFlower) {
        topRow.push(`${c[color](FLOWER)}`);
        bottomRow.push(`${c.green(STEM)}`);
      } else {
        topRow.push(`${c.yellow(FLAME)}`);
        bottomRow.push(`${c[color](CANDLE)}`);
      }
    });
    console.log(`${topRow.join("")}
${bottomRow.join("")}`);
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
