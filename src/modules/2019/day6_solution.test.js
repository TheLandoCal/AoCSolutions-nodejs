var solutions = require('./day6_solution'),
  countTotalOrbits = solutions.p1Solution,
  countOrbitalTransfers = solutions.p2Solution;

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

describe('#countOrbitalTransfers', function() {
  it('Tests that the minimum number of orbital transfers for COM)B,B)C,C)D,D)E,E)F,B)G,G)H,D)I,E)J,J)K,K)L,K)YOU,I)SAN is 4', function() {
    countOrbitalTransfers('COM)B\nB)C\nC)D\nD)E\nE)F\nB)G\nG)H\nD)I\nE)J\nJ)K\nK)L\nK)YOU\nI)SAN').should.equal(4);
  });

  it('Tests that the minimum number of orbital transfers for I)SAN,K)YOU,K)L,J)K,E)J,D)I,G)H,B)G,E)F,D)E,C)D,B)C,COM)B is 4', function() {
    countOrbitalTransfers('I)SAN\nK)YOU\nK)L\nJ)K\nE)J\nD)I\nG)H\nB)G\nE)F\nD)E\nC)D\nB)C\nCOM)B').should.equal(4);
  });
});
