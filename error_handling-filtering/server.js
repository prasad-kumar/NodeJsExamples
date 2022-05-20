const app = require('./app');
const dotenv = require('dotenv');

// env config
dotenv.config({path:"config.env"});

// uncaughtException handling
process.on("uncaughtException", (err)=> {
    console.log(`sutting down server due to ${err.message}`);
    process.exit(1);
})

// db connection
require('./db/connect');

const server = app.listen(process.env.PORT, ()=> {
    console.log(`server connected at http://localhost:${process.env.PORT}`)
});


process.on("unhandledRejection", (err)=>{
    console.log(`sutting down server due to ${err.message}`);
    server.close(()=>{
        process.exit(1);
    })
})