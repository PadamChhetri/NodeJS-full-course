//schema files

const mongoose=require("mongoose");
const productSchema=new mongoose.Schema({
  name:String,
  price:Number,
  Brand:String,
  category:String
})

module.exports=mongoose.model('product',productSchema);