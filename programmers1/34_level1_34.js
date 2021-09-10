//문제 : 모의고사
//입출력 예
//answers: [1,2,3,4,5], return: [1]
//answers: [1,3,2,4,2], return: [1,2,3]

//best
function solution(answers) {
    var answer = [];
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
    var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
    var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
    var max = Math.max(a1c,a2c,a3c);

    if (a1c === max) {answer.push(1)};
    if (a2c === max) {answer.push(2)};
    if (a3c === max) {answer.push(3)};


    return answer;
}

//my trial
function solution(answers) {

    const supo1Pattern = [1,2,3,4,5];
    const supo1PatternSize = supo1Pattern.length;
    const supo2Pattern = [2,1,2,3,2,4,2,5];
    const supo2PatternSize = supo2Pattern.length;
    const supo3Pattern = [3,3,1,1,2,2,4,4,5,5];
    const supo3PatternSize = supo3Pattern.length;

    let supo1Score = 0;
    let supo2Score = 0;
    let supo3Score = 0;

    answers.forEach((answer, index) => {
        if (answer === supo1Pattern[index % supo1PatternSize]) { supo1Score++ }
        if (answer === supo2Pattern[index % supo2PatternSize]) { supo2Score++ }
        if (answer === supo3Pattern[index % supo3PatternSize]) { supo3Score++ }
    });

    const maxScore = Math.max(...[supo1Score, supo2Score, supo3Score]);
    const answer = [
        {name:1, value: supo1Score},
        {name:2, value: supo2Score},
        {name:3, value: supo3Score}
    ].filter(answer => answer.value === maxScore).map(answer => answer.name);

    return answer;
}

// Today I Learned
// 1.
