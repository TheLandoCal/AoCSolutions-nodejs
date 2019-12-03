const runOpcode = function(input, noun, verb) {
  const opcodes = input.split(',').map(code => parseInt(code));
  const numInstructionValues = 4;

  if (noun != null && verb != null) {
    opcodes[1] = noun;
    opcodes[2] = verb;
  }

  let instructionPointer = 0;
  while (opcodes[instructionPointer] !== 99) {
    const instruction = opcodes.slice(
      instructionPointer,
      instructionPointer + numInstructionValues
    );
    let computation;
    if (instruction[0] === 1) {
      computation = opcodes[instruction[1]] + opcodes[instruction[2]];
    } else if (instruction[0] === 2) {
      computation = opcodes[instruction[1]] * opcodes[instruction[2]];
    }

    opcodes[instruction[3]] = computation;
    instructionPointer += numInstructionValues;
  }

  return opcodes.join(',');
};

const restoreGravityAssistProgram = function(input) {
  return runOpcode(input, 12, 2).split(',')[0];
};

const calculateNounVerbOutput = function(input) {
  const output = '19690720';
  for (let i = 0; i <= 99; i++) {
    for (let j = 0; j <= 99; j++) {
      const result = runOpcode(input, i, j).split(',')[0];
      if (result === output) {
        return 100 * i + j;
      }
    }
  }
};

module.exports = {
  runOpcode,
  p1Solution: restoreGravityAssistProgram,
  p2Solution: calculateNounVerbOutput
};
