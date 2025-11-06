const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: { type: String , required: true },
  imagePublicId: { type: String }, // useful for deleting
});

module.exports = mongoose.model("ImageUpload", imageSchema);
