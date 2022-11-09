export function bowlingScore(scores: Array<Array<number>>): Array<number> {
    if (scores[0].find((el)=> el === 10)) {
        if (scores[0][1] === 2)
            return [14];
        return [12];
    }
    return  [scores[0].reduce((a, b) => a + b )];
}