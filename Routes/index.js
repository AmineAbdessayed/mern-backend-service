const express=require("express")
const { Register } = require('../Controller/UserRegister');
const {Login}=require("../Controller/UserLogin")
const userDetails=require("../Controller/userDetails")
const authToken=require("../Middleware/authToken")

const router= express.Router()

router.post("/register", Register);
router.post("/login", Login);
router.get("/user-details",authToken,userDetails)

module.exports=router