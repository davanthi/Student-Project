const express=require('express');
const Student=require("../models/student.model.js")
const studentRouter=express.Router();
studentRouter.post("/add",async(req,res)=>{
 try{
  const newStudent = new Student(req.body);
  await newStudent.save();
res.status(201).json({
 success:true,
 message:"Student added successfully"
})
 }catch(error){
res.send({
 success:false,
 message:"Error adding student",
 error:error.message
})
 }
})
studentRouter.get("/get-students",async(req,res)=>{
 try{
const students=await Student.find();
res.status(200).json({
 success:true,
 message:"Students fetched successfully",
 data:students
})
 }catch(err){
res.status(500).json({
 success:false,
 message:"Error fetching students",
 error:err.message
})
 }
})
module.exports=studentRouter;