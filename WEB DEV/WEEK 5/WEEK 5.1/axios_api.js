const axios = require("axios") // it is an external library 
// it just converts the data into json 
async function getrecentpost(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    console.log(response.data.title);
        
}
getrecentpost()

// axios is just a easier way for fetch 