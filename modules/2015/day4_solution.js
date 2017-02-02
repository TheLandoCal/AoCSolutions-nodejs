var md5 = require('js-md5');

var findLowestMd5PosNumber = function(input, prefix) {
    for (var i = 1; i < Number.MAX_SAFE_INTEGER; i++) {
        if (md5(input + i).startsWith(prefix)) {
            return i;
        }
    }
};

var getLowestNum5Zeros = function(input) {
    return findLowestMd5PosNumber(input, '00000');
};

var getLowestNum6Zeros = function(input) {
    return findLowestMd5PosNumber(input, '000000');
};

module.exports = {
    p1Solution: getLowestNum5Zeros,
    p2Solution: getLowestNum6Zeros
};