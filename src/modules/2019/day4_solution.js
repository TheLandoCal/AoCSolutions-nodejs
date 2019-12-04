const isValidPassword = function(password, restrictRepeatedNumbers = false) {
  const sixDigitNumber = /^\d{6}$/;
  const repeatedNumber = /(\d)\1{1,5}/g;

  const meetsRepeatedNumberCriteria = password.match(repeatedNumber) != null && (restrictRepeatedNumbers
    ? password.match(repeatedNumber).some(x => x.length == 2)
    : true);

  return (
    password.match(sixDigitNumber) != null && meetsRepeatedNumberCriteria && [...password].sort().join('') === password
  );
};

const countValidPasswordsInRange = function(input) {
  [minPassword, maxPassword] = input.split('-').map(x => parseInt(x));
  let validPasswordCount = 0;

  for (let i = minPassword; i <= maxPassword; i++) {
    validPasswordCount += isValidPassword(i.toString());
  }

  return validPasswordCount;
};

const countValidPasswordsInRangeWithRestrictedRepeatedNumbers = function(input) {
  [minPassword, maxPassword] = input.split('-').map(x => parseInt(x));
  let validPasswordCount = 0;

  // 505 is too low
  for (let i = minPassword; i <= maxPassword; i++) {
    validPasswordCount += isValidPassword(i.toString(), true);
  }

  return validPasswordCount;
};

module.exports = {
  isValidPassword,
  p1Solution: countValidPasswordsInRange,
  p2Solution: countValidPasswordsInRangeWithRestrictedRepeatedNumbers
};
