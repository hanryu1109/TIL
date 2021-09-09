//문제 : 3진법 뒤집기
//입출력 예
//n: 45, result: 7
//n: 125, result: 229

//best
const solution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}

//my trial
function solution(n) {
    var answer = "";
    var num_answer = 0;
    
    if (n < 3) {
        return n;
    } else if (n == 3) {
        return 1;
    } else {
        do {
            answer += n % 3;
            n = parseInt(n/3);
        } while (n > 2); // 요기가 관건
        answer += n;
        for (var i = 0; i < answer.length; i++) {
            num_answer += answer[i] * (3**(answer.length - (i+1)))
        }
        return num_answer;
    }
}

// Today I Learned
// 1. 테스트 케이스를 여러개를 생각해서 돌려봐야 한다.
// 2. Number.prototype.toString() 매개변수를 주면 10진 법을 -> 매개변수로 준 숫자의 진법으로 바뀐다.
// 3. 숫자.toString(3) 이런식으로 하면 안되고 숫자를 담은 변수를 줘서 "숫자를 담은 변수.toString(3)" 이런식으로 줘야 진법 변환 가능하다.
// 4. 문자열을 특정 진수의 정수로 변환하려고 할 때는 parseInt('변환시키고자 하는 문자열, 해당 수의 진수) 가 들어간다.
// 출처 toString: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
// 출처 parseInt: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/parseInt
