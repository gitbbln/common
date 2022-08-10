"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mvc = void 0;
var mvc = (function () {
    function mvc() {
        var _this = this;
        this.create = function () {
            _this.list = [];
        };
        this.update = function (index, item) {
            _this.list[index] = item;
            return;
        };
        this.read = function (index) {
            return _this.list[index];
        };
        this.delete = function (index) {
        };
        this.create();
    }
    return mvc;
}());
exports.mvc = mvc;
