var solutions = require('../../src/modules/2015/day4_solution'),
    getLowestNum5Zeros = solutions.p1Solution;

describe('#getLowestNum5Zeros', function() {
    it('Tests that if your secret key is abcdef, the answer is 609043, ' +
        'because the MD5 hash of abcdef609043 starts with five zeroes (000001dbbfa...), ' +
        'and it is the lowest such number to do so.',
        function() {
            getLowestNum5Zeros('abcdef').should.equal(609043);
        });

    it('If your secret key is pqrstuv, ' +
        'the lowest number it combines with to make an MD5 hash starting with five zeroes is 1048970; ' +
        'that is, the MD5 hash of pqrstuv1048970 looks like 000006136ef....',
        function() {
            getLowestNum5Zeros('pqrstuv').should.equal(1048970);
        });
});