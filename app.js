var express = require('express');
var exphbs = require('express-handlebars');
var fs = require('fs');
var directions = require('./modules/directions');

var app = express();
var port = 3000;

var title = 'Advent of Code (2015) Solutions';
var exercise = 'Not Quite Lisp';
var day = '1';
var input = fs.readFileSync('./static/input.txt', 'utf-8');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use('/static', express.static(__dirname + '/node_modules/bootstrap/dist/'));

app.get(['/', '/part1'], function(req, res) {
    res.render('part', {
        solution: directions.getFinalFloor(input),
        projectTitle: title,
        dayTitle: exercise,
        dayNumber: day,
        partNumber: '1'
    });
});

app.get('/part2', function(req, res) {
    res.render('part', {
        solution: directions.findBasementEntry(input),
        projectTitle: title,
        dayTitle: exercise,
        dayNumber: day,
        partNumber: '2'
    });
});

app.listen(port, function() {
    console.log('Server listening on port ' + port);
});