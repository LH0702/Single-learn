"use strict";
exports.__esModule = true;
var fs = require("fs");
var Util = (function () {
    function Util() {
        this.sourceList = [];
        this.sortedList = [];
        var orignSource = fs.readFileSync('./resources/sourcefile.txt', 'utf-8');
        for (var _i = 0, _a = orignSource.split(' '); _i < _a.length; _i++) {
            var ele = _a[_i];
            this.sourceList.push(parseInt(ele));
        }
        var orignSortedList = fs.readFileSync('./resources/sorted.txt', 'utf-8');
        for (var _b = 0, _c = orignSortedList.split(' '); _b < _c.length; _b++) {
            var ele = _c[_b];
            this.sortedList.push(parseInt(ele));
        }
    }
    Util.prototype.getSource = function () {
        return this.sourceList.concat();
    };
    Util.prototype.compare = function (target) {
        if (this.sortedList.length !== target.length) {
            return false;
        }
        for (var i = 0; i < this.sortedList.length; i++) {
            if (this.sortedList[i] !== target[i]) {
                return false;
            }
        }
        return true;
    };
    Util.prototype.sortTest = function (sortName, callBack) {
        console.log("*****************************************");
        console.log("*** sort method = [" + sortName + "] ***");
        var previousTime = new Date().getTime();
        var sorted = callBack(exports.util.getSource());
        console.log("*** sort used time =" + (new Date().getTime() - previousTime) + " ***");
        console.log("*** result = " + this.compare(sorted) + " ***");
        console.log("*****************************************");
    };
    return Util;
}());
exports.util = new Util();
//# sourceMappingURL=util.js.map