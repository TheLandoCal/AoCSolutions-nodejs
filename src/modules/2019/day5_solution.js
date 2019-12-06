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
  let outputs = [];
  while (instructions[instructionPointer] !== 99) {
    const opcode = instructions[instructionPointer]
      .toString()
      .padStart(5, '0')
      .split('')
      .map(x => parseInt(x));
    const operation = parseInt(opcode.slice(3).join(''));
    const numInstructionValues = instructionValuesMap[operation];
    const parameters = instructions
      .slice(instructionPointer + 1, instructionPointer + numInstructionValues)
      .map((p, idx) => {
        return { mode: opcode[2 - idx], value: p };
      });
    const output = runInstruction(input, operation, parameters, instructions);
    if (output != null) {
      outputs.push(output);
    }
    instructionPointer += numInstructionValues;
  }

  return outputs;
};

const runInstruction = function(input, operation, parameters, instructions) {
  // Since parameter modes are stored in the same value as the instruction's opcode,
  // single digit opcodes mean that all parameters are in position mode.
  const getParameterValue = parameter => {
    return parameter.mode === 1 ? parameter.value : instructions[parameter.value];
  };

  if (operation === 1) {
    const first = getParameterValue(parameters[0]);
    const second = getParameterValue(parameters[1]);
    instructions[parameters[2].value] = first + second;
  } else if (operation === 2) {
    const first = getParameterValue(parameters[0]);
    const second = getParameterValue(parameters[1]);
    instructions[parameters[2].value] = first * second;
  } else if (operation === 3) {
    instructions[parameters[0].value] = input;
  } else if (operation === 4) {
    const output = getParameterValue(parameters[0]);
    return output;
  }

  return null;
};

const printACUnitDiagnosticCode = function(input) {
  const systemId = 1;
  const outputs = runOpcode(systemId, input);
  return outputs[outputs.length - 1];
};

const printThermalRadiatorControllerDiagnosticCode = function(input) {
  const systemId = 5;
  const outputs = runOpcode(systemId, input);
  return outputs[outputs.length - 1];
};

module.exports = {
  runOpcode,
  p1Solution: printACUnitDiagnosticCode,
  p2Solution: printThermalRadiatorControllerDiagnosticCode
};
