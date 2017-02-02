var has3Vowels = function(input) {
    var re = /[aeiou]/g;

    if ((input.match(re))) {
        return ((input.match(re).length) >= 3);
    }
    return false;
};

var hasDoubleLetters = function(input) {
    var re = /([a-z])\1/;
    return re.test(input);
};

var hasDisallowedSubstrings = function(input) {
    var re = /ab|cd|pq|xy/;
    return re.test(input);
};

var hasRepeatedPairs = function(input) {
    var re = /(..).*\1/;
    return re.test(input);
};

var hasSingleSplitPairs = function(input) {
    var re = /(.).\1/;
    return re.test(input);
};

var countNice = function(input) {
    var numNice = 0;
    var strings = input.split('\n');

    for (var i = 0, len = strings.length; i < len; i++) {
        numNice += (has3Vowels(strings[i]) && hasDoubleLetters(strings[i]) && !hasDisallowedSubstrings(strings[i])) ? 1 : 0;
    }

    return numNice;
};

var countRevisedNice = function(input) {
    var numNice = 0;
    var strings = input.split('\n');

    for (var i = 0, len = strings.length; i < len; i++) {
        numNice += (hasRepeatedPairs(strings[i]) && hasSingleSplitPairs(strings[i])) ? 1 : 0;
    }

    return numNice;
};

module.exports = {
    p1Solution: countNice,
    p2Solution: countRevisedNice,
    hasRepeatedPairs: hasRepeatedPairs,
    hasSingleSplitPairs: hasSingleSplitPairs
};