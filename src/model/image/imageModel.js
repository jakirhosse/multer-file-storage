const mongoose = require("mongoose");
const imageSchema = new mongoose.Schema({
  filename: String,
  path: String,
});

const imageModel = mongoose.model("upload", imageSchema);
module.exports = imageModel;
