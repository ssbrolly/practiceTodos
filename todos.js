let todoField = document.querySelector('.todoField');
let addTodo = document.querySelector('.addTodo');
let todoList = document.querySelector('.todoList');

let todos =[];

addTodo.addEventListener('click', addTodos);

function addTodos(e) {
    todos.push(todoField.value);
    todoField.value = '';
    renderTodos();
    console.log(todos);
};

function renderTodos() {
    let todoHtml = '';
    todos.forEach((todo, index) => {
        todoHtml += getTodoHtml(todo, index);
    }); 
    todoList.innerHTML = todoHtml;
    addRemoveButtonEventListener();
};

function addRemoveButtonEventListener() {
    let removeButtons = document.querySelectorAll('.todoList button');
    removeButtons.forEach((removeButton, index) => {
        removeButton.addEventListener('click', (e) => {
            let buttonClassName = e.target.className;
            let itemIndex = buttonClassName.split('_')[1];
            todos.splice(itemIndex, 1);
            renderTodos();
        });
        
    });
};

function getTodoHtml(text, index) {
    let Html = `
        <li>
            <span>${text}</span> 
            <div class="controls">
                <button class="button_${index}">
                    remove
                </button>
            </div>
        </li>
    `;
    return Html;
};

