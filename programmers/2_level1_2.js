//문제 : 제일 작은 수 제거하기
//입출력 예
//input [4, 3, 2, 1] , [10]
//output [4, 3, 2], [-1]

function solution(arr) {
    var answer = []
    if (arr.length == 1) {
        answer = [-1];
       return answer;
    } else {
        var i = arr.indexOf(Math.min.apply(null, arr));
        arr.splice(i, 1);
        return arr
    }
}

//Today I Learned
//1. 배열 요소 중 최대값, 최소값 내장함수 Math 사용 : Math.min.apply(null, 배열), Math.max.apply(null, 배열) 
//2. 배열에서 특정 인덱스 잘라내기 : array.splice(인덱스숫자) 
//3. 배열에서 특정 요소 잘라낸 나머지 배열 리턴 : array.splice(index) 후 array return