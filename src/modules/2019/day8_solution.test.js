var calculateOnesAndTwosProductInLayerWithFewestZeros = require('./day8_solution')
  .calculateOnesAndTwosProductInLayerWithFewestZeros;

describe('#calculateOnesAndTwosProductInLayerWithFewestZeros', function() {
  it('Tests the result of input 123456789012 is 1', function() {
    calculateOnesAndTwosProductInLayerWithFewestZeros('123456789012', 3, 2).should.equal(1);
  });
});
