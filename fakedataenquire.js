const questions = [
  {
    question: "Welches Land ist das größte der Welt?",
    options: ["Russland", "China", "Indien", "USA"],
    answer: "Russland",
  },
  {
    question: "Was ist die Hauptstadt von Spanien?",
    options: ["Madrid", "Barcelona", "Rom", "Neapel"],
    answer: "Madrid",
  },
  {
    question: "Welcher Berg ist der höchste Berg der Welt?",
    options: ["Zugspitze", "Schöneberg", "Manaslu", "Mount Everest"],
    answer: "Mount Everest",
  },
  {
    question: "In welcher Stadt lebte der Detektiv Sherlock Holmes?",
    options: ["Düsseldorf", "Manchester", "London", "Tokyo"],
    answer: "London",
  },
  {
    question: "Welches Unternehmen hat das iPhone entwickelt?",
    options: ["Microsoft", "Apple", "Xiamoi", "Blizzard"],
    answer: "Apple",
  },
  {
    question: "In welchem Land haben die Spartaner gelebt?",
    options: ["Griechenland", "Türkei", "Ägypten", "Azeroth"],
    answer: "Griechenland",
  },
  {
    question: "Welcher Schauspieler spielte die Hauptrolle in Inception",
    options: [
      "Johnny Depp",
      "Booker De Witt",
      "Arthur Morgan",
      "Leonardo DiCaprio",
    ],
    answer: "Leonardo DiCaprio",
  },
  {
    question:
      "Welches Videospiel ermöglicht es Spielern, in einer offenen Welt Bauklötze zu platzieren und zu entfernen?",
    options: ["Minecraft", "Fortnite", "Final Fantasy", "GTA VICE CITY"],
    answer: "Minecraft",
  },
  {
    question:
      "Welches Videospiel basiert auf einem postapokalyptischen Ödland und bietet zahlreiche Möglichkeiten für Entscheidungen und Handlungen?",
    options: ["Roblox", "GTA V", "The Witcher 3: Wild Hunt", "Fallout"],
    answer: "Fallout",
  },
  {
    question: "Welches Gas atmen Pflanzen ein und welches Gas geben sie ab?",
    options: [
      "Sauerstoff ein, Kohlendioxid ab",
      "Kohlendioxid ein, Sauerstoff ab",
      "Wasserstoff ein, Sauerstoff ab",
      "Stickstoff ein, Kohlendioxid ab",
    ],
    answer: "Kohlendioxid ein, Sauerstoff ab",
  },
  {
    question: "Welches Tier ist der König des Dschungels?",
    options: ["Elefant", "Löwe", "Tiger", "Giraffe"],
    answer: "Löwe",
  },
  {
    question: "Was ist die Hauptstadt von Kanada?",
    options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    answer: "Ottawa",
  },
  {
    question: "Wer schrieb 'Romeo und Julia'?",
    options: [
      "Charles Dickens",
      "Jane Austen",
      "William Shakespeare",
      "Mark Twain",
    ],
    answer: "William Shakespeare",
  },
  {
    question: "Wie viele Spieler hat ein Fußballteam auf dem Feld?",
    options: ["9", "11", "7", "10"],
    answer: "11",
  },
  {
    question: "Welches ist das kleinste Säugetier der Welt?",
    options: ["Elefant", "Maus", "Fledermaus", "Eichhörnchen"],
    answer: "Fledermaus",
  },
  {
    question: "Was ist die Hauptstadt von Australien?",
    options: ["Sydney", "Melbourne", "Brisbane", "Canberra"],
    answer: "Canberra",
  },
  {
    question: "Wer schrieb 'Die Abenteuer des Huckleberry Finn'?",
    options: ["Jules Verne", "Mark Twain", "Agatha Christie", "George Orwell"],
    answer: "Mark Twain",
  },
  {
    question: "Wie viele Beine hat eine Spinne?",
    options: ["4", "6", "8", "10"],
    answer: "8",
  },
  {
    question: "Was ist der höchste Berg Europas?",
    options: ["Mont Blanc", "Matterhorn", "Alpamayo", "Elbrus"],
    answer: "Mont Blanc",
  },
  {
    question: "Welches Element hat die Ordnungszahl 79?",
    options: ["Gold", "Silber", "Blei", "Platin"],
    answer: "Gold",
  },
  {
    question: "Wer schrieb 'Der Zauberer von Oz'?",
    options: ["J.R.R. Tolkien", "L. Frank Baum", "Lewis Carroll", "Roald Dahl"],
    answer: "L. Frank Baum",
  },
  {
    question: "Wie viele Zeichen hat das griechische Alphabet?",
    options: ["20", "24", "26", "28"],
    answer: "26",
  },
  {
    question: "Welcher Planet ist der Zwillingsplanet der Erde?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    answer: "Venus",
  },
  {
    question: "Wer schrieb 'Der kleine Prinz'?",
    options: [
      "Antoine de Saint-Exupéry",
      "Victor Hugo",
      "Gustave Flaubert",
      "Marcel Proust",
    ],
    answer: "Antoine de Saint-Exupéry",
  },
  {
    question: "Was ist die größte Insel der Welt?",
    options: ["Grönland", "Island", "Madagaskar", "Kuba"],
    answer: "Grönland",
  },
  {
    question: "Welches Element hat die Ordnungszahl 92?",
    options: ["Uran", "Sauerstoff", "Blei", "Gold"],
    answer: "Uran",
  },
  {
    question: "Wer malte die Mona Lisa?",
    options: [
      "Pablo Picasso",
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Michelangelo",
    ],
    answer: "Leonardo da Vinci",
  },
  {
    question: "Wie viele Planeten gibt es in unserem Sonnensystem?",
    options: ["7", "8", "9", "10"],
    answer: "8",
  },
  {
    question: "Was ist die kleinste Primzahl?",
    options: ["0", "1", "2", "3"],
    answer: "2",
  },
  {
    question: "Wer schrieb 'Die Odyssee'?",
    options: ["Plato", "Sappho", "Homer", "Aristoteles"],
    answer: "Homer",
  },
  {
    question: "Was ist die Hauptstadt von Frankreich?",
    options: ["Berlin", "Madrid", "Paris", "London"],
    answer: "Paris",
  },
  {
    question: "Wer hat die Relativitätstheorie entwickelt?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Galileo Galilei",
      "Stephen Hawking",
    ],
    answer: "Albert Einstein",
  },
  {
    question: "Welcher Planet ist der vierte in unserem Sonnensystem?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "Wie viele Kontinente gibt es auf der Erde?",
    options: ["5", "6", "7", "8"],
    answer: "7",
  },
  {
    question: "Welcher Fluss fließt durch Kairo?",
    options: ["Nil", "Rhein", "Donau", "Amazonas"],
    answer: "Nil",
  },
  {
    question: "Welcher Ozean liegt zwischen den USA und Europa?",
    options: [
      "Pazifischer Ozean",
      "Atlantischer Ozean",
      "Indischer Ozean",
      "Arktischer Ozean",
    ],
    answer: "Atlantischer Ozean",
  },
  {
    question: "Was ist die Hauptstadt von Japan?",
    options: ["Peking", "Tokio", "Seoul", "Bangkok"],
    answer: "Tokio",
  },
  {
    question: "Welches chemische Element hat das Symbol 'Fe'?",
    options: ["Sauerstoff", "Eisen", "Silber", "Gold"],
    answer: "Eisen",
  },
  {
    question: "Welches Buch ist der erste Band der Harry-Potter-Reihe?",
    options: [
      "Harry Potter und der Gefangene von Askaban",
      "Harry Potter und der Orden des Phönix",
      "Harry Potter und der Stein der Weisen",
      "Harry Potter und der Halbblutprinz",
    ],
    answer: "Harry Potter und der Stein der Weisen",
  },
  {
    question: "Welcher Planet ist der äußerste in unserem Sonnensystem?",
    options: ["Mars", "Venus", "Jupiter", "Uranus"],
    answer: "Uranus",
  },
  {
    question: "Was ist die Hauptstadt von Südkorea?",
    options: ["Peking", "Tokio", "Seoul", "Bangkok"],
    answer: "Seoul",
  },
  {
    question: "Wer schrieb 'Der Fremde' (L'Étranger)?",
    options: [
      "Albert Camus",
      "Jean-Paul Sartre",
      "Voltaire",
      "Simone de Beauvoir",
    ],
    answer: "Albert Camus",
  },
  {
    question: "Wie viele Kontinente gibt es auf der Welt?",
    options: ["5", "6", "7", "8"],
    answer: "7",
  },
  {
    question: "Was ist die kleinste Primzahl?",
    options: ["0", "1", "2", "3"],
    answer: "2",
  },
  {
    question: "Welches Tier gilt als Symbol für Weisheit?",
    options: ["Elefant", "Eule", "Delfin", "Löwe"],
    answer: "Eule",
  },
  {
    question: "Was ist die Hauptstadt von Schweden?",
    options: ["Oslo", "Helsinki", "Kopenhagen", "Stockholm"],
    answer: "Stockholm",
  },
  {
    question: "Wer malte 'Die Nachtwache'?",
    options: ["Vincent van Gogh", "Rembrandt", "Pablo Picasso", "Claude Monet"],
    answer: "Rembrandt",
  },
  {
    question: "Wie viele Spieler hat ein Volleyballteam auf dem Feld?",
    options: ["4", "6", "7", "8"],
    answer: "6",
  },
  {
    question: "Welches chemische Element hat das Symbol 'K'?",
    options: ["Kalium", "Kupfer", "Kobalt", "Krypton"],
    answer: "Kalium",
  },
  {
    question: "Wer schrieb 'Faust'?",
    options: [
      "Johann Sebastian Bach",
      "Richard Wagner",
      "Ludwig van Beethoven",
      "Johann Wolfgang von Goethe",
    ],
    answer: "Johann Wolfgang von Goethe",
  },
  {
    question: "Welches Land hat die längste Küste?",
    options: ["Kanada", "Russland", "Australien", "Brasilien"],
    answer: "Kanada",
  },
  {
    question: "Wie heißt der kleinste Kontinent?",
    options: ["Asien", "Afrika", "Europa", "Australien"],
    answer: "Australien",
  },
  {
    question: "Wer schrieb 'Die Schöne und das Biest'?",
    options: [
      "Hans Christian Andersen",
      "Charles Perrault",
      "Jacob Grimm",
      "Madame de Villeneuve",
    ],
    answer: "Charles Perrault",
  },
  {
    question: "Was ist die Hauptstadt von Spanien?",
    options: ["Madrid", "Barcelona", "Rom", "Lissabon"],
    answer: "Madrid",
  },
  {
    question: "Wie nennt man einen männlichen Schwan?",
    options: ["Hahn", "Stier", "Bock", "Kojote"],
    answer: "Hahn",
  },
  {
    question: "Welcher Planet ist der Ringplanet?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    answer: "Saturn",
  },
  {
    question: "Was ist die chemische Formel für Wasser?",
    options: ["H2O2", "CO2", "H2O", "CH4"],
    answer: "H2O",
  },
  {
    question: "Wer schrieb 'Stolz und Vorurteil'?",
    options: ["Emily Brontë", "Jane Austen", "George Eliot", "Virginia Woolf"],
    answer: "Jane Austen",
  },
];

export default questions;
