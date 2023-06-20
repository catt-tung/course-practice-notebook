import Book from "./Book.js";

const fluentPythonBook = new Book(
  "Fluent Python",
  "Luciano Ramalho",
  2022,
  "USA",
  "Non-fiction",
  983,
  0,
  983,
  "unread"
);

const queenBook = new Book(
  "Queen of our Times",
  "Robert Hardman",
  2022,
  "UK",
  "Non-fiction",
  694,
  15,
  689,
  "reading"
)

const forgivenessBook = new Book(
  "The Book of Forgiving",
  "Desmond and Mpho Tutu",
  2014,
  "USA",
  "Self-Help",
  229,
  67,
  162,
  "reading"
)

console.log("Fluent Python Book:", fluentPythonBook);
console.log("Queen book:", queenBook);
console.log("Forgiving Book:", forgivenessBook);