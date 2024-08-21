const mongoose= require("mongoose")

async function connectDb() {
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connected to db")


    }catch(error){
        console.log(error)
    }
    

}

module.exports=connectDb