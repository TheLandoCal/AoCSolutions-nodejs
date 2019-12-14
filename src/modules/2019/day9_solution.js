const runOpcode = require('./day5_solution').runOpcode;

const produceBOOSTKeycode = function(program, inputInstruction) {
  const outputs = runOpcode(program, inputInstruction);
  return outputs[outputs.length - 1];
};

const testBOOSTWith1 = function(input) {
  const testModeInput = 1;
  return produceBOOSTKeycode(input, testModeInput);
};

const testBOOSTWith2 = function(input) {
  const testModeInput = 2;
  return produceBOOSTKeycode(input, testModeInput);
};

module.exports = {
  produceBOOSTKeycode,
  p1Solution: testBOOSTWith1,
  p2Solution: testBOOSTWith2
};
