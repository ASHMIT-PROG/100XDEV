const express = require("express") // the express framework is just a chain of middlewares 

const app = express()

let request_count = 0

//================================MIDDLEWARE===================================================================
// the MIDDLEWARE that will count the number of request counts
function request_increaser(req, res , next) { // it should have req , res object and next function 
    // the role of the next function is if u call the next function then the next argument will run 
    request_count = request_count + 1 // it tracks whenever the end point will hit and log this request on the screen , basically how many user that u are getting 
    // sum 
    console.log(request_count)

    // if i wnat to change the request 
    req.request_count = request_count   // ✅ FIX: attach count to req

    next() // next function called
    // if i will not call next it will stop the request response cycle
}
//================================SUM FUNCTION ===================================================================

// sum request response function 
function real_sum_handler(req, res) {
    const a = parseInt(req.query.a) || 0 // ||0 ka matlab agar user a ki value hi na dale toh->
    /**
     {
       "ans": NaN
     }
    */
    const b = parseInt(req.query.b) || 0

    console.log(req.request_count) // it will reflect in the console of the browser, Pehle value increase hoti hai phir return hoti hai 
    
    res.json({
        ans: a + b,
        count: req.request_count   //  send actual count, not function
        // name:req.name
    })
}
//================================GET USED FOR SUM ===================================================================

// endpoints- /sum , /multiply
// it will get the sum function 
// so i have multiple end points and i want to use middlewares in all of them so instead of writing , request_increaser, everytime
//i will just use app.use(request_increaser)and all the endpoints that come after it use this middleware

// and app.get("/sum",real_sum_handler)

app.get("/sum", request_increaser, real_sum_handler)

/* FLOW OF THE GET REQUEST HERE

Browser / Postman
        |
        |   GET /sum?a=5&b=6
        v
+----------------------+
|   Express Server     |
+----------------------+
        |
        v
+----------------------+
| request_increaser    |   (Middleware)
|----------------------|
| request_count++      |
| console.log(count)   |
| next()               | when next is called the next argument will run 
+----------------------+
        |
        v
+----------------------+
| real_sum_handler     |   (Final handler)
|----------------------|
| read req.query.a     |
| read req.query.b     |
| calculate sum        |
| res.json(...)        |
+----------------------+
        |
        v
Response sent to browser
*/

//================================PORT WILL LISTEN(3000) ===================================================================

app.listen(
    3000,
    console.log("server is running on port 3000")
)
