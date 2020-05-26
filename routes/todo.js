var express = require("express");
var router = express.Router();

const arr = [
  {
    id: 0,
    title: "My first todo app",
    completed: false,
  },
];

router.get("/all", (req, res) => {
  res.json(arr);
});

router.post("/add", (req, res) => {
  var title = req.body.title;
  // console.log(title)
  var id = arr.length;
  var completed = false;
  var data = { id, title, completed };
  arr.push(data);
  res.json(arr);
});

router.post("/remove", (req, res) => {
  var id = req.body.id;
  arr.map((array, index) => {
    if (array.id == id) arr.splice(index, 1);
  });
  res.json(arr);
});

router.post("/edit", (req, res) => {
  var id = req.body.id;
  var title = req.body.title;
  arr.map((array, index) => {
    if (array.id == id) arr[index].title = title;
  });
  res.json(arr);
});

router.post("/completed", (req, res) => {
  var id = req.body.id;
  arr.map((array, index) => {
    if (array.id == id) arr[index].completed = true;
  });
  res.json(arr);
});

module.exports = router;
