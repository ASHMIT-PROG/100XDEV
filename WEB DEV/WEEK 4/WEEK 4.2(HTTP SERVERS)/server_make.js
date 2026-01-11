// Express framework ko import kar rahe hain
const express = require('express')

// Express application ka instance create kar rahe hain
const app = express()

// Ye function 1 se n tak ka sum calculate karta hai
function sum(n) {
  let ans = 0              // sum store karne ke liye variable

  // loop 1 se n tak chalega
  for (let index = 1; index <= n; index++) {
    ans = ans + index      // har number ko ans me add karte jao
  }

  return ans               // final calculated sum return karo
}

// GET request handle karne ke liye route define kar rahe hain
app.get("/", (req, res) => {

  // query parameter se 'a' le rahe hain
  // req.query.n hamesha string hota hai, isliye number me convert kar rahe hain
  let w = parseInt(req.query.a) // parseInt String ke andar se nikal krr whole number bana deta hai 

  // sum function call karke result nikaal rahe hain
  let ans = sum(w)

  // client (browser) ko response bhej rahe hain
  res.send("this is the answer " + ans)
})

// Server ko port 3000 par start kar rahe hain
app.listen(
  3000,               // argument 1 → port number
  () => {             // argument 2 → callback function
    console.log("Server running on port 3000")
  }
)

