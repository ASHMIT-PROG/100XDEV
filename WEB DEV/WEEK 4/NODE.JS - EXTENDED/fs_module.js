const fs = require ("fs");
fs.readFile("file.txt", "utf-8",(err,data)=>{
    if (err){
        console.log("ERROR"+ err.message);
    return}
        console.log(data);
        
        // null - kyu ki koi error nahi hai aurr data me jo file ke contents hai woh aayenge 
})