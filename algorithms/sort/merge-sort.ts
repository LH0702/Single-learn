import { AbstractSort } from './abstract-sort'
export class MergeSort extends AbstractSort {

    public sort(inputList: number[]): number[] {
        let mergeList = (left: number[], right: number[]): number[] => {
            let sortedList: number[] = [];
    
            let rightIndex = 0;
            let leftIndex = 0;
            let totalLength = left.length + right.length;
            
            //放置一张哨兵牌，避免每次检查数组是否越界
            left.push(1000000);
            right.push(1000000);
            for (let i = 0; i < totalLength; i++) {
    
                if (left[leftIndex] < right[rightIndex]) {
                    sortedList.push(left[leftIndex]);
                    leftIndex++;
                } else {
                    sortedList.push(right[rightIndex]);
                    rightIndex++;
                }
            }
            return sortedList;
    
        }
        let mergeSort = (inputList: number[]): number[]  => {
            let inputLength: number = inputList.length;
        
            if (inputLength  <= 1) {
                return inputList;
            }
    
            let mid = Math.ceil(inputLength / 2);
            let left = mergeSort(inputList.slice(0, mid));
            let right = mergeSort(inputList.slice(mid));
    
            return mergeList(left, right);
        }

        return mergeSort(inputList);
    }

    // private mergeList(left: number[], right: number[]): number[] {
    //     let sortedList: number[] = [];

    //     let rightIndex = 0;
    //     let leftIndex = 0;
    //     let totalLength = left.length + right.length;
        
    //     //放置一张哨兵牌，避免每次检查数组是否越界
    //     left.push(1000000);
    //     right.push(1000000);
    //     for (let i = 0; i < totalLength; i++) {

    //         if (left[leftIndex] < right[rightIndex]) {
    //             sortedList.push(left[leftIndex]);
    //             leftIndex++;
    //         } else {
    //             sortedList.push(right[rightIndex]);
    //             rightIndex++;
    //         }
    //     }
    //     return sortedList;

    // }

}