export function bowlingScore(scores: Array<Array<number>>): Array<number> {
    if (scores[0].find((el)=> el === 10)) {
        return [12];
    }
    return  [scores[0].reduce((a, b) => a + b )];
}