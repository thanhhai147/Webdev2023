import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        maxlength: 320
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    refreshToken: {
        type: String,
        required: false,
        trim: true,
    },
    admin: {
        type: Boolean,
        required: true,
    },
    fullname: {
        firstname: {
            type: String,
            required: true,
            trim: true,
            maxlength: 30,
        },
        familyname: {
            type: String,
            required: true,
            trim: true,
            maxlength: 30,
        }
    },
    age: {
        type: Number,
        required: false,
        trim: true
    },
    history_tour_ids: {
        type: [mongoose.SchemaTypes.ObjectId],    
    }
}, {
    timestamps: true,
});

const User = mongoose.model("User", userSchema, "user");

export default User;