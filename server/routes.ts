import express, { Express, Request, Response, Router } from "express";

const router: Router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    res.send("Typescript + Express + MongoDB");
});

//-----Example-----
//models
const users = require("./models/users");

//find user by email in database
router.get("/user/email/:email", async (req: Request, res: Response) => {
    try {
        const user = await users.findOne({ email: req.params.email });
        res.send(user);
    } catch (err) {
        console.log(err);
    }
});

//create user
router.post("/create/user", async (req: Request, res: Response) => {
    try {
        const newEntry = new users();
        newEntry.email = req.body.email;
        newEntry.name = req.body.name;
        newEntry.save();
        res.send(newEntry);
    } catch (e) {
        console.log(e);
    }
});

//updating user info
router.post("/update/user", async (req: Request, res: Response) => {
    try {
        await users.findOneAndUpdate({ email: req.body.email }, { name: req.body.name });
        res.send("successful");
    } catch (e) {
        console.log(e);
    }
});

//deleting a user
router.delete("/delete/user", async (req: Request, res: Response) => {
    try {
        await users.deleteOne({ email: req.body.email });
        res.send("user deleted successfully");
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;
