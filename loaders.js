const o = require("ora");
const { generateAddedMessage } = require("./constants");
const { addingMessage } = require("./constants");

module.exports = Object.freeze({
  animateAddingItem: (item, intention, isFlower) => {
    const spinner = o().start();
    setTimeout(() => {
      spinner.spinner = "moon";
      spinner.text = addingMessage(item, intention, isFlower)[0];
    }, 500);
    setTimeout(() => {
      spinner.text = addingMessage(item, intention, isFlower)[1];
    }, 2000);
    setTimeout(() => {
      spinner.succeed(generateAddedMessage(isFlower));
    }, 3000);
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
