// 最长公共子序列问题
export class LCS{

    private x:string;

    private y :string;

    private trace :number[][];

    private cache :number[][];

    constructor(x:string,y:string){
        this.x = x;
        this.y = y;
    }

    lcsLength():number{
        return;
    }

    lcs():string{
        for(let i = 1; i < this.x.length; i++){
            for(let j = 1; j < this.y.length; j++){
                if(this.x[i] == this.y[j]){
                    this.cache[i][j] = this.cache[i-1][j-1] + 1;
                }else if(this.cache[i-1][j] > this.cache[i][j-1]){
                    this.cache[i][j] = this.cache[i-1][j];
                }else{
                    this.cache[i][j] = this.cache[i][j-1];
                }
            }
        }
        return;

    }
}