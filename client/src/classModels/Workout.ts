import ExerciseOfWorkout from "./ExerciseOfWorkout";

export default class Workout {
    private id: string;
    private name: string;
    private info: string;
    private imageLink: string;
    private exercises: ExerciseOfWorkout[];
    constructor(id: string, name: string, info: string, imageLink: string, exercises: ExerciseOfWorkout[]) {
        this.id = id;
        this.name = name;
        this.info = info;
        this.imageLink = imageLink;
        this.exercises = exercises;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getInfo() {
        return this.info;
    }
    getImageLink() {
        return this.imageLink;
    }
    getExercises() {
        return this.exercises;
    }
    //unfinished implementation
    static getById(id: string) {
        return 0;
    }
    static getByName(name: string) {
        return 0;
    }
}
