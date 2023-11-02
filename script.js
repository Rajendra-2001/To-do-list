const todoList = [
  { 
    item: "Buy Milk",
    dueDate: "01/11/2023"
  },
  
];

const inputElement = document.querySelector("#todo-input");
const dateElement = document.querySelector("#todo-date");
const containerElement = document.querySelector(".todo-container");

displayItems();

function addTodo() {
  const todoItem = inputElement.value;
  const todoDate = dateElement.value;
  todoList.push({ item: todoItem, dueDate: todoDate });
  
  inputElement.value = "";
  dateElement.value = "";
  displayItems();
}

function deleteItem(index) {
  if (index >= 0 && index < todoList.length) {
    todoList.splice(index, 1);
    displayItems();
  }
}

function displayItems() {
  const newHtml = todoList.map((item, index) => `
    <span>${item.item}</span>
    <span>${item.dueDate}</span>
    <button class="btn-Del" onclick="deleteItem(${index})">Delete</button>
  `).join('');

  containerElement.innerHTML = newHtml;
}
