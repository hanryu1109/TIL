// id_list: ["muzi", "frodo", "apeach", "neo"], report: ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], k: 2, return: [2, 1, 1, 0]
// id_list: ["con", "ryan"], report: ["ryan con", "ryan con", "ryan con", "ryan con"], k = 3, return: [0, 0]

function solution(id_list, report, k) {
    let answer = [];

    let obj = new Object();

    report = report.map((reportedId) => reportedId.split(" "));
    // console.log(report); // [["muzi", "frodo"], ["apeach", "frodo"], ["frodo", "neo"], ["muzi", "neo"], ["apeach", "muzi"]]
    // console.log(report.length);

    for (var i = 0; i < report.length; i++) {
        let key = report[i][0];
        // console.log(key);
        
        if (!Object.keys(obj).includes(key)) {
            // console.log(`if ${key}`)
            obj[report[i][0]] = new Array(report[i][1]);
        } else {
            // console.log(`else ${key}`)
            if (!obj[report[i][0]].includes(report[i][1])) {
                obj[report[i][0]].push(report[i][1]);
            }
        }
    }
    // console.log(obj); // {muzi: ["frodo", "neo"], apeach: ["frodo", "muzi"], frodo: ["neo"]}

    let userObj = new Object();

    for (var i = 0; i < id_list.length; i++) {
        userObj[id_list[i]] = new Array();
    }

    for (const key of Object.keys(obj)) {
        userObj[key] = obj[key];
    }

    // console.log(userObj); {muzi: ["frodo", "neo"], frodo: ["neo"], apeach: ["frodo", "muzi"], neo: []}

    for (var i = 0; i < id_list.length; i++) {
        let preReporter = id_list[i];
        
        let number = 0;
        
        for (const key of Object.keys(userObj)) {
            if (userObj[key].includes(preReporter)) {
                number += 1;
            }
        }

        console.log(number);
        if (number < k) {
            for (const key of Object.keys(userObj)) {
                userObj[key] = userObj[key].filter(el => el !== preReporter)
            }
        }
        
    }

    for (var i = 0; i < id_list.length; i++) {
        answer.push(userObj[id_list[i]].length)
    }

    return answer


//     for (const key of Object.keys(userObj)) {
//        console.log(userObj[key].length); // 2 , 1 , 2 , 0
//        console.log(userObj[key].includes("frodo"));
//     }

//     return answer;
}