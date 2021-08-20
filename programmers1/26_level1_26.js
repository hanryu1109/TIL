//문제 : 정수 제곱근 판별
//입출력 예
//n: 121, return: 144
//n: 3, return: -1

//best
function nextSqaure(n){
    //함수를 완성하세요
    switch(n % Math.sqrt(n)){
        case 0:
            return Math.pow(Math.sqrt(n) + 1, 2);
        default:
            return "no"
    }
}

//my trial
function solution(n) {
    var answer = 0;
    return Number.isInteger(Math.sqrt(n)) ? answer = (Math.sqrt(n)+1) * (Math.sqrt(n)+1) : answer = -1
}

// Today I Learned
// 1. Math.sqrt(n) : 정수 제곱근 바환
// 2. Number.isInteger() : 정수 판별 , boolean 값으로 반환
// 3. Math.pow() : base^exponent처럼 base 에 exponent를 제곱한 값을 반환