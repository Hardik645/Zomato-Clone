import express from "express";
import { FoodModel } from "../database/allmodels/foodModel";

const Router = express.Router();

Router.get("/", async (req, res) => {
    try {
        const result = await FoodModel.find({});
        if (result.length === 0) {
            return res.sendStatus(401);
        }
        return res.status(200).json({
            status: true,
            data: result
        });
    } catch (error) {
        return res.status(501).json({
            status: false,
            message: error.message
        });
    }
});
Router.post("/", async (req, res) => {
    try {
        const { data } = req.body;
        const result = FoodModel.create({ ...data });
        return res.status(200).json({
            status: true,
            data: result
        });
    } catch (error) {
        return res.status(501).json({
            status: false,
            message: error.message
        });
    }
});
export default Router;