import { bowlingScore } from '../main'

describe('bowling score', ()=> {

    describe('one player', ()=> {

        it('one throw one pin', ()=> {
            expect(bowlingScore([1])).toEqual([1]);
        });

        it('one throw two pins', ()=> {
            expect(bowlingScore([2])).toEqual([2]);
        });
    });
});