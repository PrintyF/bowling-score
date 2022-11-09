import { bowlingScore } from '../main'

describe('bowling score', ()=> {

    it('should be dumb',  ()=> {
        expect(bowlingScore()).toBeFalsy();
    });
});