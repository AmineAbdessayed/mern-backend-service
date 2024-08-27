const productModel=require("../../Models/productModel")

async function getOneProduct(req,res) {

    try {



    

    const {category}=req?.body || req?.query

    const product=await productModel.find({category})

    res.json({
        data:product,
        message:product,
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
module.exports=getOneProduct