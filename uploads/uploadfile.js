const express=require("express");
const multer =require("multer");
const path = require("path");

const app=express();

const upload=multer({
  storage:multer.diskStorage({
    destination:function(req,file,cb)
  {
    cb(null,"uploads")
  },
  filename:function(req,file,cb)
  {
    const ext = path.extname(file.originalname);
      cb(null,file.fieldname+"-"+Date.now()+ext)
  }
})
}).single("user_file")

app.post("/upload",upload, (req,res)=>{
  res.send("file uploda");
})
app.listen(5000);