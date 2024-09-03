const express=require('express');
const reqFilter=require('./routemiddleware1');
const app=express();

const route=express.Router();

//application level middleware 

// const reqFilter=(req,res,next)=>{
//   if(!req.query.age){
//     res.send('please provide age');
//   }
//   else if(req.query.age<18){
//     res.send('You cannot access this page');
//   }
//   else{
//   next();
//   }
// }
// app.use(reqFilter)

// app.get('/',(req,res)=>{
//   res.send('Welcome, to home page');
// })
// app.get('/users',(req,res)=>{
//   res.send('Welcome, to users page');
// })

// app.listen(2000);


//Route level middleware 

route.use(reqFilter);

app.get('/',(req,res)=>{
  res.send('Welcome, to home page');
})
app.get('/users',(req,res)=>{
  res.send('Welcome, to users page');
})
route.get('/about',(req,res)=>{
  res.send('Welcome, to about page');
})
app.get('/contact',(req,res)=>{
  res.send('Welcome, to contact page');
})
app.use('/',route)
app.listen(2000);