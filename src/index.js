const { app } = require("./app");
const { connectDB } = require("./db/index");
require("dotenv").config()
const {StatusCode}=require("http-status-codes");
const { ApiResponse } = require("./utils/ApiResponse");


const PORT=process.env.PORT

connectDB().then(
    //  after successfull connection with Db ,listen to the server
    app.listen(5000,console.log(`listening to server at PORT ${PORT}`))

).catch((err)=>console.log("Connection to db failed",err))

app.get("/",(req,res)=>{

    
   res.json( new ApiResponse(400,{}))
})

app.listen(PORT,()=>{
    console.log(`listening to Port ${PORT}`);
})