import { json } from "body-parser";
import express from "express";
import mongoose, { Mongoose } from "mongoose";
import hoppy_router from "./hoppyimg";
import cors from "cors";

const app = express();

app.use(json());

app.use(cors());

app.use(hoppy_router);

app.listen(3000, async () => {
    try {
        const db: Mongoose = await mongoose.connect('mongodb+srv://laetitia:0201Laet@cluster0.guuey.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
        console.log("Server is running at port 3000");
    } catch (err) {
        console.error(err);
    }
});