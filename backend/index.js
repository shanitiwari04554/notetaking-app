import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import noteRoutes from './routes/note.route.js'
import cors from 'cors'
dotenv.config()
const app=express()
// eslint-disable-next-line no-undef
const port=process.env.PORT || 4000

// Database connection Code
try{
   // eslint-disable-next-line no-undef
   mongoose.connect(process.env.MONGO_URL)
   console.log("connected to MongoDB")
} catch(error){
    console.log("Error connecting to MongoDB",error)
}

// Routing Middleware
 app.use(express.json())
 app.use(cors())
 app.use("/api/v1/noteapp",noteRoutes)

app.listen(port,()=>{
    console.log(`Example app Listening on port ${port}`)
})