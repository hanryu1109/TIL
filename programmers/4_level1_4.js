//문제 : 2016년
//입출력 예
//a = 5
//b = 24
//result = "TUE"

//best
function getDayName(a,b){
    var date = new Date(2016, (a - 1), b);
    return date.toString().slice(0, 3).toUpperCase();
}

//second trial //pass!!
//solution(1, 3) => "SUN"
function solution(a, b) {
    var answer = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    var date = new Date(2016, (a-1), b);
    var day = date.getDay();
    return answer[day]
}

//first trial test3, test4 not pass
function solution(a, b) {
    var answer = ["MON","TUE","WED","THU","FRI","SAT","SUN"];
    var date = new Date(2016, (a-1), b);
    var day = date.getDay();
    return answer[day-1]
}

//Today I Learned
//Date.toString() : 객체의 시간을 문자열로 반환
//slice method로 글자를 잘라버림, slice(0, 3) : 문자열 첫번째 자리부터 3번째 자리 앞까지 자르겠다는 의미,
//toUpperCase() : 대문자로 만들어주는 메소드
