import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: { type: String , required: true },
        email: { type: String , required: true },
        password: { type: String , required: true },
        address: [{ detail: { type: String }, for: { type: String } }],
        phoneNumber: [{ type: Number }]
    },
    {
        timestamps: true
    }
);

export const UserModel = mongoose.model("User",UserSchema);