//문제 : 행렬의 덧셈
//입출력 예
//arr1: [[1,2],[2,3]], arr2: [[3,4],[5,6]], return: [[4,6],[7,9]]
//arr1: [[1],[2]], arr2: [[3],[4]], return: [[4],[6]]

//best
function solution(arr1, arr2) {
    return A.map((a,i) => a.map((b, j) => b + B[i][j]));
}

//my trial
function solution(arr1, arr2) {
    var answer = Array();
    for (var i = 0; i < arr1.length; i++) {
        answer[i] = [];
        for (var j = 0; j < arr1[0].length; j++) {
            answer[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    return answer;
}

// Today I Learned
// 1. 