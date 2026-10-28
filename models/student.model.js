const mongoose=require('mongoose');
const studentSchema=new mongoose.Schema({
 name:{
  type:String,
  required:true
 },
 email:{
  type:String,
  required:true
 },
 age:{
  type:Number,
  required:true
 },
 phone:{
  type:Number,
  required:true
 },
 dob:{
type:Date,
required:true
 }
},{timestamps:true})
const Student = mongoose.model("Student", studentSchema);
module.exports=Student;