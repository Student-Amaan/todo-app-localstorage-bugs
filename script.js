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
    randerTask(newTask);
    inputField.value = "";
    console.log(tasks);
  });

  function randerTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    if (task.completed) li.classList.add("completed");
    li.innerHTML = `<span>${task.Text}</span>
      <button>delete</button>
      `;
    addtask.appendChild(li);
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      task.completed = !task.completed;
      li.classList.toggle("completed");
      setItems();
    });

    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation();
      tasks = tasks.filter((t) => t.id !== task.id);
      li.remove();
      setItems();
    });
  }

  function setItems() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
