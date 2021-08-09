//문제 : 자연수 뒤집어 배열로 만들기
//입출력 예
//n = 12345, return = [5, 4, 3, 2, 1]

//my trial
function solution(n) {
    return String(n).split("").reverse().map((x) => Number(x));
}

// Today I Learned
// 문자열.split("") 은 배열로 리턴
// 배열.reverse() 는 요소들을 반대로 해서 배열을 리턴