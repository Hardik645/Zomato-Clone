import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Food from "./api/foodApi";

dotenv.config();
const zomato = express();
const Port = process.env.PORT;

zomato.use(express.json());

zomato.get("/", (req, res) => {
    try {
        return res.sendStatus(200)
    } catch (error) {
        console.log(error.message);
    }
});

zomato.use("/food", Food);

zomato.listen(Port, async () => {
    try {
        console.log("Server is running !!");
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log("DB connected !!");
    } catch (error) {
        console.log(error);
    }
});
