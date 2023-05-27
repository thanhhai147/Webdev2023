import express from "express";
import RealEstateController from "../controllers/real_estate.controller.js";
import AuthMiddleware from "../middlewares/auth.middleware.js";
import ErrorHandle from "../../../error/err-handle.js";

const router = express.Router();

const { useError } = ErrorHandle;

// apartment routes
// get list of real estate by filter
router.route("/get-real-estate-by-filter").get(AuthMiddleware.verifyToken, useError(RealEstateController.getListOfRealEstateByFilter));
// get list of real estate by id
router.route("/get-real-estate-by-id").get(AuthMiddleware.verifyToken, useError(RealEstateController.getListOfRealEstateById));
// get one real estate
router.route("/get-one-real-estate").get(AuthMiddleware.verifyToken, useError(RealEstateController.getOneRealEstate));
// post real estate
router.route("/add-real-estate").post(AuthMiddleware.verifyTokenAndAdmin, useError(RealEstateController.addRealEstate));
// delete real estate
router.route("/delete-real-estate-by-id/:realEstateId/:userId").delete(AuthMiddleware.verifyTokenAndAdmin, useError(RealEstateController.deleteRealEstateById));  
// get file of scraped real estate
router.route("/scrape-real-estate").get(AuthMiddleware.verifyTokenAndAdmin, useError(RealEstateController.scrapeRealEstate));
// download file of scraped real estate
router.route("/download-scrape-file").get(AuthMiddleware.verifyTokenAndAdmin, useError(RealEstateController.downloadRealEstate));

export default router;