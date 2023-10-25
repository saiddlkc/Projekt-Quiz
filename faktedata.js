const questions = [
  {
    question: "Welches Land ist das größte der Welt?",
    options: ["a) Russland", "b) China", "c) Indien", "d) USA"],
    answer: "a",
  },
  {
    question: "Was ist die Hauptstadt von Spanien?",
    options: ["a) Madrid", "b) Barcelona", "c) Rom", "d) Neapel"],
    answer: "a",
  },
  {
    question: "Welcher Berg ist der höchste Berg der Welt?",
    options: [
      "a) Zugspitze",
      "b) Schöneberg",
      "c) Manaslu",
      "d) Mount Everest",
    ],
    answer: "d",
  },
  {
    question: "In welcher Stadt lebte der Detektiv Sherlock Holmes?",
    options: ["a) Düsseldorf", "b) Manchester", "c) London", "d) Tokyo"],
    answer: "c",
  },
  {
    question: "Welches Unternehmen hat das iPhone entwickelt?",
    options: ["a) Microsoft", "b) Apple", "c) Xiamoi", "d) Blizzard"],
    answer: "b",
  },
  {
    question: "In welchem Land haben die Spartaner gelebt?",
    options: ["a) Griechenland", "b) Türkei", "c) Ägypten", "d) Azeroth"],
    answer: "a",
  },
  {
    question: "Welcher Schauspieler spielte die Hauptrolle in Inception",
    options: [
      "a) Johnny Depp",
      "b) Booker De Witt",
      "c) Arthur Morgan",
      "d) Leonardo DiCaprio",
    ],
    answer: "d",
  },
  {
    question:
      "Welches Videospiel ermöglicht es Spielern, in einer offenen Welt Bauklötze zu platzieren und zu entfernen?",
    options: [
      "a) Minecraft",
      "b) Fortnite",
      "c) Final Fantasy",
      "d) GTA VICE CITY",
    ],
    answer: "a",
  },
  {
    question:
      "Welches Videospiel basiert auf einem postapokalyptischen Ödland und bietet zahlreiche Möglichkeiten für Entscheidungen und Handlungen?",
    options: [
      "a) Roblox",
      "b) GTA V",
      "c) The Witcher 3: Wild Hunt",
      "d) Fallout",
    ],
    answer: "d",
  },
  {
    question: "Welches Gas atmen Pflanzen ein und welches Gas geben sie ab?",
    options: [
      "a) Sauerstoff ein, Kohlendioxid ab",
      "b) Kohlendioxid ein, Sauerstoff ab",
      "c) Wasserstoff ein, Sauerstoff ab",
      "d) Stickstoff ein, Kohlendioxid ab",
    ],
    answer: "b",
  },
  {
    question: "Welches Tier ist der König des Dschungels?",
    options: ["a) Elefant", "b) Löwe", "c) Tiger", "d) Giraffe"],
    answer: "b",
  },
  {
    question: "Was ist die Hauptstadt von Kanada?",
    options: ["a) Toronto", "b) Vancouver", "c) Ottawa", "d) Montreal"],
    answer: "c",
  },
  {
    question: "Wer schrieb 'Romeo und Julia'?",
    options: [
      "a) Charles Dickens",
      "b) Jane Austen",
      "c) William Shakespeare",
      "d) Mark Twain",
    ],
    answer: "c",
  },
  {
    question: "Wie viele Spieler hat ein Fußballteam auf dem Feld?",
    options: ["a) 9", "b) 11", "c) 7", "d) 10"],
    answer: "b",
  },
  {
    question: "Welches ist das kleinste Säugetier der Welt?",
    options: ["a) Elefant", "b) Maus", "c) Fledermaus", "d) Eichhörnchen"],
    answer: "c",
  },
  {
    question: "Was ist die Hauptstadt von Australien?",
    options: ["a) Sydney", "b) Melbourne", "c) Brisbane", "d) Canberra"],
    answer: "d",
  },
  {
    question: "Wer schrieb 'Die Abenteuer des Huckleberry Finn'?",
    options: [
      "a) Jules Verne",
      "b) Mark Twain",
      "c) Agatha Christie",
      "d) George Orwell",
    ],
    answer: "b",
  },
  {
    question: "Wie viele Beine hat eine Spinne?",
    options: ["a) 4", "b) 6", "c) 8", "d) 10"],
    answer: "c",
  },
  {
    question: "Was ist der höchste Berg Europas?",
    options: ["a) Mont Blanc", "b) Matterhorn", "c) Alpamayo", "d) Elbrus"],
    answer: "a",
  },
  {
    question: "Welches Element hat die Ordnungszahl 79?",
    options: ["a) Gold", "b) Silber", "c) Blei", "d) Platin"],
    answer: "a",
  },
  {
    question: "Wer schrieb 'Der Zauberer von Oz'?",
    options: [
      "a) J.R.R. Tolkien",
      "b) L. Frank Baum",
      "c) Lewis Carroll",
      "d) Roald Dahl",
    ],
    answer: "b",
  },
  {
    question: "Wie viele Zeichen hat das griechische Alphabet?",
    options: ["a) 20", "b) 24", "c) 26", "d) 28"],
    answer: "c",
  },
  {
    question: "Welcher Planet ist der Zwillingsplanet der Erde?",
    options: ["a) Mars", "b) Venus", "c) Jupiter", "d) Saturn"],
    answer: "b",
  },
  {
    question: "Wer schrieb 'Der kleine Prinz'?",
    options: [
      "a) Antoine de Saint-Exupéry",
      "b) Victor Hugo",
      "c) Gustave Flaubert",
      "d) Marcel Proust",
    ],
    answer: "a",
  },
  {
    question: "Was ist die größte Insel der Welt?",
    options: ["a) Grönland", "b) Island", "c) Madagaskar", "d) Kuba"],
    answer: "a",
  },
  {
    question: "Welches Element hat die Ordnungszahl 92?",
    options: ["a) Uran", "b) Sauerstoff", "c) Blei", "d) Gold"],
    answer: "a",
  },
  {
    question: "Wer malte die Mona Lisa?",
    options: [
      "a) Pablo Picasso",
      "b) Vincent van Gogh",
      "c) Leonardo da Vinci",
      "d) Michelangelo",
    ],
    answer: "c",
  },
  {
    question: "Wie viele Planeten gibt es in unserem Sonnensystem?",
    options: ["a) 7", "b) 8", "c) 9", "d) 10"],
    answer: "b",
  },
  {
    question: "Was ist die kleinste Primzahl?",
    options: ["a) 0", "b) 1", "c) 2", "d) 3"],
    answer: "c",
  },
  {
    question: "Wer schrieb 'Die Odyssee'?",
    options: ["a) Plato", "b) Sappho", "c) Homer", "d) Aristoteles"],
    answer: "c",
  },
  {
    question: "Was ist die Hauptstadt von Frankreich?",
    options: ["a) Berlin", "b) Madrid", "c) Paris", "d) London"],
    answer: "c",
  },
  {
    question: "Wer hat die Relativitätstheorie entwickelt?",
    options: [
      "a) Isaac Newton",
      "b) Albert Einstein",
      "c) Galileo Galilei",
      "d) Stephen Hawking",
    ],
    answer: "b",
  },
  {
    question: "Welcher Planet ist der vierte in unserem Sonnensystem?",
    options: ["a) Mars", "b) Venus", "c) Jupiter", "d) Saturn"],
    answer: "a",
  },
  {
    question: "Wie viele Kontinente gibt es auf der Erde?",
    options: ["a) 5", "b) 6", "c) 7", "d) 8"],
    answer: "c",
  },
  {
    question: "Welcher Fluss fließt durch Kairo?",
    options: ["a) Nil", "b) Rhein", "c) Donau", "d) Amazonas"],
    answer: "a",
  },
  {
    question: "Welcher Ozean liegt zwischen den USA und Europa?",
    options: [
      "a) Pazifischer Ozean",
      "b) Atlantischer Ozean",
      "c) Indischer Ozean",
      "d) Arktischer Ozean",
    ],
    answer: "b",
  },
  {
    question: "Was ist die Hauptstadt von Japan?",
    options: ["a) Peking", "b) Tokio", "c) Seoul", "d) Bangkok"],
    answer: "b",
  },
  {
    question: "Welches chemische Element hat das Symbol 'Fe'?",
    options: ["a) Sauerstoff", "b) Eisen", "c) Silber", "d) Gold"],
    answer: "b",
  },
  {
    question: "Welches Buch ist der erste Band der Harry-Potter-Reihe?",
    options: [
      "a) Harry Potter und der Gefangene von Askaban",
      "b) Harry Potter und der Orden des Phönix",
      "c) Harry Potter und der Stein der Weisen",
      "d) Harry Potter und der Halbblutprinz",
    ],
    answer: "c",
  },
  {
    question: "Welcher Planet ist der äußerste in unserem Sonnensystem?",
    options: ["a) Mars", "b) Venus", "c) Jupiter", "d) Uranus"],
    answer: "d",
  },
  {
    question: "Was ist die Hauptstadt von Südkorea?",
    options: ["a) Peking", "b) Tokio", "c) Seoul", "d) Bangkok"],
    answer: "c",
  },
  {
    question: "Wer schrieb 'Der Fremde' (L'Étranger)?",
    options: [
      "a) Albert Camus",
      "b) Jean-Paul Sartre",
      "c) Voltaire",
      "d) Simone de Beauvoir",
    ],
    answer: "a",
  },
  {
    question: "Wie viele Kontinente gibt es auf der Welt?",
    options: ["a) 5", "b) 6", "c) 7", "d) 8"],
    answer: "c",
  },
  {
    question: "Was ist die kleinste Primzahl?",
    options: ["a) 0", "b) 1", "c) 2", "d) 3"],
    answer: "c",
  },
  {
    question: "Welches Tier gilt als Symbol für Weisheit?",
    options: ["a) Elefant", "b) Eule", "c) Delfin", "d) Löwe"],
    answer: "b",
  },
  {
    question: "Was ist die Hauptstadt von Schweden?",
    options: ["a) Oslo", "b) Helsinki", "c) Kopenhagen", "d) Stockholm"],
    answer: "d",
  },
  {
    question: "Wer malte 'Die Nachtwache'?",
    options: [
      "a) Vincent van Gogh",
      "b) Rembrandt",
      "c) Pablo Picasso",
      "d) Claude Monet",
    ],
    answer: "b",
  },
  {
    question: "Wie viele Spieler hat ein Volleyballteam auf dem Feld?",
    options: ["a) 4", "b) 6", "c) 7", "d) 8"],
    answer: "b",
  },
  {
    question: "Welches chemische Element hat das Symbol 'K'?",
    options: ["a) Kalium", "b) Kupfer", "c) Kobalt", "d) Krypton"],
    answer: "a",
  },
  {
    question: "Wer schrieb 'Faust'?",
    options: [
      "a) Johann Sebastian Bach",
      "b) Richard Wagner",
      "c) Ludwig van Beethoven",
      "d) Johann Wolfgang von Goethe",
    ],
    answer: "d",
  },
  {
    question: "Welches Land hat die längste Küste?",
    options: ["a) Kanada", "b) Russland", "c) Australien", "d) Brasilien"],
    answer: "a",
  },
  {
    question: "Wie heißt der kleinste Kontinent?",
    options: ["a) Asien", "b) Afrika", "c) Europa", "d) Australien"],
    answer: "d",
  },
  {
    question: "Wer schrieb 'Die Schöne und das Biest'?",
    options: [
      "a) Hans Christian Andersen",
      "b) Charles Perrault",
      "c) Jacob Grimm",
      "d) Madame de Villeneuve",
    ],
    answer: "b",
  },
  {
    question: "Was ist die Hauptstadt von Spanien?",
    options: ["a) Madrid", "b) Barcelona", "c) Rom", "d) Lissabon"],
    answer: "a",
  },
  {
    question: "Wie nennt man einen männlichen Schwan?",
    options: ["a) Hahn", "b) Stier", "c) Bock", "d) Kojote"],
    answer: "a",
  },
  {
    question: "Welcher Planet ist der Ringplanet?",
    options: ["a) Mars", "b) Venus", "c) Jupiter", "d) Saturn"],
    answer: "d",
  },
  {
    question: "Was ist die chemische Formel für Wasser?",
    options: ["a) H2O2", "b) CO2", "c) H2O", "d) CH4"],
    answer: "c",
  },
  {
    question: "Wer schrieb 'Stolz und Vorurteil'?",
    options: [
      "a) Emily Brontë",
      "b) Jane Austen",
      "c) George Eliot",
      "d) Virginia Woolf",
    ],
    answer: "b",
  },
];

export default questions;
