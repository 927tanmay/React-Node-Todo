var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
var todoRoutes = require("./routes/todo");

app.use(cors());

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", todoRoutes);

const port = 8080;
app.listen(port, () => {
  console.log(`Node app running on port ${port}`);
});
