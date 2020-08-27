const c = require("chalk");

module.exports = Object.freeze({
  FLAME: " ▴",
  CANDLE: " ┃",
  DIVIDER: "◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆",
  SHELF: "┍━━━━━━━━━━━━━━━━┑",
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
  ADDED_MESSAGE: "candle successfully lit!",
  NOT_APPROVED_COLOR_MESSAGE: `The color you have chosen is not an approved option.`,
  addingMessage: (color, intention) => {
    return [
      `Placing a new ${color} candle on the altar. `,
      `Lighting the candle, and setting the intention: ${intention}`,
    ];
  },
  EMPTY_MESSAGE: `Your Altar is currently empty.
You can add a candle using the command:
  altar -c <color> <intention>`,
  CHAIN_PATTERN: "⟖⟗⟕",
  ALTAR_CALVIN: `  ┌─┐┬ ┌┬┐┌─┐┬─┐
  ├─┤│  │ ├─┤├┬┘
  ┴ ┴┴─┘┴ ┴ ┴┴└─`,
  FLOWER: "✿", // flower options: ✿✽✾❁❃❊❋⚘❀
});
