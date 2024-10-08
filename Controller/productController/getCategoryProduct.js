
const productModel=require("../../Models/productModel")

async function getCategoryProduct(req,res) {
    try {

        const categoryList= await productModel.distinct("category")

        console.log("category",categoryList)

        const productCategory=[]

        for(const category of categoryList){
            const product=await productModel.findOne({category})
            if(product){
                productCategory.push(product)
            }
        }
        console.log("---------------",productCategory)
        res.json({
            message : "category product",
            data : productCategory,
            success : true,
            error : false
        })


    }catch(err){
        res.status(500).json({

            message:err.message ||err,
            error:true,
            success:false,

        })
        

    }
}

module.exports=getCategoryProduct