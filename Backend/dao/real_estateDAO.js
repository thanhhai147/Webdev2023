import { ObjectId } from "mongodb";
import Check from "../utilities/check.js"; 

let real_estate;

export default class RealEstateDAO {
    // connect to database
    static async injectDB(client) {
        if(real_estate) return;
        try {
            real_estate = client.db("data").collection("real_estate")
        } catch (e) {
            console.error(`Unable to establish connection to database in real_estateDAO: ${e}`);
        };
    };

    // get real estate
    static async getRealEstateByFilter(filters, realEstatePerPage, page) {
        // transform filters to queries
        let query = {};
        
        for (let [key, value] of Object.entries(filters)) {
            switch(key){
                case "price": case "bedroom":
                    if(!value || Check.emptyObj(value)) break;   
                    query[key] = { $gte: value.min, $lte: value.max };
                    break;
                case "bathroom":
                    if(!value || Check.emptyObj(value)) break;   
                    query[key] = { $exists: true, $gte: value.min, $lte: value.max };
                    break;
                case "area":
                    if(!value || Check.emptyObj(value)) break; 
                    for(let [childKey, childValue] of Object.entries(value)){
                        query[`${key}.${childKey}`] = { $gte: childValue.min, $lte: childValue.max };
                    };
                    break; 
                case "location": case "direction": 
                    for(let [childKey, childValue] of Object.entries(value)){
                        query[`${key}.${childKey}.code`] = { $eq: childValue };
                    };
                    break;
                default: 
                    if(!value || Check.emptyObj(value)) break;
                    query[`${key}.code`] = { $eq: value };
                    break;
            };
        };
       
        // Find cursor
        let cursor;
        try{
            // console.log(query)
            cursor = await real_estate.find(query);
        } catch (e) { 
            console.error(`Unable to issue find command in real_estateDAO: ${e}`) 
            return { realEstateList: [], totalNumRealEstate: 0 };
        };

        // get find result        
        try {
            let result = cursor.limit(realEstatePerPage).skip(realEstatePerPage * (page - 1));
            const realEstateList = await result.toArray();
            const totalNumRealEstate = await real_estate.countDocuments(query);
            return { realEstateList, totalNumRealEstate }
        } catch (e) { 
            console.error(`Unable to get result from find cursor in real_estateDAO: ${e}`) 
            return { realEstateList: [], totalNumRealEstate: 0 };
        };
    };

    // get list of real estate by id
    static async getRealEstateById(_id, realEstatePerPage, page) {
        const idArr = _id.map(id => ObjectId(id));

        let query = {_id: {$in: idArr}}

        let cursor;
        try {
            cursor = await real_estate.find(query);
        } catch(e) {
            console.error(e);
            return { realEstateList: [], totalNumRealEstate: 0 };
        };

        let result;
        try {
            result = cursor.limit(realEstatePerPage).skip(realEstatePerPage * (page - 1));
            const realEstateList = await result.toArray();
            const totalNumRealEstate = await real_estate.countDocuments(query);
            return { realEstateList, totalNumRealEstate };
        } catch(e) {
            console.error(e);
            return { realEstateList: [], totalNumRealEstate: 0 };
        }
    };

    // get one real estate
    static async getOneRealEsate(_id) {
        try {
            let result = await real_estate.findOne({_id: ObjectId(_id)});
            return result;
        } catch(e) {
            console.error(`Unable to get one real estate in real_estateDAO: ${e}`);
            throw e;
        };
    };

    // add new real estate to db
    static async addRealEstate(newRealEstate) {
        try {
            let result = await real_estate.insertOne(newRealEstate);
            return result;
        } catch (e) {
            console.error(`Unable to add new real estate in real_estateDAO: ${e}`);
            throw e;
        };
    }

    // add favorite into real estate
    static async addFavorite(realEstateId, userId) {
        try {
            await real_estate.updateOne({ _id: ObjectId(realEstateId) }, { "$push": { "favorites": userId } });
        } catch(e) {
            console.error(`Unable to add favorite into real estate in realEstateDAO: ${e}`);
            throw e;
        };
    };

    // remove favorite from real estate 
    static async removeFavorite(realEstateId, userId) {
        try {
            await real_estate.updateOne({ _id: ObjectId(realEstateId) }, { "$pull": { "favorites": userId } });
        } catch(e) {
            console.error(`Unable to remove favorite from real estate in realEstateDAO: ${e}`);
            throw e;
        };
    };

    // delete real estate by id
    static async deleteRealEstateById(_id) {
        try {
            await real_estate.deleteOne({ _id: ObjectId(_id) });
        } catch(e) {
            console.error(`Unable to delete real estate by id in realEstateDAO: ${e}`);
            throw e;
        };
    };
};