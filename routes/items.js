const express = require('express');
const router = express.Router();
const controller = require('../controllers/itemController');


router.post('/', controller.createItem);
router.get('/', controller.getItems);
router.get('/:id', controller.getItem);
router.put('/:id', controller.updateItem);
router.delete('/:id', controller.deleteItem);


module.exports = router;