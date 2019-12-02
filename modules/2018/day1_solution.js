var calculateChangesFromZero = function(input) {
  return input.split('\n').reduce((acc, val) => acc + parseInt(val), 0);
};

var findDuplicateFrequency = function(input) {
  const changes = input.split('\n');
  const frequenciesFound = new Set([0]);
  let frequency = 0;
  let duplicateFrequency;

  while (typeof duplicateFrequency == 'undefined') {
    for (let i = 0; i < changes.length; i++) {
      let change = changes[i];
      const currentFrequency = frequency + parseInt(change);

      if (frequenciesFound.has(currentFrequency)) {
        duplicateFrequency = currentFrequency;
        break;
      }
      frequenciesFound.add(currentFrequency);
      frequency = currentFrequency;
    }
  }

  return duplicateFrequency;
};

module.exports = {
  p1Solution: calculateChangesFromZero,
  p2Solution: findDuplicateFrequency
};
