const express = require('express');
const app = express();
const errorMiddleware = require('./middleware/errorMiddleware');

//to use json
app.use(express.json());

// product router
const product = require('./routes/productRoute');
app.use("/api/v1", product);

//middleware for errors
app.use(errorMiddleware);

module.exports = app;