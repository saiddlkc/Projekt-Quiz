import readlineSync from "readline-sync";
import chalk from "chalk";
import { setTimeout as sleep } from "timers/promises";
import figlet from "figlet";
import importedQuestions from "./faktedata.js";
console.log(importedQuestions[0].question);
console.log(importedQuestions[0].options);

console.clear;
let userName = readlineSync.question(chalk.yellow("Name eingeben:"));
console.clear();
figlet(`Willkommen bei meinem QUIZ.  ${userName}`, function (err, data) {
  console.log(data);
});
await sleep(1000);
console.log(chalk.yellowBright("LOS GEHTS "));
await sleep(2000);
let wrongAnswerCount = 0;
let lastChance =
  " Jetzt musst du aufpassen, noch einen Fehler dürfen wir uns nicht erlauben.";

function endGame(wrongAnswerCount) {
  if (wrongAnswerCount > 1) {
    figlet("GAME OVER", function (err, data) {
      console.log(chalk.red(data));
      process.exit();
    });
  }
}

// FRAGE 1
console.clear();
console.log(chalk.blue("FRAGE 1"));
console.log("Wie viele Kontinente gibt es auf der Erde?");
console.log(chalk.yellow("a) 5"));
console.log(chalk.yellow("b) 6"));
console.log(chalk.yellow("c) 7"));
console.log(chalk.yellow("d) 8"));
let correctAnswer = "c";

let userAnswer = readlineSync.question(
  "(Gib die Antwort ein - a, b, c oder d): "
);

if (userAnswer.toLowerCase() === correctAnswer) {
  console.log(
    chalk.green(
      `Richtige Antwort, gut gemacht ${userName}! Hier kommt die nächste Frage `
    )
  );
} else {
  console.log(
    chalk.red(
      `Falsche Antwort. Die richtige Antwort ist ${correctAnswer}.${lastChance}`
    )
  );
  wrongAnswerCount++;
  await sleep(3000);
}

// FRAGE 2
console.clear();
console.log(chalk.blue("FRAGE 2"));
console.log("Wie lautet die Hauptstadt von Spanien?");
console.log(chalk.yellow("a) Madrid"));
console.log(chalk.yellow("b) Barcelona"));
console.log(chalk.yellow("c) Rom"));
console.log(chalk.yellow("d) Neapel"));
let correctAnswer2 = "a";

let userAnswer2 = readlineSync.question(
  "(Gib die Antwort ein - a, b, c oder d): "
);

if (userAnswer2.toLowerCase() === correctAnswer2) {
  console.log(
    chalk.green(`Sehr gut  ${userName}! Hier kommt die nächste Frage`)
  );
} else {
  console.log(
    chalk.red(
      `Falsche Antwort. Die richtige Antwort ist ${correctAnswer2}.${lastChance}`
    )
  );
  wrongAnswerCount++;
}

endGame(wrongAnswerCount);
await sleep(2000);

// FRAGE 3
console.clear();
console.log(chalk.blue("FRAGE 3"));
console.log("Welcher Berg ist der höchste Berg der Welt?");
console.log(chalk.yellow("a) Zugspitze"));
console.log(chalk.yellow("b) Schöneberg"));
console.log(chalk.yellow("c) Manaslu"));
console.log(chalk.yellow("d) Mount Everest"));
let correctAnswer3 = "d";

let userAnswer3 = readlineSync.question(
  "(Gib die Antwort ein - a, b, c oder d): "
);

if (userAnswer3.toLowerCase() === correctAnswer3) {
  console.log(
    chalk.green(`Sehr gut  ${userName}! Hier kommt die nächste Frage`)
  );
} else {
  console.log(
    chalk.red(
      `Falsche Antwort. Die richtige Antwort ist ${correctAnswer3}.${lastChance}`
    )
  );
  wrongAnswerCount++;
}
endGame(wrongAnswerCount);

await sleep(2000);
// FRAGE 4
console.clear();
console.log(chalk.blue("FRAGE 4"));
console.log("In welcher Stadt lebte der Detektiv Sherlock Holmes?");
console.log(chalk.yellow("a) Düsseldorf"));
console.log(chalk.yellow("b) Manchester"));
console.log(chalk.yellow("c) London"));
console.log(chalk.yellow("d) Tokyo"));
let correctAnswer4 = "c";

let userAnswer4 = readlineSync.question(
  "(Gib die Antwort ein - a, b, c oder d): "
);

if (userAnswer4.toLowerCase() === correctAnswer4) {
  console.log(
    chalk.green(
      `du bist eine Maschine ${userName}! Hier kommt die nächste Frage`
    )
  );
} else {
  console.log(
    chalk.red(
      `Falsche Antwort. Die richtige Antwort ist ${correctAnswer4}.${lastChance}`
    )
  );
  wrongAnswerCount++;
}
endGame(wrongAnswerCount);

await sleep(2000);
// FRAGE 5
console.clear();
console.log(chalk.blue("FRAGE 5"));
console.log("Welches Unternehmen hat das iPhone entwickelt?");
console.log(chalk.yellow("a) Microsoft"));
console.log(chalk.yellow("b) Apple"));
console.log(chalk.yellow("c) Xiamoi"));
console.log(chalk.yellow("d) Blizzard"));
let correctAnswer5 = "b";

let userAnswer5 = readlineSync.question(
  "(Gib die Antwort ein - a, b, c oder d): "
);

if (userAnswer5.toLowerCase() === correctAnswer5) {
  console.log(chalk.green(`du bist Krass ${userName}! Weiter gehts`));
} else {
  console.log(
    chalk.red(
      `Falsche Antwort. Die richtige Antwort ist ${correctAnswer5}.${lastChance}`
    )
  );
  wrongAnswerCount++;
}
endGame(wrongAnswerCount);
await sleep(2000);
// FRAGE 6

console.clear();
console.log(chalk.blue("FRAGE 6"));
console.log("In welchem Land haben die Spartaner gelebt?");
console.log(chalk.yellow("a) Griechenland"));
console.log(chalk.yellow("b) Türkei"));
console.log(chalk.yellow("c) Ägypten"));
console.log(chalk.yellow("d) Azeroth"));
let correctAnswer6 = "a";

let userAnswer6 = readlineSync.question(
  "(Gib die Antwort ein - a, b, c oder d): "
);

if (userAnswer6.toLowerCase() === correctAnswer6) {
  console.log(chalk.green(`Super ${userName}! Weiter so`));
} else {
  console.log(
    chalk.red(
      `Falsche Antwort. Die richtige Antwort ist ${correctAnswer6}.${lastChance}`
    )
  );
  wrongAnswerCount++;
}
endGame(wrongAnswerCount);
await sleep(2000);
// FRAGE 7

console.clear();
console.log(chalk.blue("FRAGE 7"));
console.log("Welcher Schauspieler spielte die Hauptrolle in Inception");
console.log(chalk.yellow("a) Johnny Depp"));
console.log(chalk.yellow("b) Booker De Witt"));
console.log(chalk.yellow("c) Arthur Morgan"));
console.log(chalk.yellow("d) Leonardo DiCaprio"));
let correctAnswer7 = "d";

let userAnswer7 = readlineSync.question(
  "(Gib die Antwort ein - a, b, c oder d): "
);

if (userAnswer7.toLowerCase() === correctAnswer7) {
  console.log(chalk.green(`Super ${userName}! Weiter so`));
} else {
  console.log(
    chalk.red(
      `Falsche Antwort. Die richtige Antwort ist ${correctAnswer7}.${lastChance}`
    )
  );
  wrongAnswerCount++;
}
endGame(wrongAnswerCount);
await sleep(2000);
// FRAGE 8

console.clear();
console.log(chalk.blue("FRAGE 8"));
console.log(
  "Welches Videospiel ermöglicht es Spielern, in einer offenen Welt Bauklötze zu platzieren und zu entfernen?"
);
console.log(chalk.yellow("a) Minecraft"));
console.log(chalk.yellow("b) Fortnite"));
console.log(chalk.yellow("c) Final Fantasy"));
console.log(chalk.yellow("d) GTA VICE CITY"));
let correctAnswer8 = "a";

let userAnswer8 = readlineSync.question(
  "(Gib die Antwort ein - a, b, c oder d): "
);

if (userAnswer8.toLowerCase() === correctAnswer8) {
  console.log(chalk.green(`du bist echt Gut ${userName}! fast geschafft`));
} else {
  console.log(
    chalk.red(
      `Falsche Antwort. Die richtige Antwort ist ${correctAnswer8}.${lastChance}`
    )
  );
  wrongAnswerCount++;
}
endGame(wrongAnswerCount);
await sleep(2000);
// FRAGE 9

console.clear();
console.log(chalk.blue("FRAGE 9"));
console.log(
  "Welches Videospiel basiert auf einem postapokalyptischen Ödland und bietet zahlreiche Möglichkeiten für Entscheidungen und Handlungen?"
);
console.log(chalk.yellow("a) Roblox"));
console.log(chalk.yellow("b) GTA V"));
console.log(chalk.yellow("c) The Witcher 3: Wild Hunt"));
console.log(chalk.yellow("d) Fallout"));
let correctAnswer9 = "d";

let userAnswer9 = readlineSync.question(
  "(Gib die Antwort ein - a, b, c oder d): "
);

if (userAnswer9.toLowerCase() === correctAnswer9) {
  console.log(chalk.green(`du bist echt Gut ${userName}! fast geschafft`));
} else {
  console.log(
    chalk.red(
      `Falsche Antwort. Die richtige Antwort ist ${correctAnswer9}.${lastChance}`
    )
  );
  wrongAnswerCount++;
}
endGame(wrongAnswerCount);
await sleep(2000);
// FRAGE 10

console.clear();
console.log(chalk.blue("LETZTE KNOCKOUT FRAGE"));
console.log(" Welches Gas atmen Pflanzen ein und welches Gas geben sie ab");
console.log(chalk.yellow("a) Sauerstoff ein, Kohlendioxid ab "));
console.log(chalk.yellow("b) Kohlendioxid ein, Sauerstoff ab"));
console.log(chalk.yellow("c) Wasserstoff ein, Sauerstoff ab"));
console.log(chalk.yellow("d) Stickstoff ein, Kohlendioxid ab"));
let correctAnswer10 = "b";

let userAnswer10 = readlineSync.question(
  "(Gib die Antwort ein - a, b, c oder d): "
);

if (userAnswer10.toLowerCase() === correctAnswer10) {
  figlet(`DU HAST GEWONNEN ${userName}`, function (err, data) {
    console.log(chalk.green(data));
  });
} else {
  endGame();
  wrongAnswerCount++;
}
endGame(wrongAnswerCount);
