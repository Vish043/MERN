import fs from "fs";
const filepath = "./hello.txt";
const content = "contetn is re-written";

fs.writeFile(filepath,content,"utf-8",(err)=>{
    if(err){
        console.error('Error in writing file:',err);
        return;
    }
    console.log("File content is re-written");
});