import mongoose from "mongoose";
const Schema = mongoose.Schema;

const fashionSchema = new Schema({
    name: { 
        type: String,
        required: true,
        trim: true,
    },
    type: {
        type: String,
        required: true,
        trim: true,
    },
    gender: {
        type: String,
        required: true,
        trim: true,
    },
    start_time: {
        type: Date,
        required: true,
        trim: true,
    },
    end_time: {
        type: Date,
        required: true,
        trim: true,
    },
    period: {
        type: String,
        required: true,
        trim: true
    },
    history: {

    }
}, {
    timestamps: true,
});

const Fashion = mongoose.model("Fashion", fashionSchema, "fashion");

export default Fashion;