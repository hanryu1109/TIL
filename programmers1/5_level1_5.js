//문제 : 짝수와 홀수
//입출력 예
//4 => "Even"
//5 => "Odd"

//best
function evenOrOdd(num) {
    return num % 2 ? "Odd" : "Even";
}

//first trial pass
function solution(num) {
    return num % 2 == 0 ? "Even" : "Odd";
}

//Today I Learned
//0 은 false!!
