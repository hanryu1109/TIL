//문제 : 자릿수 더하기
//입출력 예
//N = 123, result = 6
//N = 987, result = 24

//best
function solution(n){
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}

//first trial
function solution(n)
{
    var answer = 0;
    var bucket = String(n);
    for(var i=0; i<bucket.length; i++){
       answer += Number(bucket[i]);
    }
    return answer;
}


// Today I Learned
// 자료형인 숫자에다가 <<< + "" >>> 얘네를 더하면 그 숫자는 문자열이 된다
// 문자열을 ""로 split 하면 배열을 반환한다.
// 배열.reduce((acc, crv) => acc + parseInt(crv), 0)
// parseInt 문자열을 숫자로!

// 아래 코드는 안됨
// function solution (n) {
//     return (n+"").split("").reduce((acc, crv) => {acc + parseInt(crv), 0})
// }