// fs.readFile("file.txt", "utf-8", (err, data) => { // this is  async
// //     if (err) {
// //         console.log(err.message);
// //         return;
// //     }
// //     console.log(data);
// // });


// // sync : Blocks execution until the file is read
// // Errors are handled with try...catch

// /*try {
//     // code that may cause an error
// } catch (error) {
//     // runs if an error occurs
// }
//  */

// try{
// var data = fs.readFileSync("file.txt","utf-8");
//     console.log(data);
// }
// catch(err){
//     console.log(err.message);
    
// }


// // NOW fs.writeFilesync() -> Node.js ka synchronous method hai jo file me data likhta hai.
// // Synchronous ka matlab: jab tak file write nahi ho jaati, next line execute nahi hoti.

// try{
//    const new_file =  fs.writeFileSync("file.txt","hello this is a new line",{flag:"a"});
//     console.log("TEXT ADDED SUCCESSFULLY");
    
    
// }
// catch(err){
//         console.log(`error detetcted ${err.message}`);
        
// }



// /*
// Yahaan flag batata hai ki file ke saath kaunsa mode use hoga.

// 🔹 "a" ka matlab → append

// 👉 append = existing file ke end me data add karna
// 👉 purana data delete / overwrite nahi hota

// Example

// File pehle se:

// Line 1
// Line 2


// Code run karne ke baad:

// Line 1
// Line 2
// Hello

// 🔹 Agar { flag: "a" } na likho toh?

// Default flag hota hai "w" (write / overwrite)

// fs.writeFileSync("notes.txt", "Hello");


// Result:

// Hello
// ⚠️ Pehle ka sab data gayab ❌
// */