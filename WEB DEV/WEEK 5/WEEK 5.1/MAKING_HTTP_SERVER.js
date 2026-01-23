const express = require("express");
const app = express()
// sum function 
app.get("/sum",function(req,res){
    const a = parseInt (req.query.a)// agar parseInt nahi lagata toh ye string value deta 
    const b = parseInt (req.query.b)

    res.json({ //ek function ke andar object pass kita  hai 
        ans:a+b
    })
})

// sub function     
app.get("/sub",function(req,res){
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.json({
        ans:a-b// yaha pe ; mat lagana 
    })
})

// multiply function 
app.get ("/multiply",function (req,res){
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)

    res.json({
        ans:a*b
    })
})

//divide function 
app.get ("/divide", function(req,res){
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)

    res.json({
        ans:a/b
    })
})

// port listin function calling 
port_listen ();

function port_listen (){
app.listen(3000,()=>{// Main is port par khada hoon, jo request aaye uska response dunga
    console.log("server is running on port 3000")
})}
