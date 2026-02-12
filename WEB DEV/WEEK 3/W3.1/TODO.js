function addtodo() {
    // Getting input values
    const input_value = document.querySelector("input").value;
    const valueadd = document.createElement("div");
    
    // Create the todo item with delete button
    valueadd.innerHTML = `<div>${input_value}</div><button onclick="deleteTodo(this)">delete</button>`;
    
    // Add the todo item to the body
    document.querySelector("body").appendChild(valueadd);
    
    // Clear the input field after adding
    document.querySelector("input").value = "";
}

function deleteTodo(button) {
    // Get the parent div of the delete button
    const todoItem = button.parentNode;
    
    // Remove the todo item from the body using removeChild
    document.querySelector("body").removeChild(todoItem);
}

// Optional: Add functionality to add todo on Enter key press
document.addEventListener("DOMContentLoaded", function() {
    const input = document.querySelector("input");
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addtodo();
        }
    });
});