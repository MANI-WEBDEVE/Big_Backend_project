import dotenv from 'dotenv'
import connectDB from "./db/app.js";
 
dotenv.config(
    {
        path: './env'
    }
)


connectDB()
































//* Professional approche connect DATA BASE

//* IIFE use connect Data Base

/*
import express from 'express'

const app = express()

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB-URI}/${DB_NAME}`)
        app.on('error', (error)=>{
            console.log('ERROR: ' , error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App Start and Prot is ${process.env.PORT}`)
        })
    } catch (error) {
        console.error('Error:' , error);
        throw error
    }
})()
*/ 