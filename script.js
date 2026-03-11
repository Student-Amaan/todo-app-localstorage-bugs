const inputField = document.querySelector("#input-field");
const addBtn = document.querySelector("#add-task-btn");
const addtask = document.querySelector("add-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

tasks.forEach((task) => randerTask(task))

addBtn.addEventListener("click", () => {
  const inputText = inputField.value.trim();
  if (inputText === "") return;

  const newTask = {
    id: Date.now(),
    
    Text: inputText,
    completed: false,
  };

  tasks.push(newTask);
  setItems()
  inputField.value = "";
  console.log(tasks);
});

function randerTask(task){
    console.log(task)
}

function setItems(){
    localStorage.setItem("tasks", JSON.stringify(tasks))
}
