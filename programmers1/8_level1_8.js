//문제 : 문자열 내 p와 y의 개수
//입출력 예
//s="pPoooyY" result = true
//s="pPY" result = false

//best
function solution(s) {
      return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
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
// split 함수는 인자로 들어오는 것을 기준으로 잘라서 배열을 반환하며 인자는 배열에 포함되지 않는다.
// 단 split 함수의 인자로 정규식 포현이 들어온다면 그 인자를 기준으로 잘라서 배열을 반환하는 것은 동일하고, 인자는 배열에 포함된다.