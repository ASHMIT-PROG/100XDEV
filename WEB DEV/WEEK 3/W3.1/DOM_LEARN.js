 console.log(document);
//FETCHING ELEMENTSQ
function addtodo(){
const value = document.querySelectorAll("input").value;
const dwsfs = document.querySelectorAll(".todo")
console.log(dwsfs);
console.log(value);
}

/*When you call addtodo(), it fetches the current text in the input field and logs it.
You would typically trigger this function with a button click (like: <button onclick="addtodo()">).
*/

/*
| Situation                                            | Use         | Example                                                     |
|------------------------------------------------------|-------------|-------------------------------------------------------------|
| Changing text/HTML inside tags like <h1>, <p>, <div> | innerHTML   | document.querySelector("h1").innerHTML = "New Text";        |
| Reading/writing data in <input>, <textarea>, <select>| value       | document.getElementById("myInput").value = "New Value";     |
| Displaying formatted HTML content                    | innerHTML   | document.querySelector("div").innerHTML = "<b>Bold</b>";    |
| Getting user-entered text from an input field         | value       | let name = document.querySelector("input").value;           |
*/


//UPDATING ELEMENTS (set interval)
// let ctr = 0;
// function callback() {
//     document.querySelector("h1").innerHTML = ctr;
//     ctr = ctr + 1;
// }

setInterval(callback, 1000); // Calls callback every 1 second forever

//DELETING ELEMENTS(removeChild)
function deleteTodo(index){
    const element = document.getElementById("todo-"+index);
    element.parentNode.removeChild(element)
}//parent node div ke beech ka cheez
/*
function deleteTodo(index){
    document.getElementById("todoparent').removeChild();
}
 */

//ADD ELEMNTS
//CREATE CHILD
let divel = document.createElement("div")//here i have createed an element div but it will not display its only in the console
divel.innerHTML = "hi hello"//innerhtml :It’s basically your “doorway” into editing the inside of an element — text, images, buttons, other HTML tags, everything.
    //appendChild => here jo maine div element create kiya tha puree document ke liye usko maine body ke andar daal diya
document.querySelector("body").appendChild(divel)
//appendChild() only works on one element => matlab sirf queryselector pe not queryselectorall
