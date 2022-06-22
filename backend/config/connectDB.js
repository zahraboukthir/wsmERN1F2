const mongoose=require('mongoose')
const connectDB=async()=>{
try {
  await  mongoose.connect(process.env.mongo_url)
  console.log("DB IS CONNECTED")
} catch (error) {
    
}
}
module.exports=connectDB