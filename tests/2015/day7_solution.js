var should = require('chai').should(),
    solutions = require('../../modules/2015/day7_solution'),
    getSignal = solutions.p1Solution;

describe('#getSignal', function() {
    it('Tests that the signal ultimately provided to wire d from sample input is 72', function() {
        getSignal('123 -> x\n456 -> y\nx AND y -> d\nx OR y -> e\nx LSHIFT 2 -> f\ny RSHIFT 2 -> g\nNOT x -> h\nNOT y -> i').should.equal(72);
    });
});