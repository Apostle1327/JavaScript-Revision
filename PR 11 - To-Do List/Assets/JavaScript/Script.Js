const todoTasks = document.querySelector("#todo-input");
const taskAppend = document.querySelector("#add-task");
const taskList = document.querySelector("#todo-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const saveTasks = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const createTaskElement = (task, index) => {
  const li = document.createElement("li");
  li.className = task.completed ? "Finished" : "";

  li.innerHTML = `
    <div class="todoText"><textarea cols="38">${task.text}</textarea></div>
    <div>
      <button type="button" data-action="toggle" data-index="${index}">${
    task.completed ? "Pending" : "Completed"
  }</button>
      <button type="button" data-action="delete" data-index="${index}">Delete</button>
    </div>
  `;

  return li;
};

const renderList = () => {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskElement = createTaskElement(task, index);
    taskList.appendChild(taskElement);
  });
};

const handleTaskAction = (event) => {
  const button = event.target;
  const index = button.dataset.index;

  if (button.dataset.action === "toggle") {
    toggleTask(index);
  } else if (button.dataset.action === "delete") {
    deleteTask(index);
  }
};

const addTask = () => {
  const inputText = todoTasks.value.trim();
  if (inputText !== "") {
    tasks.push({ text: inputText, completed: false });
    saveTasks();
    renderList();
    todoTasks.value = "";
  }
};

const toggleTask = (index) => {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderList();
};

const deleteTask = (index) => {
  tasks.splice(index, 1);
  saveTasks();
  renderList();
};

taskAppend.addEventListener("click", addTask);
taskList.addEventListener("click", handleTaskAction);

renderList();
