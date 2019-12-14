const runOpcode = require('./day5_solution').runOpcode;

const produceBOOSTKeycode = function(input) {
  // Too Low: 203
  const testModeInput = 1;
  const outputs = runOpcode(input, testModeInput);
  return outputs[outputs.length - 1];
};

module.exports = {
  p1Solution: produceBOOSTKeycode,
  p2Solution: () => '???'
};
