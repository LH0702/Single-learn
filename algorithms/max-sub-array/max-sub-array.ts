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

    public getMaxSubArrayByDivide(inputArray: number[]): number {
        if (inputArray.length === 0) {
            throw new Error('invalid input');
        }

        return;
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