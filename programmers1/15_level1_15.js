//문제 : 같은 숫자는 싫어
//입출력 예
//arr = [1,1,3,3,0,1,1], answer = [1,3,0,1]
//arr = [4,4,4,3,3], answer = [4,3]

//best
function solution(arr) {
    return arr.filter((val,index) => val != arr[index+1]);
}

//my trial
function solution(arr) {
    var answer = [];
    answer.push(arr[0]);
    for(var i = 0; i< arr.length-1;i++){                
        if(arr[i] != arr[i+1]){
            answer.push(arr[i+1]);
        }
    }
    return answer;
}

// Today I Learned
// filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.
// arr.filter(callback(element[, index[, array]])[, thisArg])

function solution(arr) {
    return arr.filter((val, index) => val != arr[index+1]);
}