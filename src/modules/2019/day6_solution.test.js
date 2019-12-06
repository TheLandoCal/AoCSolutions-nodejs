var solutions = require('./day6_solution'),
  countTotalOrbits = solutions.p1Solution,
  p2Solution = solutions.p2Solution;

describe('#countTotalOrbits', function() {
  it('Tests that the total number of direct and indirect orbits for AAA)BBB,BBB)CCC is 3', function() {
    countTotalOrbits('AAA)BBB\nBBB)CCC').should.equal(3);
  });

  it('Tests that the total number of direct and indirect orbits for COM)B,B)C,C)D,D)E,E)F,B)G,G)H,D)I,E)J,J)K,K)L is 42', function() {
    countTotalOrbits('COM)B\nB)C\nC)D\nD)E\nE)F\nB)G\nG)H\nD)I\nE)J\nJ)K\nK)L').should.equal(42);
  });

  it('Tests that the total number of direct and indirect orbits for K)L,J)K,E)J,D)I,G)H,B)G,E)F,D)E,C)D,B)C,COM)B is 42', function() {
    countTotalOrbits('K)L\nJ)K\nE)J\nD)I\nG)H\nB)G\nE)F\nD)E\nC)D\nB)C\nCOM)B').should.equal(42);
  });
  
});

describe('#p2Solution', function() {
  it('Tests that some input is some value', function() {
    p2Solution('some input').should.equal('???');
  });
});
