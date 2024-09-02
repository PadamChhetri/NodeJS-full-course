const express=require('express');
const app=express();

// app.get('',(req,res)=>{
//   console.log("data send by browser",req.query.name); // req send from browser
//   res.send('Hello '+req.query.name);
//   })
  
app.get('',(req,res)=>{
  res.send(`
    <h1>Hello this is home page</h1>
    <a href='/about'> Go to about page </a>
    `);
  })
  
app.get('/about',(req,res)=>{
  res.send(
    `<input type="text", placeholder="username" value="${req.query.name}"/>
    <button>send</button>
    <a href='/'> Go to about page </a>
  `);
 })

 app.get('/help',(req,res)=>{
  res.send([
    {
      name:'padam',
      mail:'padamchhetri710@gmail.com'
    },
    {
      name:'sandip',
      mail:'sandipchhetri101@gmail.com'
    }

  ]);
  })

app.listen(2000);