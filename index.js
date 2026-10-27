const express=require('express');
const dbConfig=require('./db.js');
const dotEnv=require('dotenv');
dotEnv.config()
const app=express();
dbConfig.connectDB();
app.get('/',(req,res)=>{
 res.send("Hello world")
})
app.listen(8001,()=>{
console.log("Server is running on port 8001")
})

// mongodb+srv://davanthijadi17_db_user:<db_password>@cluster0.4cndoqm.mongodb.net/


//mongodb+srv://davanthijadi17_db_user:YrQnpFFXYg25GY14@cluster0.zbzfr5b.mongodb.net/
