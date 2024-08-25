const express=require("express")
const { Register } = require('../Controller/UserRegister');
const {Login}=require("../Controller/UserLogin")
const userLogout=require("../Controller/userlogout")
const userDetails=require("../Controller/userDetails")
const authToken=require("../Middleware/authToken");
const AllUsers = require("../Controller/AllUsers");
const UpdateUser = require("../Controller/UpdateUser");
const UploadProductController=require("../Controller/productController/UploatProduct")
const listProducts=require("../Controller/productController/ListProducts")
const EditProduct=require("../Controller/productController/EditProduct")
const getCategoryProduct=require("../Controller/productController/getCategoryProduct")


const router= express.Router()

router.post("/register", Register);
router.post("/login", Login);
router.get("/user-details",authToken,userDetails)
router.get("/userLogout",userLogout)

//admin 
router.get("/allUsers", authToken,AllUsers)
router.post("/updateUser", authToken,UpdateUser)

//Product 

router.post("/AddProduct",authToken,UploadProductController)
router.get("/listProducts",listProducts)
router.post("/editProduct",authToken,EditProduct)
router.get("/categoryProduct",getCategoryProduct)

module.exports=router