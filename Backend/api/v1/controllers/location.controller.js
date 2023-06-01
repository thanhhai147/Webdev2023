import LocationDAO from "../../../dao/location.DAO.js";
import { ObjectId } from "mongodb";


export default class LocationController {
    static async getOneLocation(req, res, next) {
        const locationId = req.query.locationId
        try {
            const location = await LocationDAO.getOneLocation({ '_id': ObjectId(locationId) })
            return res.status(200).json({ message: "get location success", data: location });
        } catch (e) {
            return res.status(500).json({ message: "internal server error" })
        }
    }

    static async getMultipleLocations(req, res, next) {
        const region = req.query.region
        try {
            const locations = await LocationDAO.getMultipleLocation({ 'region': region })
            return res.status(200).json({ message: "get multiple locations success", data: locations })
        } catch(e) {
            return res.status(500).json({ message: "internal server error" })
        }
    }

    static async getAllLocations(req, res, next) {
        try {
            const locations = await LocationDAO.getMultipleLocation({})
            return res.status(200).json({ message: "get all locations success", data: locations })
        } catch (e) {
            return res.status(500).json({ message: "internal server error" })
        }
    }
}; 