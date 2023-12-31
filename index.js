const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 4000;
app.use(express.json());
// app.use(bodyParser.json());
// connect to mongodb database
require("./DB/connect");
const cors = require("cors");
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4000", "http://localhost:3000"],
  })
);

app.use("/v1/api", require("./Routes/Booksmanag"));

app.listen(PORT, () => {
  console.log("Running server on PORT ", PORT);
});
