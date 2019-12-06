var solutions = require('./day5_solution'),
  runOpcode = solutions.runOpcode;

describe('#runOpcode', function() {
  it('Tests that 1,9,10,3,2,3,11,0,99,30,40,50 completes with empty output', function() {
    (() => runOpcode(null, '1,9,10,3,2,3,11,0,99,30,40,50')).should.not.Throw(Error);
    runOpcode(null, '1,9,10,3,2,3,11,0,99,30,40,50').should.have.lengthOf(0);
  });

  it('Tests that 3,9,8,9,10,9,4,9,99,-1,8 with an input of 8 outputs 1', function() {
    runOpcode(8, '3,9,8,9,10,9,4,9,99,-1,8').should.deep.equal([1]);
  });

  it('Tests that 3,9,8,9,10,9,4,9,99,-1,8 with an input of 9 outputs 0', function() {
    runOpcode(9, '3,9,8,9,10,9,4,9,99,-1,8').should.deep.equal([0]);
  });

  it('Tests that 3,9,7,9,10,9,4,9,99,-1,8 with an input of 7 outputs 1', function() {
    runOpcode(7, '3,9,7,9,10,9,4,9,99,-1,8').should.deep.equal([1]);
  });

  it('Tests that 3,9,7,9,10,9,4,9,99,-1,8 with an input of 9 outputs 0', function() {
    runOpcode(9, '3,9,7,9,10,9,4,9,99,-1,8').should.deep.equal([0]);
  });

  it('Tests that 3,3,1108,-1,8,3,4,3,99 with an input of 8 outputs 1', function() {
    runOpcode(8, '3,3,1108,-1,8,3,4,3,99').should.deep.equal([1]);
  });

  it('Tests that 3,3,1108,-1,8,3,4,3,99 with an input of 9 outputs 0', function() {
    runOpcode(9, '3,3,1108,-1,8,3,4,3,99').should.deep.equal([0]);
  });

  it('Tests that 3,3,1107,-1,8,3,4,3,99 with an input of 7 outputs 1', function() {
    runOpcode(7, '3,3,1107,-1,8,3,4,3,99').should.deep.equal([1]);
  });

  it('Tests that 3,3,1107,-1,8,3,4,3,99 with an input of 9 outputs 0', function() {
    runOpcode(9, '3,3,1107,-1,8,3,4,3,99').should.deep.equal([0]);
  });

  it('Tests that 3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9 with an input of 0 outputs 0', function() {
    runOpcode(0, '3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9').should.deep.equal([0]);
  });

  it('Tests that 3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9 with an input of 7 outputs 1', function() {
    runOpcode(7, '3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9').should.deep.equal([1]);
  });

  it('Tests that 3,3,1105,-1,9,1101,0,0,12,4,12,99,1 with an input of 0 outputs 0', function() {
    runOpcode(0, '3,3,1105,-1,9,1101,0,0,12,4,12,99,1').should.deep.equal([0]);
  });

  it('Tests that 3,3,1105,-1,9,1101,0,0,12,4,12,99,1 with an input of 7 outputs 1', function() {
    runOpcode(7, '3,3,1105,-1,9,1101,0,0,12,4,12,99,1').should.deep.equal([1]);
  });

  it('Tests that 3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99 with an input of 7 outputs 999', function() {
    runOpcode(
      7,
      '3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99'
    ).should.deep.equal([999]);
  });

  it('Tests that 3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99 with an input of 8 outputs 1000', function() {
    runOpcode(
      8,
      '3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99'
    ).should.deep.equal([1000]);
  });

  it('Tests that 3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99 with an input of 9 outputs 1001', function() {
    runOpcode(
      9,
      '3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99'
    ).should.deep.equal([1001]);
  });
});
