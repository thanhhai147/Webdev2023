import mongoose from "mongoose";
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        max_length: 30
    },
    long: {
        type: Number,
        required: true,
        trim: true
    },
    lat: {
        type: Number,
        required: true,
        trim: true,
    },
    region: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        address_string: {
            type: String,
            required: true,
            trim: true,
        },
        province: {
            type: String,
            required: true,
            trim: true,
        },
        district: {
            type: String,
            required: true,
            trim: true,
        },
        ward: {
            type: String,
            required: true,
            trim: true,
        },
    },
    type: {
        type: String,
        required: true,
        trim: true,
    },
    history: {

    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
    time_seconds: {
        type: Number,
        required: true,
        trim: true,
    },
    near_location_ids: {
        type: [mongoose.SchemaTypes.ObjectId],
    },
    street_ids: {
        type: [mongoose.SchemaTypes.ObjectId],
    }
}, {
    timestamps: true,
});

const Location = mongoose.model("Location", locationSchema, "location");

export default Location;