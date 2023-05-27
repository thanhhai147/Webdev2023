import { ObjectId } from "mongodb";
import User from "../models/user.model.js";
import Tour from "../models/tour.model.js"

export default class UserDAO {
    static async checkUnique(query) {
        try {
            let result = await User.countDocuments(query);
            return result == 0;
        } catch (e) {
            throw new Error(e);
        };
    };

    static async insertNewUser(newUser) {
        // insert account to db
        try {
            const user = await User.create(newUser);
            user.save();
        } catch (e) { 
            throw new Error(e)
        };
    };

    static async getUser(query) {
        try {
            const user = await User.findOne(query);
            return user;
        } catch (e) { 
            throw new Error(e)
        };
    };

    static async updateRefreshToken(user, refreshToken) {
        try {
            let result = User.findOneAndUpdate({ _id: ObjectId(user._id) }, { refreshToken: refreshToken });
            return result;
        } catch(e) {
            throw new Error(e)
        };
    };

    static async getRefreshToken(user) {
        try {
            let storedUser = User.findOne({ _id: ObjectId(user._id) });
            return storedUser.refreshToken;
        } catch(e) {
            throw new Error(e)
        };
    };

    static async getAllTours(user) {
        try {
            let storedUser = await User.findOne({ _id: ObjectId(user._id) })
            let storedTours = await Tour.find({ '_id': { $in: storedUser['history_tour_ids'] } })
            return storedTours
        } catch(e) {
            throw new Error(e)
        }
    }
    
}; 