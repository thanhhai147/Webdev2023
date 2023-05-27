import mongoose from "mongoose";
import app from "./app.js";
import dotenv from "dotenv";

dotenv.config()

const port = process.env.PORT || 8000;

mongoose.connect(
    process.env.MongoDB_URI,
    {
        maxPoolSize: 50,
        wtimeoutMS: 3000,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
.catch(err => {
    console.error(err.stack);
    process.exit(1);
})
.then( async client => {
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
});