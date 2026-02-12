const express = require ("express")
const cors = require("cors")
const app = express();
// create a backend server on nodejs that return a sum endpoint 
app.use (express.json())
app.use(cors())// all frontends are allowed to send the requests  
app.post("/sum",(req,res)=>{
    const a =parseInt(req.body.a)
    const b = parseInt(req.body.b)

    res.json({
        ans:a+b
    })
})

app.listen(3000,console.log("port is running on 3000")
)
    