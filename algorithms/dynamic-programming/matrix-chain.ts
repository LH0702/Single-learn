export class MatrixChain{

    private chain:number[] ;
    
    private readonly MIN_CHAIN :number = 2;

    private chainLen :number;

    private cache :number[][];

    private parten : number[][];

    constructor(chain:number[]){
        this.chain = chain;
        this.chainLen = this.chain.length -1 ;

        this.cache = this.getArray(this.chainLen,this.chainLen);
        this.parten = this.getArray(this.chainLen,this.chainLen);
    }

    matrixChainOrder():number{
        
        if(this.chainLen < this.MIN_CHAIN){
            return 0
        }

        for(let l = 2 ; l <= this.chainLen; l++){
            for(let i = 0 ; i < this.chainLen - l + 1; i++){
                let j = i + l -1;
                this.cache[i][j] = Number.MAX_SAFE_INTEGER;
                for(let k = i ; k < j ; k++){
                    let cur = this.cache[i][k] + this.cache[k+1][j] + this.chain[i] * this.chain[j + 1 ] * this.chain[k + 1];
                    
                    if(cur < this.cache[i][j]){
                        this.cache[i][j] = cur;
                        this.parten[i][j] = k;
                    }
                }
            }
        }

        return this.cache[0][this.chainLen-1];
    }

    printOptimalParens():string{

        let parens = "";
        
        let tmp = this.parten;
        function getParens(first:number,end:number){
            if(first == end){
                parens +=  `A${first}`;
                return;
            }

            parens += '(';
            getParens(first,tmp[first][end]);
            getParens(tmp[first][end] +1,end);
            parens += ')';
        }
        getParens(0,this.chainLen-1);
        return parens;
    }

    private getArray(row : number ,col : number ){
        let array: number[][] = [];
        for(let i = 0; i < row ; i++){
            array[i] = [];
            for(let j = 0; j < col ; j++){
                array[i][j] = 0;
            }
        }

        return array;
    }
}