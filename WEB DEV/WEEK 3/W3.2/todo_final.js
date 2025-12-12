

function addtodo() {
  // 1. Get input value
  const input_val = document.querySelector("input").value;

  // 2. Create span and set its text
  const newspan = document.createElement("span");
  newspan.innerHTML = input_val;

  // 3. Create delete button
  const newbutton = document.createElement("button");
  newbutton.innerHTML = "delete";

  // 4. Create a div and put span + button inside it
  const divel = document.createElement("div");
  divel.appendChild(newspan); 
  divel.appendChild(newbutton);

  // 5. Add the div to the body
  document.querySelector("body").appendChild(divel);
}
