//model files
const exoress=require("express");
mongoose.connect("mongodb://localhost:27017/e-comm");
const product=require('./cproduct');

const app=express();
