"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Checking if width or height positiv numbers
function checkNumParam(value) {
    var num = Number(value);
    if (num && num >= 0) {
        return parseInt(value);
    }
    else {
        return 0;
    }
}
exports.default = checkNumParam;
