import { AbstractSort } from "./abstract-sort";

/**
 * 计数排序 需要排序的数值 k = O(n)
 */
export class  CountSort extends AbstractSort{

    public sort(inputList: number[]): number[] {

        let digital = super.getMaxNumber(inputList);
        
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
            count[inputList[i]] += 1;
        }

        for(let i = 1; i < count.length; i++){
            count[i] = count[i] + count[i-1];
        }
 
        for(let i = inputList.length -1; i >= 0; i--){
            sortedArray[count[inputList[i]] - 1] = inputList[i];
            count[inputList[i]] -= 1;
        }

        return sortedArray;
    }

}