let todoField = document.querySelector('.todofield');
let addTodo = document.querySelector('.addTodo');
let todoList = document.querySelector('.todoList');

let todos = [];

todoField.addEventListener('keypress', enterTodos);
addTodo.addEventListener('click', addTodos);
todoField.focus();

function enterTodos(e) {
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
    } else {
        todoField.focus();
        todos.push(todoField.value);
        todoField.value = '';
        renderTodos();
    };
};

function renderTodos() {
    let todoHtml = '';
    todos.forEach((text, index) => {
        todoHtml += getTodoHtml(text, index);
    });
    todoList.innerHTML = todoHtml;
    addRemoveButtonEventListener();
};

function addRemoveButtonEventListener() {
    let removeButtons = document.querySelectorAll('.todoList button');
    removeButtons.forEach((removeButton) => {
        removeButton.addEventListener('click', (e) => {
            let className = e.target.classname;
            let itemIndex = className.split('_')[1];
            todos.splice(itemIndex, 1);
            renderTodos();
        });
    });
};

function getTodoHtml(text, index) {
    let html = `
        <li>
            <span>${text}</span>
            <div class="control">
                <input type="checkbox" />>
                <button class="button_${index}">
                    remove
                </button>
            </div>
        </li>
    `;
    return html;
};