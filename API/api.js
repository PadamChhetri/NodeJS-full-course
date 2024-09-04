const express = require('express');
const mongodb=require('mongodb')
const dbConnect = require('./database');
const app = express();

app.use(express.json()); //to post data

app.get('/', async (req, res) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data); //for terminal output
  res.send(data); // for browser or Postman output
});

app.post('/', async (req, res) => {
    let data = await dbConnect();
    let result = await data.insertOne(req.body);
    res.send(result);
});

app.put('/', async (req, res) => {
  let data = await dbConnect();
  let result =await data.updateOne(
    {name:"iphone 13"},
    // {$set:{name:"iphone 13"}}
    {$set:req.body}
  );
  res.send(result);
});

app.delete('/:id',async(req,res)=>{
  console.log(req.params.id);
  let data = await dbConnect();
  const result=await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)});
  res.send(result)
})



app.listen(8080);
