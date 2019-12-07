var solutions = require('./day7_solution'),
  findMaxThrusterSignal = solutions.p1Solution,
  tbd2 = solutions.p2Solution;

describe('#findMaxThrusterSignal', function() {
  it('Tests that 3,15,3,16,1002,16,10,16,1,16,15,15,4,15,99,0,0 has a max thruster signal of 43210', function() {
    findMaxThrusterSignal('3,15,3,16,1002,16,10,16,1,16,15,15,4,15,99,0,0').should.equal(43210);
  });

  it('Tests that 3,23,3,24,1002,24,10,24,1002,23,-1,23,101,5,23,23,1,24,23,23,4,23,99,0,0 has a max thruster signal of 54321', function() {
    findMaxThrusterSignal(
      '3,23,3,24,1002,24,10,24,1002,23,-1,23,101,5,23,23,1,24,23,23,4,23,99,0,0'
    ).should.equal(54321);
  });

  it('Tests that 3,31,3,32,1002,32,10,32,1001,31,-2,31,1007,31,0,33,1002,33,7,33,1,33,31,31,1,32,31,31,4,31,99,0,0,0 has a max thruster signal of 65210', function() {
    findMaxThrusterSignal(
      '3,31,3,32,1002,32,10,32,1001,31,-2,31,1007,31,0,33,1002,33,7,33,1,33,31,31,1,32,31,31,4,31,99,0,0,0'
    ).should.equal(65210);
  });
});

describe('#tbd2', function() {
  it('Tests that some input is some value', function() {
    tbd2('some input').should.equal('some value');
  });
});
