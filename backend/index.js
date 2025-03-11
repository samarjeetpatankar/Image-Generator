import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'

const PORT = process.env.PORT
const app = express()

app.use(cors({
    origin: 'https://image-generator-mainapp.vercel.app', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}))

app.use(express.json())
app.use(cors())

await connectDB()
app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)
app.get('/', (req, res)=>{
    return res.send("API WORKING")
})

app.listen(PORT, ()=>console.log("Server running on port " + PORT))