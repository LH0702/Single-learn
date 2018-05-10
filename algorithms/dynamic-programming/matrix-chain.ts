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

        for(let i = 2 ; i <= this.chainLen; i++){
            //for(let j = 1 ; j < = )
        }

        return;
    }

    printOptimalParens():string{
        return ;
    }
}