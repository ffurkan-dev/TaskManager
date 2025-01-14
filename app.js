const express = require('express')
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()


//Middlewares
app.use(express.json())
app.use('/api/v1/tasks',tasks)


const start = async() => {

    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(5000,() => console.log("Listening server on: 5000"));

        
    } catch (error) {
        console.log(error);
        
        
    }
}

start()








