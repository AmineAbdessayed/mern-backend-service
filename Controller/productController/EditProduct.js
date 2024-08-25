const uploadProductPermission=require("../../helpers/permission")
const productModel=require("../../Models/productModel")
async function EditProduct(req,res) {
    
    try{
        const sessionId=req.userID
        if(!uploadProductPermission(sessionId)){
         throw new Error("Permission Denied")
        }

        const {_id, ...resBody}=req.body

        const product= await productModel.findByIdAndUpdate(_id,resBody)
        console.log("new product ",product)


        res.status(201).json({
            message:"product updated succefully",
            error:false,
            success:true,
            data:product

        })


    }catch(err){
        res.status(500).json({

            message:err.message||err,
            error:true,
            success:false,

        })}
}

module.exports=EditProduct