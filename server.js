const express = require("express");
const path = require("path");
const members = require("./Members/Members");

//calling imported express in a new variable app
const app = express();

//set static folder
app.use(express.static(path.join(__dirname, "Public")));

// Api For Getting Members
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "Public", "Index.html"));
// });

const Port = process.env.Port || 5000;

app.listen(Port, () => console.log(`App Is Running on ${Port}`));
