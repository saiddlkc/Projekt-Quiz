import readlineSync from "readline-sync";
// import chalk from "chalk";
// import chalkAnimation from "chalk-animation";
// import { createSpinner } from "nanospinner";
import { setTimeout as sleep } from "timers/promises";

var userName = readlineSync.question("Wer bist du denn? ");

// var figlet = require("figlet");

// figlet(`Willkommen ${userName}`, function (err, data) {
//   console.log(data);
// });
console.clear();
console.log("Sag das doch gleich " + userName + " Willkommen bei unserem Quiz");

await sleep(3000); // Zeitverzögerung in ms

// console.log("Wähle aus in welcher Kategorie du dein Quiz spielen willst");

let score = 0;
