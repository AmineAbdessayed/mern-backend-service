const addToCartModel=require("../Models/cartModel")

async function CountAddToCart(req,res){
    try {

    const currentUser=req.userID

    const count = await addToCartModel.countDocuments({userId:currentUser})



   res.json({
    message:"number of products added to cart",
    success:true,
    error:false,
    data: {
        count:count
    }
   })





}catch(err){
    res.json({
        message:err?.message||err,
        success:false,
        error:true
    })

}


}


module.exports=CountAddToCart