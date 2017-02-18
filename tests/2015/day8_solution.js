var should = require('chai').should(),
    solutions = require('../../modules/2015/day8_solution'),
    diffCodeMemChar = solutions.p1Solution,
    diffEncodedCodeChar = solutions.p2Solution;

describe('#diffCodeMemChar', function() {
    it('Tests that the total number of characters of string code minus the total number of characters in memory for string values ' +
        'for "", "abc", "aaa\\"aaa", "\\x27" is 12.',
        function() {
            diffCodeMemChar("\"\"\n\"abc\"\n\"aaa\\\"aaa\"\n\"\\x27\"").should.equal(12);
        });
});

describe('#diffEncodedCodeChar', function() {
    it('Tests that the total number of characters of string code minus the total number of characters in memory for string values ' +
        'for "", "abc", "aaa\\"aaa", "\\x27" is 19.',
        function() {
            diffEncodedCodeChar("\"\"\n\"abc\"\n\"aaa\\\"aaa\"\n\"\\x27\"").should.equal(19);
        });
});