//문제 : 완주하주 못한 선수
//입출력 예
//participants ["leo", "kiki", "eden"]
//completion ["eden", "kiki"]

function solution(participant, completion) {
    //fourth trial
    participant.sort();
    completion.sort();

    for (var i in participant) {
        if (participant[i] != completion[i]) {
            return participant[i];
        }
    }

    //third trial
    // participant.filter(finisher => !completion.includes(finisher));
    // return participant[0];

    //second trial
    // for (finisher in completion) {
    //     if (participant.indexOf(finisher) >= 0) {
    //         participant.splice(participant.indexOf(finisher))
    //     } 
    // }
    // return participant[0];

    //first trial
    // completion.map(finisher => {
    //     var index = participant.indexOf(finisher);
    //     if (index >= 0) {
    //         participant.splice(index);
    //     }
    // })
    // return participant[0];

}

//Today I Learned
//1. 배열과 배열을 비교할 때 sorting 후 비교하면 효율성 면에서 더 좋다. sort()
//2. 배열의 특정 원소 값의 인덱스 찾는 메소드 : 배열이름.indexOf(특정원소값)
//3. 배열에서 특정 인덱스 잘라내기 : 배열이름.splice(인덱스숫자)
//4. 배열이 특정 요소를 포함하고 있는지 판별하는 메소드 : 배열.includes(특정 요소 값) , return ture or false
