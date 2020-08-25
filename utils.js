const { COLOR_OPTIONS } = require("./constants");

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
});
