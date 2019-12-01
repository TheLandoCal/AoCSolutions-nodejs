var captcha = function(shift, input) {
  const size = input.length;
  return input
    .split("")
    .filter((n, idx, sequence) => sequence[(idx + shift) % size] === n)
    .reduce((acc, value) => acc + parseInt(value), 0);
};

var getSumOfRepeatingDigits = function(input) {
  const shift = 1;
  return captcha(shift, input);
};

var getSumOfRot13Digits = function(input) {
  const shift = input.length / 2;
  return captcha(shift, input);
};

module.exports = {
  p1Solution: getSumOfRepeatingDigits,
  p2Solution: getSumOfRot13Digits
};
