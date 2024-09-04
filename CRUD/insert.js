const dbConnect = require('./database');

const insert = async () => {
    const db = await dbConnect();
   
    const result = await db.insertMany(
     [
       {name:'note 5', Brand:'vivo',price:35000,category:'mobile'},

       {name:'mi 5',Brand:'MI',price: 45000,category:'mobile'}

]
  );
    if (result.acknowledged){
      console.log("data is inserted");
      
    }
}

insert();