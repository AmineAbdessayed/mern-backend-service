const addToCartModel=require("../Models/cartModel")

const DeleteCart=async(req,res)=>{
    try{
        const currentUser=req.userID 
        const card=req.body._id

        const DeletedCard=await addToCartModel.deleteOne({_id:card})

     res.json({
        message:"Deleted Succefully",
        success:true,
        error:false,
        data:DeletedCard
     })


    }catch(err){
        res.json({
            message:err?.message||err,
            success:false,
            error:true
        })
    
    }


}
module.exports=DeleteCart
