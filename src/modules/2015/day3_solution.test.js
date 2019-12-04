var solutions = require('./day3_solution'),
    countSoloSantaHouses = solutions.p1Solution,
    countDuoSantaHouses = solutions.p2Solution;

describe('#countSoloSantaHouses', function() {
    it('Tests that > delivers presents to 2 houses: one at the starting location, and one to the east.', function() {
        countSoloSantaHouses('>').should.equal(2);
    });

    it('Tests that ^>v< delivers presents to 4 houses in a square, including twice to the house at his starting/ending location.', function() {
        countSoloSantaHouses('^>v<').should.equal(4);
    });

    it('Tests that ^v^v^v^v^v delivers a bunch of presents to some very lucky children at only 2 houses.', function() {
        countSoloSantaHouses('^v^v^v^v^v').should.equal(2);
    });
});

describe('#countDuoSantaHouses', function() {
    it('Tests that ^v delivers presents to 3 houses, because Santa goes north, and then Robo-Santa goes south.', function() {
        countDuoSantaHouses('^v').should.equal(3);
    });

    it('Tests that ^>v< now delivers presents to 3 houses, and Santa and Robo-Santa end up back where they started.', function() {
        countDuoSantaHouses('^>v<').should.equal(3);
    });

    it('Tests that ^v^v^v^v^v now delivers presents to 11 houses, with Santa going one direction and Robo-Santa going the other.', function() {
        countDuoSantaHouses('^v^v^v^v^v').should.equal(11);
    });
});