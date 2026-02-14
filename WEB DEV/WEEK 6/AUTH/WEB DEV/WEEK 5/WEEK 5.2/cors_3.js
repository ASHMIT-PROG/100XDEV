const express = require("express");
const cors = require("cors");
const app = express();

// middleware
app.use(express.json());
app.use(cors()); 
// empty-> cors() => sab frontends allowed
// if i dont want to use cors - matlab backend and frontend are hosted in a same domain
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// route

// app.get ("/sum",(req,res)=>{
//         res.sendFile(__dirname +"/public/cors_3.html") // Current JS file ka folder path - __dirname + "/public/cors_3.html ->
//         // // D:\CODING\100XDEV\WEB DEV\WEEK 5\WEEK 5.2/public/cors_3.html
//         // Backend + frontend same domauin  pe chala rahe ho

// })
app.post("/sum", (req, res) => {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  res.json({
    ans: a + b
  });
});

// server start
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
