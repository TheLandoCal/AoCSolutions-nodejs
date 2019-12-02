// Import required packages
var express = require('express');
var exphbs = require('express-handlebars');
var puzzle = require('./src/utils/puzzle');

// Configure express server
var app = express();
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('views', './src/views/');
app.set('view engine', 'handlebars');

app.use(express.static('src/static'));
app.use(express.static('./node_modules/bootstrap/dist/'));

// Configure router
var router = express.Router();

router.route('/').get(function(_, res) {
  res.render('day', puzzle.getPuzzleByDay('2015', '1'));
});

router.route(['/:year/day/:day']).get(function(req, res) {
  res.render('day', puzzle.getPuzzleByDay(req.params.year, req.params.day));
});

app.use('/', router);

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Server listening on port ' + port);
});
