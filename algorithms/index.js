"use strict";
exports.__esModule = true;
var insert_sort_1 = require("./sort/insert-sort");
var util_1 = require("./util/util");
var bubble_sort_1 = require("./sort/bubble-sort");
var merge_sort_1 = require("./sort/merge-sort");
var insertSort = new insert_sort_1.InsertSort();
util_1.util.sortTest('insert sort ', insertSort.sort);
var bubbleSort = new bubble_sort_1.BubbleSort();
util_1.util.sortTest('bubble sort ', bubbleSort.sort);
var mergeSort = new merge_sort_1.MergeSort();
util_1.util.sortTest('merge sort ', mergeSort.sort);
//# sourceMappingURL=index.js.map