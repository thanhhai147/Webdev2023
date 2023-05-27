import express from "express";
import LocationController from "../controllers/location.controller.js";
import AuthMiddleware from "../middlewares/auth.middleware.js";
import ErrorHandle from "../../../error/err-handle.js";

const router = express.Router();
const { useError } = ErrorHandle;

// get one location based on id
router.route("/get-one-location").get(AuthMiddleware.verifyToken, useError(LocationController.getOneLocation));
// get multiple locations based on region
router.route("/get-multiple-locations").get(AuthMiddleware.verifyToken, useError(LocationController.getMultipleLocations));
// get all locations
router.route("/get-all-locations").get(AuthMiddleware.verifyToken, useError(LocationController.getAllLocations));
// get recommended tour result
router.route("/recommend-tour").get(AuthMiddleware.verifyToken, useError(LocationController.recommendTour));

export default router;