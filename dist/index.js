"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const ImageManipulationService_1 = require("./ImageManipulationService");
const body_parser_1 = __importDefault(require("body-parser"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.post('/resizeImage', (req, res) => {
    (0, ImageManipulationService_1.resizeImage)("bojan.jpg");
    res.sendStatus(200);
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
