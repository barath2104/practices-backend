const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: { type: String },
  imagePublicId: { type: String }, // useful for deleting
});

module.exports = mongoose.model("Item", itemSchema);
