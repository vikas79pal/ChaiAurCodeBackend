const { default: mongoose } = require("mongoose");
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

const videoSchema =new mongoose.Schema({
    videoFile:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:true,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    duration:{
        type:Number,
        required:true,
    },
    views:{
        type:Number,
        default:0,
       
    },
    isPublished:{
        type:Boolean,
        default:true
    },
},{
    timestamps: true
})

videoSchema.plugin(aggregatePaginate)
const Video = mongoose.model("videoSchema")



module.exports={
    Video
}