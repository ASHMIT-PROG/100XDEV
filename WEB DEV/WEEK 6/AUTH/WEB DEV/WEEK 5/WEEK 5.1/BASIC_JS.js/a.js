//ASYNSC JS
// Long time wale kaam side me chala diye jaate hain
// JS next kaam continue karta rehta hai

// ✔ Program block nahi hota
// ✔ Fast & efficient

// set timeout 
console.log("1");
console.log("2");

setTimeout(()=>{
    console.log("hello");    
},4000) // hello will print after 4 sec

console.log("3");
console.log("4");

//==============================================
//CALLBACK - a callback is a function passed as an argument to another function 

// sync callback
function sum (a,b){
    console.log(a,b)
}

function calculator(a,b,sum_call){
    sum_call(a,b)
}

calculator(1,2,sum)

//async callback 
const hello = ()=>{
    console.log("hello world ");
}
setTimeout(hello,4000)

//==============================================

// both callback and settimeout

function getdata(dataid, getnextdata) {
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("dataid", dataid);
        resolve("success")
        if (getnextdata) {
            getnextdata();
        }
    }, 4000);   
    })
}

// this is nested callback  called as callback hell 
getdata(1, () => {
    console.log("getting data 2..");
    getdata(2,()=>{
        console.log("getting data 3...");
        getdata(3,()=>{
            console.log("getting data 4....");
            getdata(4)
        });
    });
});

//================================PROMISES=================================

// INTERVIEW RELATED QUESTIONS : https://dev.to/hitheshkumar/master-javascript-promises-10-tricky-output-questions-every-developer-must-know-part-1-1l43
//


/*
Promise ek object hota hai jo future me kisi kaam ke complete hone ka “vaada” karta hai.

Ya to:

kaam success hoga ✅

ya fail hoga ❌
*/
    let Promise = new Promise((resolve,reject)=>{// resolve and reject are both functions 
        console.log("hellllo")
        resolve("the promise is resolved (fullfilled)")//state - fullfilled 
        reject("some error")// state - rejected 
    })
    

   // newdata ek function hai jo ek Promise return karta hai
// Ye function asynchronous kaam simulate karta hai (3 sec delay)
function newdata(dtid) {

    // Promise object create ho raha hai
    // resolve → jab kaam successfully complete ho
    // reject  → jab kaam fail ho
    return new Promise((resolve, reject) => {

        // setTimeout ek asynchronous Web API hai
        // Iska matlab: JS yahan wait nahi karega,
        // ye kaam background me chala jaayega
        setTimeout(() => {

            // 3 second ke baad ye line execute hogi
            // dtid wahi value hai jo function call ke time pass hui thi
            console.log("data", dtid);

            // resolve() call karne ka matlab:
            // Promise ab SUCCESSFULLY complete ho gaya
            // Aur jo value yahan pass ki hai ("success"),
            // wahi value .then() ke andar milegi
            resolve("success");

            // NOTE:
            // resolve ke baad promise ka state "fulfilled" ho jaata hai
            // Iske baad na resolve dobara chalega, na reject

        }, 3000); // 3000 milliseconds = 3 seconds delay
    });
}

// getpromise ek function hai jo Promise RETURN karta hai
const getpromise = () => {

    // Yahan Promise object create ho raha hai
    // resolve → success ke liye
    // reject  → failure ke liye
    return new Promise((resolve, reject) => {

        // Ye line turant execute hogi
        console.log("i am a promise");

        // resolve ka matlab:
        // Promise successfully complete ho gaya
        // Jo value yahan di ("done promise resolve")
        // wahi value .then() me milegi
        resolve("done promise resolve");
        // agar mai yaha pr reject("error")-> likh du toh PROMISE CONSUMPTION kabhi print nahi hoga  for resolve 

            // console.log("the promise has some error");
            // reject("error found")
             
            /*Ek Promise me resolve() ya reject() me se sirf PEHLA call hi effective hota hai
Uske baad ka code Promise ke result ko change nahi karta
➡️ resolve() ke baad Promise already fulfilled ho chuka hai
➡️ reject() ignore ho jaata hai
➡️ Promise kabhi reject state me ja hi nahi sakta*/

    });
};


// ---------------- PROMISE CONSUMPTION ----------------

// getpromise() call kar rahe hain
// Ye ek Promise return karega
getpromise()

    // .then() tab execute hota hai
    // jab Promise resolve() hota hai
    .then((result) => {

        // result wahi value hai
        // jo resolve() me pass hui thi
        console.log(".then executed successfully");
        console.log("Result:", result); // isme woh result aayega jo humne resolve hote time pass kiya tha done promise resolve
    });

//    getpromise() .catch((error)=>{
//         console.log("rejected");
//         console.log("error",error);
        
    // })
// Creating a Promise object
// Promise ke constructor me ek function hota hai
// jisme resolve (success) aur reject (failure) milta hai
const mypromise = new Promise((resolve, reject) => {

    // Condition decide karegi promise resolve hoga ya reject
    const success = true;

    // Agar condition true hai
    if (success) {
        // resolve() call hone ka matlab:
        // promise successfully complete ho gaya
        resolve("code runs ");
    } 
    // Agar condition false hoti
    else {
        // reject() call hone ka matlab:
        // promise fail ho gaya
        reject("code not runs ");
    }
});

// .then() tab execute hota hai jab promise resolve hota hai
mypromise.then((result) => {

    // Ye line confirm karti hai ki .then() chala
    console.log(".then executed sucessfully");

    // resolve() ke andar jo value pass ki thi
    // wahi value yaha result me milti hai
    console.log(result);
})

// .catch() tab execute hota hai jab promise reject hota hai
.catch((error) => {

    // Ye line batati hai ki koi error aaya hai
    console.log("there is some error");

    // reject() ke andar jo value pass ki thi
    // wahi value yaha error me milti hai
    console.log(error);
});


    
//================================PROMISE CHAINING=================================

// ================= ASYNC FUNCTION 1 =================

// https://medium.com/codex/javascript-async-await-javascript-interview-questions-10-e51629bef827

// asyncfunc1 ek function hai jo Promise RETURN karta hai
// Iska kaam: 3 sec delay ke baad "success 1" dena
function asyncfunc1() {

    // Naya Promise object create ho raha hai
    // resolve → jab kaam successful ho
    // reject  → jab kaam fail ho (abhi use nahi kiya)
    return new Promise((resolve, reject) => {

        // setTimeout asynchronous operation hai
        // JavaScript yahan wait nahi karega
        // Timer background (Web API) me chala jaayega
        setTimeout(() => {

            // 3 seconds ke baad ye line execute hogi
            console.log("promise 1 executed after 3 sec");

            // resolve() ka matlab:
            // Promise successfully complete ho gaya
            // Jo value yahan pass hui ("success 1")
            // wahi value .then() ke callback me milegi
            resolve("success 1");

            // NOTE:
            // resolve ke baad Promise ka state "fulfilled" ho jaata hai
            // Iske baad reject ya resolve dobara kaam nahi karega

        }, 3000); // 3000 ms = 3 seconds
    });
}

// ================= ASYNC FUNCTION 2 =================

// asyncfunc2 bhi ek function hai jo Promise RETURN karta hai
// Iska kaam: asyncfunc1 ke baad execute hona
function asyncfunc2() {

    // Promise create ho raha hai
    return new Promise((resolve, reject) => {

        // Asynchronous delay
        setTimeout(() => {

            // 3 seconds ke baad execute hoga
            console.log("promise 2 executed after 3 sec");

            // Promise resolve ho raha hai
            // Ye value second .then() ko milegi
            resolve("success 2");

        }, 3000);
    });
}

// ================= FETCHING DATA =================

// Ye line turant print hogi
// Iska async kaam se koi lena-dena nahi
console.log("FETCHING DATA 1....");

// asyncfunc1() CALL ho raha hai
// Function call hone par hi Promise create hota hai
let p1 = asyncfunc1();

// .then() ek callback function leta hai
// Ye tab execute hota hai jab p1 ka Promise resolve hota hai
p1.then((result) => {
    // Arrow function use hua kyunki:
    // .then() ko ek function chahiye hota hai
    // Arrow function callback likhne ka short & clean syntax hai

    // result wahi value hai
    // jo asyncfunc1 ke resolve() me pass hui thi
    console.log(result);

    // Ye tab print hoga jab DATA 1 aa chuka hoga
    console.log("FETCHING DATA 2...(IT WILL COME AFTER DATA 1)");

    // asyncfunc2() CALL ho raha hai
    // Isse second Promise create hota hai
    let p2 = asyncfunc2();

    // Second Promise ka .then()
    // Ye tab execute hoga jab asyncfunc2 resolve hoga
    p2.then((result) => {

        // result = "success 2"
        console.log(result);

    });
});

getdata(1)
.then((result)=>{
    console.log(result);
    console.log("for data 2");
    
getdata(2).then((result)=>{
    console.log("for data 2");
    
})
})

//OR 

// Pehla asynchronous kaam start ho raha hai
// getData(1) ek Promise return karta hai
getData(1)

  // Ye .then() tab execute hota hai
  // jab getData(1) ka Promise resolve ho jaata hai
  .then((res) => {

      // res = getData(1) ka result
      // Yahan hum res ko use nahi kar rahe,
      // kyunki hume next async kaam start karna hai

      // IMPORTANT:
      // getData(2) bhi ek Promise return karta hai
      // return likhne ka matlab:
      // agla .then() tabhi chale
      // jab getData(2) complete ho jaaye
      return getData(2);
  })

  // Ye second .then() tab execute hota hai
  // jab getData(2) ka Promise resolve hota hai
  .then((res) => {

      // res = getData(2) ka result
      // Ye final async operation ka output hai
      console.log(res);
  });


//================================ASYNC & AWAIT=================================

// BASIC SYNTAX

function api(){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("weather data");
        resolve(200);
    })
},2000)
}

async function getwetherdata(){
    await api ()//1st call  // await api can only run on async function 
    await api ()//2nd call
}


// USAGE ON GET DATA FUNCTION 
    async function getalldata(){
        console.log("getting data 1...");
        
        await getdata(1);
            console.log("getting data 2...");

        await getdata(2)
            console.log("getting data 3...");

        await getdata(3)
    }

getalldata();// calling the function 

function newdata(data){
    return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("data",data);
                resolve("success")
            },1000)
            
    })
}
/*await kisi Promise ke resolve hone ka wait karta hai
aur us Promise ki resolved value return karta hai.


“Jab tak getdata(1) ka kaam complete na ho jaaye,
is function ke aage ka code mat chalao.”

⚠️ Sirf ye function rukta hai, poora JavaScript nahi.


*/
async function getallldata(){
console.log("fetching data 1....");
let p1 = await newdata (1)
console.log(p1);

console.log("fetching data 2....");
let p2 = await newdata (2)
console.log(p2);

console.log("fetching data 3....");
let p3 = await newdata (3)
console.log(p3);

console.log("fetching data 4....");
let p4 = await newdata (4)
console.log(p4);

}

getallldata()

/**data 1
success
data 2
success
data 3
success
data 4
success
 */

//================================IIFE=================================

/*
IIFE ek function hota hai jo define hote hi turant execute ho jaata hai. 

SYNTAX:
(function () {
    console.log("Hello");
})();

*/
(async function () {
     console.log("getting data 1...");
    
    await getdata(1);
        console.log("getting data 2...");

    await getdata(2)
        console.log("getting data 3...");

    await getdata(3)
})();