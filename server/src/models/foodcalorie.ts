const mongoose = require("mongoose");
const { Schema } = mongoose;

const foodCalorieSchema = new Schema({
    name: { required: true, type: String },
    outlet: { required: true, type: String },
    unit: { required: true, type: String },
    quantity: { required: true, type: Number },
    calories: { required: true, type: Number },
});

export default mongoose.model("foodcalorie", foodCalorieSchema, "foodcalorie");
