const express = require ("express()")// express helps to make an http server 
const server= express()

server.get("/",(req,res)=>{

})
server.listen(
    3000,()=>{
        console.log("port running on 3000")
    })