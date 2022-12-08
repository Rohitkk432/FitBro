const mongoose = require("mongoose");
const { Schema } = mongoose;

const exerciseSchema = new Schema({
    name: { required: true, type: String },
    bodypart: { required: true, type: String },
    info: { required: true, type: String },
    wiki_link: { required: true, type: String },
    image_link: { required: true, type: String },
});

export default mongoose.model("exercise", exerciseSchema, "exercise");
