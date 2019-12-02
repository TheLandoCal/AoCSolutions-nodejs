var solutions = require('../../src/modules/2018/day1_solution'),
  calculateChangesFromZero = solutions.p1Solution,
  findDuplicateFrequency = solutions.p2Solution;

describe('#calculateChangesFromZero', function() {
  it('Tests that +1, -2, +3, +1 results in a frequency of 3.', function() {
    calculateChangesFromZero('+1\n-2\n+3\n+1').should.equal(3);
  });

  it('Tests that +1, +1, +1 results in a frequency of 3.', function() {
    calculateChangesFromZero('+1\n+1\n+1').should.equal(3);
  });

  it('Tests that +1, +1, -2 results in a frequency of 0.', function() {
    calculateChangesFromZero('+1\n+1\n-2').should.equal(0);
  });

  it('Tests that -1, -2, -3 results in a frequency of -6.', function() {
    calculateChangesFromZero('-1\n-2\n-3').should.equal(-6);
  });
});

describe('#findDuplicateFrequency', function() {
  it('Tests that +1, -2, +3, +1 first reaches 2 twice.', function() {
    findDuplicateFrequency('+1\n-2\n+3\n+1').should.equal(2);
  });

  it('Tests that +1, -1 first reaches 0 twice.', function() {
    findDuplicateFrequency('+1\n-1').should.equal(0);
  });

  it('Tests that +3, +3, +4, -2, -4 first reaches 10 twice.', function() {
    findDuplicateFrequency('+3\n+3\n+4\n-2\n-4').should.equal(10);
  });

  it('Tests that -6, +3, +8, +5, -6 first reaches 5 twice.', function() {
    findDuplicateFrequency('-6\n+3\n+8\n+5\n-6').should.equal(5);
  });

  it('Tests that +7, +7, -2, -7, -4 first reaches 14 twice.', function() {
    findDuplicateFrequency('+7\n+7\n-2\n-7\n-4').should.equal(14);
  });
});
