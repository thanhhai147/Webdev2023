import TransportDAO from "../../../dao/transport.DAO.js";
import { ObjectId } from "mongodb";


export default class TransportController {
    static async getOneTransport(req, res, next) {
        const transportId = req.query.transportId
        try {
            const transport = await TransportDAO.getOneTransport({ '_id': ObjectId(transportId) })
            return res.status(200).json({ message: "get transport success", data: transport });
        } catch (e) {
            return res.status(500).json({ message: "internal server error" })
        }
    }


}; 