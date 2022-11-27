import Exercise from "./Exercise";

export default class ExerciseOfWorkout extends Exercise {
    private frequency: string;
    constructor(Exercise: Exercise, frequency: string) {
        super(Exercise.getId(), Exercise.getName(), Exercise.getBodyPart(), Exercise.getInfo(), Exercise.getVideoLink(), Exercise.getImageLink());
        this.frequency = frequency;
    }
    getFrequency() {
        return this.frequency;
    }
}
