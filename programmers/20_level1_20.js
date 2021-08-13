//문제 : 수박수박수박수?
//입출력 예
//n = 3, return = "수박수"
//n = 4, return = "수박수박"

//best
function waterMelon(n){
    var result = "";
    for(var i = 0 ; i < n ; i++) {
        result += i % 2 == 0 ? "수" : "박";
    }
    return result;
}

//my trial
function solution(n) {
    var array = ['수', '박'];
    var answer = '';
    for(var i = 0; i < n; i++) {
        answer += array[i%2];
    }
    return answer;
}

// Today I Learned
function solution(n) {
    var result = "";
    for (var i = 0; i < n; i++) {
        result += i % 2 == 0 ? "수" : "박";
    }
    return result;
}