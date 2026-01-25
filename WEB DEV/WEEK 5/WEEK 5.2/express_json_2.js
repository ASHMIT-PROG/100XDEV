const express = require('express');
const app = express();

// Use express.json() middleware to parse JSON bodies
app.use(express.json()); // express.json() ek helper hai 🤝
// Jo server ko bolta hai:
// “Agar JSON body aaye, to usko padh ke samajhna”

// Define a POST route to handle JSON data
app.post('/data', (req, res) => {
  // Access the parsed JSON data from req.body
  const data = req.body;// Body wo data hai jo request ke andar hota hai, aur express.json() server ko wo data padhna sikhata hai.
  console.log('Received data:', data);

  // Send a response
  res.send('Data received');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

/*Client sends JSON                        
        |
        v
express.json()
        |
        v
req.body = { a: 5, b: 6 }
        |
        v
Route handler


Client JSON bhejta hai
        ↓
express.json() padhta hai
        ↓
req.body me data aa jaata hai
        ↓
Tum use kar lete ho


 */