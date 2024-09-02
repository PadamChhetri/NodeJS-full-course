const express=require('express');
const path=require('path');

const app=express();
const publicPath=path.join(__dirname,'public');
// app.use(express.static(publicPath));

app.set('view engine','ejs');

app.get('',(req,res)=>{
  res.sendFile(`${publicPath}/index.html`)
})

app.get('/profile',(req,res)=>{
  const user={
    name:'padam',
    email:'padamchhetri710@gmai'
  }
  res.render('profile',{user})
})

app.get('/about',(req,res)=>{
  res.sendFile(`${publicPath}/about.html`)
})
app.get('/home',(req,res)=>{
  res.sendFile(`${publicPath}/home.html`)
})
app.get('#',(req,res)=>{
  res.sendFile(`${publicPath}/404page.html`)
})
app.listen(2000);