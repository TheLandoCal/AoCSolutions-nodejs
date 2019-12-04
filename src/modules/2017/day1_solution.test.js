var solutions = require('./day1_solution'),
    getSumOfRepeatingDigits = solutions.p1Solution,
    getSumOfRot13Digits = solutions.p2Solution;

describe('#getSumOfRepeatingDigits', function() {
    it('Tests that 1122 produces a sum of 3.', function() {
        getSumOfRepeatingDigits('1122').should.equal(3);
    });

    it('Tests that 1111 produces a sum of 4.', function() {
        getSumOfRepeatingDigits('1111').should.equal(4);
    });

    it('Tests that 1234 produces a sum of 0.', function() {
        getSumOfRepeatingDigits('1234').should.equal(0);
    });

    it('Tests that 91212129 produces a sum of 9.', function() {
        getSumOfRepeatingDigits('91212129').should.equal(9);
    });
});

describe('#getSumOfRot13Digits', function() {
    it('Tests that 1212 produces a sum of 6.', function() {
        getSumOfRot13Digits('1212').should.equal(6);
    });

    it('Tests that 1221 produces a sum of 0.', function() {
        getSumOfRot13Digits('1221').should.equal(0);
    });

    it('Tests that 123425 produces a sum of 4.', function() {
        getSumOfRot13Digits('123425').should.equal(4);
    });

    it('Tests that 123123 produces a sum of 12.', function() {
        getSumOfRot13Digits('123123').should.equal(12);
    });

    it('Tests that 12131415 produces a sum of 4.', function() {
        getSumOfRot13Digits('12131415').should.equal(4);
    });
});