const userModel = require("../Models/userModel")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


async function Login(req, res) {
    try {
      const { email, password } = req.body;
  
      if (!email) {
        throw new Error("Please provide email");
      }
      if (!password) {
        throw new Error("Please provide password");
      }
  
      const user = await userModel.findOne({ email });
      if (!user) {
        throw new Error("No user with these credentials");
      }
  
      const comparePassword = await bcrypt.compare(password, user.password);
      if (!comparePassword) {
        throw new Error("Wrong password");
      }
  
      const tokenData = {
        _id: user._id,
        email: user.email,
      };
  
      const token = await jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: 60 * 60 * 2 });
  
      const tokenOptions = {
        httpOnly: true,
        secure: true,
      };
  
      res.cookie("token", token, tokenOptions).json({
        message: "Login Successfully",
        data: token,
        success: true,
        error: false,
      });
    } catch (error) {
      console.log("error:", error.message);
  
      res.status(500).json({
        message: error.message,
        error: true,
        success: false,
      });
    }
  }
  
  module.exports = { Login };
  