//문제 : 하샤드 수
//입출력 예
//input: 10, return: true 
//input: 12, return: true 
//input: 13, return: false 
//input: 11, return: false 

//my trial
function solution(x) {
    var answer = true;
    return x % String(x).split("").map(x => Number(x)).reduce((a,b) => a + b) === 0 ? answer : !answer;
}

// Today I Learned
// 1. reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.