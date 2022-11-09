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
    });
});