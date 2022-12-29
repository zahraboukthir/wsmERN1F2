const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
const signUp = async (req, res) => {
  const { email, password, fullname } = req.body;
  console.log(req.body);
  try {
    const existUser = await userModel.findOne({ email });
    if (existUser) {
      return res.status(400).send({ msg: "User already exist" });
    }
    const newUser = new userModel({ ...req.body });
    const hashedPassword = await bcrypt.hash(password, 10);
    newUser.password = hashedPassword;
    await newUser.save();
    res.send({ user: newUser, msg: "user successesfuly registred" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error.messages });
  }
};
const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existUser = await userModel.findOne({ email });
    if (!existUser) {
      return res.status(400).send({ msg: "bad credentials! (email)" });
    }
    console.log(existUser)
    const match = await bcrypt.compare(password, existUser.password);
// console.log(match)
    if (!match) {
      return res.status(400).send({ msg: "bad credentials! (password)" });
    }
const payload={_id:existUser._id}
const token=jwt.sign(payload,process.env.SECRET,{expiresIn:"1h"})
    res.send({user:existUser,token});
  } catch (error) {
   res.status(400).send({ error: error.messages });
  }
};
const getAuthUser=async(req,res)=>{
   try {
    
      res.send({user:req.user})
   } catch (error) {
      res.status(400).send({ error: error.messages });
   }
}
const getAllUsers=async(req,res)=>{
  try {
    const allUsers=await userModel.find()
    res.send({allUsers})
  } catch (error) {
    res.status(400).send({ error: error.messages });
  }
}
module.exports = { signUp, signIn ,getAuthUser,getAllUsers};
