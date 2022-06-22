const mongoose=require('mongoose')
const { Schema } = mongoose;

const productSchema = new Schema({
  name:  {type:String,required:true}, // String is shorthand for {type: String}
  price: Number,
  qte:   Number,
  image:String,
  isActive: { type:Boolean, default:true },
  createDate: { type: Date, default: Date.now },
  
});
const productModel=mongoose.model("products",productSchema)
module.exports=productModel