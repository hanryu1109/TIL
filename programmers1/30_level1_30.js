//문제 : 위클리 챌린지 4주차
//입출력 예
//table: ["SI JAVA JAVASCRIPT SQL PYTHON C#", "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++", "HARDWARE C C++ PYTHON JAVA JAVASCRIPT", "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP", "GAME C++ C# JAVASCRIPT C JAVA"], languages: ["PYTHON", "C++", "SQL"], preference: [7, 5, 5], result: "HARDWARE"
//table: ["SI JAVA JAVASCRIPT SQL PYTHON C#", "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++", "HARDWARE C C++ PYTHON JAVA JAVASCRIPT", "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP", "GAME C++ C# JAVASCRIPT C JAVA"], languages: ["JAVA", "JAVASCRIPT"], preference: [7, 5], result: "PORTAL"

//best
function solution(table, languages, preference) {
    return table.map((r) => r.split(' ')) // [Array(6), Array(6), Array(6), Array(6), Array(6)]
                .map((t) => [...t.splice(0, 1), t]) // [Array(2), Array(2), Array(2), Array(2), Array(2)] // [["SI", Array(5)], ["CONTENTS", Array(5)], ...]
                .map(([t, arr]) => [t,
                     languages.reduce((acc, l, i)=> {
                        acc += (5 - (arr.indexOf(l) === -1 ? 5 : arr.indexOf(l)))
                                    * preference[i];
                        return acc;
                     }, 0)])
                .sort((a, b) => b[1] - a[1] - (a[0] < b[0]))[0][0]
}

//my trial
function solution(table, languages, preference) {
    var empty = [];
    for(var i = 0; i < table.length; i++) {
        empty.push(Array(table[i].split(" ").reverse()));
    }

    var total = [0, 0, 0, 0, 0];
    for(var j = 0; j < languages.length; j++) {
        var language = languages[j];
        var point = []
        for(var k = 0; k < empty.length; k++) {
            point.push(empty[k][0].indexOf(language)+1);
        }

        point = point.map(x => x * preference[j]);

        for(var p = 0; p < point.length; p++) {
            total[p] += point[p]
        }

    }

    var maxValue = Math.max(...total);
    if(total.filter(n => n === maxValue).length != 1) {
        var last = [];
        var idx = total.indexOf(maxValue);
        while (idx != -1) {
          last.push(idx);
          idx = total.indexOf(maxValue, idx + 1);
        }
        var double = [];
        for(var i = 0; i < last.length; i++) {
            double.push(empty[last[i]][0][5]);
        }
        return double.sort()[0]
    } else {
        var maxIdx = total.indexOf(maxValue);
        return empty[maxIdx][0][5];
    }
}

// Today I Learned
// 1. 