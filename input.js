// const { log } = require('console');
// const fs=require('fs');

// const input = process.argv;

// if(input[2]=='add'){
//   fs.writeFileSync(input[3],input[4])
// }
// else if(input[2]=='remove'){
//   fs.unlinkSync(input[3]) //to delete the file
// }

// else {
//   console.log('invalid input');
// }

//to create Files
// const fs=require('fs');
// const path=require('path');
// const dirPath=path.join(__dirname,'files');
// fs.readdir(dirPath,(err,files)=>{
//   files.forEach((item)=>{
// console.log(item);

//   })
// })

const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'CRUD');

const filepath=`${dirPath}/apple.txt`;


fs.writeFileSync(filepath,'This is a simple file path ');


// fs,fs.readFile(filepath,'utf8',(err,item)=>{
// console.log(item);
// })

// fs.appendFile(filepath,'and file name is apple.txt',(err)=>{
//   if(!err) console.log('file is updated');
// });

//
// fs.rename(filepath,`${dirPath}/fruit.txt`,(err)=>{
//   if(!err) console.log('file is updated');
// });

//
// fs.unlinkSync(`${dirPath}/fruit.txt`)