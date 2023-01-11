import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema(
    {
        name: { type: Number, required: true },
        city: { type: String, required: true },
        address: { type: String, required: true },
        mapLocation: { type: String, required: true },
        cuisine: [{ type: String }],
        timings: { type: String, required: true },
        contactNumber: { type: Number },
        website: { type: String },
        popularDishes: [{ type: String }],
        averageCost: { type: Number },
        amenties: [{ type: String }],
        menuImages: { type: mongoose.Types.ObjectId, ref: "Image" },
        menu: { type: mongoose.Types.ObjectId, ref: "Menu" },
        review: [{ type: mongoose.Types.ObjectId, ref: "Review" }],
        photos: { type: mongoose.Types.ObjectId, ref: "Image" },

    },
    {
        timestamps: true
    }
);

export const RestaurantModel = mongoose.model("Restaurant", RestaurantSchema)