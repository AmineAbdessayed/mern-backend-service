const express= require("express")
const cors= require("cors")
require('dotenv').config()
const connectDb=require('./Config/db')
const router=require("./Routes/index")
const cookieParser = require('cookie-parser')


const app=express()
app.use(cookieParser());

app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials: true, 
}))
app.use(express.json())
app.use("/api",router)


const PORT=5000 || process.env.PORT
connectDb().then(()=>{

    app.listen(PORT,()=>{
    console.log("server is runing on Port :", PORT)
})
})
