const permutations = require('../2015/day9_solution').permutations;

const instructionValuesMap = { 1: 4, 2: 4, 3: 2, 4: 2, 5: 3, 6: 3, 7: 4, 8: 4, 99: 1 };
const ampNames = ['A', 'B', 'C', 'D', 'E'];

const initializeAmpOutputs = function() {
  return ampNames.reduce((outputs, ampName) => {
    outputs[ampName] = [];
    return outputs;
  }, {});
};

let ampOutputs = initializeAmpOutputs();

const getInputSignal = function(ampName, idx) {
  const maxRetries = 200;
  let numRetries = 0;
  return new Promise(async (resolve, reject) => {
    const numAmps = ampNames.length;
    const incomingAmpName = ampNames[(numAmps + ampNames.indexOf(ampName) - 1) % numAmps];

    while (ampOutputs[incomingAmpName][idx] == null) {
      if (numRetries >= maxRetries) {
        reject(
          `Max Retries reached (${maxRetries}) waiting for output from Amp ${incomingAmpName} into Amp ${ampName}`
        );
      }
      numRetries++;
      await new Promise(resolve => setTimeout(resolve, 250));
    }

    resolve(ampOutputs[incomingAmpName][idx]);
  });
};

const getInstructionParameters = function(instructions, pointer, numParameters) {
  const opcode = getOpcode(instructions, pointer);
  return instructions.slice(pointer + 1, pointer + numParameters).map((p, idx) => {
    return { mode: opcode[2 - idx], value: p };
  });
};

const getOpcode = function(instructions, pointer) {
  return instructions[pointer]
    .toString()
    .padStart(5, '0')
    .split('')
    .map(x => parseInt(x));
};

const runOpcode = async function(rawInstructions, ampName, phaseSetting, loopMode = false) {
  const instructions = rawInstructions.split(',').map(code => parseInt(code));
  let instructionPointer = 0;
  let numInputRequests = 0;
  while (instructions[instructionPointer] !== 99) {
    const opcode = getOpcode(instructions, instructionPointer);
    const operation = parseInt(opcode.slice(3).join(''));
    let numInstructionValues = instructionValuesMap[operation];
    const parameters = getInstructionParameters(
      instructions,
      instructionPointer,
      numInstructionValues
    );

    let input;
    if (operation === 3) {
      if (numInputRequests == 0) {
        input = phaseSetting;
      } else if (numInputRequests == 1 && ampName === 'A') {
        input = 0;
      } else {
        const outputIdx = loopMode ? numInputRequests - (ampName === 'A' ? 2 : 1) : 0;
        input = await getInputSignal(ampName, outputIdx);
      }
      numInputRequests++;
    }

    const result = runInstruction(operation, parameters, instructions, input);
    if (result != null) {
      if ([4].includes(operation)) {
        // Handle output-based opcodes
        ampOutputs[ampName].push(result);
      } else if ([5, 6].includes(operation)) {
        // Handle Jump-based opcodes
        instructionPointer = result;
        numInstructionValues = 0;
      }
    }
    instructionPointer += numInstructionValues;
  }

  return ampOutputs[ampName];
};

const runInstruction = function(operation, parameters, instructions, input) {
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

const findMaxThrusterSignal = async function(input, phaseValues, loopMode) {
  const phaseSettingSequences = permutations(phaseValues);
  // const phaseSettingSequences = [
  //   [0, 1, 2, 3, 4],
  //   [2, 0, 1, 4, 3]
  // ];

  let maxThrusterSignal = Number.MIN_SAFE_INTEGER;
  await phaseSettingSequences.reduce(async (previousPromise, phaseSettingSequence) => {
    await previousPromise;
    ampOutputs = initializeAmpOutputs();
    await Promise.all([
      runOpcode(input, ampNames[0], phaseSettingSequence[0], loopMode),
      runOpcode(input, ampNames[1], phaseSettingSequence[1], loopMode),
      runOpcode(input, ampNames[2], phaseSettingSequence[2], loopMode),
      runOpcode(input, ampNames[3], phaseSettingSequence[3], loopMode),
      runOpcode(input, ampNames[4], phaseSettingSequence[4], loopMode)
    ])
      .then(outputs => {
        const outputE = outputs.pop().pop();
        maxThrusterSignal = Math.max(maxThrusterSignal, outputE);
      })
      .catch(reason => {
        console.log(`ERROR: ${reason}`);
      });
  }, Promise.resolve());

  console.log(`Max Thruster Signal => ${maxThrusterSignal}`);
  return maxThrusterSignal;
};

const findMaxThrusterSignalLowPhases = function(input) {
  const phaseValues = [0, 1, 2, 3, 4];
  findMaxThrusterSignal(input, phaseValues, false);
  return '[...see console log for answer]';
};

const findMaxThrusterSignalHighPhases = function(input) {
  const phaseValues = [5, 6, 7, 8, 9];
  findMaxThrusterSignal(input, phaseValues, true);
  return '[...see console log for answer]';
};

module.exports = {
  findMaxThrusterSignal,
  p1Solution: findMaxThrusterSignalLowPhases,
  p2Solution: () => '???'
};
