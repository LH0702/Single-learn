export abstract class  AbstractSort{
    public abstract sort(inputList:number[]) :number[];

    protected swap(inputList: number[],left:number,right:number){
        let tmp = inputList[left];
        inputList[left] = inputList[right];
        inputList[right] = tmp;
    
    }

    public getinputDigit(inputList: number[]):number{
        let max = this.getMaxNumber(inputList);
        return this.getNumberDigit(max);
    }
    public getMaxNumber(inputList: number[]):number{
        let  maxNumber = 0;
        for(let ele of  inputList){
            if(ele > maxNumber){
                maxNumber = ele;
            }
        }

        return maxNumber;
    }

    public getNumberDigit(inputNumber:number):number{
        let bit = 1;
        while(true){
            inputNumber = Math.floor(inputNumber / 10);
            if(inputNumber < 1){
                break;
            }
            bit ++;
        }

        return bit;
    }
}