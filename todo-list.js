const todoList = [{
  name: `make dinner`,
  dueDate: `2024-12-30`
}, {
  name:`wash dishes`,
  dueDate: `2024-10-05`
}]; 

renderTodoList();

function renderTodoList(){
  let todoListHTML = '';

  for(let i = 0; i < todoList.length; i++){
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const {name, dueDate} = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i}, 1);   
        renderTodoList();
      " class="delete-todo-button">Delete</button>
    `;
    //splice() removes an element. It takes two values, first is the index which we want to remve and 2nd is the no. of values we want to remove starting from that particular index.
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}
 
function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector(`.js-due-date-input`);
  const dueDate = dateInputElement.value;

  todoList.push({
    // name: name,
    // dueDate: dueDate
    name,
    dueDate 
  });

  inputElement.value = ''; 

  renderTodoList();
}