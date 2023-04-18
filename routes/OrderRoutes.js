const express = require('express');
const router = express.Router();
const { protect } = require('../Authorization/Authorization');
const { makeOrder } = require('../controller/OrderController');

router.post('/', protect, makeOrder);

module.exports = router;

// const express = require('express');
// const { protect } = require('../Authorization/Authorization');
// const { makeOrder } = require('../controller/OrderController');
// const router = express.Router();

// router.route('/').post(protect,makeOrder);

// module.exports = router;
