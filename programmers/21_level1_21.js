//문제 : 약수의 합
//입출력 예
//n = 12, return = 28
//n = 5, return = 6

//my trial
function solution(n) {
    var answer = 0;
    for (var i = 1; i < n+1; i++) {
        n % i == 0 ? answer += i : answer += 0;
    }
    return answer;
}

// Today I Learned