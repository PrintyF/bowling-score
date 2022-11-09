export function bowlingScore(scores: Array<Array<number>>): Array<number> {
    let strikeIndex = scores[0].findIndex((el)=> el === 10)
    let bonus = false;
    return  [scores[0].reduce((a, b, index) => {
        if (strikeIndex === index - 1) {
            strikeIndex = scores[0].slice(strikeIndex + 1).findIndex((el)=> el === 10) + strikeIndex + 1
            bonus = true;
            return a + b * 2;
        }
       else if (bonus) {
            bonus = false;
            return a + b * 2;
        }
        return a + b;
    })];
}