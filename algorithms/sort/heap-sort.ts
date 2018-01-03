import { AbstractSort } from "./abstract-sort";

export class HeapSort extends AbstractSort{
    public sort(inputList: number[]): number[] {
       return this.heapSort(inputList);
    }

    private heapSort(inputList: number[]):number[]{
        let maxHeap:MaxHeap = this.buildMaxHeap(inputList);
        for(let i = inputList.length - 1; i >= 1 ; i++){
            this.swap(inputList,0,i);
            maxHeap.heapSize -= 1;
            this.maxHeapify(maxHeap,0);
        }
        return inputList;
    }

    private getLeft(index:number):number{
        return index <<1 +1;
    }

    private getRight(index:number):number{
        return index << 1 + 2;
    }

    private getParent(index:number):number{
        return (index - 1) >> 1;
    }

    private maxHeapify(input:MaxHeap, index:number){
         let largest = input.inputList[index];
         let left = this.getLeft(index);
         let right = this.getRight(index);

         if(left <= input.heapSize && left >= input.inputList[index]){
            largest = left;
         }

         if(right <= input.heapSize && right >= input.inputList[largest]){
             largest = right;
         }

         if(largest !== index){
            this.swap(input.inputList,index,largest);
            this.maxHeapify(input,largest);
         }

    }

    private buildMaxHeap(input:number[]):MaxHeap{
        let maxHeap:MaxHeap = {
            inputList : input,
            heapSize : input.length
        }
        for(let i = maxHeap.heapSize / 2 - 1; i >= 0 ;i--){
            this.maxHeapify(maxHeap,i);
        }

        return maxHeap;
    }
}

interface MaxHeap{
    inputList:number[];
    heapSize : number;
}