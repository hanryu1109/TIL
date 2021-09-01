//문제 : 위클리 챌린지 1주차
//입출력 예
//price: 3, money: 20, count: 4, result: 10

//best
function solution(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}

//my trial
function solution(price, money, count) {
    var answer = -1;
    for (var i = 1; i < count+1; i++) {
        money -= price*i    
    }
    if (money > 0) {
        return 0
    } else if (money < 0) {
        return money * answer
    } else {
        return 0
    }
}

// Today I Learned
// 1. 등차수열..?