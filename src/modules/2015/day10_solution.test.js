var solutions = require('./day10_solution'),
  lookAndSay = solutions.lookAndSay;

describe('#lookAndSay', function() {
  it('Tests 1 becomes 11 after 1 iteration', function() {
    lookAndSay('1', 1).should.equal('11');
  });

  it('Tests 1 becomes 21 after 2 iterations', function() {
    lookAndSay('1', 2).should.equal('21');
  });

  it('Tests 1 becomes 1211 after 3 iterations', function() {
    lookAndSay('1', 3).should.equal('1211');
  });

  it('Tests 1 becomes 111221 after 4 iterations', function() {
    lookAndSay('1', 4).should.equal('111221');
  });

  it('Tests 1 becomes 312211 after 5 iterations', function() {
    lookAndSay('1', 5).should.equal('312211');
  });
});
