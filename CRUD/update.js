const dbConnect = require('./database');

const updateData= async()=>{
  let data= await dbConnect();
  let result= await data.updateOne(
    {name:'mi pro 5'},{
      $set:{name:'pro 5'}
    } 
  );
  if (result.acknowledged){
    console.log("data is updated");
    
  }
  
}
updateData();