var express = require('express');
var exphbs = require('express-handlebars');
var fs = require('fs');
var instructions = require('./modules/instructions');

var app = express();
var port = 3000;

var title = 'Advent of Code Node.js Solutions';

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use('/static', express.static(__dirname + '/node_modules/bootstrap/dist/'));

app.get(['/', '/2015', '/2015/day1'], function(req, res) {
    res.render('day', {
        p1Solution: instructions.ptGetFinalFloor(fs.readFileSync('./static/2015/day1/input.txt', 'utf-8')),
        p2Solution: instructions.ptFindBasementEntry(fs.readFileSync('./static/2015/day1/input.txt', 'utf-8')),
        projectTitle: title,
        dayTitle: 'Not Quite Lisp',
        dayNumber: '1'
    });
});

app.get(['/2016', '/2016/day1'], function(req, res) {
    res.render('day', {
        p1Solution: instructions.tgCalcShortestPath(fs.readFileSync('./static/2016/day1/input.txt', 'utf-8')),
        p2Solution: instructions.tgFindFirstIntersection(fs.readFileSync('./static/2016/day1/input.txt', 'utf-8')),
        projectTitle: title,
        dayTitle: 'No Time for a Taxicab',
        dayNumber: '1'
    });
});

app.listen(port, function() {
    console.log('Server listening on port ' + port);
});