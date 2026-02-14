import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
import { response } from 'express'
function App() {
const [jokes , setjokes] = useState([])
/**
 jokes → data ka box
setJokes → us box ko update karne ka button
[] → starting me box empty hai

ex - let jokes = [];        // data
function setJokes(){} // update function

 */

useEffect(()=>{
  axios.get ("http://localhost:3000/jokes")
  .then((response)=>{
    setjokes(response.data)
  })
})
  return (
    <>
      <h1>FULLSTACK</h1>
      <p1>JOKES:{jokes.length }</p1> 
      {/* jokes = array
      jokes.length = array me kitne jokes hai  */}
      {
        jokes.map((joke,index)=>{ //array ke harr element pe loop laga dega 
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
          
        })
      }
    </>
  )
}

export default App
