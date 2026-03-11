document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.querySelector("#input-field");
  const addBtn = document.querySelector("#add-task-btn");
  const addtask = document.querySelector("#add-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => randerTask(task));

  addBtn.addEventListener("click", () => {
    const inputText = inputField.value.trim();
    if (inputText === "") return;

    const newTask = {
      id: Date.now(),

      Text: inputText,
      completed: false,
    };

    tasks.push(newTask);
    setItems();
    inputField.value = "";
    console.log(tasks);
  });

  function randerTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    li.innerHTML = `<span>${task.Text}</span>
      <button>delete</button>
      `;
    addtask.appendChild(li);
  }

  function setItems() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
