const userModel = require("../Models/userModel")

async function userDetails(req,res){
    try {
        console.log("user ID : ", req.userID)
        const user=await userModel.findById(req.userID)
        console.log("user:", user)

        res.status(200).json({
            data: user,
            error:false,
            success:true,
            message:"User details"
        })


    }catch(err){
        res.status(400).json({

            message:err.message || err,
            success:false,
            error:true,
        })


    }


}
module.exports=userDetails