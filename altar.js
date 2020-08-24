#!/usr/bin/env node
const { program } = require("commander");
const fs = require("fs");

program
  .option("-l, --load", "Load Altar")
  .description("Create and maintain an altar practice via the Command Line.")
  .parse(process.argv);

console.log(`
%%%%%%%%%%%%%%%%
Welcome to Altar
%%%%%%%%%%%%%%%%

for options & help, enter "altar -h"
`);

if (program.load) {
  console.log("Loading altar");
}

fs.readFile("./altarItems.json", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
