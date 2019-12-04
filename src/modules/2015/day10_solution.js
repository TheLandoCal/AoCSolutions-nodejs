const groupSequences = function(sequence) {
  const groupPattern = /(\d)\1*/g;
  const groups = sequence.match(groupPattern);

  return groups.reduce((groupedSequences, group) => {
    groupedSequences.push([group.length, parseInt(group[0])]);
    return groupedSequences;
  }, []);
};

const countInstances = function(value) {
  const values = value.split('').map(x => parseInt(x));
  const uniqueValues = new Set(values);

  if (uniqueValues.size != 1) {
    return 0;
  }

  return values.length;
};

const lookAndSay = function(input, iterations) {
  let value = input;

  for (let i = 0; i < iterations; i++) {
    if (value.length == 1) {
      value = `${countInstances(value)}${value}`;
    } else {
      const sequences = groupSequences(value);
      value = sequences.flat().join('');
    }
  }

  return value;
};

const getLengthOf40LookAndSays = function(input) {
  return lookAndSay(input, 40).length;
}

const getLengthOf50LookAndSays = function(input) {
  return lookAndSay(input, 50).length;
}

module.exports = {
  lookAndSay,
  p1Solution: getLengthOf40LookAndSays,
  p2Solution: getLengthOf50LookAndSays
};
