export default class DietOnADay {
    id: string;
    breakfast: string;
    lunch: string;
    snack: string;
    dinner: string;
    note: string;
    constructor(id: string, breakfast: string, lunch: string, snack: string, dinner: string, note: string) {
        this.id = id;
        this.breakfast = breakfast;
        this.lunch = lunch;
        this.snack = snack;
        this.dinner = dinner;
        this.note = note;
    }
    //unfinished implementation
    public static async getById(id: string) {
        const rawData = await fetch(`https://fitbro-server.onrender.com/dietonaday/${id}`).then((res) => res.json());
        return new DietOnADay(rawData._id, rawData.breakfast, rawData.lunch, rawData.snack, rawData.dinner, rawData.note);
    }
}
