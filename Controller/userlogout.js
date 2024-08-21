async function userLogout(req,res){
 try{
    res.clearCookie("token")
    res.json({

        message:"Logged out Succefully",
        error:false,
        success:true,
        data:[]
    })


 } catch (error) {

    res.status(500).json({
      message: error.message,
      error: true,
      success: false,
    });
  }


}
module.exports=userLogout