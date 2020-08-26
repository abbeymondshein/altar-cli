const { COLOR_OPTIONS } = require("./constants");
const fs = require("fs");
const { printAltarTitle } = require("./print");

module.exports = Object.freeze({
  verifyColor: (color) => {
    return COLOR_OPTIONS.includes(color);
  },
  formatItemToAdd: (color, intention) => {
    return {
      color,
      intention,
    };
  },
  formatAltarUpdate: (data, newItem) => {
    const altarItems = JSON.parse(data);

    const modifiedAltarItems = Object.assign([], altarItems);

    modifiedAltarItems.push(newItem);
    return modifiedAltarItems;
  },
  addItemToAltar: (altar, newItem) => {},
  loadAltarTitle: () => {
    const data = JSON.parse(
      // readFileSync is blocking to ensure title loaded before logging altar
      fs.readFileSync(`${__dirname}/altarCustomization.json`, "utf8")
    );
    return data[0].title;
  },
});
