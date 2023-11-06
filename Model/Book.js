const mongoose = require("mongoose");

// Book  Modal Schema
const booksSchema = new mongoose.Schema({
  bookId: { type: String, require: true },
  title: { type: String, require: true },
  author: { type: String, require: true },
  summary: { type: String, require: true },
});

const Book = mongoose.model("book", booksSchema);

// Exporting our model objects
module.exports = Book;
