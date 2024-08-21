const jwt = require('jsonwebtoken');
async function authToken(req,res,next) {


    try {
        const token = req.cookies?.token;
        console.log("token : ",token)
        if(!token){
            return res.status(200).json({
                message:"user not connected",
                error:true,
                success:false
            })
        }
        jwt.verify(token,process.env.SECRET_KEY, function(err, decoded) {
            console.log("decoeed token :",decoded) // bar
          req.userID=decoded?._id
          next()
        });



    }catch(error) {
        res.status(400).json({
            message:error.message || error,
            data:[],
            error:true,
            success:false
  })



    }
    
}
module.exports=authToken