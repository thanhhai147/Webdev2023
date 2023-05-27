import mongoose from "mongoose";
const Schema = mongoose.Schema;

const transportSchema = new Schema({
    type: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    time_seconds: {
        type: Number,
        required: true
    },
    street_id: mongoose.SchemaTypes.ObjectId
}, {
    timestamps: true,
});

const Transport = mongoose.model("Transport", transportSchema, "transport");

export default Transport;