import express from "express";
import AuthController from "../controllers/auth.controller.js";
import AuthMiddleware from "../middlewares/auth.middleware.js";
import ErrorHandle from "../../../error/err-handle.js"; 

const router = express.Router();
const { useError } = ErrorHandle

// sign up
router.route("/signup").post(useError(AuthController.signup));
// log in
router.route("/login").post(useError(AuthController.login));
// refresh access token
router.route("/refresh-tokens").post(useError(AuthController.refreshTokens));
// logout
router.route("/logout").post(AuthMiddleware.verifyToken, useError(AuthController.logout));
// get user
router.route("/get-user").get(AuthMiddleware.verifyToken, useError(AuthController.getUser));

export default router;