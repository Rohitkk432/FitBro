export default class CaloriesInFood {
    id: string;
    outlet: string;
    name: string;
    quantity: number;
    unit: string;
    calories: number;
    constructor(id: string, outlet: string, name: string, quantity: number, unit: string, calories: number) {
        this.id = id;
        this.outlet = outlet;
        this.name = name;
        this.quantity = quantity;
        this.unit = unit;
        this.calories = calories;
    }

    public static async getByFoodOutlet(foodOutlet: string) {
        const rawData = await fetch(`https://fitbro-server.onrender.com/foodcalorie/${foodOutlet}`).then((res) => res.json());
        const returnArray = rawData.map((food: any) => {
            return new CaloriesInFood(food._id, food.outlet, food.name, food.quantity, food.unit, food.calories);
        });
        return returnArray;
    }

    public static recalculateCalorie(food: CaloriesInFood, quantity: number) {
        const newCalories = Math.round((food.calories / food.quantity) * quantity);
        food.quantity = quantity;
        food.calories = newCalories;
        return food;
    }

    public static calculateTotalCalories(foods: CaloriesInFood[]) {
        return foods.reduce((total, food) => total + food.calories, 0);
    }
}
