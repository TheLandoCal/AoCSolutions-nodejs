var solutions = require('./day2_solution'),
  runOpcode = solutions.runOpcode;

describe('#runOpcode', function() {
  it('Tests that the final state of 1,9,10,3,2,3,11,0,99,30,40,50 is 3500,9,10,70,2,3,11,0,99,30,40,50', function() {
    runOpcode('1,9,10,3,2,3,11,0,99,30,40,50').should.equal('3500,9,10,70,2,3,11,0,99,30,40,50');
  });

  it('Tests that the final state of 1,0,0,0,99 is 2,0,0,0,99', function() {
    runOpcode('1,0,0,0,99').should.equal('2,0,0,0,99');
  });

  it('Tests that the final state of 2,3,0,3,99 is 2,3,0,6,99', function() {
    runOpcode('2,3,0,3,99').should.equal('2,3,0,6,99');
  });

  it('Tests that the final state of 2,4,4,5,99,0 is 2,4,4,5,99,9801', function() {
    runOpcode('2,4,4,5,99,0').should.equal('2,4,4,5,99,9801');
  });

  it('Tests that the final state of 1,1,1,4,99,5,6,0,99 is 2,0,0,0,99', function() {
    runOpcode('1,1,1,4,99,5,6,0,99').should.equal('30,1,1,4,2,5,6,0,99');
  });
});
