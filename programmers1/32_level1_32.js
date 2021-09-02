//문제 : 실패율
//입출력 예
//N: 5, stages: [2, 1, 2, 6, 2, 4, 3, 3], result: [3,4,2,1,5]
//N: 4, stages: [4, 4, 4, 4], result: [4,1,2,3]

//best
function solution(N, stages) {
    let ans = []

    for (let i = 1; i <= N; ++i) {
        let usersReachedCurrentStage   = stages.reduce((acc, curStage) => acc + ((curStage >= i) ? 1 : 0), 0)
        let usersStagnatedCurrentStage = stages.reduce((acc, curStage) => acc + ((curStage == i) ? 1 : 0), 0)
        if (usersReachedCurrentStage === 0) {
            ans.push({ 'stage': i, 'failRate': 0 })
            continue
        }

        ans.push({ 'stage': i, 'failRate': (usersStagnatedCurrentStage / usersReachedCurrentStage) })
    }

    return ans.sort((a, b) => {
        if (a.failRate > b.failRate) return -1
        if (a.failRate < b.failRate) return 1
        // return a.stage - b.stage
    }).map(entry => entry.stage)
}

//my trial
function solution(N, stages) {
    var answer = [];
    var sortedAnswer = [];
    var stgCount = stages.length;
    for (var i = 0; i < N; i++) {
        var nCount = stages.reduce((acc, element) => acc + (element === i+1), 0);
        sortedAnswer.push(nCount / stgCount);
        stgCount = stgCount - nCount;
    }
    sortedAnswer = {...sortedAnswer};
    
    for (let rank in sortedAnswer) {
        answer.push([rank, sortedAnswer[rank]])
    }

    answer.sort(function(a, b) {
        return b[1] - a[1];
    })

    var lankAnswer = [];
    for (var i = 0; i < answer.length; i++) {
        lankAnswer.push(Number(answer[i][0]) + 1)
    }
    return lankAnswer;
}

// Today I Learned
// 1. 변수명 깔끔하게 쓰기
// arrays나 object sort 할 때 return 값이 -1면 비교하는 것들의 자리를 바꾸고 1이면 그대로 둔다