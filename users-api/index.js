const express = require('express');
require('./db/connect');
const userRouter = require('./routers/users');

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(userRouter);


app.listen(port, () => {console.log(`Server connected at ${port}`)});


