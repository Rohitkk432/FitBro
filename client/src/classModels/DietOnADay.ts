export default class DietOnADay {
    private id: string;
    private breakfast: string;
    private lunch: string;
    private snack: string;
    private dinner: string;
    private note: string;
    constructor(id: string, breakfast: string, lunch: string, snack: string, dinner: string, note: string) {
        this.id = id;
        this.breakfast = breakfast;
        this.lunch = lunch;
        this.snack = snack;
        this.dinner = dinner;
        this.note = note;
    }
    getId() {
        return this.id;
    }
    getBreakfast() {
        return this.breakfast;
    }
    getLunch() {
        return this.lunch;
    }
    getSnack() {
        return this.snack;
    }
    getDinner() {
        return this.dinner;
    }
    getNote() {
        return this.note;
    }
    //unfinished implementation
    static getById(id: string) {
        return 0;
    }
}
