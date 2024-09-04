const {MongoClient}=require ('mongodb');
let databaseName='e-comm';
const url="mongodb://localhost:27017";
const client=new MongoClient(url);


//Dtabase Connection
async function dbConnect()
{
  let result=await client.connect();
  const db= result.db(databaseName);
  return db.collection('product');

} 
module.exports=dbConnect;

//Get the data from database 
// dbConnection().then((res)=>{
//   res.find().toArray().then((data)=>{
//   console.warn(data);

//   })
// })
