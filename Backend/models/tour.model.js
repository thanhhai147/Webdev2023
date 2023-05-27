import mongoose from "mongoose";
const Schema = mongoose.Schema;

const tourSchema = new Schema({
    user_id: mongoose.SchemaTypes.ObjectId,
    price: {
        type: Number,
        required: true
    },
    time_seconds: {
        type: Number,
        required: true
    },
    location_ids: [mongoose.SchemaTypes.ObjectId],
    street_ids: [mongoose.SchemaTypes.ObjectId],
    transport_ids: [mongoose.SchemaTypes.ObjectId]
}, {
    timestamps: true,
});

const Tour = mongoose.model("Tour", tourSchema, "tour");

export default Tour;