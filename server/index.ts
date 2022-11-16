import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const routes = require("./routes");

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

//mongoDB Atlas
mongoose.connect(process.env.MONGODB_URI || "");
mongoose.connection.once("open", () => {
    console.log("connected to database");
});

app.use(express.json());
app.use("/", routes);

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
