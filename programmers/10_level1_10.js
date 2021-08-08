//문제 : 두 정수 사이의 합
//입출력 예
//a = 3, b = 5, return 12
//a = 3, b = 3, return 3
//a = 5, b = 3, return 12

//best
function adder(a, b){
    return (a+b)*(Math.abs(b-a)+1)/2;
}

//my trial
function solution(a, b) {
    var size = Math.abs(a-b) + 1;
    if (a - b == 0) {return a}
    else {
        {var start = (b-a) > 0 ? a : b};
        return Array(size).fill(start).map((x,y) => x + y).reduce((acc, curr) => acc + curr);
    }
}

// Today I Learned
// Array(숫자) 는 => 배열의 요소 갯수, 배열의 길이를 의미한다!
// Array(숫자).fill(start) => start 값으로 배열을 채운다.
// Array.map((배열의 값, 인덱스) => 배열의 값 + 인덱스) => 배열의 요소를 쭉 돌면서 배열의 값에다가 인덱스를 더해준다!