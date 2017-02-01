var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Puzzle = require('./models/puzzles.js');

var app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://aoc:Pass4Monitor.@ds137729.mlab.com:37729/aocnodejs');


var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static('node_modules/bootstrap/dist/'));
app.use(express.static('static'));


var router = express.Router();


router.route('/puzzles')
    .post(function(req, res) {
        var puzzle = new Puzzle();
        puzzle.year = req.body.year;
        puzzle.title = req.body.title;
        puzzle.day = req.body.day;
        puzzle.input = req.body.input;

        puzzle.save(function(err) {
            if (err) {
                res.send(err);
            }

            res.json({ message: 'Puzzle \'' + puzzle.title + '\' saved!' });
        });
    });

router.route(['/:year/day/:day'])
    .get(function(req, res) {
        Puzzle.findOne({ 'year': req.params.year, 'day': req.params.day }, function(err, puzzle) {
            // console.log(puzzle);
            var solutions = require('./modules/' + puzzle.year + '/day' + puzzle.day + '_solution');
            res.render('day', {
                p1Solution: solutions.p1Solution(puzzle.input),
                p2Solution: solutions.p2Solution(puzzle.input),
                dayTitle: puzzle.title,
                dayNumber: puzzle.day
            });
        });
    })
    .put(function(req, res) {
        Puzzle.findOne({ 'year': req.params.year, 'day': req.params.day }, function(err, puzzle) {
            if (err) {
                res.send(err);
            }

            puzzle.input = req.body.input;
            puzzle.title = req.body.title;

            puzzle.save(function(err) {
                res.json({ message: 'Puzzle \'' + puzzle.title + '\' updated!' });
            });
        });
    })
    .delete(function(req, res) {
        Puzzle.findOne({ 'year': req.params.year, 'day': req.params.day }, function(err, puzzle) {
            puzzle.remove(function(err, puzzle) {
                if (err) {
                    res.send(err);
                }

                res.json({ message: 'Puzzle \'' + puzzle.title + '\' deleted!' });
            });
        });
    });

app.use('/', router);

app.listen(port, function() {
    console.log('Server listening on port ' + port);
});