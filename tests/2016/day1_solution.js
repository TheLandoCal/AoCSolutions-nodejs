var solutions = require('../../src/modules/2016/day1_solution'),
    calcShortestPath = solutions.p1Solution,
    findFirstIntersection = solutions.p2Solution;

describe('#calcShortestPath', function() {
    it('Tests that R2, L3 leaves you 2 blocks East and 3 blocks North, or 5 blocks away.', function() {
        calcShortestPath('R2, L3').should.equal(5);
    });

    it('Tests that R2, R2, R2 leaves you 2 blocks due South of your starting position, which is 2 blocks away.', function() {
        calcShortestPath('R2, R2, R2').should.equal(2);
    });

    it('Tests that R5, L5, R5, R3 leaves you 12 blocks away.', function() {
        calcShortestPath('R5, L5, R5, R3').should.equal(12);
    });
});

describe('#findFirstIntersection', function() {
    it('Tests that with R8, R4, R4, R8, the first location you visit twice is 4 blocks away, due East.', function() {
        findFirstIntersection('R8, R4, R4, R8').should.equal(4);
    });

    it('Tests that with R4, R4, R8, R4, R4, the first location you visit twice is where you started. ', function() {
        findFirstIntersection('R4, R4, R8, R4, R4').should.equal(0);
    });
});