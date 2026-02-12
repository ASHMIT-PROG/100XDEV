// Q - Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console
//logs method timestamp and url that its working 
const express = require ("express")
const app = express()

let count = 0

function new_middleware (req, res , next){
        console.log(`METHOD - ${req.method}`);
        console.log(`HOST - ${req.hostname}`);
        console.log(`ROUTE - ${req.url}`);
        console.log(`NUMBER OF TIMES VISITED ${count=count+1}`);
        
        console.log(new Date());
        next()
}

function sum (req,res){
    const a = parseInt (req.query.a)
    const b = parseInt (req.query.a)

    res.json({
        ans : a+b
    })

}

app.get("/sum",new_middleware,sum)

app.listen(3000,console.log("running on port 3000")
)