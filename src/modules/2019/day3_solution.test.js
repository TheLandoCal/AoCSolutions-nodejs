var solutions = require('./day3_solution'),
  getDistanceToClosestIntersection = solutions.p1Solution,
  getFewestCombinedSteps = solutions.p2Solution;

describe('#getDistanceToClosestIntersection', function() {
  it('Tests that the distance to the closest intersection for R8,U5,L5,D3 & U7,R6,D4,L4 is 6', function() {
    getDistanceToClosestIntersection('R8,U5,L5,D3\nU7,R6,D4,L4').should.equal(6);
  });

  it('Tests that the distance to the closest intersection for R75,D30,R83,U83,L12,D49,R71,U7,L72 & U62,R66,U55,R34,D71,R55,D58,R83 is 159', function() {
    getDistanceToClosestIntersection('R75,D30,R83,U83,L12,D49,R71,U7,L72\nU62,R66,U55,R34,D71,R55,D58,R83').should.equal(159);
  });

  it('Tests that the distance to the closest intersection for R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51 & U98,R91,D20,R16,D67,R40,U7,R15,U6,R7 is 135', function() {
    getDistanceToClosestIntersection('R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51\nU98,R91,D20,R16,D67,R40,U7,R15,U6,R7').should.equal(135);
  });
});


describe('#getFewestCombinedSteps', function() {
  it('Tests that the distance to the closest intersection for R8,U5,L5,D3 & U7,R6,D4,L4 is 30', function() {
    getFewestCombinedSteps('R8,U5,L5,D3\nU7,R6,D4,L4').should.equal(30);
  });

  it('Tests that the distance to the closest intersection for R75,D30,R83,U83,L12,D49,R71,U7,L72 & U62,R66,U55,R34,D71,R55,D58,R83 is 610', function() {
    getFewestCombinedSteps('R75,D30,R83,U83,L12,D49,R71,U7,L72\nU62,R66,U55,R34,D71,R55,D58,R83').should.equal(610);
  });

  it('Tests that the distance to the closest intersection for R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51 & U98,R91,D20,R16,D67,R40,U7,R15,U6,R7 is 410', function() {
    getFewestCombinedSteps('R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51\nU98,R91,D20,R16,D67,R40,U7,R15,U6,R7').should.equal(410);
  });
});