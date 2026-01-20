//Fetch returns a promise 
// so now i am using async await
// fetch("https://jsonplaceholder.typicode.com/posts/1");
// async function ka matlab:
// is function ke andar hum await use kar sakte hain
// aur yeh function hamesha ek Promise return karta hai
async function getrecentpost(){

    // Yeh line sabse pehle execute hogi (synchronous)
    console.log("before sending requests");
    
    // await fetch(...)
    // ➜ fetch ek Promise return karta hai
    // ➜ await likhne se JS yahin ruk jaati hai
    // ➜ jab tak API se response nahi aa jata
    const p1 = await fetch("https://jsonplaceholder.typicode.com/posts/1");

    // p1.json() bhi ek Promise return karta hai
    // ➜ yeh response ko JSON format me convert karta hai
    // ➜ await ensure karta hai ki data fully aa jaaye
    const data = await p1.json();

    // API se aaya hua final data yahan print hoga
    console.log(data);

    // Yeh line tab execute hogi jab:
    // 1. fetch complete ho chuka ho
    // 2. JSON parsing complete ho chuki ho
    console.log("after sending requests");    

    // Sirf post ka body part HTML me show karne ke liye
    document.getElementById("posts").innerHTML = data.body;

    // Agar poora object display karna ho
    // JSON.stringify object ko string me convert karta hai
    // warna [object Object] dikhega
    // document.getElementById("posts").innerHTML = JSON.stringify(data);
}

// Function call
// ➜ yeh function run hoga
// ➜ async hone ke wajah se background me async kaam handle karega
getrecentpost();


async function getbody(){
    console.log("before sending requests");
    const p2 = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data2 = await p2.json();
    console.log(data2);

    console.log("all the data have been fetched");
document.getElementById("posts").innerHTML = data2.userid;// only the userID data of the website 

}

getbody()   

