//문제 : 평균 구하기
//입출력 예
//arr = [1,2,3,4], return = 2.5
//arr = [5,5], return = 5

//my trial
function solution(arr) {
    var answer = 0;
    for (var i = 0; i < arr.length; i++) {
        answer += arr[i]
    }
    return answer/arr.length;
}

// Today I Learned