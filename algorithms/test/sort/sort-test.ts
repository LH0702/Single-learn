import { expect } from 'chai'
import { AbstractSort }  from '../../sort/abstract-sort';
import { InsertSort }  from '../../sort/insert-sort'
import {util} from '../../util/util';
import { BubbleSort } from '../../sort/bubble-sort';
import { MergeSort } from '../../sort/merge-sort';

describe('排序算法测试',()=>{
   
    it('bubble test',()=>{
        let bubbleSort :AbstractSort = new BubbleSort();
        let target = bubbleSort.sort(util.getSource());
        expect(util.compare(target)).to.be.equal(true);
    });

    it('insert test',()=>{
        let insertSort :AbstractSort = new InsertSort();
        let target = insertSort.sort(util.getSource());
        expect(util.compare(target)).to.be.equal(true);
    });

    it('merge test',()=>{ 
        let mergeSort :AbstractSort = new MergeSort();
        let target = mergeSort.sort(util.getSource());
        expect(util.compare(target)).to.be.equal(true);
    });

    it('Quick sort',()=>{
        let insertSort :AbstractSort = new InsertSort();
    });
})