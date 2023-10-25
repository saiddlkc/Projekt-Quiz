import readlineSync from "readline-sync";
import chalk from "chalk";
import { setTimeout as sleep } from "timers/promises";
import figlet from "figlet";
import importedQuestions from "./faktedata.js";

console.clear;
let userName = readlineSync.question(chalk.yellow("Name eingeben:"));
console.clear();
figlet(
  `Willkommen bei meinem QUIZ.  Meister ${userName}`,
  function (err, data) {
    console.log(data);
  }
);
await sleep(2000);
console.log(
  chalk.yellowBright(
    "Hilf Dobby zu entkommen, indem du 6 Fragen richtig beantwortest. Aber pass auf wenn du zuviele Fehler machst muss Dobby sterben."
  )
);
readlineSync.keyInPause("Drücke eine beliebige Taste, um fortzufahren...");
await sleep(1000);

let score = 0; // zähl richtige antwort
let countAnswer = 0; // zähl wieviele Fragen richtig gemacht gib ende zurück
let wrongAnswerCount = 0; // zähl wieviele Fragen falsch gemacht
let lastChance =
  " Jetzt musst du aufpassen, noch einen Fehler und Dobbys kopf wird rollen.";

//  Zähl  wv Fragen richtig wenn größer als 5 WIN
function winGame(score) {
  if (score > 5)
    figlet("GEWONNEN", function (err, data) {
      console.clear();
      console.log(
        chalk.blue(
          `Meister hat ${countAnswer} Fragen richtig beantwortet. Dobby ist jetzt FREI`
        )
      );
      console.log(chalk.green(data));
      process.exit();
    });
}

//  Zähl wv Fragen falsch wenn größer als 1 dann beende Spiel
function endGame(wrongAnswerCount) {
  if (wrongAnswerCount > 1) {
    console.clear();
    figlet("GAME OVER", function (err, data) {
      console.log(
        chalk.blue(
          `Meister ${userName} hat nur  ${countAnswer} richtig und zuviele Fehler gemacht`
        )
      );
      console.log(chalk.red("Dobby muss jetzt sterben."));

      console.log(chalk.red(data));
      process.exit();
    });
  }
}

function getRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * importedQuestions.length);
  return importedQuestions.splice(randomIndex, 1)[0];
}

let currentQuestion = getRandomQuestion();

while (currentQuestion) {
  // solange fragen true ist führe currentQuestion aus
  console.clear();
  console.log(chalk.blue(`FRAGE ${countAnswer + 1}`));
  console.log(currentQuestion.question);
  console.log(currentQuestion.options);

  let userAnswer = readlineSync.question(
    "(Gib die Antwort ein - a, b, c oder d): "
  );

  if (userAnswer.toLowerCase() === currentQuestion.answer) {
    // WENN WAHR
    console.log(
      chalk.green(
        `Richtige Antwort, gut gemacht ${userName}! Hier kommt die nächste Frage `
      )
    );
    score++;
    countAnswer++;
    winGame(score);
  } else {
    // WENN NICHT WAHR

    console.log(
      chalk.red(
        `Falsche Antwort. Die richtige Antwort ist ${currentQuestion.answer}.${lastChance}`
      )
    );
    await sleep(2500);
    wrongAnswerCount++;
    endGame(wrongAnswerCount);
  }

  if (importedQuestions.length > 0) {
    await sleep(2000);
    currentQuestion = getRandomQuestion();
  } else {
    break;
  }
}
