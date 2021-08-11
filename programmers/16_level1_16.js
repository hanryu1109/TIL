//문제 : k번째 수
//입출력 예
//arr = [1, 5, 2, 6, 3, 7, 4], commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]], return = [5, 6, 3]

//my trial
function solution(array, commands) {
    var answer = [];
    for (var i = 0; i < commands.length; i++) {
        answer.push(array.slice(commands[i][0] - 1, commands[i][1]).sort(function(a, b) {
            return a - b;
        }).slice(commands[i][2] - 1, commands[i][2])[0]);
    }
    return answer;
}