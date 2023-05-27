import express from "express";
import UserController from "../controllers/user.controller.js";
import AuthMiddleware from "../middlewares/auth.middleware.js";
import ErrorHandle from "../../../error/err-handle.js";

const router = express.Router();

const { useError } = ErrorHandle;

// get all tour
router.route("/get-all-tours").get(AuthMiddleware.verifyToken, useError(UserController.getAllTours));
// recommend tour
router.route("/recommend-tour").get(AuthMiddleware.verifyToken, useError(UserController.recommendTour));
export default router;