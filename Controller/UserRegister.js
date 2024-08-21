const userModel = require("../Models/userModel")
const HashPassword=require("../utils/index")


async function Register(req,res){
    try{
        const {email,password,username}=req.body

        if(!email){
            throw new Error("Please provide email")
        }
        if(!password){
            throw new Error("Please provide password")
        }
        if(!username){
            throw new Error("Please provide name")
        }
        const usertest= await userModel.findOne({email})
        if(usertest){
            throw new Error("This email is already exists")
        }
       const passwordHashed= HashPassword(password);

     const payload={
        ...req.body,
        role:"CLIENT",
        password:passwordHashed
     }


        const user= new userModel(payload)
        const SavedUser= await user.save()
        console.log("user:",SavedUser)

        res.status(201).json({
            data:SavedUser,
            error:false,
            success:true,
            message:'user created succesfully'
        })




    }catch(error){
        
        console.log("error y bro :", error.message)

        res.status(500).json({
            message:error.message,
            error:true,
            success:false
        })



    }
    
    


    
}
module.exports={Register}