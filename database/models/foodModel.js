import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        description:{
            type: String,
            required: true
        },
        isVeg:{
            type: Boolean,
            required: true
        },
        isContainsEgg:{
            type: Boolean,
            required: true
        },
        category:{
            type: String,
            required: true
        },
        photos:{
            type: mongoose.Types.ObjectId,
            ref: "Image",
            required: true
        },
        addons:[
            {
                type: mongoose.Types.ObjectId,
                ref: "Food"
            }
        ],
        price:{
            type: Number,
            required: true
        },
        restaurant:{
            type: mongoose.Types.ObjectId,
            ref:"Restaurant",
            required: true
        }
    },
    {
        timestamps:true
    }
);

export const FoodModel = mongoose.model("Food", FoodSchema);