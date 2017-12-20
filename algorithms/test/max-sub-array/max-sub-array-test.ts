import { expect } from 'chai'
import { maxSubArray } from '../../max-sub-array/max-sub-array'
describe('一个最大子数组和算法测试', () => {
    let test = (callBack: (inputArray: number[]) => number) => {
        it('all positive input', () => {
            let input_all_positive: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
            let input_all_positive_correct: number = 45;
            expect(callBack(input_all_positive)).to.be.equal(input_all_positive_correct);
        });

        it('all negitive input', () => {
            let input_all_negitive: number[] = [-1, -2, -3, -4, -5, -6, -7, -8, -9];
            let input_all_negitive_correct: number = -1;

            expect(callBack(input_all_negitive)).to.be.equal(input_all_negitive_correct);
        });

        it('mixing input 001 ', () => {
            let input_mixing: number[] = [1, -2, -3, 3, 8, 9, -12, 13, 4];
            let input_mixing_correct: number = 25;
            expect(callBack(input_mixing)).to.be.equal(input_mixing_correct);
        });

        it('mixing input 002 ', () => {
            let input_mixing: number[] = [1, 2, 3, 4, 5, 6, -1, -2, -3, -4, -5];
            let input_mixing_correct: number = 21;
            expect(callBack(input_mixing)).to.be.equal(input_mixing_correct);
        });

        it('mixing input 003 ', () => {
            let input_mixing: number[] = [-1, -2, -3, -4, -5, 1, 2, 3, 4, 5, 6];
            let input_mixing_correct: number = 21;
            expect(callBack(input_mixing)).to.be.equal(input_mixing_correct);
        });

        it('mixing input 004', () => {
            let input_mixing: number[] = [-1, -2, -3, -4, -5, 1, 2, 3, 4, 5, 6, -20, 100];
            let input_mixing_correct: number = 101;
            expect(callBack(input_mixing)).to.be.equal(input_mixing_correct);
        });

        it('mixing input 005', () => {
            let input_mixing: number[] = [100, -1, -2, -3, -4, -5, -9, 1, 2, 3, 4, 5, 6, -20];
            let input_mixing_correct: number = 100;
            expect(callBack(input_mixing)).to.be.equal(input_mixing_correct);
        });

        it('all zero input', () => {
            let input_element_zero: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            let input_element_zero_correct = 0;

            expect(callBack(input_element_zero)).to.be.equal(input_element_zero_correct);
        });

        it('imput length equal zero', () => {

            let input_length_zero: number[] = [];
            try {
                callBack(input_length_zero)
            } catch (e) {
                expect("invalid input").to.be.equal(e.message);
            }

        });
    }

    describe('native method',()=>{
        test(maxSubArray.getMaxSubArrayByNaive);
    })

    describe('divide and conquer method',()=>{
        test(maxSubArray.getMaxSubArrayByDivide);
    })

    describe('linear method',()=>{
        test(maxSubArray.getMaxSubArrayByLinear);
    })

})