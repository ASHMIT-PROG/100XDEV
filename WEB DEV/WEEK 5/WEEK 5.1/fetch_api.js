//Fetch returns a promise 
// so now i am using async await
// fetch("https://jsonplaceholder.typicode.com/posts/1");

async function getrecentpost(){
    console.log("before sending requests");
    
    const p1 = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const data = await p1.json()
    console.log(data);

        console.log("after sending requests");    
        document.getElementById("posts").innerHTML=data.body 
        //or if i have to display the full data 
        document.getElementById("posts").innerHTML=JSON.stringify(data)

}
getrecentpost()

async function getbody(){
    console.log("before sending requests");
    const p2 = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data2 = await p2.json();
    console.log(data2);

    console.log("all the data have been fetched");
document.getElementById("posts").innerHTML = data2.userid;

}
getbody()