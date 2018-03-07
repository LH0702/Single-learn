import { expect } from 'chai'

import { randomSelect } from "../../Medians and Order Statistics/randomized-select"
describe('期望为线性的选择算法', () => {

    describe('输入参校验',()=>{
        it('空数组', () => {
            expect(null).to.be.equal(randomSelect.select([],1));
        });

        it('数组为null', () => {
            expect(null).to.be.equal(randomSelect.select(null,1));
        });

        it('选择数字大于字符串长度', () => {
            expect(null).to.be.equal(randomSelect.select([1],2));
        });

        it('选择数<=0', () => {
            expect(null).to.be.equal(randomSelect.select([1],0));
            expect(null).to.be.equal(randomSelect.select([1],-1));
        });
    })

    describe('算法正确性校验',()=>{
        it('数组元素全部相同', () => {
           let inArray = [1,1,1,1,1,1,1];
           expect(1).to.be.equal(randomSelect.select(inArray,1));
           expect(1).to.be.equal(randomSelect.select(inArray,7));
           expect(1).to.be.equal(randomSelect.select(inArray,3));
        });

        it('数组大小为10，获取第1,9,10大的数值', () => {
            let inArray = [1,6,9,-5,0,17,1,3,3,13];
           expect(13).to.be.equal(randomSelect.select(inArray,9));
           expect(-5).to.be.equal(randomSelect.select(inArray,10));
           expect(17).to.be.equal(randomSelect.select(inArray,1));
        });
    })
  
})