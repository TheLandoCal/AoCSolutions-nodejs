var ptGetFinalFloor = function(input) {
    var floor = 0;

    for (var i = 0, len = input.length; i < len; i++) {
        floor += input[i] == '(' ? 1 : -1;
    }
    return floor;
};

var ptFindBasementEntry = function(input) {
    var floor = 0;

    for (var i = 0, len = input.length; i < len; i++) {
        floor += input[i] == '(' ? 1 : -1;
        if (floor < 0)
            return i + 1;
    }

    return 0;
};

module.exports = {
    p1Solution: ptGetFinalFloor,
    p2Solution: ptFindBasementEntry
};