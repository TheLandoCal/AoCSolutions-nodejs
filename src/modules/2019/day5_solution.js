const tbd = function(input) {
  return '???';
};

const runOpcode = function(input, rawInstructions) {
  const instructions = rawInstructions.split(',').map(code => parseInt(code));
  const instructionValuesMap = {
    1: 4,
    2: 4,
    3: 2,
    4: 2,
    99: 1
  };

  let instructionPointer = 0;
  while (instructions[instructionPointer] !== 99) {
    // Since parameter modes are stored in the same value as the instruction's opcode,
    // single digit opcodes mean that all parameters are in position mode.
    const opcode = instructions[instructionPointer] % 100;
    const numInstructionValues = instructionValuesMap[opcode];
    const parameters = instructions
      .slice(instructionPointer + 1, instructionPointer + numInstructionValues)
      .map(p => {
        return { mode: 0, value: p };
      });
    instructionPointer += numInstructionValues;
  }
};

const runInstruction = function(opcode, parameters) {};

module.exports = {
  p1Solution: tbd,
  p2Solution: tbd
};
