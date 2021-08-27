//문제 : 문자열 내 마음대로 정렬하기
//입출력 예
//string: ["sun", "bed", "car"], n: 1, return: ["car", "bed", "sun"]
//string: ["abce", "abcd", "cdx"], n: 2, return: ["abcd", "abce", "cdx"]

//best

//my trial
function solution(strings, n) {
    strings.sort(function(a, b) {
        if(a[n] < b[n]) {return -1}
        else if(a[n] > b[n]) {return 1}
        else {
            if(a < b) {return -1} else { return 1}
        }
    });
    return strings
}

// Today I Learned
// 1. 문자열 정렬할 때 오름차순 내림차순으로 정렬하려면 sort()메서드 안에 함수를 인자로 넣는다. 그 함수는 각 원소들을 비교한다.
// 2. 어떤 기준이 되는 값으로 정렬을 하고 싶다면 또한 sort()메서드 안에 함수를 넣는다.