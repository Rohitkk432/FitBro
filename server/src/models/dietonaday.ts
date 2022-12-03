const mongoose = require("mongoose");
const { Schema } = mongoose;

const dietOnADaySchema = new Schema({
    day: { required: true, type: String },
    breakfast: { required: true, type: String },
    lunch: { required: true, type: String },
    snack: { required: true, type: String },
    dinner: { required: true, type: String },
    note: { required: true, type: String },
});

export default mongoose.model("dietonaday", dietOnADaySchema, "dietonaday");
