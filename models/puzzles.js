var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var PuzzleSchema = new Schema({
    day: Number,
    title: String,
    year: Number,
    input: String
});

module.exports = mongoose.model('Puzzle', PuzzleSchema);