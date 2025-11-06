const ImageUpload = require("../models/image");
const cloudinary = require("../config/cloudinary");

// CREATE
exports.createItem = async (req, res) => {
  try {
    const { name } = req.body;
    const file = req.file;

    const result = await cloudinary.uploader.upload(file.path, {
      folder: "uploads",
    });

    const newItem = await ImageUpload.create({
      name,
      imageUrl: result.secure_url,
      imagePublicId: result.public_id,
    });

    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ
exports.getItems = async (req, res) => {
  const items = await ImageUpload.find();
  res.json(items);
};

// UPDATE
exports.updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const file = req.file;

    const item = await ImageUpload.findById(id);
    if (!item) return res.status(404).json({ message: "Not found" });

    // If a new image is uploaded, replace the old one
    if (file) {
      await cloudinary.uploader.destroy(item.imagePublicId);
      const result = await cloudinary.uploader.upload(file.path, { folder: "uploads" });
      item.imageUrl = result.secure_url;
      item.imagePublicId = result.public_id;
    }

    item.name = name || item.name;
    await item.save();

    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
exports.deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await ImageUpload.findById(id);
    if (!item) return res.status(404).json({ message: "Not found" });

    await cloudinary.uploader.destroy(item.imagePublicId);
    await item.deleteOne();

    res.json({ message: "Item deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
