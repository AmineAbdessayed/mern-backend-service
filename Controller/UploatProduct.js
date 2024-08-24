const productModel=require("../Models/productModel")
const uploadProductPermission=require("../helpers/permission")

async function UploadProductController(req,res){

    try {
        const sessionId=req.userID
        if(!uploadProductPermission(sessionId)){
         throw new Error("Permission Denied")
        }
        const product=new productModel(req.body)
        const productData= await product.save()

        res.status(201).json({
            message:"product added succefully",
            error:false,
            success:true,
            data:productData

        })


    }catch(err){
        res.status(500).json({

            message:err.message ||err,
            error:true,
            success:false,

        })
        

    }
}
module.exports=UploadProductController