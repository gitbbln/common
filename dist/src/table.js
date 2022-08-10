"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
var t = {};
var list;
var dev = {
    start: '06-07-21',
    end: '08-08-21',
};
var Table = (function () {
    function Table() {
        this.map = {
            uBlack_Square: 9632,
            u1922: ' ⃫ ',
            uCursor: '▝',
            uArrows_21E8: 8658,
            uArrow6: 9658,
            uArrow2: 9662,
            lArrow6: 9658,
            lArrow2: 9662,
            l46: '─',
            l82: '│',
            l7: '┌',
            l8: '┬',
            l2: '┴',
            l9: '┐',
            l4: '├',
            l5: '┼',
            l6: '┤',
            l1: '└',
            l3: '┘',
            dArrows_21E8: 8658,
            d46: '═',
            d82: '║',
            d7488: '╒',
            d7448: '╓',
            d7: '╔',
            d855: '╥',
            d885: '╤',
            d8: '╦',
            d225: '╧',
            d255: '╨',
            d2: '╩',
            d6988: '╕',
            d6698: '╖',
            d9: '╗',
            d445: '╟',
            d4: '╠',
            d5: '╬',
            d665: '╢',
            d6: '╣',
            d4122: '╘',
            d4412: '╙',
            d1: '╚',
            d6322: '╛',
            d6632: '╜',
            d3: '╝',
            h46: '━',
            h885: '┯',
            h82: '┃',
            h4788: '┍',
            h4478: '┎',
            h7: '┏',
            h8: '┳',
            h225: '┷',
            h2: '┻',
            h6988: '┑',
            h6698: '┒',
            h9: '┓',
            h445: '┠',
            h4: '┣',
            h5: '╋',
            h665: '┨',
            h6: '┫',
            h1: '┗',
            h3: '┛',
        };
    }
    Table.prototype.uns = function (u) {
        return String.fromCharCode(u);
    };
    Table.prototype.us = function (code) {
        for (var symbCode in this.map) {
            if (this.map[symbCode] == code)
                return this.uns(code);
        }
        return "";
    };
    Table.prototype.pseudoSymUnicode = function (msg, list, style, set) {
        var _this = this;
        var t = "";
        var s;
        list.forEach(function (item, index, arr) {
            s = item.toString();
            if (_this.map) {
                t['c' + item] = _this.uns(Number(_this.map[set + s]));
                t['d' + item] = _this.uns(Number(_this.map['d' + s]));
                t['h' + item] = _this.uns(Number(_this.map['h' + s]));
                t['l' + item] = _this.uns(Number(_this.map['l' + s]));
            }
        });
        return t;
    };
    return Table;
}());
exports.Table = Table;
