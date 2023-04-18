const express = require('express');
const {
  getAllProduct,
  getSingleProduct,
} = require('../controller/ProductController');
const { protect } = require('../Authorization/Authorization');
const router = express.Router();

router.get('/allProduct', getAllProduct);
router.get('/singleProduct/:name', protect, getSingleProduct);

module.exports = router;

// const express = require('express');
// const { protect } = require('../Authorization/Authorization');
// const {
//   addProduct,
//   getAllProduct,
//   getSingleProduct,
// } = require('../controller/ProductController');
// const router = express.Router();

// router.route('/').post(addProduct);
// router.route('/allProduct').get(getAllProduct);
// router.route('/singleProduct/:name').get(protect, getSingleProduct);

// module.exports = router;
