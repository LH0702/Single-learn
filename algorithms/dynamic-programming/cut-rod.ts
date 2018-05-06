/**
 * 钢条切割动态规划算法
 */

let p = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30];
export function cutRod(n: number) {
    if (n == 0) {
        return 0;
    }
    let max = 0;
    for (let i = 1; i < Math.min(p.length,n+1); i++) {
        max = Math.max(max, p[i] + cutRod(n - i));
    }

    return max;
}


export function memoizedCutRod(n: number) {
    let cache = Array(n+1).fill(-1);
    return  memorizedCutRodAux(n);
    function memorizedCutRodAux(n:number){

        if(cache[n] >= 0){
            return cache[n];
        }
        
        if (n == 0) {
            cache[n] = 0;
            return 0;
        }

        let max = 0;
        for (let i = 1; i < Math.min(p.length,n+1); i++) {
            max = Math.max(max, p[i] + memorizedCutRodAux(n - i));
        }
    
        cache[n] = max;
        return max;
    }
}

export function buttonUPCutRod(n: number) {
    let cache = Array(n+1).fill(-1);
    cache[0] = 0;

    for(let i = 1;i <= n ; i++){
        let max = -1;
        for(let j = 1;j < Math.min(i+1,p.length);j++){
            max = Math.max(max,p[j] + cache[i-j])
        }
        cache[i] = max;
    }

    return cache[n];
}
