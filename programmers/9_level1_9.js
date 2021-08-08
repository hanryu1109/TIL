//문제 : 나누어 떨어지는 숫자 배열
//입출력 예
//arr = [5, 9, 7, 10], divisior = 5, return = [5, 10]
//arr = [2, 36, 1, 3], divisior = 1, return = [1, 2, 3, 36]
//arr = [3,2,6], divisior = 10, return = [-1]

//best
function solution(arr, divisor) {
    var answer = arr.filter(v => v%divisor == 0);
    return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
}

//my trial
function solution(s) {
    const p = s.match(/p/gi);
    const y = s.match(/y/gi);

    if (p == null & y == null) { return true }
    else if (p == null | y == null) { return false}
    else {
        if (p.length == y.length) { return true }
        else { return false }
    }
}

// Today I Learned
// Array.filter() method는 그 안의 조건문에 해당하는 것만 배열로 다시 반환한다.