"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../data");
const utils_1 = require("../utils");
const getGenres = (req, res) => {
    try {
        console.log({ code: 200, status: "Success", message: "", data: data_1.genreData });
        return (0, utils_1.sendResponse)(res, {
            code: 200,
            status: "Success",
            message: "",
            data: data_1.genreData,
        });
    }
    catch (error) { }
};
const GenreController = {
    getGenres,
};
exports.default = GenreController;
