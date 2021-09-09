//문제 : 내적
//입출력 예
//a = [1,2,3,4], b = [-3,-1,0,2], result = 3
//a = [-1,0,1], b = [1,0,1], c = -2

//best
function solution(a, b) {
    return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}

//first trial
function solution(a, b) {
    var sum = 0;
    for(var i=0; i<a.length; i++){
        sum += a[i]*b[i];
    }
    return sum;
}

//Today I Learned
// 나도 이제 문제 풀때 함수명을 solution이 아니라 의미가 딤긴 함수명을 짓는 연습을 해보자!
// reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.
// const reducer = (accumulator, currentValue) => accumulator + currentValue
// arr.reduce(callback[, initialValue]) 여기에서 initialValue 를 설정하지 않으면 인덱스 1부터 콜백 함수를 실행하고 첫번째 인덱스를 건너뛰게 된다. initialValue 를 제공하면 인덱스 0에서 시작합니다.
// [0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {return accumulator + currentValue; });