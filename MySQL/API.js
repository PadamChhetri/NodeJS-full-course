const express= require("express");
const connection=require("./index.js");

const app=express();

app.use(express.json);

app.get("/",(req,res)=>{
  connection.query("select * from admin",(err,result)=>{
    if(err){
      res.send("error");
    }
    else{
      res.send(result);
    }
  })
});

app.post("/",(req,res)=>{
  // const data={name:"Padam",password:"Hello@12345"};
  const data=res.body;
  connection.query('Insert into admin SET ?',data,(error,result,fields)=>{
    if(error) throw error;
    res.send(result)
  })
  res.send("updated")
  })

app.put("/:id",(req,res)=>{
  // const data=["sandip","0000",4];
  const data =[req.body.name,req.body.password,req.params.id];
  connection.query("Update admin SET name=?, password=? where id=?",data,(error,result,fields)=>{
    if(error) throw error;
    res.send(result)
  })
  res.send("updated")
  })

  app.delete("/:id",(req,res)=>{
    connection.query("DELETE from admin WHERE id="+req.params.id,(error,result)=>{
      if(error) throw error;
      res.send(result)
    })
  })
app.listen(5000);