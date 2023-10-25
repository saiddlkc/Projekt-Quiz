import chalk from "chalk";
import { setTimeout as sleep } from "timers/promises";
import figlet from "figlet";
import enquirer from "enquirer";
import importedQuestions from "./fakedataenquire.js";

function getRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * importedQuestions.length);
  return importedQuestions.splice(randomIndex, 1)[0];
}
let lastChance =
  " Jetzt musst du aufpassen, noch ein Fehler und Dobby muss sterben.";
(async function () {})();

const { Select } = enquirer;

(async function () {
  console.clear();
  const { name } = await enquirer.prompt({
    type: "input",
    name: "name",
    message: "Name eingeben:",
  });

  console.clear();
  figlet(`Willkommen bei meinem QUIZ, ${name}!`, function (err, data) {
    console.log(data);
  });

  await sleep(2000);

  console.log(
    chalk.yellowBright(
      "Hilf Dobby zu entkommen, indem du 6 Fragen richtig beantwortest. Aber pass auf, wenn du zu viele Fehler machst, muss Dobby sterben."
    )
  );

  await enquirer.prompt({
    type: "input",
    name: "continue",
    message: "Drücke Enter, um fortzufahren...",
  });

  await sleep(1000);

  let score = 0;
  let countAnswer = 0;
  let wrongAnswerCount = 0;

  function winGame(score) {
    if (score > 5) {
      figlet("GEWONNEN", function (err, data) {
        console.clear();
        console.log(
          chalk.blue(
            `${name} hat ${countAnswer} Fragen richtig beantwortet und somit Dobby eine Socke geschenkt. Dobby ist jetzt FREI!`
          )
        );
        console.log(chalk.green(data));
        process.exit();
      });
    }
  }

  function endGame(wrongAnswerCount) {
    if (wrongAnswerCount > 1) {
      console.clear();
      figlet("GAME OVER", function (err, data) {
        console.log(
          chalk.blue(
            `${name} hat nur ${countAnswer} Fragen richtig beantwortet und zu viele Fehler gemacht. Dobby muss jetzt sterben.`
          )
        );
        console.log(chalk.red(data));
        console.log(
          chalk.yellow(
            `Dobby sagt Fck You ${name} du MANYAK bevor er getötet wird`
          )
        );
        process.exit();
      });
    }
  }

  async function askQuestion() {
    const question = getRandomQuestion();

    console.clear();
    console.log(chalk.blue(`FRAGE ${countAnswer + 1}`));
    console.log(question.question);

    const { answer } = await enquirer.prompt({
      type: "select",
      name: "answer",
      message: "Antwort auswählen:",
      choices: question.options,
    });

    if (answer === question.answer) {
      console.log(
        chalk.green(
          `Richtige Antwort, gut gemacht ${name}! Hier kommt die nächste Frage.`
        )
      );
      score++;
      countAnswer++;
      winGame(score);
    } else {
      console.log(
        chalk.red(
          `Falsche Antwort. Die richtige Antwort ist ${question.answer}.${lastChance}`
        )
      );
      wrongAnswerCount++;
      endGame(wrongAnswerCount);
      await enquirer.prompt({
        type: "input",
        name: "continue",
        message: "Drücke Enter, um fortzufahren...",
      });
    }

    if (importedQuestions.length > 0) {
      await sleep(2000);
      askQuestion();
    } else {
      console.log(
        chalk.blue(
          `${name} hat alle Fragen beantwortet. Das Quiz ist beendet. Dobby ist frei!
          ${customFigletText} `
        )
      );
      process.exit();
    }
  }

  askQuestion();
})();
