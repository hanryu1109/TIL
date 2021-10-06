// 도전 중

// 문제 : 2021 카카오 블라인드 채용
// new_id: "...!@BaT#*..y.abcdefghijklm", result: "bat.y.abcdefghi"
// new_id: "z-+.^."	, result: "z--"
// new_id: "=.=", result: "aaa"
// new_id: "123_.def", result: "123_.def"
// new_id: "abcdefghijklmn.p", result: "abcdefghijklmn"

//best

// TODO Check ID
// [ ] 대문자를 소문자로 바꾼다
// [ ] "-", "_", "." 를 제외한 특수문자를 지운다
// [ ] "...", ".." 을 "."으로 바꾼다
// [ ] 문자열의 처음과 끝은 특수문자가 올 수 없다
// [ ] 빈 문자열을 삭제한다
// [ ] 문자열의 길이가 16이상이면 처음 15자를 제외한 나머지 문자들을 삭제한다
// [ ] 문자열의 길이가 2자 이하이면 문자열의 길이가 3이 될때까지 문자열을 반복해서 끝에 붙인다

//my trial
function solution(new_id) {
    // var answer = '';
    const specChar = ["-", "_", "."];

    new_id = new_id.split("");

    for (var i = 0; i < new_id.length; i++) {
        if (new_id[i] === new_id[i].toUpperCase()) {
            new_id[i] = new_id[i].toLowerCase();
        }
        if (specChar.indexOf(new_id[i]) === -1) {
            new_id.splice(i, 1);
        }
    }
    
    return new_id.join("");
}

// Today I Learned
// 1. 