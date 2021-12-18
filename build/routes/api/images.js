"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var check_and_respond_1 = __importDefault(require("./check_and_respond"));
var images = express_1.default.Router();
images.get('/', check_and_respond_1.default);
exports.default = images;
