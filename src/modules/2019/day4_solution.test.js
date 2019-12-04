var solutions = require('./day4_solution'),
  isValidPassword = solutions.isValidPassword;

describe('#isValidPassword', function() {
  it('Tests that 111111 is a valid password', function() {
    isValidPassword('111111').should.be.true;
  });

  it('Tests that 122345 is a valid password', function() {
    isValidPassword('122345').should.be.true;
  });

  it('Tests that 111123 is a valid password', function() {
    isValidPassword('111123').should.be.true;
  });

  it('Tests that 135679 is a valid password', function() {
    isValidPassword('135679').should.be.false;
  });

  it('Tests that 223450 is a valid password', function() {
    isValidPassword('223450').should.be.false;
  });

  it('Tests that 123789 is a valid password', function() {
    isValidPassword('123789').should.be.false;
  });

  it('Tests that 111111 is a valid password with restrict repeating', function() {
    isValidPassword('111111', true).should.be.false;
  });

  it('Tests that 123333 is a valid password with restrict repeating', function() {
    isValidPassword('123333', true).should.be.false;
  });

  it('Tests that 112233 is a valid password with restrict repeating', function() {
    isValidPassword('112233', true).should.be.true;
  });

  it('Tests that 123444 is a valid password with restrict repeating', function() {
    isValidPassword('123444', true).should.be.false;
  });

  it('Tests that 111122 is a valid password with restrict repeating', function() {
    isValidPassword('111122', true).should.be.true;
  });
});
