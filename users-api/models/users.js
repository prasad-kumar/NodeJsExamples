const mongoose = require('mongoose');
const validator = require('validator');


const userSchema = mongoose.Schema({
    username:{
        type : String,
        unique : true,
        required : true,
        minlength: 4
    },
    full_name : {
        type : String,
        required : true,
        minlength: 4
    },
    email : {
        type : String,
        required : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email Invalid');
            }
        },
    },
    address : {
        type : String,
        required : true,
    },
    active : {
        type : String,
        default : true
    },
    created_at : {
        type : Date,
        default : Date.now
    }
    
});


// Creating collection
const User = mongoose.model('User', userSchema);

module.exports = User;