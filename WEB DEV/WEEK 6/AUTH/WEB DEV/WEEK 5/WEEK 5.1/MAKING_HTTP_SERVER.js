//creating an http server that have 4 routes
/*1. http://localhost:3000/multiply?a=1&b=2
2. [http://localhost:3000/add?a=1&b=2](http://localhost:3000/multiply?a=1&b=2)
3. [http://localhost:3000/divide?a=1&b=2](http://localhost:3000/multiply?a=1&b=2)
4. [http://localhost:3000/subtract?a=1&b=2](http://localhost:3000/multiply?a=1&b=2) */


const express = require("express");
const app = express()
// sum function 
app.get("/sum/:a/:b",function(req,res){ // "/sum" is an end point , 
    const a = parseInt (req.params.a)// agar parseInt nahi lagata toh ye string value deta ,req variable have all the details related to your requests , and a and b are the variables that the user will send
    const b = parseInt (req.params.b)

    res.json({ //ek function ke andar object pass kita  hai 
        ans:a+b
    })
})// http://localhost:3000/sum/32/1234

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
