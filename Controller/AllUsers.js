const userModel = require("../Models/userModel")

async function AllUsers(req,res){

   try {
   
     const users=await userModel.find()
     res.json({
      message:"All users:",
      data:users,
      error:false,
      success:true

     })


    } catch (error) {

        res.status(500).json({
          message: error.message,
          error: true,
          success: false,
        });
      }


}
module.exports=AllUsers