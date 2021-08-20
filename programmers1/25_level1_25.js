//문제 : 콜라츠 추측
//입출력 예
//n: 6, return: 8
//n: 16, return: 4
//n: 626331, return: -1

//best
function collatz(num) {
    var answer = 0;
    while(num !=1 && answer !=500) {
        num%2==0 ? num = num/2 : num = num*3 +1;
        answer++;
    }
    return num == 1 ? answer : -1;
}

//my trial
function solution(num) {
    var answer = 0;
    while(num != 1) {
        if (answer > 501) {
            return -1;
        } else {
            if(num % 2 == 0) {
                num = num / 2;
                answer += 1;
            } else {
                num = (num * 3) + 1;
                answer += 1;
            }   
        }
    }
    return answer;
}

// Today I Learned
// 1. 