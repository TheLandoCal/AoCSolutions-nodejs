const runOpcode = function(input, rawInstructions) {
  const instructions = rawInstructions.split(',').map(code => parseInt(code));
  const instructionValuesMap = {
    1: 4,
    2: 4,
    3: 2,
    4: 2,
    5: 3,
    6: 3,
    7: 4,
    8: 4,
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
    let numInstructionValues = instructionValuesMap[operation];
    const parameters = instructions
      .slice(instructionPointer + 1, instructionPointer + numInstructionValues)
      .map((p, idx) => {
        return { mode: opcode[2 - idx], value: p };
      });

    const result = runInstruction(input, operation, parameters, instructions);
    if (result != null) {
      if ([5, 6].includes(operation)) {
        // Handle Jump-based opcodes
        instructionPointer = result;
        numInstructionValues = 0;
      } else if ([4].includes(operation)) {
        // Handle output-based opcodes
        outputs.push(result);
      }
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

  const first = getParameterValue(parameters[0]);
  const second = parameters[1] ? getParameterValue(parameters[1]) : null;

  if (operation === 1) {
    instructions[parameters[2].value] = first + second;
  } else if (operation === 2) {
    instructions[parameters[2].value] = first * second;
  } else if (operation === 3) {
    instructions[parameters[0].value] = input;
  } else if (operation === 4) {
    return first;
  } else if ((operation === 5 && first !== 0) || (operation === 6 && first === 0)) {
    return second;
  } else if (operation === 7) {
    instructions[parameters[2].value] = +(first < second);
  } else if (operation === 8) {
    instructions[parameters[2].value] = +(first === second);
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
