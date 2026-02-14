const express = require ("express")
const jwt = require("jsonwebtoken")
// add npm i jsonwebtoken 
const JWT_SECRET = "hiashmit"
const app  =express()

app.use (express.json())

const users=[]



app.post("/signup",(req,res)=>{

    const username = req.body.username
    const password = req.body.password

    if(users.find(user => user.username === username)){
        return res.json({
            message: "user already exists"
        })
    }

    if(password.length < 5){
        return res.json({
                message:"password is less than 5 characters"
        })
    }

    users.push({
        username:username,
        password:password
    })

    res.json({
        message: "user signed up successfully"
    })

})

app.post ("/signin",(req,res)=>{
    const username = req.body.username
    const password = req.body.password

    const foundUser = users.find(
        user => user.username === username && user.password === password
    )

    if(foundUser){
      const token = jwt.sign({ // jwt.sign(payload, secret)
            /*
            payload={
            username:
            } */
        username:username,
      },JWT_SECRET)

        return res.json({
            token:token, // sent token 
            message:"u have been signed in successfully"
        })

    }

    else{
        res.json({
            message:"user not found"
        })
    }
})


      // /me route ka matlab: "Agar token valid hai, toh batao user kaun hai"
app.get("/me", (req, res) => {

    // 1️⃣ Client ke headers se token nikaal rahe hain
    // JWT token yahan aata hai jab user logged-in hota hai
    const token = req.headers.token;

    // 2️⃣ Sabse pehle check: token aaya bhi hai ya nahi
    // Agar token hi nahi aaya → user logged-in nahi hai
    if (!token) {
        return res.json({
            message: "token is missing"
        });
    }

    // 3️⃣ JWT token ko verify + decode kar rahe hain
    // jwt.verify do cheez karta hai:
    // - token fake hai ya nahi check karta hai
    // - payload (data) wapas deta hai
    let decodedInfo;
    try {
        decodedInfo = jwt.verify(token, JWT_SECRET);
    } catch (err) {
        // Agar token invalid / expired hai
        return res.json({
            message: "invalid token"
        });
    }

    /*
      decodedInfo ka structure aisa hota hai:
      {
        username: "bharat",
        iat: 123456,
        exp: 123999
      }
    */

    // 4️⃣ JWT payload se username nikaal rahe hain
    // Matlab: token kis user ka hai
    const username = decodedInfo.username;

    // 5️⃣ Users array me us username ka user dhoondh rahe hain
    // Ye confirm karta hai ki user exist karta hai
    const foundUser = users.find(user => user.username === username);

    // 6️⃣ Agar user mil gaya → authentication successful
    if (foundUser) {
        return res.json({
            username: foundUser.username,
            // ⚠️ real apps me password kabhi mat bhejna
            password: foundUser.password 
        });
    } 
    // 7️⃣ Agar username token se mila but user array me nahi mila
    else {
        return res.json({
            message: "user not found"
        });
    }
});


app.listen (3000 , () => {
    console.log("port is running on 3000")
})
