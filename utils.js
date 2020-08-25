const { COLOR_OPTIONS } = require("./constants");

module.exports = Object.freeze({
  verifyColor: (color) => {
    return COLOR_OPTIONS.includes(color);
  },
});
