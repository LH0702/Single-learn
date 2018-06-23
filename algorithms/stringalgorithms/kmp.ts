/**
 * kmp 算法字符串匹配
 * @param target 目标字符串
 * @param word 匹配字符串
 * 匹配失败返回空数组
 * 匹配成功返回起始索引
 */

export function kmp(target:string,word:string):number[] {
    if(target == null || target.length == 0){
        throw new Error("input target string is null");
    }

    if(word == null || word.length == 0){
        throw new Error("input match string is null");
    }

    if(target.length < word.length){
        return [];
    }

    if(target.length === word.length){
        if(target == word){
            return [0]
        }else{
            return [];
        }
    }

    let matchIdx:number[] = [];
    let pattern = buildMatchPattern(word);
    let idx = 0; 
    for(let i = 0; i < target.length ; i++){
        while(idx > 0 && target[i] !== word[idx]){
            idx = pattern[idx - 1];
        }

        if(target[i] == word[idx]){
            idx += 1;
        }

        if(idx == word.length){
            matchIdx.push(i - word.length + 1); 
            idx = pattern[idx - 1];
        }              
    }
    return matchIdx;
}


/**
 * 构建前缀函数
 * @param word 待匹配的字符串
 */
export function buildMatchPattern(word: string): number[] {
    if(word == null){
       throw new Error("input string is null");
    }
    
    let pattern: number[] = [];
    pattern[0] = 0;
    let k = 0;
    for (let i = 1; i < word.length; i++) {
        while(k > 0 && word[i] != word[k]){
            k = pattern[k-1];
        }
        if(word[i] == word[k]){
            k += 1;
        }
        pattern[i] = k;
    }
    return pattern;
}