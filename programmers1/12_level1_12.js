//문제 : x만큼 간격이 있는 n개의 숫자
//입출력 예
//x = 2, n = 5, answer = [2,4,6,8,10]
//x = 4, n = 3, answer = [4,8,12]
//x = -4, n = 2, answer = [-4, -8]

function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v);
}

// Today I Learned