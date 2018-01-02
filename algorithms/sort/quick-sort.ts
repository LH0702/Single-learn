import { AbstractSort } from "./abstract-sort";

export class QuickSort extends AbstractSort{
    public sort(inputList: number[]): number[] {
        this.quickSort(inputList,0,inputList.length);
        return inputList;
    }

    public quickSort(inputList: number[],low:number,high:number){
        if(low >= high -1){
            return;
        }
        
        let middle = this.partition(inputList,low,high);
        this.quickSort(inputList,low,middle);
        this.quickSort(inputList,middle,high);
    }

    private partition(inputList: number[],low:number,high:number){
        let pivot = inputList[low];
        let i = low + 1;
        for(let j = low + 1 ; j< high;j++){
            if(inputList[j] < pivot){
                this.swap(inputList,i,j);
                i++;
            }
        }

        this.swap(inputList,low,i-1);
        return i;

    }

    private swap(inputList: number[],left:number,right:number){
        let tmp = inputList[left];
        inputList[left] = inputList[right];
        inputList[right] = tmp;
    
    }
    
}