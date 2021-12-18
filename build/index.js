"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
var app = (0, express_1.default)();
var port = 3000;
//start the express server
app.use('/api', index_1.default);
app.use('/api/images', express_1.default.static('images/process_images', { extensions: ['jpg', 'jpeg'] }));
app.listen(port, function () {
    console.log("server started at http://localhost:" + port + "/");
});
exports.default = app;
