import DietOnADay from "./DietOnADay";

export default class DietChart {
    id: string;
    name: string;
    info: string;
    monday: DietOnADay;
    tuesday: DietOnADay;
    wednesday: DietOnADay;
    thursday: DietOnADay;
    friday: DietOnADay;
    saturday: DietOnADay;
    sunday: DietOnADay;
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
    //unfinished implementation
    public static async getAll() {
        const rawData = await fetch(`http://localhost:5000/dietchart`).then((res) => res.json());
        const outputArray = [];
        for (let i = 0; i < rawData.length; i++) {
            rawData[i].monday = await DietOnADay.getById(rawData[i].monday);
            rawData[i].tuesday = await DietOnADay.getById(rawData[i].tuesday);
            rawData[i].wednesday = await DietOnADay.getById(rawData[i].wednesday);
            rawData[i].thursday = await DietOnADay.getById(rawData[i].thursday);
            rawData[i].friday = await DietOnADay.getById(rawData[i].friday);
            rawData[i].saturday = await DietOnADay.getById(rawData[i].saturday);
            rawData[i].sunday = await DietOnADay.getById(rawData[i].sunday);

            outputArray.push(
                new DietChart(
                    rawData[i]._id,
                    rawData[i].name,
                    rawData[i].info,
                    rawData[i].monday,
                    rawData[i].tuesday,
                    rawData[i].wednesday,
                    rawData[i].thursday,
                    rawData[i].friday,
                    rawData[i].saturday,
                    rawData[i].sunday
                )
            );
        }
        return outputArray;
    }
}
