var solutions = require('../../src/modules/2015/day5_solution'),
    countNice = solutions.p1Solution,
    countRevisedNice = solutions.p2Solution,
    hasRepeatedPairs = solutions.hasRepeatedPairs,
    hasSingleSplitPairs = solutions.hasSingleSplitPairs;

describe('#countNice', function() {
    it('Tests that ugknbfddgicrmopn is nice because it has at least three vowels (u...i...o...), ' +
        'a double letter (...dd...), and none of the disallowed substrings.',
        function() {
            countNice('ugknbfddgicrmopn').should.equal(1);
        });

    it('Tests that aaa is nice because it has at least three vowels and a double letter, ' +
        'even though the letters used by different rules overlap.',
        function() {
            countNice('aaa').should.equal(1);
        });

    it('Tests that jchzalrnumimnmhp is naughty because it has no double letter.', function() {
        countNice('jchzalrnumimnmhp').should.equal(0);
    });

    it('Tests haegwjzuvuyypxyu is naughty because it contains the string xy.', function() {
        countNice('haegwjzuvuyypxyu').should.equal(0);
    });

    it('Tests that dvszwmarrgswjxmb is naughty because it contains only one vowel.', function() {
        countNice('dvszwmarrgswjxmb').should.equal(0);
    });
});

describe('#hasRepeatedPairs', function() {
    it('Tests that It contains a pair of any two letters that appears at least twice in the string without overlapping, ' +
        'like xyxy (xy) or aabcdefgaa (aa), but not like aaa (aa, but it overlaps).',
        function() {
            hasRepeatedPairs('xyxy').should.equal(true);
            hasRepeatedPairs('aabcdefgaa').should.equal(true);
            hasRepeatedPairs('aaa').should.equal(false);
        });
});

describe('#hasSingleSplitPairs', function() {
    it('It contains at least one letter which repeats with exactly one letter between them, like xyx, ' +
        'abcdefeghi (efe), or even aaa.',
        function() {
            hasSingleSplitPairs('xyx').should.equal(true);
            hasSingleSplitPairs('abcdefeghi').should.equal(true);
            hasSingleSplitPairs('aaa').should.equal(true);
        });
});

describe('#countRevisedNice', function() {
    it('qjhvhtzxzqqjkmpb is nice because is has a pair that appears twice (qj)' +
        ' and a letter that repeats with exactly one letter between them (zxz).',
        function() {
            countRevisedNice('qjhvhtzxzqqjkmpb').should.equal(1);
        });

    it('Tests that xxyxx is nice because it has a pair that appears twice and a letter ' +
        'that repeats with one between, even though the letters used by each rule overlap.',
        function() {
            countRevisedNice('xxyxx').should.equal(1);
        });

    it('Tests that uurcxstgmygtbstg is naughty because it has a pair (tg) ' +
        'but no repeat with a single letter between them.',
        function() {
            countRevisedNice('uurcxstgmygtbstg').should.equal(0);
        });

    it('Tests that ieodomkazucvgmuy is naughty because it has a repeating letter with one' +
        ' between (odo), but no pair that appears twice.',
        function() {
            countRevisedNice('ieodomkazucvgmuy').should.equal(0);
        });

});