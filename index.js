import readlineSync from "readline-sync";
import chalk from "chalk";
import { createSpinner } from "nanospinner";
import { setTimeout as sleep } from "timers/promises";
import figlet from "figlet";

let userName = readlineSync.question(chalk.yellow("Wer bist du denn? "));
console.clear();
figlet(
  `Willkommen beim JS  QUIZ. | MASTER   ${userName}`,
  function (err, data) {
    console.log(data);
  }
);
await sleep(1000);

let ask = readlineSync.question(
  chalk.yellow("Wollen wir Anfangen? (y) / (n) ")
);
if (ask.toLowerCase() === "y") {
  console.clear();
  console.log(
    "Welches der folgenden wörter wird verwendet, um eine Variable zu definieren?"
  );
  await sleep(1000);
  console.log(chalk.yellow("1. const"));
  await sleep(1000);
  console.log(chalk.yellow("2. let"));
  await sleep(1000);
  console.log(chalk.yellow("3. 1 und 2"));
  await sleep(1000);
  console.log(chalk.yellow("4. shabang"));
  let correctAnswer = 3;

  let userAnswer = readlineSync.question("(Gib die Nummer der Antwort ein): ");

  if (parseInt(userAnswer) === correctAnswer) {
    console.log(chalk.green("Richtige Antwort!"));
  } else {
    console.log(
      chalk.red("Falsche Antwort. Die richtige Antwort ist 3 (1 und 2).")
    );
  }
} else if (ask.toLowerCase() === "n") {
  console.log("Spiel abgebrochen.");
} else {
  console.log("Ungültige Eingabe. Bitte nur 'y' oder 'n' eingeben.");
}
