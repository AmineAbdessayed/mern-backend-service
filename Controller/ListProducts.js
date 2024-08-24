const productModel=require("../Models/productModel")


async function listProducts(req,res) {

    try{
        const products=await  productModel.find().sort({createdAt:-1})
        console.log("----------------------- Products",products)

        res.status(201).json({
            message:"products:",
            error:false,
            success:true,
            data:products

        })


    }catch(err){
        res.status(500).json({

            message:err.message||err,
            error:true,
            success:false,

        })}
}
module.exports=listProducts