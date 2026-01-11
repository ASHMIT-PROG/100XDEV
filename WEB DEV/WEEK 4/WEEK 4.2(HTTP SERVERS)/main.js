const express = require("express");

function cal(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

const app = express();

app.get("/",function(req,res){
    const n = req.query.a;
    const ans  = cal(n);
    res.send(ans.toString());  
})
app.listen(3000)