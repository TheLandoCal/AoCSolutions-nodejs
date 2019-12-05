var solutions = require('./day5_solution'),
  tbd1 = solutions.p1Solution,
  tbd2 = solutions.p2Solution;

describe('#tbd1', function() {
  it('Tests that some input is some value', function() {
    tbd1('some input').should.equal('some value');
  });
});


describe('#tbd2', function() {
  it('Tests that some input is some value', function() {
    tbd2('some input').should.equal('some value');
  });
});
