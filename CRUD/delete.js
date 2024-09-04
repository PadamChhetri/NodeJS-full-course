const dbConnect=require('./database');

const deleteData=async()=>{
  let data=await dbConnect();
  let result=await data.deleteOne(
    {name:' pro 5'}
)
if (result.acknowledged){
  console.log("data is deleted");
  
}
}
deleteData();