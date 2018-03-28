import { AbstractSort } from './abstract-sort';

export class BucketSort extends AbstractSort {
    public sort(inputList: number[]): number[] {
        let output: any[] = [];
        let bucketNum = 100;
        for (let i = 0; i <= bucketNum; i++) {
            output[i] = [];
        }

        for (let i = 0; i < inputList.length; i++) {
            output[Math.ceil(inputList[i] / 100) ].push(inputList[i]);
        }

        let targetList :number[] = [];
        for (let i = 0; i <= bucketNum; i++) {
            targetList = targetList.concat(this.insertSort(output[i]));
        }

       return targetList;
        
    }

    public insertSort(inputList: number[]) {

        let output: number[] = [];
        output.push(-1);
        output.push(100000);

        for (let element of inputList) {
            for (let i = 0; i < output.length; i++) {
                if (element < output[i]) {
                    output.splice(i, 0, element);
                    break;
                }
            }
        }
        output.pop();
        output.shift();
        return output;

    }
}

