//문제 : 정수 내림차순으로 배치하기
//입출력 예
//n: 118372, return: 873211

//best

//my trial
function solution(n) {
    var answer = 0;
    n = String(n).split("").sort().reverse().join("");
    return Number(n);
}

// Today I Learned
// 1.
