import express, { Express, Request, Response, Router } from "express";

const router: Router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    res.send("Typescript + Express + MongoDB");
});

import foodCalorie from "./models/foodcalorie";
import dietOnADay from "./models/dietonaday";
import dietChart from "./models/dietchart";

import exercise from "./models/exercise";
import workout from "./models/workout";
import bodyPartInfo from "./models/bodypartinfo";

router.get("/foodcalorie/:outlet", async (req: Request, res: Response) => {
    try {
        const foodlist = await foodCalorie.find({ outlet: req.params.outlet });
        res.send(foodlist);
    } catch (err) {
        console.log(err);
    }
});

router.get("/dietonaday/:id", async (req: Request, res: Response) => {
    try {
        const onDayDiet = await dietOnADay.findById(req.params.id);
        res.send(onDayDiet);
    } catch (err) {
        console.log(err);
    }
});

router.get("/dietchart", async (req: Request, res: Response) => {
    try {
        const Diet = await dietChart.find();
        res.send(Diet);
    } catch (err) {
        console.log(err);
    }
});

router.get("/exercise/:part", async (req: Request, res: Response) => {
    try {
        const exercises = await exercise.find({ bodypart: req.params.part });
        res.send(exercises);
    } catch (err) {
        console.log(err);
    }
});

router.get("/workout", async (req: Request, res: Response) => {
    try {
        const workouts = await workout.find();
        res.send(workouts);
    } catch (err) {
        console.log(err);
    }
});

router.get("/partinfo/:part", async (req: Request, res: Response) => {
    try {
        const info = await bodyPartInfo.find({ bodypart: req.params.part });
        res.send(info);
    } catch (err) {
        console.log(err);
    }
});
// //-----Example-----
// //models
// const users = require("./models/users");

// //find user by email in database
// router.get("/user/email/:email", async (req: Request, res: Response) => {
//     try {
//         const user = await users.findOne({ email: req.params.email });
//         res.send(user);
//     } catch (err) {
//         console.log(err);
//     }
// });

// //create user
// router.post("/create/user", async (req: Request, res: Response) => {
//     try {
//         const newEntry = new users();
//         newEntry.email = req.body.email;
//         newEntry.name = req.body.name;
//         newEntry.save();
//         res.send(newEntry);
//     } catch (e) {
//         console.log(e);
//     }
// });

// //updating user info
// router.post("/update/user", async (req: Request, res: Response) => {
//     try {
//         await users.findOneAndUpdate({ email: req.body.email }, { name: req.body.name });
//         res.send("successful");
//     } catch (e) {
//         console.log(e);
//     }
// });

// //deleting a user
// router.delete("/delete/user", async (req: Request, res: Response) => {
//     try {
//         await users.deleteOne({ email: req.body.email });
//         res.send("user deleted successfully");
//     } catch (e) {
//         console.log(e);
//     }
// });

export default router;
