import Transport from "../models/transport.model.js";

export default class LocationDAO {
    static async getOneTransport(query) {
        try {
            const transport = await Transport.findOne(query)
            return transport
        } catch(e) {
            throw new Error(e)
        }
    }
}