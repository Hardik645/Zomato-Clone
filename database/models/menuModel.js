import mongoose from "mongoose";

const MenuSchema = new mongoose.Schema(
    {
        menus: [{
            name: { type: String, required: true },
            items: [{
                type: mongoose.Types.ObjectId,
                ref: "Food"
            }]
        }],
        recommendedMenu:[{
            type: mongoose.Types.ObjectId,
            ref: "Foods"
        }]
    },
    {
        timestamps: true
    }
);

export const MenuModel = mongoose.model("Menu", MenuSchema)