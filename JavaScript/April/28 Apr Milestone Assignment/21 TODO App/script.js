

const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

function addTask() {
    // Get the task from the input field
    const task = taskInput.value;

    // Create a new list item and append it to the list
    const listItem = document.createElement("li");
    listItem.innerText = task;

    // Create a delete button and append it to the list item
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.style.fontWeight = "600";
    deleteBtn.style.padding = "5px,10px"
    deleteBtn.addEventListener("click", () => {
        taskList.removeChild(listItem);
    });
    listItem.appendChild(deleteBtn);

    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = "";
}

addTaskBtn.addEventListener("click", addTask);