import { bowlingScore } from '../main'

describe('bowling score', ()=> {

    describe('one player', ()=> {

        it('one throw', ()=> {
            expect(bowlingScore([1])).toEqual([1]);
        });
    });
});