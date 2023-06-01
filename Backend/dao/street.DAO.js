import Street from "../models/street.model.js";

export default class StreetDAO {
    static async getOneStreet(query) {
        try {
            const street = await Street.findOne(query)
            return street
        } catch(e) {
            throw new Error(e)
        }
    }
}