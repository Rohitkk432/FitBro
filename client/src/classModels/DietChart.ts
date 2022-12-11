import DietDaysId from "./DietDaysId";
export default class DietChart {
    id: string;
    name: string;
    info: string;
    dietDaysIdMap: DietDaysId;
    constructor(id: string, name: string, info: string, dietDaysIdMap: DietDaysId) {
        this.id = id;
        this.name = name;
        this.info = info;
        this.dietDaysIdMap = dietDaysIdMap;
    }
    public static async getAll() {
        const rawData = await fetch(`https://fitbro-server.onrender.com/dietchart`).then((res) => res.json());
        const outputArray = [];
        for (let i = 0; i < rawData.length; i++) {
            outputArray.push(
                new DietChart(
                    rawData[i]._id,
                    rawData[i].name,
                    rawData[i].info,
                    new DietDaysId(rawData[i].monday, rawData[i].tuesday, rawData[i].wednesday, rawData[i].thursday, rawData[i].friday, rawData[i].saturday, rawData[i].sunday)
                )
            );
        }
        return outputArray;
    }
}
