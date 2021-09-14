//문제 : 시저 암호
//입출력 예
//s: "AB", n: 1, result: "BC"
//s: "z", n: 1, result: "a"
//s: "a B z", n: 4, result: "e F d"

//best
function solution(s, n) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var answer= '';

    for(var i =0; i <s.length; i++){
        var text = s[i];
        if(text == ' ') {
            answer += ' '; 
            continue;
        }
        var textArr = upper.includes(text) ? upper : lower;
        var index = textArr.indexOf(text)+n;
        if(index >= textArr.length) index -= textArr.length;
        answer += textArr[index];
    }
    return answer;
}

//my trial
function solution(s, n) {
    var lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
    var upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    s = s.split("")
    
    for (var i = 0; i < s.length; i++) {
        if (lowerAlphabet.indexOf(s[i]) >= 0 || upperAlphabet.indexOf(s[i]) >= 0) {
            // 배열의 요소가 공백이 아닌 경우
            if (lowerAlphabet.indexOf(s[i]) === -1) {
                // 대문자일 경우
                s[i] = upperAlphabet[(upperAlphabet.indexOf(s[i])+n)%26];
            } else {
                // 소문자일 경우
                s[i] = lowerAlphabet[(lowerAlphabet.indexOf(s[i])+n)%26];
            }
        }
    }
    
    return s.join("");
}
// Today I Learned
// 1.
