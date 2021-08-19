//문제 : 직사각형 별찍기
//입출력 예
//input= 5 3, 
//return
// *****
// *****
// *****

//best
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const row = '*'.repeat(a)
    for(let i =0; i < b; i++){
        console.log(row)
    }

});

//my trial
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    var answer = ""
    for (var j = 0; j < b; j++) {
        for(var i = 0; i < a; i++) {
            answer += "*"
        }
        answer += "\n"
    }
    console.log(answer)
});

// Today I Learned
// 1.