const mongoose=require('mongoose');

      mongoose.connect("mongodb://localhost:27017/e-comm");
    const ProductSchema=new mongoose.Schema({
        name:String,
        price : Number,
        Brand:String,
        category:String
});
const SaveInDB=async()=>{
const ProductModel=mongoose.model('product',ProductSchema);
    let data =new ProductModel 
    ({
      name:"mii",
      price:10000,
      Brand:"Samsung",
      category:"Mobile"
    });
    let result=await data.save();
    console.log(result); 
}
// SaveInDB();

const updateInDB=async()=>{
  const ProductModel=mongoose.model('product',ProductSchema);
  let data =await ProductModel.updateOne({name:'samsung'},
    {
      $set:{price:70000}
    }

  )
  console.log(data);
}
// updateInDB();


const deleteInDB=async()=>{
  const ProductModel=mongoose.model('product',ProductSchema);
  let data=await ProductModel.deleteOne
  ({name:"mii"});
  console.log(data);
  
}
deleteInDB();
