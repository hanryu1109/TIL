//문제 : 두 개 뽑아서 더하기
//입출력 예
//numbers: [2,1,3,4,1], return: [2,3,4,5,6,7]
//numbers: [5,0,2,7], return: [2,5,7,9,12]

//best
function solution(numbers) {
    const temp = []

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j])
        }
    }

    const answer = [...new Set(temp)]

    return answer.sort((a, b) => a - b)
}

//my trial
function solution(numbers) {
    var answer = [];
    for (var i = 0; i < numbers.length-1; i++){
        for (var j = i+1; j < numbers.length; j++) {
            answer.push(numbers[i] + numbers[j])
        }
    }
    answer = new Set(answer);
    answer = [...answer].sort(function(a, b) {
        return a - b;
    });
    return answer;
}

// Today I Learned
// 1. Set 객체는 자료형에 관계없이 원시 값과 객체 참조 모두 유일한 값을 저장할 수 있슴