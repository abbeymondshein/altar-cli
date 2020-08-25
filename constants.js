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
  APPROVED_COLORS: `OPTIONS: ${c.bgRed(" red ")} ${c.bgGreen(
    " green "
  )} ${c.bgYellow(" yellow ")} ${c.bgBlue(" blue ")} ${c.bgMagenta(
    " magenta "
  )} ${c.bgCyan(" cyan ")} ${c.bgWhiteBright.black(" white ")} ${c.bgGrey(
    " grey "
  )}
  `,
  ADDED_MESSAGE: "candle successfully lit!",
  NOT_APPROVED_COLOR_MESSAGE: `The color you have chosen is not an approved option.`,
});
