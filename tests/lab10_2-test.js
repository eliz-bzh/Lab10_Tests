const mocha = require('mocha');
const chai = require('chai');
const lab10_2 = require('../tests/lab10_2');

describe('Tests for lab10_2', () =>{
    //correct tests
    it('[ [2,8,4], [3,1,5], [1,7,8] ] => [ [ 2, 64, 4 ], [ 3, 0, 5 ], [ 0, 7, 64 ] ]', () =>{
        chai.expect(lab10_2([ [2,8,4], [3,1,5], [1,7,8] ])).to.deep.equal([ [ 2, 64, 4 ], [ 3, 0, 5 ], [ 0, 7, 64 ] ]);
    }),
    it('[ [3,0,4], [7,10,5], [8,7,10] ] => [ [ 3, 0, 4 ], [ 7, 100, 5 ], [ 8, 7, 100 ] ]', () =>{
        chai.expect(lab10_2([ [3,0,4], [7,10,5], [8,7,10] ])).to.deep.equal([ [ 3, 0, 4 ], [ 7, 100, 5 ], [ 8, 7, 100 ] ]);
    }),
    it('[ [1,-1,5], [8,10,11], [11,-1,11] ] => [ [ 1, 0, 5 ], [ 8, 10, 121 ], [ 121, 0, 121 ] ]', () =>{
        chai.expect(lab10_2([ [1,-1,5], [8,10,11], [11,-1,11] ])).to.deep.equal([ [ 1, 0, 5 ], [ 8, 10, 121 ], [ 121, 0, 121 ] ]);
    }),
    it('empty => error', () =>{
        chai.expect(lab10_2()).to.be.an('error');
    }),
    it('[ 1, 2, 3 ] => error', () =>{
        chai.expect(lab10_2([ 1, 2, 3 ])).to.be.an('error');
    }),

    //incorrect tests
    it('[ [3,0,4], [7,10,5] ] => null', () =>{
        chai.expect(lab10_2([ [3,0,4], [7,10,5] ])).to.be.an(null);
    }),
    it('[ 11, -1, 11] => undefined', () =>{
        chai.expect(lab10_2([ [11,-1,11] ])).to.be.an(undefined);
    }),
    it('[ "ggdd", 4, 3, 5 ] => String', () => {
        chai.expect(lab10_2([ "ggdd", 4, 3, 5 ])).to.be.an(String);
    })
});