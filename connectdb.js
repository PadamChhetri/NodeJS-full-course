
//Now for Database 
const dbConnect=require('./database');
//Get the data from database 
const main=async()=>{
  let data =await dbConnect();
  data = await data.find().toArray();
  console.log(data);
}
main();