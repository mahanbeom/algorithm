function solution(t, p) {
    var answer = 0;
    const pl = p.length;
    var index = 0;
    for(var i = pl; i < t.length+1; i++) {
        if(t.slice(index, i) <= p) {
            answer++;
        }
        index++;
    }
    return answer;
}