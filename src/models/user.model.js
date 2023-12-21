const { default: mongoose } = require("mongoose");
const bcrypt= require('bcrypt')
const jwt= require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    watchHistory:[ {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video"
    }],
    username: {
        type: String,
        required: true,
        unique: true,
        trim:true,
        index:true  // index true optimizes the searching operation for specific field
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim:true
    },
    fullName: {
        type: String,
        required: true
    },
    avatar: {
        type: String, // will store cloudinary url
    },
    coverImage: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String
    }
}, {
    timestamps: true
})

userSchema.pre('save',async function(next){
    // to avoid change of password on change of any field.
    if (!this.isModified('password')) return next()
    this.password= bcrypt.hash(this.password,10)
    next()
})

userSchema.methods.isPasswordCorrect =async function(password){
    return await bcrypt.compare(password,this.password)
}

//  generate Access Token
userSchema.methods.generateAccessToken=function(){
    return jwt.sign({
        _id:this._id,
        email:this._email,
        username:this._username
    },ACCESS_TOKEN_SECRET,{
        expiresIn:ACCESS_TOKEN_EXPIRY
    })
    
}

//  generate Refresh Token
userSchema.methods.generateRefreshToken=function(){
    return jwt.sign({
        _id:this._id,
        email:this._email,
        username:this._username
    },REFRESH_TOKEN_SECRET,{
        expiresIn:REFRESH_TOKEN_EXPIRY
    })
}

const User = mongoose.Model('User', userSchema)

module.exports = {
    User
}