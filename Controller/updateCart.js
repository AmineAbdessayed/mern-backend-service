
const addToCartModel=require("../Models/cartModel")

const updateCart= async(req,res)=>{
    try {
        const currentUser= req.userID 
        const card=req.body._id
        const qte=req.body.quantity
        if(!qte){
            throw new Error(" No need for update")
        }

             const NewCart=await addToCartModel.updateOne({_id:card},{quantity:qte})
             console.log("New Cart",NewCart )

        

        res.json({

            message:"cart updated succefully",
            success:true,
            error:false,
            data:NewCart
        })



}catch(err){
    res.json({
        message:err?.message||err,
        success:false,
        error:true
    })

}
}

module.exports=updateCart