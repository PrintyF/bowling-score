export function bowlingScore(scores: Array<Array<number>>): Array<number> {
    let strikeIndex = scores[0].findIndex((el)=> el === 10)
    if (strikeIndex != -1) {
        let value = scores[0][strikeIndex];
        value += scores[0][strikeIndex + 1] * 2;
        if (scores[0][strikeIndex + 2])
            value += scores[0][strikeIndex + 2] * 2;
        return [value];
    }
    return  [scores[0].reduce((a, b) => a + b )];
}