import UserDAO from "../../../dao/userDAO.js";
import { PythonShell } from "python-shell";
import GetPath from "../../../utilities/getPath.js";
import { ObjectId } from "mongodb";

export default class UserController {
    static async getAllTours(req, res, next) {
        try {
            const allTours = await UserDAO.getAllTours(req.user)
            return res.status(200).json({ message: "get all tours success", data: allTours })
        } catch(e) {
            console.log(e)
            return res.status(500).json({ message: "internal server error", data: [] })
        }
    }

    static async recommendTour(req, res, next) {
        try {
            let options = {
                mode: "text",
                encoding: "utf8",
                pythonOptions: ["-u"], 
                pythonPath: GetPath.pythonPath,
                scriptPath: GetPath.pythonScript,
                args: [req.user._id, req.query.locationId, Number(req.query.budget), Number(req.query.time_vault)], 
            };
    
            PythonShell.run("tour_ML.py", options, (err, result) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ message: "find tour fail" });
                } else {
                    return res.status(200).json({ message: "recommend tour success" })
                }
            });
        } catch(e) {
            console.log(e)
            return res.status()
        }
    } 
};