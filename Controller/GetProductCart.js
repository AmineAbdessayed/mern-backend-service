const addToCartModel=require("../Models/cartModel")


const GetProductCart=async(req,res)=>{

    try {

         const CurrentUser=req.userID 

         const productsCart= await addToCartModel.find({userId:CurrentUser}).populate("productId")
         console.log("product cart : --- --", productsCart)

         res.json({
            succes:true,
            error:false,
            data:productsCart
         })


}catch(err){
    res.json({
        message:err?.message||err,
        success:false,
        error:true
    })

}


}
module.exports=GetProductCart
