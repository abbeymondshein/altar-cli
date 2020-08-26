const o = require("ora");
const { ADDED_MESSAGE } = require("./constants");
const { addingMessage } = require("./constants");

module.exports = Object.freeze({
  animateAddingCandle: (candle, intention) => {
    const spinner = o().start();
    setTimeout(() => {
      spinner.spinner = "moon";
      spinner.text = addingMessage(candle, intention)[0];
    }, 500);
    setTimeout(() => {
      spinner.text = addingMessage(candle, intention)[1];
    }, 2000);
    setTimeout(() => {
      spinner.succeed(ADDED_MESSAGE);
    }, 3500);
  },
  animateAltarCleared: () => {
    const clearAltar = o().start();
    setTimeout(() => {
      clearAltar.color = "blue";
      clearAltar.spinner = "noise";
      clearAltar.text = "clearing altar...";
    });
    setTimeout(() => {
      clearAltar.succeed("altar cleared!");
    }, 1500);
  },
});
