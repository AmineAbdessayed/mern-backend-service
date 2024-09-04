const addToCartModel=require("../Models/cartModel")
async function addToCart(req,res){
    try {

    const {productId}=req?.body
    const currentUser=req.userID

    const isProductAvailable= await addToCartModel.findOne({productId})
    console.log("-------------------------- isProductAvailable : ",isProductAvailable)

    if(isProductAvailable){

        return res.json({
            message:"this product is already exists in add to cart ",
            success:false,
            error:true
        })
    }

    const payload = {   
        productId:productId,
        userId:currentUser,
        quantity:1
    }
    const addtoCart= new addToCartModel(payload)

   const savedProduct= await addtoCart.save()
   res.json({
    message:"Product added to cart",
    success:true,
    error:false,
    data:savedProduct
   })





}catch(err){
    res.json({
        message:err?.message||err,
        success:false,
        error:true
    })

}


}


module.exports=addToCart