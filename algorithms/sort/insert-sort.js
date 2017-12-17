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
var InsertSort = (function (_super) {
    __extends(InsertSort, _super);
    function InsertSort() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InsertSort.prototype.sort = function (input) {
        var output = [];
        output.push(-1);
        output.push(100000);
        for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
            var element = input_1[_i];
            for (var i = 0; i < output.length; i++) {
                if (element < output[i]) {
                    output.splice(i, 0, element);
                    break;
                }
            }
        }
        output.pop();
        output.shift();
        return output;
    };
    return InsertSort;
}(abstract_sort_1.AbstractSort));
exports.InsertSort = InsertSort;
//# sourceMappingURL=insert-sort.js.map