const mocha = require('mocha');
const chai = require('chai');
const lab10_1 = require('../tests/lab10_1');

describe('Tests for lab10_1', () => {
    //correct tests
    it('m = 6; c = 2; x = 6 => 4', () => {
        chai.expect(lab10_1(6,2,6)).to.eq(4);
    }),
    it('m = 2; c = 0; x = 6 => 3', () => {
        chai.expect(lab10_1(2,0,6)).to.eq(3);
    }),
    it('m = 4; c = 2; x = 2 => 2', () => {
        chai.expect(lab10_1(4,2,2)).to.eq(2);
    }),
    it('m = 2; c = 5; x = -1 => 2', () => {
        chai.expect(lab10_1(2,5,-1)).to.eq(2);
    }),

    //incorrect tests
    it('m = 2; c = 0; x = 6 => 10', () => {
        chai.expect(lab10_1(2,0,6)).to.eq(10);
    }),
    it('m = 2; c = 5; x = -1 => 5', () => {
        chai.expect(lab10_1(2,5,-1)).to.eq(5);
    }),
    it('m = 4; c = 2; x = 2 => 3', () => {
        chai.expect(lab10_1(4,2,2)).to.eq(3);
    }),
    it('m = 6; c = 2; x = 3 => 10', () => {
        chai.expect(lab10_1(6,2,3)).to.eq(10);
    })
});