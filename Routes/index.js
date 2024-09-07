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
const getOneProduct=require("../Controller/productController/getOneProduct")
const GetProductDetails=require("../Controller/productController/GetProductDetails")
const addToCart=require("../Controller/addToCartController")
const CountAddToCart=require("../Controller/CountAddToCart")
const GetProductCart=require("../Controller/GetProductCart")
const updateCart=require("../Controller/updateCart")
const DeleteCart=require("../Controller/DeleteCart")
const SearchProduct=require("../Controller/SearchProduct")
const FilterProduct=require("../Controller/productController/FilterProduct")
const paymentController=require("../Controller/Payment/paymentController")


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
router.post("/OneProduct",getOneProduct)
router.get("/search",SearchProduct)
router.post("/filterProduct",FilterProduct)

router.post("/productDetails",GetProductDetails)

//Add to cart 

router.post("/addToCart", authToken,addToCart)
router.get("/countAddToCart", authToken,CountAddToCart)
router.get("/viewProducts", authToken,GetProductCart)
router.post("/updateCart", authToken,updateCart)
router.post("/DeleteCart", authToken,DeleteCart)


//payment 

router.post("/checkout", authToken,paymentController)
module.exports=router