module.exports = {
    getFinalFloor: function(input) {
        var floor = 0;

        for (i = 0; i < input.length; i++) {
            floor += input[i] == "(" ? 1 : -1;
        }
        return floor;
    },
    findBasementEntry: function(input) {
        var floor = 0;

        for (i = 0; i < input.length; i++) {
            floor += input[i] == "(" ? 1 : -1;
            if (floor < 0)
                return i + 1;
        }

        return 0;
    }

};