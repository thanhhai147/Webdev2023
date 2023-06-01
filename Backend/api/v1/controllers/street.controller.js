import StreetDAO from "../../../dao/street.DAO.js";
import { ObjectId } from "mongodb";


export default class StreetController {
    static async getOneStreet(req, res, next) {
        const streetId = req.query.streetId
        try {
            const street = await StreetDAO.getOneStreet({ '_id': ObjectId(streetId) })
            return res.status(200).json({ message: "get street success", data: street });
        } catch (e) {
            return res.status(500).json({ message: "internal server error" })
        }
    }


}; 