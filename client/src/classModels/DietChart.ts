import DietOnADay from "./DietOnADay";

export default class DietChart {
    private id: string;
    private name: string;
    private info: string;
    private monday: DietOnADay;
    private tuesday: DietOnADay;
    private wednesday: DietOnADay;
    private thursday: DietOnADay;
    private friday: DietOnADay;
    private saturday: DietOnADay;
    private sunday: DietOnADay;
    constructor(
        id: string,
        name: string,
        info: string,
        monday: DietOnADay,
        tuesday: DietOnADay,
        wednesday: DietOnADay,
        thursday: DietOnADay,
        friday: DietOnADay,
        saturday: DietOnADay,
        sunday: DietOnADay
    ) {
        this.id = id;
        this.name = name;
        this.info = info;
        this.monday = monday;
        this.tuesday = tuesday;
        this.wednesday = wednesday;
        this.thursday = thursday;
        this.friday = friday;
        this.saturday = saturday;
        this.sunday = sunday;
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
    getMonday() {
        return this.monday;
    }
    getTuesday() {
        return this.tuesday;
    }
    getWednesday() {
        return this.wednesday;
    }
    getThursday() {
        return this.thursday;
    }
    getFriday() {
        return this.friday;
    }
    getSaturday() {
        return this.saturday;
    }
    getSunday() {
        return this.sunday;
    }
    //unfinished implementation
    static getById(id: string) {
        return 0;
    }
    static getByName(name: string) {
        return 0;
    }
}
