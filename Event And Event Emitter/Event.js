const express =require("express");
const EventEmitter=require("events");
const app=express();
const event=new EventEmitter();

let count =0;
event.on("CountAPI",()=>{
  count++;
  console.log("event is called",count);

  
})

app.get("/",(req,res)=>{
  res.send("api called");
  event.emit("CountAPI");
})

app.get("/search",(req,res)=>{
  res.send("api search"); 
  event.emit("CountAPI");

})

app.get("/update",(req,res)=>{
  res.send("api update");
  event.emit("CountAPI");

})



app.listen(5000);