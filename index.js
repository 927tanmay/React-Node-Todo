var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();

app.use(cors());

const arr = [
  {
    id: 0,
    title: "My first todo app",
    completed: false,
  },
];

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/all", (req, res) => {
  res.json(arr);
});

app.post("/todos/new", (req, res) => {
  var title = req.body.title;
  // console.log(title)
  var id = arr.length;
  var completed = false;
  var data = { id, title, completed };
  arr.push(data);
  res.json(arr);
});

app.post("/remove", (req, res) => {
  var id = req.body.id;
  arr.map((array, index) => {
    if (array.id == id) arr.splice(index, 1);
  });
  res.json(arr);
});

app.post("/edit", (req, res) => {
  var id = req.body.id;
  var title = req.body.title;
  arr.map((array, index) => {
    if (array.id == id) arr[index].title = title;
  });
  res.json(arr);
});

app.post("/completed", (req, res) => {
  var id = req.body.id;
  arr.map((array, index) => {
    if (array.id == id) arr[index].completed = true;
  });
  res.json(arr);
});

const port = 8080;
app.listen(port, () => {
  console.log(`Node app running on port ${port}`);
});
