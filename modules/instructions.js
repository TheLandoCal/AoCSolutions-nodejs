var getEndPoint = function(instruction, x, y, axis) {
    var direction = instruction.substring(0, 1);
    var distance = parseInt(instruction.substring(1));

    axis += direction === 'R' ? 1 : -1;

    if (axis % 2 === 0) {
        y += (axis % 4 === 0 ? 1 : -1) * distance;
    } else {
        x += ((axis - 1) % 4 === 0 ? 1 : -1) * distance;
    }

    return [x, y, axis];
};

var hasVisited = function(coordinatesVisited, coordinate) {
    for (var i = 0; i < coordinatesVisited.length; i++) {
        if (coordinatesVisited[i][0] == coordinate[0] && coordinatesVisited[i][1] == coordinate[1]) {
            return true;
        }
    }
    return false;
};

module.exports = {
    ptGetFinalFloor: function(input) {
        var floor = 0;

        for (i = 0; i < input.length; i++) {
            floor += input[i] == '(' ? 1 : -1;
        }
        return floor;
    },
    ptFindBasementEntry: function(input) {
        var floor = 0;

        for (i = 0; i < input.length; i++) {
            floor += input[i] == '(' ? 1 : -1;
            if (floor < 0)
                return i + 1;
        }

        return 0;
    },
    tgCalcShortestPath: function(input) {
        var instructions = input.split(', ');

        var x = 0;
        var y = 0;
        var axis = 0; // Start Facing North

        // Taxicab Geometry Visualization
        //       (0, 4, 8, ...) [Even axes are y-axis]
        //                     ↑
        //                     |
        // (3, 7, 11, ...) <---o---> (1, 5, 9, ...)  [Odd axes are x-axis]
        //                     |
        //                     ↓
        //               (2, 6, 10, ...)
        // Positive y: axis is multiple of 4
        // Negative y: axis is multiple of 2 but not 4
        // Positive x: axis is 1 more than a multiple of 4
        // Negative x: axis is 1 less than a multiple of 4

        for (i = 0; i < instructions.length; i++) {
            var result = getEndPoint(instructions[i], x, y, axis);
            x = result[0];
            y = result[1];
            axis = result[2];
        }

        return Math.abs(x) + Math.abs(y); // Most direct path is sum of (x, y) coordinates.
    },
    tgFindFirstIntersection: function(input) {
        var instructions = input.split(', ');
        var axis = 0;
        var x = 0;
        var y = 0;
        var coordinates = [
            [x, y]
        ];

        // TODO: Write algorithm for intersection
        for (i = 0; i < instructions.length; i++) {
            var result = getEndPoint(instructions[i], x, y, axis);
            var currentX = result[0],
                currentY = result[1];

            // Base Case: Current endpoint is in visited coordinates.
            if (hasVisited(coordinates, [currentX, currentY])) {
                return Math.abs(currentX) + Math.abs(currentY);
            }

            // Otherwise, add all intermittent points to visited coordinates
            // and check if they have been visited.
            coordinates.push([currentX, currentY]);
            if (currentX === x) {
                if (currentY > y) {
                    for (yVisited = y + 1; yVisited < currentY; yVisited++) {
                        if (hasVisited(coordinates, [x, yVisited])) {
                            return Math.abs(x) + Math.abs(yVisited);
                        }
                        coordinates.push([x, yVisited]);
                    }
                } else {
                    for (yVisited = y - 1; yVisited > currentY; yVisited--) {
                        if (hasVisited(coordinates, [x, yVisited])) {
                            return Math.abs(x) + Math.abs(yVisited);
                        }
                        coordinates.push([x, yVisited]);
                    }
                }
            } else {
                if (currentX > x) {
                    for (xVisited = x + 1; xVisited < currentX; xVisited++) {
                        if (hasVisited(coordinates, [xVisited, y])) {
                            return Math.abs(xVisited) + Math.abs(y);
                        }
                        coordinates.push([xVisited, y]);
                    }
                } else {
                    for (xVisited = x - 1; xVisited > currentX; xVisited--) {
                        if (hasVisited(coordinates, [xVisited, y])) {
                            return Math.abs(xVisited) + Math.abs(y);
                        }
                        coordinates.push([xVisited, y]);
                    }
                }
            }

            x = currentX;
            y = currentY;
            axis = result[2];
        }
    }
};