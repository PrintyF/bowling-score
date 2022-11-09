export function bowlingScore(scores: Array<Array<number>>): Array<number> {
    return  [scores[0].reduce((a, b) => a + b )];
}