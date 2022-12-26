const express = require("express");

const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT ?? 5000;

const welcome = (req, res) => {
  res.send("Welcome");
};

app.get("/", welcome);

const numbersHandler = require("./numbersHandler.js");

app.get("/api/numbers", numbersHandler.getNumbers);
app.post("/api/number", numbersHandler.postNumber);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
