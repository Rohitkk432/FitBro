import Exercise from "./Exercise";
export default class Workout {
    id: string;
    name: string;
    bodyparts: string;
    constructor(id: string, name: string, bodyparts: string) {
        this.id = id;
        this.name = name;
        this.bodyparts = bodyparts;
    }
    public static async getAll() {
        const rawData = await fetch("https://fitbro-server.onrender.com/workout")
            .then((res) => res.json())
            .then((data) => {
                return data;
            });
        const outputArray = [];
        for (let i = 0; i < rawData.length; i++) {
            outputArray.push(new Workout(rawData[i]._id, rawData[i].label, rawData[i].bodyparts));
        }
        return outputArray;
    }
    public async getExercises() {
        let outputArray: any = [];
        const bodyparts = this.bodyparts.split(",");
        for (let i = 0; i < bodyparts.length; i++) {
            const exercises = await Exercise.getByBodyPart(bodyparts[i]);
            outputArray = [...outputArray, ...exercises];
        }
        return outputArray;
    }
}
