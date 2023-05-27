import express from "express";
import FashionController from "../controllers/fashion.controller.js";
import AuthMiddleware from "../middlewares/auth.middleware.js";
import ErrorHandle from "../../../error/err-handle.js";

const router = express.Router();

const { useError } = ErrorHandle;

// get one fashion based on id
router.route("/get-one-fashion").get(AuthMiddleware.verifyToken, useError(FashionController.getOneFashion));
// get multiple fashions based on region
router.route("/get-multiple-fasions").get(AuthMiddleware.verifyToken, useError(FashionController.getMultipleFashsion));
// get one region based on region key
router.route("/get-region").get(AuthMiddleware.verifyToken, useError(FashionController.getOneRegion));

export default router;