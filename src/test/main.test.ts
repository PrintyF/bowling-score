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
                    expect(bowlingScore([[1, 1, 10, 2, 0]])).toEqual([16]);
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
                it('two classic strikes in a row', ()=> {
                    expect(bowlingScore([[10, 10, 2, 1]])).toEqual([38]);
                });

                it('full of strikes', ()=> {
                    expect(bowlingScore([[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]])).toEqual([300]);
                });

            });

            describe('spare', ()=> {
                it('one spare', ()=> {
                    expect(bowlingScore([[5, 5, 2]])).toEqual([14]);
                });

                it('one other spare', ()=> {
                    expect(bowlingScore([[1, 1, 5, 5, 2]])).toEqual([16]);
                });

                it('one fake spare', ()=> {
                    expect(bowlingScore([[1, 5, 5, 1, 2]])).toEqual([14]);
                });

                it('two spares', ()=> {
                    expect(bowlingScore([[5, 5, 3, 0, 6, 4, 2]])).toEqual([30]);
                });
            });

        });

    });
});