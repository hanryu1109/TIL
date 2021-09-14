//문제 : 예산
//d: [1, 3, 2, 5, 4], budget: 9, result: 3
//d: [2,2,3,3], budget: 10, result: 4

//best

//my trial
function solution(d, budget) {
    var answer = 0;
    d = d.sort(function(a, b) {
        return a - b;
    });
    for (var i = 0; i < d.length; i++) {
        budget = budget - d[i]
        if (budget >= 0) {
            answer += 1;
            continue
        } 
    }
    return answer;
}

// Today I Learned
// 1. 숫자를 sort() 할때는 무조건 인자로 비교함수를 넣어줘야 한다.
// 숫자를 비교할 때는 1000 이 2보다 더 앞에 나온다. 내가 원하는 오름차순으로 나오지 않는다.
