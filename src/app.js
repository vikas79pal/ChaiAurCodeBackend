const cookieParser = require('cookie-parser')
const express=require('express')

const app=express()
app.use(cookieParser())

// to parse json from request with limit of 20kb
app.use(express.json({limit:"20kb"}))

// to parse url data in encoded form and extended true means it 
// will allow nesting objects to parse

app.use(express.urlencoded({extended:true,limit:"30kb"}))

// to server some static files (pdf ,images etc )
app.use(express.static('public'))

module.exports={app}