import { AbstractSort }  from './sort/abstract-sort';
import { InsertSort }  from './sort/insert-sort'
import {util} from './util/util';
import * as fs from 'fs';
import { BubbleSort } from './sort/bubble-sort';
import { MergeSort } from './sort/merge-sort';

let insertSort :AbstractSort = new InsertSort();
util.sortTest('insert sort ',insertSort.sort);

let bubbleSort : AbstractSort = new BubbleSort();
util.sortTest('bubble sort ',bubbleSort.sort);

let mergeSort: AbstractSort = new MergeSort();
util.sortTest('merge sort ',mergeSort.sort);





        