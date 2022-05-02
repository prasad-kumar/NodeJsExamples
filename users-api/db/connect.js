const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/users')
.then(() => {console.log('DB Connected succesfully');})
.catch((error) => {console.log(error);});