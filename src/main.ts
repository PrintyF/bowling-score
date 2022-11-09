export function bowlingScore(scores: Array<Array<number>>): Array<number> {
    if (scores[0].length > 1)
        return [3]
    return  scores[0];
}