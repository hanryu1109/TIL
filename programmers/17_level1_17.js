//문제 : 가운데 글자 가져오기
//입출력 예
//s = "abcde", return = "c"
//s = "qwer", return = "we"

//my trial
function solution(s) {
    var answer = '';
    if (s.length % 2 == 0) {
        answer = s[(s.length/2)-1] + s[(s.length/2)];
    } else {
        answer = s[Math.floor(s.length/2)]
    }
    return answer;
}