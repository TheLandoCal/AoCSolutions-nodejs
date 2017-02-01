// Import required packages
var express = require('express');
var exphbs = require('express-handlebars');
var fs = require("fs");
var loki = require('lokijs');

// Create Puzzle DB and insert puzzles
var db = new loki('Puzzle');
var puzzles = db.addCollection('puzzles', { indices: ['title'] });
var puzzleData = JSON.parse(fs.readFileSync('./models/puzzle.json', 'utf-8'))
    .forEach(puzzle => puzzles.insert(puzzle));

var port = process.env.PORT || 3000;

// Configure express server
var app = express();
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('static'));
app.use(express.static('node_modules/bootstrap/dist/'));
I

// Configure router
var router = express.Router();

router.route(['/:year/day/:day'])
    .get(function(req, res) {
        var puzzle = puzzles.findOne({ 'year': req.params.year, 'day': req.params.day });
        var solutions = require('./modules/' + puzzle.year + '/day' + puzzle.day + '_solution');

        res.render('day', {
            p1Solution: solutions.p1Solution(puzzle.input),
            p2Solution: solutions.p2Solution(puzzle.input),
            dayTitle: puzzle.title,
            dayNumber: puzzle.day
        });
    });

app.use('/', router);

app.listen(port, function() {
    console.log('Server listening on port ' + port);
});