import express from "express";
import TransportController from "../controllers/transport.controller.js";
import AuthMiddleware from "../middlewares/auth.middleware.js";
import ErrorHandle from "../../../error/err-handle.js";

const router = express.Router();
const { useError } = ErrorHandle;

// get one transport based on id
router.route("/get-one-transport").get(AuthMiddleware.verifyToken, useError(TransportController.getOneTransport));


export default router; 