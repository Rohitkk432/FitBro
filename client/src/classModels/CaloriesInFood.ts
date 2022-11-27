export default class CaloriesInFood {
    private id: string;
    private foodOutlet: string;
    private foodName: string;
    private quantity: number;
    private unit: string;
    private calories: number;
    constructor(id: string, foodOutlet: string, foodName: string, quantity: number, unit: string, calories: number) {
        this.id = id;
        this.foodOutlet = foodOutlet;
        this.foodName = foodName;
        this.quantity = quantity;
        this.unit = unit;
        this.calories = calories;
    }
    getId() {
        return this.id;
    }
    getFoodOutlet() {
        return this.foodOutlet;
    }
    getFoodName() {
        return this.foodName;
    }
    getQuantity() {
        return this.quantity;
    }
    getUnit() {
        return this.unit;
    }
    getCalories() {
        return this.calories;
    }
    //unfinished implementation
    getById(id: string) {
        return 0;
    }
    getByFoodOutlet(foodOutlet: string) {
        return 0;
    }
    getByFoodName(foodName: string) {
        return 0;
    }
}
