import RealEstateDAO from "../../../dao/real_estateDAO.js";
import UserDAO from "../../../dao/userDAO.js";
import { PythonShell } from "python-shell";
import GetPath from "../../../utilities/getPath.js";
import * as fs from "fs";
// import Constant from "../../../utilities/Constant.js";
import path from "path";


export default class RealEstateController {
    static async getListOfRealEstateByFilter(req, res, next) {
        //handle queries
        let { realEstatePerPage, page, ...others } = req.query;
        realEstatePerPage = realEstatePerPage ? parseInt(realEstatePerPage, 10) : 20;
        page = page ? parseInt(page, 10) : 1;
        
        let filters = {
            area: {},
            location: {},
            direction: {},
        };

        for (let [key, value] of Object.entries(others)) {
            switch(key) {
                case "area":
                    var splitter = value.split("-");
                    var [min, max] = splitter.map(item => parseInt(item, 10));
                    filters["area"]["area"] = {min, max}; 
                    break;
                case "price":
                    var splitter = value.split("-");
                    var [min, max] = splitter.map(item => parseInt(item, 10));
                    filters[key] = {min, max};
                    break;
                case "bathroom": case "bedroom":
                    var splitter = value.split("-");
                    var [min, max] = splitter.map(item => parseInt(item, 10));
                    if(min !== 1 || max !== 10) filters[key] = {min, max};
                    break;
                case "province": case "district": case "ward":
                    filters["location"][key] = value;
                    break;
                case "main": case "balcony":
                    filters["direction"][key] = value;
                    break;
                default: 
                    filters[key] = value;
                    break;
            };
        };
      
        // get find result
        const { realEstateList, totalNumRealEstate } = await RealEstateDAO.getRealEstateByFilter(filters, realEstatePerPage, page);
        res.status(200).json({ realEstateList, totalNumRealEstate, message: "get real estate success" });

    };

    static async getListOfRealEstateById(req, res, next) {
        const _id = req.query._id.split(",");
        const realEstatePerPage = req.query.realEstatePerPage ? parseInt(req.query.realEstatePerPage, 10) : 20;
        const page = req.query.page ? parseInt(req.query.page, 10) : 1; 

        const { realEstateList, totalNumRealEstate } = await RealEstateDAO.getRealEstateById(_id, realEstatePerPage, page);
        res.status(200).json({ realEstateList, totalNumRealEstate, message: "get real estate success" });
    };

    static async getOneRealEstate(req, res, next) {
        const _id = req.query._id;

        let result = await RealEstateDAO.getOneRealEsate(_id);
        res.status(200).json({realEstate: result, message: "get real estate success"});
    };

    static async addRealEstate(req, res, next) {
        const userId = req.body.userId;
        let newRealEstate = req.body.newRealEstate;
    
        // add iat into new real estate
        const d = new Date();
        newRealEstate["iat"] = d.getTime();

        // add user id of who post into new real estate
        newRealEstate["post"] = userId;

        // add favorites into new real estate
        newRealEstate["favorites"] = [];

        // convert price, area, bathroom, bedroom into number
        ["price", "area", "bedroom", "bathroom", "floor"].forEach(parentKey => {
            if(parentKey === "area") {
                ["area", "living", "width", "length"].forEach(childKey => {
                    newRealEstate[parentKey][childKey] = parseInt(newRealEstate[parentKey][childKey], 10);
                });
            } else {
                newRealEstate[parentKey] = parseInt(newRealEstate[parentKey], 10);
            };
        });



        // add new real estate
        let result = await RealEstateDAO.addRealEstate(newRealEstate);
        await UserDAO.addPost(userId, "" + result.insertedId);
        res.status(200).json({ message: "add new real estate success" });
    };

    static async deleteRealEstateById(req, res, next) {
        const realEstateId = req.params.realEstateId;
        const userId = req.params.userId

        const removePromise = Promise.all([
            UserDAO.removePost(userId, realEstateId),
            UserDAO.removeFavorite(userId, realEstateId),
            RealEstateDAO.deleteRealEstateById(realEstateId)
        ]);

        try {
            await removePromise;
            res.status(200).json({message: "delete real estate by id success"});
        } catch(e) {
            console.error(`Unable to delete real estate by id in realEstateController: ${e}`);
            res.status(500).json({message: "delete real estate by id fail"});
        };
    };

    static scrapeRealEstate(req, res, next) {
        // get collection path
        // add contract to collection path
        let collectionPath = "";
        switch(req.query.contract) {
            case "sale":
                collectionPath += "mua-ban-";
                break;
            case "rent":
                collectionPath += "thue-";
                break;
            default:
                collectionPath += "mua-ban-";
                break;
        };
        // add collection to collection path
        switch(req.query.collection) {
            case "apartment":
                collectionPath += "can-ho-chung-cu";
                break;
            case "house":
                collectionPath += "nha-dat";
                break;
            case "land":
                collectionPath += "dat";
                break;
            case "commercial":
                collectionPath = "sang-nhuong-van-phong-mat-bang-kinh-doanh";
                break;
            case "motel":
                collectionPath += "phong-tro";
                break;
            default:
                collectionPath += "bat-dong-san"
        };
        // add location to collection path
        const locationToPath = (term, locationType) => {
            if(!term || term === "") return "";
            let path = term;
            // remove "thanh pho" and "tinh" -> remove special character -> join with "-"
            let words = path.split("_");
            if(locationType === "province") {
                if(words[0] === "thanh" && words[1] == "pho") {
                    words.splice(0,2);
                } else {
                    if(words[0] === "tinh") {
                        words.splice(0,1);
                    };
                };
            };
            words = words.filter(char => /^[a-zA-Z0-9]+$/g.test(char))
            path = words.join("-");
            // add "tp" when province is tphcm
            if(path === "ho-chi-minh") {
                path = "tp-" + path;
            };
            // add "-" at the beginning of path
            path = "-" + path;
            
            return path;
        };

        collectionPath += locationToPath(req.query.ward, "ward");
        collectionPath += locationToPath(req.query.district, "district");
        collectionPath += locationToPath(req.query.province, "province");
        

        // concat queries into a chotot-typed query string
        // chotot supports:
        // - area, price for all real estate
        // - type for almost real estate except for motel
        // - status for apartment
        // - balcony direction just for apartment
        // - main direction just for land, house, commercial, apartment
        // - feature just for all real estate except for motel, commercial
        // - legalities for all real estate except for motel
        // - furniture for all real estate except for land
        // - bedroom just for apartment, house
        // chotot don't support:
        // - bathroom
        let queryStr = "";
        for (let [key, value] of Object.entries(req.query)){
            switch(key) {
                case "contract": case "collection": case"province": case "district": case "ward": case"bathroom": case"status": break;
                case "area":
                    if(!value) break;
                    queryStr += `size=${value}&`;
                    break;
                case "type":
                    if(!value) break;
                    queryStr += `${req.query.collection}_type=${value}&`;
                    break;
                case "status":
                    if(!value) break;
                    queryStr += `property_status=${value}&`;
                case "feature":
                    if(!value) break;
                    if(req.query.collection === "motel" || req.query.collection === "commercial") break;
                    queryStr += `${req.query.collection === "apartment" ? "apartment_feature" : "filter_property_road_condition"}=${value}&`;
                    break;
                case "main": case "balcony":
                    if(!value) break;
                    if(key === "main") {
                        queryStr += `direction=${value}&`;
                    } else {
                        queryStr += `balconydirection=${value}&`;
                    };
                    break;
                case "legalities":
                    if(!value) break;
                    if(req.query.collection === "motel") break;
                    queryStr += `property_legal_document=${value}&`;
                    break;
                case "furniture":
                    if(!value) break;
                    if(req.query.collection === "land") break;
                    queryStr += `furnishing_${req.query.contract === "sale" ? "sell" : "rent"}=${value}&`;
                    break;
                case "bedroom":
                    if(!value) break;
                    if(req.query.collection !== "apartment" && req.query.collection !== "house") break;
                    // get lower and upper
                    let [lower, upper] = value.split("-");
                    lower = parseInt(lower, 10);
                    upper = parseInt(upper, 10);
                    let bedroomValue = "";
                    for (let i = lower; i <= upper; i++) {
                        bedroomValue += `${i},`
                    };
                    // remove "," at the end
                    bedroomValue = bedroomValue.substring(0, bedroomValue.length-1);
                    queryStr += `rooms=${bedroomValue}&`;
                    break;
                default:
                    if(!value) break;
                    queryStr += `${key}=${value}&`;
                    break;
            };
        };
      
        let options = {
            mode: "text",
            encoding: "utf8",
            pythonOptions: ["-u"],
            pythonPath: GetPath.pythonPath,
            scriptPath: GetPath.pythonScript,
            args: [collectionPath, queryStr],
        };

        PythonShell.run("chotot_spider.py", options, (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({message: "scrape fail"});
            } else {
                res.status(200).json({ filename: result, message: "scrape success" });
                const downloadPath = GetPath.downloadPath;
                const filepath = path.join(downloadPath, result[0]);
                setTimeout(() => {
                    return fs.unlink(filepath, (e) => {
                        console.log(e);
                    })
                }, process.env.DOWNLOAD_FILE_EXPIRE);
            }
        });
    };

    static async downloadRealEstate(req, res, next) {
        const query = req.query;
        const filename = query.filename;
        const downloadPath = GetPath.downloadPath;
        const filepath = path.join(downloadPath, filename);
        if(fs.existsSync(filepath)){
            res.status(200).download(filepath);
        } else {
            res.status(410).json({message: "File has been expired"})
        };
    };
}; 