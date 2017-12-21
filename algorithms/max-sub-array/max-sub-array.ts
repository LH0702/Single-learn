class MaxSubArray {
    public getMaxSubArrayByNaive(inputArray: number[]): number {
        if (inputArray.length === 0) {
            throw new Error('invalid input');
        }

        let maxSubArray = inputArray[0];
        for (let i = 0; i < inputArray.length; i++) {
            let sum = inputArray[i];
            if (sum >= maxSubArray) {
                maxSubArray = sum;
            }
            for (let j = i + 1; j < inputArray.length; j++) {
                sum += inputArray[j];
                if (sum >= maxSubArray) {
                    maxSubArray = sum;
                }
            }
        }

        return maxSubArray;
    }

    public getMaxSubArrayByDivide = (inputArray: number[]): number  => {
        if (inputArray.length === 0) {
            throw new Error('invalid input');
        }
        
        return this.getMaxSubArray(inputArray,0,inputArray.length-1);
    }

    private getMaxSubArray(inputArray:number[],leftIndex:number,rightIndex:number):number{
        if(leftIndex >= rightIndex){
            return inputArray[leftIndex];
        }

        let midIndex = Math.floor((leftIndex + rightIndex)/2);
        let left = this.getMaxSubArray(inputArray,leftIndex,midIndex);
        let right = this.getMaxSubArray(inputArray,midIndex + 1,rightIndex);
        let mid = this.getCrossMaxSunArray(inputArray,leftIndex,rightIndex,midIndex);

        return Math.max(Math.max(left,right),mid);

    }

    private getCrossMaxSunArray(inputArray:number[],leftIndex:number,rightIndex:number,midIndex:number):number{

        let leftMaxSum = Number.NEGATIVE_INFINITY;
        let leftSum:number = 0;
        for(let i = midIndex; i>= leftIndex; i--){
            leftSum += inputArray[i];
            if(leftMaxSum < leftSum){
                leftMaxSum = leftSum; 
            }
        }

        let rightMaxSum = Number.NEGATIVE_INFINITY;
        let rightSum:number = 0;
        for(let i = midIndex+1; i <= rightIndex ;i++){
            rightSum += inputArray[i];
            if(rightMaxSum < rightSum){
                rightMaxSum = rightSum; 
            }
        }

        return leftMaxSum + rightMaxSum;
    }

    public getMaxSubArrayByLinear(inputArray: number[]): number {
        if (inputArray.length === 0) {
            throw new Error('invalid input');
        }

        let maxSubArray = inputArray[0];
        let sum = inputArray[0];
        for (let i = 1; i < inputArray.length; i++) {
            sum += inputArray[i];

            if (sum < 0) {
                sum = 0;
                continue;
            }

            if (sum > maxSubArray) {
                maxSubArray = sum;
            }
        }

        return maxSubArray;
    }
}

export  let maxSubArray = new MaxSubArray();