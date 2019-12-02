var solutions = require('../../src/modules/2015/day1_solution'),
    getFinalFloor = solutions.p1Solution,
    findBasementEntry = solutions.p2Solution;

describe('#getFinalFloor', function() {
    it('Tests that (()) and ()() both result in floor 0.', function() {
        getFinalFloor('(())').should.equal(0);
        getFinalFloor('()()').should.equal(0);
    });

    it('Tests that ((( and (()(()( both result in floor 3.', function() {
        getFinalFloor('(((').should.equal(3);
        getFinalFloor('(()(()(').should.equal(3);
    });

    it('Tests that ))((((( also results in floor 3.', function() {
        getFinalFloor('))(((((').should.equal(3);
    });

    it('Tests that ()) and ))( both result in floor -1 (the first basement level).', function() {
        getFinalFloor('())').should.equal(-1);
        getFinalFloor('))(').should.equal(-1);
    });

    it('Tests that ))) and )())()) both result in floor -3.', function() {
        getFinalFloor(')))').should.equal(-3);
        getFinalFloor(')())())').should.equal(-3);
    });

});

describe('#findBasementEntry', function() {
    it('Tests that ) causes him to enter the basement at character position 1.', function() {
        findBasementEntry(')').should.equal(1);
    });

    it('Tests that ()()) causes him to enter the basement at character position 5.', function() {
        findBasementEntry('()())').should.equal(5);
    });

    it('Tests that )))(( does not cause him to enter the basement at all.', function() {
        findBasementEntry('((())').should.equal(0);
    });
});