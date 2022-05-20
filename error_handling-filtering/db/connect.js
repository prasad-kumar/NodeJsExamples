const mongoose = require('mongoose');


mongoose.connect(process.env.DB_URI)
.then((data)=>{console.log(`db Connected at ${data.connection.host}`)})