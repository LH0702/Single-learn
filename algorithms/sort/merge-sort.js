"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var abstract_sort_1 = require("./abstract-sort");
var MergeSort = (function (_super) {
    __extends(MergeSort, _super);
    function MergeSort() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MergeSort.prototype.sort = function (inputList) {
        var mergeList = function (left, right) {
            var sortedList = [];
            var rightIndex = 0;
            var leftIndex = 0;
            var totalLength = left.length + right.length;
            left.push(1000000);
            right.push(1000000);
            for (var i = 0; i < totalLength; i++) {
                if (left[leftIndex] < right[rightIndex]) {
                    sortedList.push(left[leftIndex]);
                    leftIndex++;
                }
                else {
                    sortedList.push(right[rightIndex]);
                    rightIndex++;
                }
            }
            return sortedList;
        };
        var mergeSort = function (inputList) {
            var inputLength = inputList.length;
            if (inputLength <= 1) {
                return inputList;
            }
            var mid = Math.ceil(inputLength / 2);
            var left = mergeSort(inputList.slice(0, mid));
            var right = mergeSort(inputList.slice(mid));
            return mergeList(left, right);
        };
        return mergeSort(inputList);
    };
    return MergeSort;
}(abstract_sort_1.AbstractSort));
exports.MergeSort = MergeSort;
//# sourceMappingURL=merge-sort.js.map