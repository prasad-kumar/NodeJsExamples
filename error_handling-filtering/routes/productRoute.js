const express = require('express');
const { getAllProducts, createProduct, getProductDetails, updateProduct, deleteProduct } = require('../controller/productController');

const router = express.Router();


router.route('/products').get(getAllProducts)
router.route('/products/new').post(createProduct)
router.route('/products/:id').get(getProductDetails).put(updateProduct).delete(deleteProduct)

module.exports = router;