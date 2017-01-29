var should = require('chai').should(),
    instructions = require('../modules/instructions'),
    ptGetFinalFloor = instructions.ptGetFinalFloor,
    ptFindBasementEntry = instructions.ptFindBasementEntry,
    tgCalcShortestPath = instructions.tgCalcShortestPath,
    tgFindFirstIntersection = instructions.tgFindFirstIntersection;

describe('#ptGetFinalFloor', function() {
    it('Tests that (()) and ()() both result in floor 0.', function() {
        ptGetFinalFloor('(())').should.equal(0);
        ptGetFinalFloor('()()').should.equal(0);
    });

    it('Tests that ((( and (()(()( both result in floor 3.', function() {
        ptGetFinalFloor('(((').should.equal(3);
        ptGetFinalFloor('(()(()(').should.equal(3);
    });

    it('Tests that ))((((( also results in floor 3.', function() {
        ptGetFinalFloor('))(((((').should.equal(3);
    });

    it('Tests that ()) and ))( both result in floor -1 (the first basement level).', function() {
        ptGetFinalFloor('())').should.equal(-1);
        ptGetFinalFloor('))(').should.equal(-1);
    });

    it('Tests that ))) and )())()) both result in floor -3.', function() {
        ptGetFinalFloor(')))').should.equal(-3);
        ptGetFinalFloor(')())())').should.equal(-3);
    });

});

describe('#ptFindBasementEntry', function() {
    it('Tests that ) causes him to enter the basement at character position 1.', function() {
        ptFindBasementEntry(')').should.equal(1);
    });

    it('Tests that ()()) causes him to enter the basement at character position 5.', function() {
        ptFindBasementEntry('()())').should.equal(5);
    });

    it('Tests that )))(( does not cause him to enter the basement at all.', function() {
        ptFindBasementEntry('((())').should.equal(0);
    });
});

describe('#tgCalcShortestPath', function() {
    it('Tests that R2, L3 leaves you 2 blocks East and 3 blocks North, or 5 blocks away.', function() {
        tgCalcShortestPath('R2, L3').should.equal(5);
    });

    it('Tests that R2, R2, R2 leaves you 2 blocks due South of your starting position, which is 2 blocks away.', function() {
        tgCalcShortestPath('R2, R2, R2').should.equal(2);
    });

    it('Tests that R5, L5, R5, R3 leaves you 12 blocks away.', function() {
        tgCalcShortestPath('R5, L5, R5, R3').should.equal(12);
    });
});

describe('#tgFindFirstIntersection', function() {
    it('Tests that with R8, R4, R4, R8, the first location you visit twice is 4 blocks away, due East.', function() {
        tgFindFirstIntersection('R8, R4, R4, R8').should.equal(4);
    });

    it('Tests that with R4, R4, R8, R4, R4, the first location you visit twice is where you started. ', function() {
        tgFindFirstIntersection('R4, R4, R8, R4, R4').should.equal(0);
    });
});