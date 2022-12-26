 /* const numbers = [
  1, 2, 3, 8, 7
]    */
const database = require("./database.js");

const sortNumbers = numbers => {
  return numbers.sort((a, b) => a - b);
};

const getNumbers = (req, res) => {
  database
    .query("SELECT * FROM numbers")
    .then(([rows]) => {
      res.json(sortNumbers(rows.map(row => row.number)));
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({response:"list of numbers not found"});
    });
};

const postNumber = (req, res) => {
  const number = req.body.number;
  database
    .query("INSERT INTO numbers (number) VALUES (?)", [number])
    .then(() => {
      res.json({response:"number added"});
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({response:"number not added"});
    });
};




module.exports = {
  getNumbers,
  postNumber
};
