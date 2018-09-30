let todoField = document.querySelector('.todoField');
let addTodo = document.querySelector('.addTodo');
let todoList = document.querySelector('.todoList');

let todos =[];

addTodo.addEventListener('click', addTodos);
todoField.addEventListener('keypress', addOnEnter);
todoField.focus();

function addOnEnter(e) {
    let keyCode = e.keyCode;
    if (todoField.value === '') {
        todoField.focus();
        return null;
    } else if (keyCode === 13) {
        todoField.focus();
        todos.push(todoField.value);
        todoField.value = '';
        renderTodos();
    };
};

function addTodos() {
    if (todoField.value === '') {
        todoField.focus();
        return null;
    }
    todoField.focus();
    todos.push(todoField.value);
    todoField.value = '';
    renderTodos();
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
            <input type="checkbox" />
                <button class="button_${index}">
                    remove
                </button>
            </div>
        </li>
    `;
    return Html;
};

