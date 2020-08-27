# Altar CLI

_A Command Line app to create and maintain an altar practice_

![A CLI app to create and maintain an altar practice](/showcase/gh-banner.png "Create and maintain an altar practice via the Command Line.")

---

## Installation

### Clone

Inside your chosen terminal app (I recommend [hyper](https://hyper.is/)), clone this repository to your local environment using the command

`git clone https://github.com/abbeymondshein/altar-cli.git`

### Setup

Once you've cloned the repository, navigate to the folder using the command `cd altar-cli`. Once there, you can install Altar globally with the following command:

```shell
$ npm install -g .
```

### Interface

> Once you've installed it globally, you're ready to go! To easily get started, just enter `altar`. Entering `altar -h` will pull up a full list of the available commands and actions.

#### Available Commands

The following commands can be used following the `altar` keyword to maintain your altar.

| Command                        | Action                                              | Example                                   |
| ------------------------------ | --------------------------------------------------- | ----------------------------------------- |
| `-h`, `--help`                 | Displays Help Menu (Detailing all commands)         | `altar -h`                                |
| `-l`, `--load`                 | Loads Altar                                         | `altar -l`                                |
| `-t`,`--title <title>`         | Update the title of your Altar                      | `altar -t My Amazing Altar`               |
| `-x`, `--clear`                | Clear Altar of all items                            | `altar -x`                                |
| `-c` ,`--candle <color>`       | Light a candle. Color required, intention optional. | `altar -c red offering for ancestors`     |
| `-f`, `--flower <color>`       | Place a flower. Color required, intention optional. | `altar -f cyan growth`                    |
| `-rm`, `--remove <itemNumber>` | Remove a specific item by number. (Starts at 1.)    | `altar -rm 2` (remove 2nd item from left) |
