import fs from "fs";

// fs.readFile("file.txt", "utf-8", (err, data) => { // this is  async
//     if (err) {
//         console.log(err.message);
//         return;
//     }
//     console.log(data);
// });


// sync : Blocks execution until the file is read
// Errors are handled with try...catch

/*try {
    // code that may cause an error
} catch (error) {
    // runs if an error occurs
}
 */

try{
var data = fs.readFileSync("file.txt","utf-8");
    console.log(data);
}
catch(err){
    console.log(err.message);
    
}


// NOW fs.writeFilesync() -> Node.js ka synchronous method hai jo file me data likhta hai.
// Synchronous ka matlab: jab tak file write nahi ho jaati, next line execute nahi hoti.

try{
   const new_file =  fs.writeFileSync("file.txt","hello this is a new line",{flag:"a"});
    console.log("TEXT ADDED SUCCESSFULLY");
    
    
}
catch(err){
        console.log(`error detetcted ${err.message}`);
        
}



/*
Yahaan flag batata hai ki file ke saath kaunsa mode use hoga.

🔹 "a" ka matlab → append

👉 append = existing file ke end me data add karna
👉 purana data delete / overwrite nahi hota

Example

File pehle se:

Line 1
Line 2


Code run karne ke baad:

Line 1
Line 2
Hello

🔹 Agar { flag: "a" } na likho toh?

Default flag hota hai "w" (write / overwrite)

fs.writeFileSync("notes.txt", "Hello");


Result:

Hello
⚠️ Pehle ka sab data gayab ❌
*/

//-----------------------------------------process.argv--------------------------------------------------------

/*
Perfect 👍
```js
const command = process.argv[2];   // read / add
const filePath = process.argv[3];  // file.txt
const text = process.argv[4];      // text to add
```

---

# 1️⃣ `process.argv` hota kya hai?

`process` → Node.js ka **global object**
`argv` → **argument vector**

👉 Matlab: **Terminal se Node ko jo arguments milte hain**, wo sab ek **array** me aa jate hain.

---

## Terminal me tum kya likhte ho

```bash
node index.js add file.txt "hello world"
```

Node isko internally **array** bana deta hai 👇

```js
process.argv = [
  "C:\\Program Files\\nodejs\\node.exe", // index 0
  "C:\\project\\index.js",               // index 1
  "add",                                 // index 2
  "file.txt",                            // index 3
  "hello world"                          // index 4
]
```

---

# 2️⃣ Index 0 aur 1 hum kyun ignore karte hain?

| Index | Value         | Kya hai          |
| ----- | ------------- | ---------------- |
| 0     | node.exe path | Node ka location |
| 1     | index.js path | Tumhari script   |
| 2     | REAL input    | User ka command  |
| 3     | REAL input    | File path        |
| 4     | REAL input    | Text             |

👉 **Actual CLI input hamesha index 2 se start hota hai**

---

# 3️⃣ `const command = process.argv[2];`

```js
const command = process.argv[2];
```

### Matlab:

👉 User **kya karna chahta hai**

#### Example:

```bash
node index.js read file.txt
```

```js
command = "read"
```

```bash
node index.js add file.txt "new line"
```

```js
command = "add"
```

👉 Isi wajah se hum likhte hain:

```js
if (command === "read") { ... }
if (command === "add") { ... }
```

CLI ka **decision maker** yahi hai 🧠

---

# 4️⃣ `const filePath = process.argv[3];`

```js
const filePath = process.argv[3];
```

### Matlab:

👉 **Kaunsi file pe kaam karna hai**

```bash
node index.js read file.txt
```

```js
filePath = "file.txt"
```

```bash
node index.js read notes/today.txt
```

```js
filePath = "notes/today.txt"
```

👉 Ab tum hardcode nahi kar rahe
👉 CLI **dynamic** ho gaya 💪

---

# 5️⃣ `const text = process.argv[4];`

```js
const text = process.argv[4];
```

### Matlab:

👉 File me **kya likhna hai**

```bash
node index.js add file.txt "hello world"
```

```js
text = "hello world"
```

⚠️ **Quotes important kyun?**

```bash
node index.js add file.txt hello world
```

Node isko aise samjhega:

```js
process.argv[4] = "hello"
process.argv[5] = "world"
```

Isliye:

```bash
"hello world"
```

✔ ek single argument ban jata hai

---

# 6️⃣ CLI flow samjho (mind map)

```text
Terminal command
      ↓
process.argv array
      ↓
index 2 → kya karna hai (read / add)
index 3 → kis file pe
index 4 → kya likhna hai
      ↓
if / else logic
      ↓
fs.readFileSync / fs.writeFileSync
```

---

# 7️⃣ Agar argument missing ho toh kya?

### Example:

```bash
node index.js add file.txt
```

```js
text = undefined
```

Isliye production CLI me check lagate hain:

```js
if (!command || !filePath) {
    console.log("Usage:");
    console.log("node index.js read <file>");
    console.log('node index.js add <file> "text"');
    process.exit(1);
}
```

---

# 8️⃣ Real-life analogy (easy)

Socho tum restaurant me ho 🍽️

```text
add       → kya order karna hai
file.txt  → kis table pe
text      → khana kaunsa
```

CLI bas **instruction lene ka system** hai.

---

# 9️⃣ One-line summary (exam / interview ready)

> `process.argv` Node.js ka array hota hai jo terminal se aaye huye arguments store karta hai, jisme index 2 se user input start hota hai.

*/



//FINAL CODE FOR RUNNING 

const command = process.argv[2];   // read / add -> user kya karna chata hai 
const filePath = process.argv[3];  // file.txt -> user kiss file me kamm karna chata hai 
const text = process.argv[4];      // text to add->file me kya likhna hai 

// ---------- READ FILE ----------
if (command === "read") {
    try {
        const data = fs.readFileSync(filePath, "utf-8");
        console.log("📄 File Content:\n");
        console.log(data);
    } catch (err) {
        console.log("❌ Error reading file");
        console.log(err.message);
    }
}

// ---------- ADD TEXT ----------
else if (command === "add") {
    try {
        fs.writeFileSync(filePath, text + "\n", { flag: "a" });
        console.log("✅ Text added successfully");
    } catch (err) {
        console.log("❌ Error writing file");
        console.log(err.message);
    }
}

// ---------- INVALID COMMAND ----------
else {
    console.log("❗ Invalid command");
    console.log("Use:");
    console.log("node index.js read file.txt");
    console.log('node index.js add file.txt "your text"');
}
