var should = require('chai').should(),
    solutions = require('../../modules/2015/day1_solution'),
    ptGetFinalFloor = solutions.p1Solution,
    ptFindBasementEntry = solutions.p2Solution;

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