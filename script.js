// Function to add a new todo item
function addTodo() {
    var todoInput = document.getElementById("todoInput");
    var todoList = document.getElementById("todoList");
    const taskValue = todoInput.value.trim();
    if (taskValue === '') return;
    // Create a new list item with user input
    var li = document.createElement("li");
    li.textContent = todoInput.value;
  
    // Create a button to remove the todo item
    var removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");
    removeButton.addEventListener("click", function(event) {
      event.stopPropagation(); // Prevent li click event from firing
      li.remove();
    });
    li.appendChild(removeButton);
  
    // Add click event listener to mark item as completed
    li.addEventListener("click", function() {
      this.classList.toggle("completed");
      // If item is marked completed, move it to the bottom of the list
      if (this.classList.contains("completed")) {
        todoList.appendChild(this);
      }
    });
  
    // Append the new todo item to the list
    todoList.appendChild(li);
  
    // Clear the input field after adding todo
    todoInput.value = "";
  }
  document.getElementById('todoInput').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTodo();
    }
});  