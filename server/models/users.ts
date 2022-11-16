const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    name: { required: false, type: String },
    email: { required: true, type: String },
});

//params: (name of the model, schema, collection name in DB--optional)
//if param3 is not provided, ((collection name = model name + s))
module.exports = mongoose.model("user", userSchema, "user");
