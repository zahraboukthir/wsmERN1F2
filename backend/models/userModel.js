const mongoose=require('mongoose')
 const userScema= new mongoose.Schema({
    fullName:{type:String, trim:true},
    email:{type:String,trim:true,lowarecase:true},
    password:{type:String},
    createdDate:{type:Date,default:Date.now()},
    ban:{type:Boolean,default:false},
    role:{
        type:String,
        enum:["client","admin","superAdmin"],
        default:"client"
    }

 })
 module.exports=User=mongoose.model("user",userScema)