class Book {
  constructor(
    title,
    author,
    publicationYear,
    country,
    genre,
    numPages,
    pagesRead,
    pagesLeft
  ) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
    this.country = country;
    this.genre = genre;
    this.numPages = numPages;
    this.pagesRead = pagesRead;
    this.pagesLeft = pagesLeft;
  }
  countPagesLeft(leftToRead) {
    this.pagesLeft = leftToRead;
  }
}

export default Book