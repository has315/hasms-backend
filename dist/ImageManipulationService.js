"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizeImage = exports.getMetadata = void 0;
const sharp = require('sharp');
function getMetadata(imageUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const metadata = yield sharp(imageUrl).metadata();
            console.log(metadata);
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.getMetadata = getMetadata;
function resizeImage(imageUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield sharp(imageUrl).resize({
                width: 1024,
                height: 768,
            }).toFile("bojan-resized.jpg");
            getMetadata("bojan-resized.jpg");
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.resizeImage = resizeImage;
