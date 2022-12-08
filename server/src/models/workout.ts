const mongoose = require("mongoose");
const { Schema } = mongoose;

const workoutSchema = new Schema({
    label: { required: true, type: String },
    bodyparts: { required: true, type: String },
});

export default mongoose.model("workout", workoutSchema, "workout");
