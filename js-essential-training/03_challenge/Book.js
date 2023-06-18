class Book {
  constructor(
    title,
    author,
    publicationYear,
    country,
    genre,
    numPages,
    pagesRead,
    pagesLeft,
    readStatus
  ) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
    this.country = country;
    this.genre = genre;
    this.numPages = numPages;
    this.pagesRead = pagesRead;
    this.pagesLeft = pagesLeft;
    this.readStatus = readStatus;
  }
  countPagesLeft(leftToRead) {
    this.pagesLeft = leftToRead;
  }
  updateCurrentPage(newPagesRead) {
    this.pagesRead = newPagesRead;
  }
  updateReadStatus(newReadStatus) {
    this.readStatus = newReadStatus;
  }
}

export default Book