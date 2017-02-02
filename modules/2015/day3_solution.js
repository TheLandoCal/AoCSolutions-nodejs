var getMove = function(arrow) {
    var move = [];

    switch (arrow) {
        case '^':
            move = [0, 1];
            break;
        case 'v':
            move = [0, -1];
            break;
        case '>':
            move = [1, 0];
            break;
        case '<':
            move = [-1, 0];
    }

    return move;
};

var getHousesDeliveredTo = function(input) {
    var houses = { '[0, 0]': 1 },
        x = 0,
        y = 0;

    for (var i = 0, len = input.length; i < len; i++) {
        var move = getMove(input[i]);
        x += move[0];
        y += move[1];

        // Check if house has already been visited (+1 if it has)
        if (typeof houses['[' + x + ', ' + y + ']'] === 'undefined') {
            houses['[' + x + ', ' + y + ']'] = 1;
        } else {
            houses['[' + x + ', ' + y + ']'] += 1;
        }
    }

    return houses;
};

var countSoloSantaHouses = function(input) {
    return Object.keys(getHousesDeliveredTo(input)).length;
};

var countDuoSantaHouses = function(input) {
    var santaMoves = '',
        roboSantaMoves = '';

    for (var i = 0, len = input.length; i < len; i += 2) {
        santaMoves += input[i];
        if (i + 1 < len) {
            roboSantaMoves += input[i + 1];
        }
    }

    var santaHouses = getHousesDeliveredTo(santaMoves),
        roboSantaHouses = getHousesDeliveredTo(roboSantaMoves);

    var allHouses = Object.assign({}, santaHouses, roboSantaHouses);

    return Object.keys(allHouses).length;
};

module.exports = {
    p1Solution: countSoloSantaHouses,
    p2Solution: countDuoSantaHouses
};