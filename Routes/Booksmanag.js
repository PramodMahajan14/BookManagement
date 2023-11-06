const route = require("express").Router();
const { books } = require("googleapis/build/src/apis/books");
const Book = require("../Model/Book");
const { v4: uuidv4 } = require("uuid");

// =============================Routes======================

// Adding New BOOK

route.post("/newbook", async (req, res) => {
  try {
    const { title, author, summary } = req.body;
    console.log(req.body);

    if (!title || !author || !summary) {
      return res.status(400).json({ msg: "Please All filed are required" });
    }
    const bookId = uuidv4(); //used for generation og userId

    let newBook = new Book({
      title,
      author,
      summary,
      bookId: bookId,
    });

    await newBook.save();

    return res.status(200).json({ msg: "Book Added successfully" });
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
});

//   Getting All Books
route.get("/books", async (req, res) => {
  try {
    let data = await Book.find();

    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ msg: "server Error" });
  }
});

//   Getting Specific Book
route.get("/book/:id", async (req, res) => {
  try {
    let data = await Book.findOne({ bookId: req.params.id });
    if (!data) return res.status(404).json({ msg: "Invalid Id" });
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ msg: "server Error" });
  }
});

//   Update Specific Book
route.post("/updatebook/:id", async (req, res) => {
  try {
    const { title, author, summary } = req.body;

    let data = await Book.findOne({ bookId: req.params.id });
    if (!data) return res.status(404).json({ msg: "This Book not exist" });

    await Book.findOneAndUpdate(
      { bookId: req.params.id },
      { title, author, summary }
    );

    return res.status(200).json({ msg: "Book Update successfully" });
  } catch (err) {
    return res.status(500).json({ msg: "server Error" });
  }
});

//   Remove Specific Book
route.delete("/removebook/:id", async (req, res) => {
  try {
    await Book.findByIdAndDelete({ _id: req.params.id });
    return res.status(200).json({ msg: "Book Deleted successfully" });
  } catch (err) {
    return res.status(500).json({ msg: "server Error" });
  }
});

module.exports = route;

// {
//   "_id": "65491b7d62074ac7a7075565",
//   "bookId": "1d43f9c9-e6a9-46ab-92ed-98ac8cfe79e9",
//   "title": "Absalom, Absalom!",
//   "author": "William Faulkner",
//   "summary": "Absalom, Absalom! is a novel by the American author William Faulkner, first published in 1936. Taking place before, during, and after the American Civil War, it is a story about three families of the American South, with a focus on the life of Thomas Sutpen.",
//   "__v": 0
// },
