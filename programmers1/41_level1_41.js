// 제한 시간 안에 풀지 못해서 찾아봄
// 문제 : 체육복
// n:5, lost:[2, 4], reserve:[1, 3, 5], return:	5
// n:5, lost:[2, 4], reserve:[3], return: 4
// n:3, lost:[3], reserve:[1], return:	2

//best

//my trial
function solution(n, lost, reserve) {
    let answer = n;

    let student = new Array(n).fill(1);

    for (var i = 0; i < student.length; i++) {
        if (lost.includes(i+1)) {
            student[i] -= 1;
        }
        if (reserve.includes(i+1)) {
            student[i] += 1;
        }
    }

    for (let i in student) {
        if (student[i] == 2 && student[i - 1] == 0) {
            student[i] -= 1;
            student[i - 1] += 1;
        }
        if (student[i] == 0 && student[i - 1] == 2) {
            student[i] += 1;
            student[i - 1] -= 1;
        }
    }

    for (let s in student) {
        if (student[s] == 0) { // 내가 헷갈렸던 부분
            answer--;
        }
    }

    return answer;
}

// Today I Learned
// 1. 