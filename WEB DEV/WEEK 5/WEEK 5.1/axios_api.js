const axios = require("axios") // it will not work on browser but will work on terminal 
// it just converts the data into json 
async function getrecentpost(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");// Server se data aa jaane tak ruk jao, phir hi aage badho”
    // axios.get server ko get HTTP request bhegta hai 

    console.log(response.data.title);
        
}
getrecentpost()

// axios is just a easier way for fetch 