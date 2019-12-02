var should = require('chai').should(),
    solutions = require('../../src/modules/2015/day2_solution'),
    getTotalWrappingPaperArea = solutions.p1Solution,
    getTotalRibbonLength = solutions.p2Solution;

describe('#getTotalWrappingPaperArea', function() {
    it('Tests that a present with dimension 2x3x4 requires 58 square feet of wrapping paper.', function() {
        getTotalWrappingPaperArea('2x3x4').should.equal(58);
    });

    it('Test that a present with dimension 1x1x10 requires 43 square feet of wrapping paper.', function() {
        getTotalWrappingPaperArea('1x1x10').should.equal(43);
    });
});

describe('#getTotalRibbonLength', function() {
    it('Tests that a present with dimension 2x3x4 requires 34 square feet of wrapping paper.', function() {
        getTotalRibbonLength('2x3x4').should.equal(34);
    });

    it('Tests that a present with dimension 1x1x10 requires 14 feet of ribbon.', function() {
        getTotalRibbonLength('1x1x10').should.equal(14);
    });
});