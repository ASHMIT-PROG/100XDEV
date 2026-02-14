import express from "express" // using module js -   to run this go to package.json and write : "type":"module.js"
// fayda -  it runs async 
// const express = require ("express")// imported express // aise bhi krr sakte hai 
const app = express()// made a server 

app.use (express.json()) // middleware - help in post and put to tackle with json 

function jokes(req, res) { // jokes content 
  const jokes = [ // nested objects in an array 
    {
      id: 1,
      joke: "Why do programmers prefer dark mode?",
      answer: "Because light attracts bugs 😄"
    },
    {
      id: 2,
      joke: "Why was the JavaScript developer sad?",
      answer: "Because he didn’t know how to 'null' his feelings."
    },
    {
      id: 3,
      joke: "Why do programmers hate nature?",
      answer: "Too many bugs 🐞"
    }
  ];

  res.json(jokes); // display on frontend -> all the jokes in json format 
}








app.get("/jokes",jokes) // from function jokes at the end point "/jokes"
const port = process.env.PORT || 3000;
/*
Server kis port pe run karega
process.env = environment variables
PORT = system / hosting platform ka diya hua port
Agar process.env.PORT nahi mila → 3000 use karo
*/
app.listen (port,
    console.log(`Server is running on http://localhost:${port}`)
)
/*
 */