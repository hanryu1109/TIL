//문제 : 없는 숫자 더하기
//입출력 예
//numbers: [1,2,3,4,6,7,8,0], result: 14
//numbers: [5,8,4,0,6,7,9], result: 6

//best

//my trial
function solution(numbers) {
    var answer = 0;
    answer = numbers.reduce((acc, cur) => acc + cur);
    return 45 - answer;
}

// Today I Learned
// 1. Array.prototype.reduce()는 매개변수로 오는 리듀서 함수는 중괄호로 감싸면 실행이 안된다.
