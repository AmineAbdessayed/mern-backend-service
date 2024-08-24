const mongoose=require("mongoose")

const productSchema= new mongoose.Schema({
    productName: String ,
    brandName: String ,
    productImage: [] ,
    description: String,
    price:Number,
    sellingPrice:Number,
    category:String

    


},
{
    timestamps:true
})

const productModel=mongoose.model("product",productSchema)

module.exports=productModel

