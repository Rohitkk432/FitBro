import DietChart from "./DietChart";
import DietOnADay from "./DietOnADay";
import DietDaysId from "./DietDaysId";
export default class ExtendedDietChart extends DietChart {
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
        dietDaysIdMap: DietDaysId,
        monday: DietOnADay,
        tuesday: DietOnADay,
        wednesday: DietOnADay,
        thursday: DietOnADay,
        friday: DietOnADay,
        saturday: DietOnADay,
        sunday: DietOnADay
    ) {
        super(id, name, info, dietDaysIdMap);
        this.monday = monday;
        this.tuesday = tuesday;
        this.wednesday = wednesday;
        this.thursday = thursday;
        this.friday = friday;
        this.saturday = saturday;
        this.sunday = sunday;
    }
    public static async fromDietChart(dietChart: DietChart) {
        return new ExtendedDietChart(
            dietChart.id,
            dietChart.name,
            dietChart.info,
            dietChart.dietDaysIdMap,
            await DietOnADay.getById(dietChart.dietDaysIdMap.monday),
            await DietOnADay.getById(dietChart.dietDaysIdMap.tuesday),
            await DietOnADay.getById(dietChart.dietDaysIdMap.wednesday),
            await DietOnADay.getById(dietChart.dietDaysIdMap.thursday),
            await DietOnADay.getById(dietChart.dietDaysIdMap.friday),
            await DietOnADay.getById(dietChart.dietDaysIdMap.saturday),
            await DietOnADay.getById(dietChart.dietDaysIdMap.sunday)
        );
    }
}
