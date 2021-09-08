//문제 : 숫자 문자열과 영단어
//입출력 예
//s: "one4seveneight", return: 1478
//s: "23four5six7", return: 234567
//s: "2three45sixseven", return: 234567
//s: "123", return: 123

//best

//my trial
function solution(s) {
    String.prototype.replaceAt = function(index, replacement) {
        return this.substr(0, index) + replacement + this.substr(index + replacement.length);
    }
    
    var answer = 0;
    var number = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var number_index 
    for (var i = 0; i < number.length; i++) {
        if (s.indexOf(number[i]) >= 0) {
            
        }
    }
    
    return answer;
}

// Today I Learned
// 1.
