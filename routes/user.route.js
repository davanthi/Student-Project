const express=require('express');
const User=require('../models/signup.model');
const bcrypt=require('bcryptjs')
const router=express.Router();
router.post('/register',async(req,res)=>{
 try{
const existsUser=await User.findOne({email:req.body.email});
 if(existsUser){
   return res.send({
   success:false,
   message:"User already exists with this email"
  })
 }
 const salt = await bcrypt.genSalt(10);
 const hashPassword = bcrypt.hashSync(req.body.password, salt);
 req.body.password = hashPassword;
 const newUser=await new  User(req.body);
 await newUser.save();
 return res.send({
  success:true,
  message:"user registered successfully",
  user:newUser,
 })
 }catch(error){
  console.log("Registration Error:", error);

return res.status(500).json({
  success: false,
  message: error,
});
 }
 
})
router.post('/login',async(req,res)=>{
 try {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.send({
      success: false,
      message: "User not found please Register",
    });
  }
  validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.send({
      success: false,
      message: "Incorrect password please enter correct password.",
    });
  }
  return res.send({
    success: true,
    message: "Logged in successfully.",
  });
  
 } catch (error) {
  return res.status(500).json({
   success:false,
   message:error
  })
 }
 
})
module.exports=router;