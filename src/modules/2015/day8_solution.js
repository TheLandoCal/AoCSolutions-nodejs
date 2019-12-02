var escapeString = function(string) {
    // Escape and surround with quotes
    return '"' + string.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
};

var countRegexMatches = function(regExp, string) {
    var matches = 0;
    while (regExp.exec(string) !== null) {
        matches++;
    }

    return matches;
};

var diffCodeMemChar = function(input) {
    var strings = input.split('\n'),
        totalMemLength = 0,
        totalCodeLength = 0;

    strings.forEach(function(string) {
        totalCodeLength += string.length;
        totalMemLength += eval(string).length;
    });

    return totalCodeLength - totalMemLength;
};

var diffEncodedCodeChar = function(input) {
    var strings = input.split('\n'),
        totalEncodedLength = 0,
        totalCodeLength = 0;

    strings.forEach(function(string) {
        totalCodeLength += string.length;
        totalEncodedLength += escapeString(string).length;
    });

    return totalEncodedLength - totalCodeLength;
};

module.exports = {
    p1Solution: diffCodeMemChar,
    p2Solution: diffEncodedCodeChar
};