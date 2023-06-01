import express from "express";
import StreetController from "../controllers/street.controller.js";
import AuthMiddleware from "../middlewares/auth.middleware.js";
import ErrorHandle from "../../../error/err-handle.js";

const router = express.Router();
const { useError } = ErrorHandle;

// get one street based on id
router.route("/get-one-street").get(AuthMiddleware.verifyToken, useError(StreetController.getOneStreet));


export default router;