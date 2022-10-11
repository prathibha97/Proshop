const express = require('express');
const asyncHandler = require('express-async-handler');
const Product = require('../../models/Product')

const productsRouter = express.Router();

// @desc   Fetch all products
// @route  Get /v1/api/products
// @access Public

productsRouter.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products);
}));

// @desc   Fetch a single product
// @route  Get /v1/api/products/:id
// @access Public

productsRouter.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        res.status(200).json(product);
    }
    else {
        res.status(404);
        throw new Error('Product not found');
    }
}));

module.exports = { productsRouter };