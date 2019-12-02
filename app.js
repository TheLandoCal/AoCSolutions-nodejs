// Import required packages
var express = require("express");
var exphbs = require("express-handlebars");
var fs = require("fs");
var loki = require("lokijs");

// Create Puzzle DB and insert puzzles
var db = new loki("Puzzle");
var puzzles = db.addCollection("puzzles", { indices: ["title"] });
var puzzleData = JSON.parse(fs.readFileSync("./models/puzzle.json", "utf-8"));
puzzleData.forEach(function(puzzle) {
  puzzles.insert(puzzle);
});

// Grab all available days in puzzles
var days15 = [];
puzzles
  .chain()
  .find({ year: "2015" })
  .compoundsort(["day", true])
  .data()
  .forEach(function(puzzle15) {
    days15.push(puzzle15.day);
  });

var days16 = [];
puzzles
  .chain()
  .find({ year: "2016" })
  .compoundsort(["day", true])
  .data()
  .forEach(function(puzzle16) {
    days16.push(puzzle16.day);
  });


var days17 = [];
puzzles
  .chain()
  .find({ year: "2017" })
  .compoundsort(["day", true])
  .data()
  .forEach(function(puzzle17) {
    days17.push(puzzle17.day);
  });

  var days18 = [];
  puzzles
    .chain()
    .find({ year: "2018" })
    .compoundsort(["day", true])
    .data()
    .forEach(function(puzzle18) {
      days18.push(puzzle18.day);
    });

var port = process.env.PORT || 3000;

// Configure express server
var app = express();
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("static"));
app.use(express.static("node_modules/bootstrap/dist/"));

// Configure router
var router = express.Router();

router.route("/").get(function(req, res) {
  var puzzle = puzzles.findOne({ $and: [{ year: "2015" }, { day: "1" }] });
  var solutions = require("./modules/" +
    puzzle.year +
    "/day" +
    puzzle.day +
    "_solution");

  res.render("day", {
    p1Solution: solutions.p1Solution(puzzle.input),
    p2Solution: solutions.p2Solution(puzzle.input),
    days2015: days15,
    days2016: days16,
    days2017: days17,
    days2018: days18,
    dayTitle: puzzle.title,
    dayNumber: puzzle.day
  });
});

router.route(["/:year/day/:day"]).get(function(req, res) {
  var puzzle = puzzles.findOne({
    $and: [{ year: req.params.year }, { day: req.params.day }]
  });
  var solutions = require("./modules/" +
    puzzle.year +
    "/day" +
    puzzle.day +
    "_solution");

  res.render("day", {
    p1Solution: solutions.p1Solution(puzzle.input),
    p2Solution: solutions.p2Solution(puzzle.input),
    days2015: days15,
    days2016: days16,
    days2017: days17,
    days2018: days18,
    dayTitle: puzzle.title,
    dayNumber: puzzle.day
  });
});

app.use("/", router);

app.listen(port, function() {
  console.log("Server listening on port " + port);
});
