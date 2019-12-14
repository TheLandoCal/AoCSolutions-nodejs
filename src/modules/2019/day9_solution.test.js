var solutions = require('./day9_solution'),
  produceBOOSTKeycode = solutions.p1Solution,
  tbd2 = solutions.p2Solution;

describe('#produceBOOSTKeycode', function() {
  it('Tests that the result from 109,1,204,-1,1001,100,1,100,1008,100,16,101,1006,101,0,99 is 99', function() {
    produceBOOSTKeycode('109,1,204,-1,1001,100,1,100,1008,100,16,101,1006,101,0,99').should.equal(99);
  });

  it('Tests that the result from 1102,34915192,34915192,7,4,7,99,0 is 1219070632396864', function() {
    produceBOOSTKeycode('1102,34915192,34915192,7,4,7,99,0').should.equal(1219070632396864);
  });

  it('Tests that the result from 104,1125899906842624,99 is 1125899906842624', function() {
    produceBOOSTKeycode('104,1125899906842624,99').should.equal(1125899906842624);
  });

  it('Tests that the result from 109,-1,4,1,99 is -1', function() {
    produceBOOSTKeycode('109,-1,4,1,99').should.equal(-1);
  });

  it('Tests that the result from 109,-1,104,1,99 is 1', function() {
    produceBOOSTKeycode('109,-1,104,1,99').should.equal(1);
  });

  it('Tests that the result from 109,-1,204,1,99 is 109', function() {
    produceBOOSTKeycode('109,-1,204,1,99').should.equal(109);
  });

  it('Tests that the result from 109,1,9,2,204,-6,99 is 204', function() {
    produceBOOSTKeycode('109,1,9,2,204,-6,99').should.equal(204);
  });

  it('Tests that the result from 109,1,109,9,204,-6,99 is 204', function() {
    produceBOOSTKeycode('109,1,109,9,204,-6,99').should.equal(204);
  });

  it('Tests that the result from 109,1,209,-1,204,-106,99 is 204', function() {
    produceBOOSTKeycode('109,1,209,-1,204,-106,99').should.equal(204);
  });
});


describe('#tbd2', function() {
  it('Tests that the result from some input is some value', function() {
    tbd2('some input').should.equal('???');
  });
});
