const express=require("express")
const { Register } = require('../Controller/UserRegister');
const {Login}=require("../Controller/UserLogin")
const userLogout=require("../Controller/userlogout")
const userDetails=require("../Controller/userDetails")
const authToken=require("../Middleware/authToken");
const AllUsers = require("../Controller/AllUsers");


const router= express.Router()

router.post("/register", Register);
router.post("/login", Login);
router.get("/user-details",authToken,userDetails)
router.get("/userLogout",userLogout)

//admin 
router.get("/allUsers", authToken,AllUsers)

module.exports=router