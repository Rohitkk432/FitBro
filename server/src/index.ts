import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import routes from "./routes";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

//mongoDB Atlas
mongoose.connect(process.env.MONGODB_URI || "");
mongoose.connection.once("open", () => {
    console.log("connected to database");
});

app.use(cors());

app.use(express.json());
app.use("/", routes);

app.use((req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Headers", "*");
    res.set("Access-Control-Allow-Methods", "*");
    if (req.method === "OPTIONS") {
        res.status(200).end();
        return;
    }
    next();
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
