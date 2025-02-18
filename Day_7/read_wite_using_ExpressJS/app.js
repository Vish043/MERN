import fs from "fs";
const filepath ="./hello.txt";

fs.readFile(filepath,"utf8",(err,data)=>{
    if (err){
        console.error('Error reading File:',err);
        return;
    }
    console.log("file content is:",data);
});