import Location from "../models/location.model.js";

export default class LocationDAO {
    
    static async getOneLocation(query) {
        try {
            const location = await Location.findOne(query)
            return location
        } catch(e) {
            throw new Error(e)
        }
    }
    
    static async getMultipleLocation(query) {
        try {
            const locations = await Location.find(query)
            return locations
        } catch(e) {
            throw new Error(e)
        }
    }


}; 