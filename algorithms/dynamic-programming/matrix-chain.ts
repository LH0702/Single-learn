export class MatrixChain{

    private chain:number[] ;
    
    private readonly MIN_CHAIN :number = 2;

    private chainLen :number;
    constructor(chain:number[]){
        this.chain = chain;
        this.chainLen = this.chain.length -1 ;
    }

    matrixChainOrder():number{
        
        if(this.chainLen < this.MIN_CHAIN){
            return 0
        }

        for(let l = 2 ; l <= this.chainLen; l++){
            for(let i = 1 ; i <= this.chainLen - l + 1; i++){
                let j = i + l -1;
                for(let k = i ; k < j ; k++){
                    
                }
            }
        }

        return;
    }

    printOptimalParens():string{
        return ;
    }
}