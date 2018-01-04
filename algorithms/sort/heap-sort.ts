import { AbstractSort } from "./abstract-sort";

export class HeapSort extends AbstractSort{
    public sort(inputList: number[]): number[] {
       return this.heapSort(inputList);
    }

    private heapSort(inputList: number[]):number[]{
        let maxHeap:MaxHeap = this.buildMaxHeap(inputList);
        for(let i = inputList.length - 1; i >= 1 ; i--){
            this.swap(inputList,0,i);
            maxHeap.heapSize -= 1;
            this.maxHeapify(maxHeap,0);
        }
        return inputList;
    }

    private getLeft(index:number):number{
        return (index << 1)  +1;
    }

    private getRight(index:number):number{
        return (index << 1) + 2;
    }

    private getParent(index:number):number{
        return (index - 1) >> 1;
    }

    private maxHeapify(maxheap:MaxHeap, index:number){
         let largest = index;
         let left = this.getLeft(index);
         let right = this.getRight(index);

         if(left < maxheap.heapSize && maxheap.inputList[left] >= maxheap.inputList[index]){
            largest = left;
         }

         if(right < maxheap.heapSize && maxheap.inputList[right] >= maxheap.inputList[largest]){
             largest = right;
         }

         if(largest !== index){
            this.swap(maxheap.inputList,index,largest);
            this.maxHeapify(maxheap,largest);
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
