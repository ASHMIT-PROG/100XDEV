// find()
const nums =[4,8,12,16]
const find = nums.find(u=>u>10)
console.log(find);

const even = [1,3,5,7]
const even_find = even.find(l=>l%2===0)
console.log(even_find);

//find() use karke "shyam" find karo const names = ["ram", "shyam", "mohan"];

 const names = ["ram", "shyam", "mohan"];
 const name_find = names.find(n=>n=="shyam")
 console.log(name_find);
 
 const users = [
  { id: 101, name: "Aman" },
  { id: 102, name: "Riya" },
  { id: 103, name: "Neha" }
];

const index = users.findIndex(u => u.id === 102);
const user  = users[index];

console.log(user, index);

//filter 

