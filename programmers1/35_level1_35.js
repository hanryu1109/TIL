//문제 : 정수 내림차순으로 배치하기
//입출력 예
//n: 118372, return: 873211

//best
function toWeirdCase(s){
    return s.split(' ').map(i => i.split('').map((j, key) => key % 2 === 0 ? j.toUpperCase() : j.toLowerCase()).join('')).join(' ')
}

function toWeirdCase(s){
    var result = "";

    for(var word of s.split(" ")) {
        for(var i in word) {
            result += word[i][parseInt(i) % 2 == 0 ? "toUpperCase" : "toLowerCase"]();
        }
        result += " ";
    };
    
    return result.slice(0, -1);
}

//my trial
function solution(s) {
    String.prototype.replaceAt = function(index, replacement) {
        return this.substr(0, index) + replacement + this.substr(index + replacement.length);
    }
    s = s.split(" ");
    for (var i = 0; i < s.length; i++) {
        for (var j = 0; j < s[i].length; j++) {
            if (j % 2 === 0) {
                s[i] = s[i].replaceAt(j, s[i][j].toUpperCase());
            } else {
                s[i] = s[i].replaceAt(j, s[i][j].toLowerCase());
            }
        }
    }
    return s.join(" ")
}

// Today I Learned
// 1. map((요소, 인덱스) => )
