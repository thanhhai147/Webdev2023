import mongoose from "mongoose";
const Schema = mongoose.Schema;

const streetSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    start_location_id: mongoose.SchemaTypes.ObjectId,
    end_location_id: mongoose.SchemaTypes.ObjectId,
    transport_ids: [mongoose.SchemaTypes.ObjectId]
}, {
    timestamps: true,
});

const Street = mongoose.model("Street", streetSchema, "street");

export default Street;