import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import auth from "./api/v1/routes/auth.route.js";
import user from "./api/v1/routes/user.route.js";
import location from "./api/v1/routes/location.route.js"
import ErrorHandle from "./error/err-handle.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// const port = process.env.PORT || 8000;
// const corsOptions = {
//     origin: ["http://localhost:3000"],
// };
// app.use(cors(corsOptions));


// enable cors policy
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control"
  );
  res.header(
    "Access-Control-Allow-Methods",
    ["POST", "PUT", "GET", "DELETE", "OPTIONS"]
  );
  next();
}); 
app.use(bodyParser.json({limit: "20mb"}));
app.use(bodyParser.urlencoded({limit: "20mb", extended: true}));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "downloads")));
app.use(express.static(path.join(__dirname, "../frontend/public")));

app.use("/api/v1/auth", auth);
app.use("/api/v1/user", user);
app.use("/api/v1/location", location);
app.use("*", (req, res) => res.status(404).json({ error: "Page not found" }));

app.use(ErrorHandle.errResponse); 


export default app;
 