var solutions = require('../../src/modules/2015/day9_solution'),
  calculateShortestRoute = solutions.p1Solution,
  calculateLongestRoute = solutions.p2Solution;

describe('#calculateShortestRoute', function() {
  it('Tests that the shortest distance between London, Dublin, and Belfast is 605.', function() {
    calculateShortestRoute('London to Dublin = 464\nLondon to Belfast = 518\nDublin to Belfast = 141').should.equal(605);
  });
});

describe('#calculateLongestRoute', function() {
  it('Tests that the longest distance between London, Dublin, and Belfast is 982.', function() {
    calculateLongestRoute('London to Dublin = 464\nLondon to Belfast = 518\nDublin to Belfast = 141').should.equal(982);
  });
});
