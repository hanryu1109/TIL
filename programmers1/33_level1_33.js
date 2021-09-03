//문제 : 로또의 최고 순위와 최저 순위
//입출력 예
//lottos: [44, 1, 0, 0, 31, 25], win_nums: [31, 10, 45, 1, 6, 19], result: [3, 5]
//lottos: [0, 0, 0, 0, 0, 0], win_nums: [38, 19, 20, 40, 15, 25], result: [1, 6]
//lottos: [45, 4, 35, 20, 3, 9], win_nums: 	[20, 9, 3, 45, 4, 35], result: [1, 1]

//best
function solution(lottos, win_nums) {
    const answer = [];
    const min = lottos.filter(n => win_nums.includes(n)).length;
    const max = lottos.filter(n => n === 0).length + min;

    max > 1 ? answer.push(7 - max) : answer.push(6);
    min > 1 ? answer.push(7 - min) : answer.push(6);

    return answer;
}

//my trial
function solution(lottos, win_nums) {
    var answer = [];
    var rightNum = 0;
    for (var i = 0; i < win_nums.length; i++) {
        lottos.indexOf(win_nums[i]) >= 0 ? rightNum += 1 : rightNum += 0
    }
    var zeroCount = lottos.filter(el => 0 === el).length;
    
    if (zeroCount === 0) {
        if (rightNum === 0) {
            return [6, 6]
        } else {
            answer.push(7-rightNum);
            answer.push(7-rightNum);
            return answer
        }
    } else if (zeroCount === 6) {
        return [1, 6]
    } else {
        if (rightNum === 6) {
            return [1, 1]
        } else if (rightNum === 0) {
            return [6, 6]
        } else {
            answer.push(7-(rightNum+zeroCount));
            answer.push(7-rightNum);
            return answer
        }
    }
}

// Today I Learned
// 1. 변하는 값이 있다면 그것은 변수로 정의를 해줘야 한다.
