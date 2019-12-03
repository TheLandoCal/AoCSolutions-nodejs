var solutions = require('../../src/modules/2019/day3_solution'),
  getDistanceToClosestIntersection = solutions.p1Solution,
  tbd = solutions.p2Solution;

describe('#getDistanceToClosestIntersection', function() {
  it('Tests that the distance to the closest intersection for R8,U5,L5,D3 & U7,R6,D4,L4 is 6.', function() {
    getDistanceToClosestIntersection('R8,U5,L5,D3\nU7,R6,D4,L4').should.equal(6);
  });
});
