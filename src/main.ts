export function bowlingScore(scores: Array<Array<number>>): Array<number> {
    let bonus = 1;
    let frame = 0;
    return  [scores[0].reduce((a, b, index) => {
        frame++;
        if (scores[0][index - 1] === 10) {
            frame++;
            if (bonus < 3 && frame != 20 && frame != 22)
                bonus++;
        } else {
            if (frame % 2 === 0) {
                if (bonus > 1)
                    bonus--;
                if (isASpare(scores[0], index - 1))
                    bonus = 2;
            }
            else {
                if (bonus > 2)
                    bonus--;
            }
        }
        if (frame === 20 && bonus === 3)
            bonus = 2;
        if (frame === 22)
            bonus = 1;
        return a + b * bonus;
    })];
}

function isASpare(score: Array<number> , index: number): boolean {

    return index > 0 && score[index] + score[index - 1] === 10;
}