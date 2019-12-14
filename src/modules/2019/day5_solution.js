const instructionValuesMap = { 1: 4, 2: 4, 3: 2, 4: 2, 5: 3, 6: 3, 7: 4, 8: 4, 9: 2, 99: 1 };

const getOpcode = function(instructions, pointer) {
  return instructions[pointer]
    .toString()
    .padStart(5, '0')
    .split('')
    .map(x => parseInt(x));
};

const getInstructionParameters = function(instructions, pointer, numParameters) {
  const opcode = getOpcode(instructions, pointer);
  return instructions.slice(pointer + 1, pointer + numParameters).map((p, idx) => {
    return { mode: opcode[2 - idx], value: p };
  });
};

const runOpcode = function(rawInstructions, input) {
  const instructions = rawInstructions.split(',').map(code => parseInt(code));
  let instructionPointer = 0;
  let relativeBase = 0;
  let outputs = [];

  while (instructions[instructionPointer] !== 99) {
    const opcode = getOpcode(instructions, instructionPointer);
    const operation = parseInt(opcode.slice(3).join(''));
    let numInstructionValues = instructionValuesMap[operation];
    const parameters = getInstructionParameters(
      instructions,
      instructionPointer,
      numInstructionValues
    );

    const result = runInstruction(operation, parameters, instructions, input, relativeBase);
    if (result != null) {
      if ([4].includes(operation)) {
        // Handle output-based opcodes
        outputs.push(result);
      } else if ([5, 6].includes(operation)) {
        // Handle Jump-based opcodes
        instructionPointer = result;
        numInstructionValues = 0;
      } else if ([9].includes(operation)) {
        relativeBase = result;
      }
    }

    instructionPointer += numInstructionValues;
  }

  return outputs;
};

const runInstruction = function(operation, parameters, instructions, input, relativeBase) {
  // Since parameter modes are stored in the same value as the instruction's opcode,
  // single digit opcodes mean that all parameters are in position mode.
  const getReadParameterValue = parameter => {
    if (parameter.mode === 0) {
      // Position Mode
      return instructions[parameter.value] || 0;
    } else if (parameter.mode === 1) {
      // Immediate Mode
      return parameter.value;
    } else if (parameter.mode === 2) {
      // Relative Mode
      return instructions[relativeBase + parameter.value] || 0;
    }

    throw new Error(`ERROR: Invalid parameter mode ${parameter.mode}`);
  };

  const getWriteParameterValue = parameter => {
    return parameter.value + (parameter.mode === 2 ? relativeBase : 0);
  };

  const first = getReadParameterValue(parameters[0]);
  const second = parameters[1] ? getReadParameterValue(parameters[1]) : null;
  const third = parameters[2] ? getWriteParameterValue(parameters[2]) : null;

  if (operation === 1) {
    // Addition
    instructions[third] = first + second;
  } else if (operation === 2) {
    // Multiplication
    instructions[third] = first * second;
  } else if (operation === 3) {
    // Store Input
    instructions[getWriteParameterValue(parameters[0])] = input;
  } else if (operation === 4) {
    // Output
    return first;
  } else if ((operation === 5 && first !== 0) || (operation === 6 && first === 0)) {
    // Jump Pointer
    return second;
  } else if (operation === 7) {
    // Store 1 if Less Than
    instructions[third] = +(first < second);
  } else if (operation === 8) {
    // Store 1 if Equal
    instructions[third] = +(first === second);
  } else if (operation === 9) {
    // Increment Relative Base
    return relativeBase + first;
  }

  return null;
};

const printACUnitDiagnosticCode = function(input) {
  const systemId = 1;
  const outputs = runOpcode(input, systemId);
  return outputs[outputs.length - 1];
};

const printThermalRadiatorControllerDiagnosticCode = function(input) {
  const systemId = 5;
  const outputs = runOpcode(input, systemId);
  return outputs[outputs.length - 1];
};

module.exports = {
  runOpcode,
  p1Solution: printACUnitDiagnosticCode,
  p2Solution: printThermalRadiatorControllerDiagnosticCode
};
