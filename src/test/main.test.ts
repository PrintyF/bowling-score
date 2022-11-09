import { bowlingScore } from '../main'

describe('bowling score', ()=> {

    describe('one player', ()=> {

        describe('one throw', ()=> {
            it('one pin', ()=> {
                expect(bowlingScore([[1]])).toEqual([1]);
            });

            it('two pins', ()=> {
                expect(bowlingScore([[2]])).toEqual([2]);
            });
        });

        describe('two throw', ()=> {
            it('three pins', ()=> {
                expect(bowlingScore([[1, 2]])).toEqual([3]);
            });

            it('four pins', ()=> {
                expect(bowlingScore([[1, 2, 3]])).toEqual([6]);
            });
        });

        describe('special scores', ()=> {
            describe('strike', ()=> {
                it('one pin', ()=> {
                    expect(bowlingScore([[10, 1, 0]])).toEqual([12]);
                });

                it('two pins', ()=> {
                    expect(bowlingScore([[10, 2, 0]])).toEqual([14]);
                });

                it('one pin then two pins', ()=> {
                    expect(bowlingScore([[1, 10, 2, 0]])).toEqual([15]);
                });

                it('three pins on two throws after strike', ()=> {
                    expect(bowlingScore([[10, 2, 1]])).toEqual([16]);
                });

                it('three pins on one throw but with insufficient throw', ()=> {
                    expect(bowlingScore([[10, 3]])).toEqual([16]);
                });

                it('just a strike', ()=> {
                    expect(bowlingScore([[10]])).toEqual([10]);
                });

            });

            describe('strikes', () => {
                it('two classic strikes', ()=> {
                    expect(bowlingScore([[10, 1, 2, 10, 1, 2]])).toEqual([32]);
                });

            });

            describe('spare', ()=> {

            });

        });

    });


});