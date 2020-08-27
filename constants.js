const c = require("chalk");

module.exports = Object.freeze({
  FLAME: " ▴",
  CANDLE: " ┃",
  FLOWER: " ✿", // unicode flower options: ✿✽✾❁❃❊❋⚘❀
  STEM: " ┝", // ┝├ᛉ
  DIVIDER: "◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆",
  SHELF: "┍━━━━━━━━━━━━━━━━┑", // only fits ~8 items
  COLOR_OPTIONS: [
    "black",
    "red",
    "green",
    "yellow",
    "blue",
    "magenta",
    "cyan",
    "white",
    "gray",
    "redBright",
    "greenBright",
    "yellowBright",
    "blueBright",
    "magentaBright",
    "cyanBright",
    "whiteBright",
  ],
  APPROVED_COLORS: `COLOR OPTIONS: 
  ${c.black.bgRed(" red ")} ${c.black.bgGreen(" green ")} ${c.black.bgYellow(
    " yellow "
  )} ${c.white.bgBlue(" blue ")} 
  ${c.black.bgMagenta(" magenta ")} ${c.black.bgCyan(
    " cyan "
  )} ${c.bgWhiteBright.black(" white ")} ${c.black.bgGrey(" grey ")} `,
  HELP_MESSAGE: `for options & help, 
enter ${c.bold.redBright("altar -h")}`,
  generateAddedMessage: (isFlower) => {
    return isFlower
      ? "flower successfully placed!"
      : "candle successfully lit!";
  },
  NOT_APPROVED_COLOR_MESSAGE: `The color you have chosen is not an approved option.`,
  addingMessage: (color, intention, isFlower) => {
    return [
      `Placing a new ${color} ${isFlower ? "flower" : "candle"} on the altar. `,
      `${
        !isFlower ? "Lighting the candle, and " : ""
      }setting the intention: ${intention}`,
    ];
  },
  EMPTY_MESSAGE: `Your Altar is currently empty.
You can add a candle using the command:
  altar -c <color> <intention>`,
  CHAIN_PATTERN: "⟖⟗⟕",
  ALTAR_CALVIN: `  ┌─┐┬ ┌┬┐┌─┐┬─┐
  ├─┤│  │ ├─┤├┬┘
  ┴ ┴┴─┘┴ ┴ ┴┴└─`,
});
