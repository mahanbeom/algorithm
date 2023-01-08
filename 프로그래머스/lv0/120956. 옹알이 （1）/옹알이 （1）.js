function solution(babbling) {
    
    const regex = /^(aya|ye|woo|ma)+$/;
    
    var answer = 0;
    babbling.forEach(element => {
        regex.test(element) ? answer++ : answer;
    });
    return answer;
}