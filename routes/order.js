const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.post('/', orderController.store);
router.get('/', orderController.index);

module.exports = router;
