function solution(num, total) {
    var answer = [];
    if(num === 1) {
        answer.push(total);
    } else {
        const median = total / num;
        let initValue = (num % 2 === 0) ? 
            Math.ceil(median - Math.floor(num / 2)) : median - Math.floor(num / 2);
        
        for(let i=0; i<num; i++) {
                answer.push(initValue);
                initValue++;
        }
    }
    
    return answer;
}