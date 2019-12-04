var solutions = require('./day1_solution'),
  calculateFuelRequirement = solutions.p1Solution,
  calculateRecursiveFuelRequirement = solutions.p2Solution;

describe('#calculateFuelRequirement', function() {
  it('Tests that for a mass of 12, the fuel required is 2.', function() {
    calculateFuelRequirement('12').should.equal(2);
  });

  it('Tests that for a mass of 14, the fuel required is 2.', function() {
    calculateFuelRequirement('14').should.equal(2);
  });

  it('Tests that for a mass of 1969, the fuel required is 654.', function() {
    calculateFuelRequirement('1969').should.equal(654);
  });

  it('Tests that for a mass of 100756, the fuel required is 33583.', function() {
    calculateFuelRequirement('100756').should.equal(33583);
  });

  it('Tests that for a mass of 12, 14, 1969, and 100756, the fuel required is 34241.', function() {
    calculateFuelRequirement('12\n14\n1969\n100756').should.equal(34241);
  });
});

describe('#calculateRecursiveFuelRequirement', function() {
  it('Tests that for a mass of 14, the fuel required is 2.', function() {
    calculateRecursiveFuelRequirement('14').should.equal(2);
  });

  it('Tests that for a mass of 1969, the fuel required is 966.', function() {
    calculateRecursiveFuelRequirement('1969').should.equal(966);
  });

  it('Tests that for a mass of 100756, the fuel required is 50346.', function() {
    calculateRecursiveFuelRequirement('100756').should.equal(50346);
  });

  it('Tests that for a mass of 14, 1969, and 100756, the fuel required is 51314.', function() {
    calculateRecursiveFuelRequirement('14\n1969\n100756').should.equal(51314);
  });
});
