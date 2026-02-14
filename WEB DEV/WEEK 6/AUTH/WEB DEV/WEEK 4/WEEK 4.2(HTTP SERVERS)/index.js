const express = require('express')
// imported express
const app = express()//Express ka server bana diya, express ek function hai ye ek server object deta hai 
//route handlers
app.get("/",function(req , res){//“Agar koi GET request "/' pe aaye, toh ye function chalao” / = home route=> http://localhost:3000/
//req (request) → user se aayi info
// res (response) → user ko bhejna hai

    res.send("hello world")//User ko response bhej do
    /*Ye internally:
status = 200
headers set
response end
sab kuch khud handle kar leta hai 
*/
})
app.listen(3000)// which port =>Server ko bolo: port 3000 pe sunna shuru karo

/*Browser
  |
  |  GET /
  |
Express Server (app)
  |
  |  "hello world"
  |
Browser
 */