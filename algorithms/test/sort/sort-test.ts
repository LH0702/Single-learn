import { expect } from 'chai'
import { AbstractSort }  from '../../sort/abstract-sort';
import { InsertSort }  from '../../sort/insert-sort'
import {util} from '../../util/util';
import { BubbleSort } from '../../sort/bubble-sort';
import { MergeSort } from '../../sort/merge-sort';
import { QuickSort } from '../../sort/quick-sort';
import { HeapSort } from '../../sort/heap-sort';
import { CountSort } from '../../sort/count-sort';
import { RadixSort } from '../../sort/radix-sort';

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
        let quickSort :AbstractSort = new QuickSort();
        let target = quickSort.sort(util.getSource());
        expect(util.compare(target)).to.be.equal(true);
    });

    it('Heap sort',()=>{
        let heapSort :AbstractSort = new HeapSort();
        let target = heapSort.sort(util.getSource());
        expect(util.compare(target)).to.be.equal(true);
    });

    it('count sort',()=>{
        let countSort :AbstractSort = new CountSort();
        let target = countSort.sort(util.getSource());
        expect(util.compare(target)).to.be.equal(true);
    });

    it('radix sort',()=>{
        let radixSort :AbstractSort = new RadixSort();
        let target = radixSort.sort(util.getSource());
        expect(util.compare(target)).to.be.equal(true);
    });
})