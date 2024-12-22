"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middleware_1 = require("../middleware");
const router = (0, express_1.Router)();
router.get("/movies/:movieId/view-count", middleware_1.authenticateToken, controllers_1.CountController.getCount);
router.post("/movies/:movieId/view-count", middleware_1.authenticateToken, controllers_1.CountController.createCount);
exports.default = router;
