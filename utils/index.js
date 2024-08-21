const express=require("express")
const bcrypt = require('bcryptjs');

function HashPassword(password){

const salt = bcrypt.genSaltSync(10);
const hashedPassswoed = bcrypt.hashSync(password, salt);

return hashedPassswoed;
}

module.exports=HashPassword