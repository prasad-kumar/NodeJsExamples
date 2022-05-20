const mongoose = require('mongoose');


const produtSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "please enter product name"]
    },
    quantity:{
        type:Number,
        default:1
    },
    category:{
        type:String,
        required:[true, "please enter product category"]
    },
    price:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('product', produtSchema);