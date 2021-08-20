//문제 : 문자열 내림차순으로 배치하기
//입출력 예
//s = "Zbcdefg", return = "gfedcbZ"

//best
function solution(s) {
    return s
    .split("")
    .sort()
    .reverse()
    .join("");
}

//my trial
function solution(s) {
    return Array.from(s).sort(function(a, b) {
        if (a < b) {
            return 1
        }
        if (a > b) {
            return -1
        }
        return 0
    }).join("");
}

// Today I Learned
// 1. String 객체를 .split() 하면 배열로 반환
// 2. Array.reverse() 는 배열의 순서를 반전
// 3. 문자열 비교시 sort() 메서드의 인자로 비교 함수가 들어가면 된다
// 3.1 compareFunction(a, b)이 0보다 작은 경우 a를 b보다 낮은 색인으로 정렬, 즉, a가 먼저온다.