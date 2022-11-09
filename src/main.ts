export function bowlingScore(scores: Array<Array<number>>): Array<number> {
    let strikeIndex = scores[0].findIndex((el)=> el === 10)
    if (strikeIndex != -1) {
        return [scores[0][strikeIndex] + scores[0][strikeIndex + 1] * 2 + scores[0][strikeIndex + 2] * 2];
    }
    return  [scores[0].reduce((a, b) => a + b )];
}