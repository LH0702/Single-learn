import { AbstractSort } from './abstract-sort'

export class RadixSort extends AbstractSort{
    
    //基数排序需要知道最大数的位数
    public sort(inputList: number[],inputDigit?:number): number[] {
        let digital = inputDigit || super.getinputDigit(inputList);
    
        let sortedArray:number[] = inputList;
        for(let i = 1; i <= digital; i++){
            sortedArray = this.countSort(sortedArray,i);
        }

        return sortedArray;
    }


    private countSort(inputList: number[],targetDigit:number):number[]{
        
        let digital = 9;
        //一直需要排序数组的最大值为digital, 初始化计数数组
        let count:number[] = [];
        for(let i = 0;i <= digital;i++){
            count.push(0);
        }

        let sortedArray:number[] = [];
        for(let i = 0;i < inputList.length ;i++){
            sortedArray.push(0);
        }

        //统计数组中每一个数值的数量
        for(let i = 0; i < inputList.length; i++){
            count[this.getTargetDigit(inputList[i],targetDigit)] += 1;
        }

        for(let i = 1; i < count.length; i++){
            count[i] = count[i] + count[i-1];
        }
 
        for(let i = inputList.length -1; i >= 0; i--){
            sortedArray[count[this.getTargetDigit(inputList[i],targetDigit)] - 1] = inputList[i];
            count[this.getTargetDigit(inputList[i],targetDigit)] -= 1;
        }

        return sortedArray;
    }

    private getTargetDigit(inputNmber:number,digit:number):number{
        let targetDigit ;
        for(let i = 1; i <= digit ;i++){
            targetDigit =  inputNmber % 10;
            inputNmber = Math.floor(inputNmber /10);
        }
        return targetDigit;

    }
   
    
}