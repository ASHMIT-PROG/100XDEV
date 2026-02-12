const express = require("express")
const jwt = require("jsonwebtoken")
// add npm i jsonwebtoken 

// 🔑 Secret key used to sign and verify JWT tokens
const JWT_SECRET = "hiashmit123"

const app = express()

// 🧠Middleware to read JSON body from requests
// Without this, req.body will be undefined
app.use(express.json())

//  Temporary in-memory users storage
// (Real apps use database)

// logger middleware
function logger (req,res,next){
    console.log(`${req.method}this is the request method came`);
    console.log(`${req.url}this is from the url `);
    next()
    
}

app.use(logger)
const users = []

// cors - localhost:3000
// frontend is now hosted on local host 3000 matlab alag se frontend host nahi karna hoga ya phir frontend and backend ka port alag ho usse bhi koi pharak nahi padega 

app.get("/",function(req,res){
    res.sendFile(__dirname+"/Public/index.html")//__dirname holds the current directory 
})

// -------------------- SIGNUP --------------------
app.post("/signup", (req, res) => {

    // Username and password sent from frontend
    const username = req.body.username
    const password = req.body.password

    // Check if user already exists
    if (users.find(user => user.username === username)) {
        return res.json({
            message: "user already exists"
        })
    }

    // Basic password validation
    if (password.length < 5) {
        return res.json({
            message: "password is less than 5 characters"
        })
    }

    // Store user (⚠️ password should be hashed in real apps)
    users.push({
        username: username,
        password: password
    })

    res.json({
        message: "user signed up successfully"
    })
})


// -------------------- SIGNIN --------------------
app.post("/signin", (req, res) => {

    const username = req.body.username
    const password = req.body.password

    // Check if username + password match
    const foundUser = users.find(
        user => user.username === username && user.password === password
    )

    if (foundUser) {

        // 🔐 Create JWT token
        // jwt.sign(payload, secret)
        // Payload = data we want to store inside token
        const token = jwt.sign(
            { username: username },
            JWT_SECRET
        )

        // Send token to client
        return res.json({
            token: token,
            message: "u have been signed in successfully"
        })
    } else {
        res.json({
            message: "user not found"
        })
    }
})


// ==================== AUTH MIDDLEWARE ====================
// Ye middleware har protected route se pehle chalega
// Iska kaam:
// 1. Token nikaalna
// 2. Token verify karna
// 3. Token se user info nikaalna
// 4. Agar sab sahi ho → route ko allow karna
function authMiddleware(req, res, next) {

    // 1️⃣ Client request ke headers se token nikaal rahe hain
    // Frontend headers me aise bhejta hai:
    // token: <JWT_TOKEN>
    const token = req.headers.token

    // 2️⃣ Agar token hi nahi aaya
    // Matlab user logged-in nahi hai
    if (!token) {
        return res.json({
            message: "token is missing"
        })
    }

    // 3️⃣ Token verify + decode karna
    // jwt.verify:
    // - check karta hai token fake / tampered toh nahi
    // - secret key match karta hai
    // - payload (data) wapas deta hai
    let decodedInfo
    try {
        decodedInfo = jwt.verify(token, JWT_SECRET)
    } catch (err) {
        // Agar token invalid ya expired hai
        return res.json({
            message: "invalid token"
        })
    }

    /*
      decodedInfo ka structure aisa hota hai:
      {
        username: "ashmit",
        iat: 1710000000
      }
    */

    // 4️⃣ Token ke payload se username nikaal rahe hain
    // Ab hum jaante hain kaunsa user request bhej raha hai
    const username = decodedInfo.username // Verified user info ko request ke saath chipka diya”
    // here we are modifying the request object so that the next object gets it 

    // 5️⃣ Is username ko req object me store kar rahe hain
    // Taaki next route ise directly use kar sake
    // (req object sab middleware + route ke beech share hota hai)
    req.username = username

    // 6️⃣ Sab checks pass ho gaye
    // Ab request ko next middleware / route pe bhej do
    next()
}




// -------------------- /ME (PROTECTED ROUTE) --------------------
// /me ka matlab:
// "Agar token valid hai, toh batao currently logged-in user kaun hai"
// basically user data return 
// it needs to the current user password 
app.get("/me", authMiddleware, (req, res) => {

    // authMiddleware ne req.username already set kar diya
    const username = req.username

    // Users list me user dhoondh rahe hain
    const foundUser = users.find(user => user.username === username)

    if (foundUser) {
        return res.json({
            username: foundUser.username,
            // ⚠️ real apps me password kabhi response me mat bhejna
            password: foundUser.password
        })
    } else {
        return res.json({
            message: "user not found"
        })
    }
})


// -------------------- SERVER --------------------
app.listen(3000, () => {
    console.log("port is running on 3000")
})
