const mongoose = require("mongoose");
const { Schema } = mongoose;

const dietChartSchema = new Schema({
    name: { required: true, type: String },
    info: { required: true, type: String },
    monday: { required: true, type: String },
    tuesday: { required: true, type: String },
    wednesday: { required: true, type: String },
    thursday: { required: true, type: String },
    friday: { required: true, type: String },
    saturday: { required: true, type: String },
    sunday: { required: true, type: String },
});

export default mongoose.model("dietchart", dietChartSchema, "dietchart");
