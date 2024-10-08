
//model files
const express=require("express");
require("./config");
const Product=require('./product');
const app=express();

app.use(express.json())


app.post("/create",async (req,res)=>{
  let data=  Product(req.body);
  let result= await data.save();//to save in DB
  console.log(result);
  res.send(result);
});

app.get("/list",async(req,res)=>{
  let data= await Product.find();
  res.send(data);
});

app.delete("/delete/:_id",async(req,res)=>{
  console.log(req.params);
  let data=await Product.deleteOne(req.params)
  res.send(data);
});

app.put("/update/:_id",async(req,res)=>{
  console.log(req.params);
  let data=await Product.updateOne(
    req.params,//condition
    {
    $set:req.body //updated data
  });
  res.send(data);
});
app.listen(5000);

