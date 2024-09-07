const productModel=require("../../Models/productModel")

const FilterProduct=async(req,res)=>{

    try {
        const categoryList=req?.body?.category || []
        const product= await productModel.find({
            category:{
                "$in":categoryList
            }
        })
        res.json({
            data:product,
            message:"product",
            error:false,
            success:true
        })



    }catch(err){
        res.status(500).json({

            message:err.message ||err,
            error:true,
            success:false,

        })
        

    }
}
module.exports=FilterProduct