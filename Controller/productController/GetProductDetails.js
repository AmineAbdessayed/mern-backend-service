
const productModel=require("../../Models/productModel")

const GetProductDetails= async(req,res)=>{

    try {
        const {productId}=req.body
        const product= await productModel.findById(productId)
        if(!product){
            throw new Error("Product not found")
        }
        res.status(200).json({
            message:"Product :",
            success:true,
            error:false,
            data:product
        })




    }catch(err){
        res.status(500).json({

            message:err.message||err,
            error:true,
            success:false,

        })}

}
module.exports=GetProductDetails