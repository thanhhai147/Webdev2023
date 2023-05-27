import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 
const backendPath = path.normalize(path.join(__dirname, "\.."));

let GetPath = {   
    pythonPath: path.join(backendPath, "python/env/Scripts/python.exe"),
    pythonScript: path.join(backendPath, "python/Webdev2023"),
};

export default GetPath