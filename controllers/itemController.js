const Item = require('../models/Item');
//post 
exports.createItem = async (req, res) => {
try {
const item = await Item.create(req.body);
return res.status(201).json(item);
} catch (err) {
    console.log(err);
}
};
// Read all
exports.getItems = async (req, res) => {
try {
const items = await Item.find();
return res.json(items);
} catch (err) {
    console.log(err);
    
}
};
// Read one
exports.getItem = async (req, res) => {
try {
const { id } = req.params;
const item = await Item.findById(id);
if (!item) return res.status(404).json({ message: 'Item not found' });
return res.json(item);
} catch (err) {
    console.log(err);
}
};
// Update
exports.updateItem = async (req, res) => {
try {
const { id } = req.params;
const updated = await Item.findByIdAndUpdate(id, req.body, {
new: true,
runValidators: true,
});
if (!updated) return res.status(404).json({ message: 'Item not found' });
return res.json(updated);
} catch (err) {
    console.log(err);
}
};
// Delete
exports.deleteItem = async (req, res) => {
try {
const { id } = req.params;
const removed = await Item.findByIdAndDelete(id);
if (!removed) return res.status(404).json({ message: 'Item not found' });
return res.json({ message: 'Item deleted' });
} catch (err) {
    console.log(err);
}
};