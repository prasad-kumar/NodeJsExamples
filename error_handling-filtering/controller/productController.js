const productModel = require("../models/productSchema");
const ErrorHandler = require("../utils/errorHandler");
const cacthAsyncErrors = require('../middleware/asyncCatchErrors');
const ApiFeatures = require("../utils/apiFeatures");


//product create -- admin
exports.createProduct = cacthAsyncErrors(async (req, res, next) => {

        const product = await productModel.create(req.body);

        res.status(201).json({
                success:true,
                product
            });
})

// get all products
exports.getAllProducts = cacthAsyncErrors(async (req, res, next) => {
    
    const productsPerPage = 5;
    const ApiFeature = new ApiFeatures(productModel.find(),req.query)
    .search()
    .filter()
    .pagination(productsPerPage);

    const products = await ApiFeature.query;

    if(!products){
        return next(new ErrorHandler("Products not found", 500))
    }

    res.status(200).json({
            success:true,
            products
        })
})

// get product details
exports.getProductDetails = cacthAsyncErrors(async (req, res, next) => {

    const product = await productModel.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product not found", 404))
    }

    res.status(200).json({
        success:true,
        product
    })
})

// update product -- admin
exports.updateProduct = cacthAsyncErrors(async (req, res, next) => {

    let product = await productModel.findById(req.params.id)

    if(!product){
        return next(new ErrorHandler("Product not found", 404))
    }

    product = await productModel.findByIdAndUpdate(req.params.id, req.body, {new:true})

    res.status(200).json({
        success:true,
        product
    })

})

// delete product --admin
exports.deleteProduct = cacthAsyncErrors(async (req, res, next) => {

    const product = await productModel.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product not found", 404))
    }

    await product.remove()

    res.status(200).json({
        success:true,
        message: 'product deleted'
    })
})
