//문제 : 문자열을 정수로 바꾸기
//입출력 예
//input "1234" output 1234
//input "-1234" output -1234

//best
function strToInt(str){
    return str/1
}

//best
function strToInt(str){
    return  +str;
}

//my trial
function solution(s) {
    return Number(s);
}

// Today I Learned
// 자바스크립트에서는 문자열을 1로 나누면 데이터 타입이 숫자로 바뀐다
// 자바스크립트에서는 문자열 앞에 + 기호를 붙이면 데이터 타입이 숫자로 바뀐다.