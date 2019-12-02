var fs = require('fs');
var loki = require('lokijs');
const db = new loki('Puzzle', {
  autoload: true,
  autoloadCallback: initialize
});

function initialize() {
  // Creates Puzzle DB and insert puzzles
  let puzzles = db.getCollection('puzzles');
  if (puzzles === null) {
    puzzles = db.addCollection('puzzles', { indices: ['title'] });
  }
  JSON.parse(fs.readFileSync('./src/models/puzzle.json', 'utf-8')).forEach(function(puzzle) {
    puzzles.insert(puzzle);
  });
}

function loadPuzzlesByYear(puzzles, year) {
  // Loads each available solution for a particular year
  return puzzles
    .chain()
    .find({ year: year })
    .compoundsort(['day', true])
    .data()
    .map(puzzle => puzzle.day);
}

function getPuzzleByDay(year, day) {
  // Creates a handlebars config for a particular day
  let puzzles = db.getCollection('puzzles');

  const puzzle = puzzles.findOne({ $and: [{ year }, { day }] });
  const solutions = require('../modules/' + puzzle.year + '/day' + puzzle.day + '_solution');

  return {
    p1Solution: solutions.p1Solution(puzzle.input),
    p2Solution: solutions.p2Solution(puzzle.input),
    dayTitle: puzzle.title,
    dayNumber: puzzle.day,
    days2015: loadPuzzlesByYear(puzzles, '2015'),
    days2016: loadPuzzlesByYear(puzzles, '2016'),
    days2017: loadPuzzlesByYear(puzzles, '2017'),
    days2018: loadPuzzlesByYear(puzzles, '2018'),
    days2019: loadPuzzlesByYear(puzzles, '2019')
  };
}

module.exports = {
  getPuzzleByDay
};
