
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ecommerce')
.then(()=>{console.log('connection seccessfull')})
.catch((err) => {console.log(err)});


// Products collection schema defining
const productSchema = new mongoose.Schema({
    productName:{
        type: String,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    rating:{
        type: Number,
        required: true
    },
    addedAt:{
        type: Date,
        default: Date.now
    },
});


// creating Products collection
const Product = new mongoose.model('Product', productSchema);


// insert one document into Products collection
const createDocument = async () => {
    try{
        const product = new Product({
            productName: 'iPhone 12 Pro',
            brand: 'Apple',
            price: 65999,
            quantity: 100,
            rating: 4.6
        });

        const result = await product.save();
        console.log(result);
    }catch(error){
        console.log(error);
    }
}

createDocument();


// insert multiple documents into Products collection
const createDocuments = async () => {
    try{
        const product1 = new Product({
            productName: 'OnePlus 10 Pro',
            brand: 'OnePlus',
            price: 61999,
            quantity: 80,
            rating: 4.1
        });
        const product2 = new Product({
            productName: 'Samsung S22 Ultra',
            brand: 'Samsung',
            price: 50999,
            quantity: 90,
            rating: 4.3
        });
        const product3 = new Product({
            productName: 'Realme GT Neo',
            brand: 'Realme',
            price: 44999,
            quantity: 60,
            rating: 4.2
        });
        const product4 = new Product({
            productName: 'iPhone 12',
            brand: 'Apple',
            price: 54999,
            quantity: 95,
            rating: 4.5
        });

        const result = await Product.insertMany([product1, product2,product3, product4]);
        console.log(result);
    }catch(error){
        console.log(error);
    }
}

createDocuments();


// read all documents from Products collection
const readDocuments = async () => {
    try{
        const result = await Product.find();
        console.log(result);
    }catch(error){
        console.log(error);
    }
}

readDocuments();


// read specific document from Products collection
const readDocument = async () => {
    try{
        const result = await Product.find({productName:'iPhone 12'}).select({_id:0,price:1});
        console.log(result);
    }catch(error){
        console.log(error);
    }
}

readDocument();


// read only first document from Products collection
const readFirstDocument = async () => {
    try{
        const result = await Product.find().limit(1);
        console.log(result);
    }catch(error){
        console.log(error);
    }
}

readFirstDocument();


// read all documents which product price is greater than 55000
const gt = async () => {
    try{
        const result = await Product.find({price: {$gt: 55000}});
        console.log(result);
    }catch(error){
        console.log(error);
    }
}

gt();

// read all documents which product price is less than 55000
const lt = async () => {
    try{
        const result = await Product.find({price: {$lt: 55000}});
        console.log(result);
    }catch(error){
        console.log(error);
    }
}

lt();


// read all documents which product rating is greater than or equal to 4.5
const ratingGte = async () => {
    try{
        const result = await Product.find({rating: {$gte: 4.5}});
        console.log(result);
    }catch(error){
        console.log(error);
    }
}

ratingGte();


// read documents using logical operators

// AND
const and = async () => {
    try{
        const result = await Product.find({$and : [{brand:'Apple'}, {rating: {$gt : 4.5}}]});
        console.log(result);
    }catch(error){
        console.log(error);
    }
}

and();

// OR
const or = async () => {
    try{
        const result = await Product.find({$or : [{price:{$lt: 50000}}, {rating: {$gt : 4.5}}]});
        console.log(result);
    }catch(error){
        console.log(error);
    }
}

or();






