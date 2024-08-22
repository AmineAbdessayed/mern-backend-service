const userModel = require("../Models/userModel")

async function UpdateUser(req,res) {

    try {
        const sessionUser=req.userID
        const {userID, username,email,role}=req.body

        const payload={
            ...(email&& {email:email}),
            ...(username&& {username:username}),
            ...(role&& {role:role}),

        }
        const user= await userModel.findById(sessionUser)
        console.log("userRole : ", user.role)
        const updatedUser= await userModel.findByIdAndUpdate(userID,payload)

        res.json({
            message:"Updated Succefully",
            data:updatedUser,
            success:true,
            error:false
        })


    } catch (error) {
        console.log("error:", error.message);
    
        res.status(500).json({
          message: error.message,
          error: true,
          success: false,
        });
      }
}
module.exports=UpdateUser