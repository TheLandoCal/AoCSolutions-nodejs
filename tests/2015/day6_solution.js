var solutions = require('../../src/modules/2015/day6_solution'),
    findLitLights = solutions.p1Solution,
    findTotalBrightness = solutions.p2Solution;

describe('#findLitLights', function() {
    it('Tests that turn on 0,0 through 999,999 would turn on (or leave on) every light.', function() {
        findLitLights('turn on 0,0 through 999,999').should.equal(1000000);
    });

    it('Tests that toggle 0,0 through 999,0 would toggle the first line of 1000 lights, turning off the ones that were on, and turning on the ones that were off.', function() {
        findLitLights('toggle 0,0 through 999,0').should.equal(1000);
    });

    it('Tests that turn off 499,499 through 500,500 would turn off (or leave off) the middle four lights.', function() {
        findLitLights('turn off 499,499 through 500,500').should.equal(0);
    });

    it('Tests that a coordinate pair like 0,0 through 2,2 therefore refers to 9 lights in a 3x3 square.', function() {
        findLitLights('turn on 0,0 through 2,2').should.equal(9);
    });

    it('Tests that turn on 887,9 through 959,629 should result in 45333.', function() {
        findLitLights('turn on 887,9 through 959,629').should.equal(45333);
    });
});

describe('#findTotalBrightness', function() {
    it('Tests that turn on 0,0 through 0,0 would increase the total brightness by 1.', function() {
        findTotalBrightness('turn on 0,0 through 0,0').should.equal(1);
    });

    it('Tests that toggle 0,0 through 999,999 would increase the total brightness by 2000000.', function() {
        findTotalBrightness('toggle 0,0 through 999,999').should.equal(2000000);
    });
});