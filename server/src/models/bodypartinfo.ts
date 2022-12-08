const mongoose = require("mongoose");
const { Schema } = mongoose;

const bodyPartInfoSchema = new Schema({
    bodypart: { required: true, type: String },
    info: { required: true, type: String },
});

export default mongoose.model("bodypartinfo", bodyPartInfoSchema, "bodypartinfo");
