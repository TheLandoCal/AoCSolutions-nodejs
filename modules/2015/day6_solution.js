var createGrid = function(rows, cols, val) {
    var array = [];

    for (var i = 0; i < rows; i++) {
        array.push(new Array(cols).fill(val));
    }

    return array;

};

var updateLights = function(array, command, start, finish) {
    var x1 = start[0],
        y1 = start[1],
        x2 = finish[0],
        y2 = finish[1];

    for (var i = x1; i <= x2; i++) {
        for (var j = y1; j <= y2; j++) {
            switch (command) {
                case 'turn on':
                    array[i][j] = 1;
                    break;
                case 'turn off':
                    array[i][j] = 0;
                    break;
                case 'toggle':
                    array[i][j] = !array[i][j];
                    break;
            }
        }
    }

    return array;
};

var updateLightBrightness = function(array, command, start, finish) {
    var x1 = start[0],
        y1 = start[1],
        x2 = finish[0],
        y2 = finish[1];

    for (var i = x1; i <= x2; i++) {
        for (var j = y1; j <= y2; j++) {
            switch (command) {
                case 'turn on':
                    array[i][j] += 1;
                    break;
                case 'turn off':
                    if (array[i][j] > 0) {
                        array[i][j] -= 1;
                    }
                    break;
                case 'toggle':
                    array[i][j] += 2;
                    break;
            }
        }
    }

    return array;
};

var sumArray = function(array) {
    var sum = 0;

    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            sum += array[i][j];
        }
    }

    return sum;
};

var findLitLights = function(input) {
    var instructions = input.split('\n'),
        re = /(.+) ((\d+),(\d+)) through ((\d+),(\d+))/,
        grid = createGrid(1000, 1000, 0);

    for (var i = 0; i < instructions.length; i++) {
        var result = instructions[i].match(re);
        var command = result[1],
            bottomCorner = [parseInt(result[3]), parseInt(result[4])],
            topCorner = [parseInt(result[6]), parseInt(result[7])];

        grid = updateLights(grid, command, bottomCorner, topCorner);
    }

    return sumArray(grid);
};

var findTotalBrightness = function(input) {
    var instructions = input.split('\n'),
        re = /(.+) ((\d+),(\d+)) through ((\d+),(\d+))/,
        grid = createGrid(1000, 1000, 0);

    for (var i = 0; i < instructions.length; i++) {
        var result = instructions[i].match(re);
        var command = result[1],
            bottomCorner = [parseInt(result[3]), parseInt(result[4])],
            topCorner = [parseInt(result[6]), parseInt(result[7])];

        grid = updateLightBrightness(grid, command, bottomCorner, topCorner);
    }

    return sumArray(grid);
};

module.exports = {
    p1Solution: findLitLights,
    p2Solution: findTotalBrightness
};