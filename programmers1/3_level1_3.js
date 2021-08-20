//문제 : 문자열 다루기 기본
//입출력 예
//input "a234", "1234"
//output "false", "true"

// Best
function alpha_string46(s) {
    var regex = /^\d{6}$|^\d{4}$/;
    return regex.test(s);
}

// Best2
function alpha_string47(s){
    var result = false;
    if((s.length == 4 || s.length == 6) && /^[0-9]+$/.test(s)) {
        result = true;
    }
    return result;
}

// Fourth Trial
function solution(s) {
    var answer = true;
    if (isNaN(s)) {
        answer = false;
    } else {
        if ((s.length == 4 || s.length == 6) & s.indexOf("e") == -1) {
            s = Number(s);
            if (Number.isInteger(s)) {
                answer = true;
            } else {
                answer = false
            }
        } else {
            answer = false;
        }
    }
    return answer;
}

// Third Trial
// function solution(s) {
//     var answer = true;
//     if (Number.isInteger(s) & (s.length == 4 || s.length == 4)) {
//         if (isNaN(parseInt(s))) {
//             answer = false;
//         } else {
//             answer = true;
//         }
//     } else {
//         answer = false;
//     }
//     return answer
// }

// Second Trial
// function solution(s) {
//     var answer = true;
//     if (!Number.isInteger(s)) { answer = false; }
//     if (s.length == 4 || s.length == 6) {
//         if (isNaN(parseInt(s))) {
//             answer = false;
//         } else {
//             answer = true
//         }
//     } else {
//         answer = false;
//     }
//     return answer
// }

// First Trial
// function solution(s) {
//     var answer = true;
//     if (s.length == 4 || s.length == 6) {
//         if (isNaN(parseInt(s))) {
//             answer = false;
//         } else {
//             answer = true
//         }
//     } else {
//         answer = false;
//     }
//     return answer
// }

//Today I Learned
//1. /^\d{6}$|^\d{4}$/ : 정규표현식 숫자로 된 문자 6글자 또는 숫자로 된 문자 4글자
//2. ^ : 시작, \d : 숫자 문자, {n} : 이것 앞에 쓰인 표현식이 n번 나온다는 것, $ : 끝과 대응
//3. test() 메서드는 주어진 문자열이 정규 표현식을 만족하는지 판별하고, 그 여부를 true 또는 false로 반환
