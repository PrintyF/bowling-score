export function bowlingScore(scores: Array<Array<number>>): Array<number> {
    let strike = scores[0].find((el)=> el === 10)
    if (strike) {
        return [scores[0][0] + scores[0][1] * 2];
    }
    return  [scores[0].reduce((a, b) => a + b )];
}