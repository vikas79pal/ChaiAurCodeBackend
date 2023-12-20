const express=require("express");
const { connectDB } = require("./db/index");
const app= express();
require("dotenv").config()

const PORT=process.env.PORT

connectDB()

app.get("/",(req,res)=>{
    res.status(200).json({msg:"Home Route"})
})

app.listen(PORT,()=>{
    console.log(`listening to Port ${PORT}`);
})