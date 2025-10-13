// 2) გადმოიწერეთ module - ები და გააკეთეთ მაგალითები, ივარჯიშეთ import/export - ებზე

import { Chance } from "chance";
import chalk from "chalk";

const newChance = new Chance();

console.log(chalk.red(newChance.name()))
console.log(chalk.blue(newChance.age()))
console.log(chalk.black(newChance.address()))
console.log(chalk.white(newChance.phone()))

