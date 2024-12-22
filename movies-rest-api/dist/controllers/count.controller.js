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
const models_1 = require("../models");
const utils_1 = require("../utils");
const getCount = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { movieId } = req.params;
        const userId = req.user.id;
        const views = yield models_1.CountModel.findAll({
            where: {
                userId,
                movieId,
            },
        });
        return (0, utils_1.sendResponse)(res, {
            code: 200,
            status: "Success",
            data: views.length ? views.length : 0,
        });
    }
    catch (error) {
        next(error);
    }
});
const createCount = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { movieId } = req.params;
        const userId = req.user.id;
        const view = yield models_1.CountModel.sync({ alter: true }).then(() => {
            return models_1.CountModel.create({
                movieId,
                userId,
            });
        });
        return (0, utils_1.sendResponse)(res, {
            code: 200,
            status: "Success",
            data: view,
        });
    }
    catch (error) {
        next(error);
    }
});
const CountController = {
    getCount,
    createCount,
};
exports.default = CountController;
