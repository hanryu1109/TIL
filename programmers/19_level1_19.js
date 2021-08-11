//문제 : 핸드폰 번호 가리기
//입출력 예
//phone_number = "01033334444", answer = "*******4444"
//phone_number = "027778888", answer = "*****8888"

//my trial
function solution(phone_number) {
    var answer = '';
    if (phone_number.length === 4) {
        answer += phone_number
        return answer
    } else {
        for (var i = 0; i < phone_number.length-4; i++) {
            answer += "*"
        }
        return answer += phone_number.substr((phone_number.length-4), (phone_number.length-1));
    }
}

// Today I Learned