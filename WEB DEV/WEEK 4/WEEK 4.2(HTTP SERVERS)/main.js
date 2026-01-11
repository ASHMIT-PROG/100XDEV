const express = require("express")
const server = express()

function sum (t,q){
   return t+q
}

server.get("/",(req,res)=>{
    let parameter = parseInt(req.query.l)
    let second_parameter = parseInt(req.query.m)
    let ans = sum(parameter,second_parameter)
    res.send(ans)
})
server.listen(
    3001,
    ()=>{
        console.log("PORT IS RUNNING ON 3001");
        
    }
)// in local host type: http://localhost:3001/?l=3&m=5