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
var BubbleSort = (function (_super) {
    __extends(BubbleSort, _super);
    function BubbleSort() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BubbleSort.prototype.sort = function (input) {
        for (var i = 0; i < input.length; i++) {
            for (var j = i + 1; j < input.length; j++) {
                if (input[i] > input[j]) {
                    var tmp = input[j];
                    input[j] = input[i];
                    input[i] = tmp;
                }
            }
        }
        return input;
    };
    return BubbleSort;
}(abstract_sort_1.AbstractSort));
exports.BubbleSort = BubbleSort;
//# sourceMappingURL=bubble-sort.js.map