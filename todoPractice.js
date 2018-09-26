let todoList = document.querySelector('.todoList');
let todoField = document.querySelector('.todoField');
let addTodo = document.querySelector('.addTodo');

let todos = [];

addTodo.addEventListener('click', addTodos);
todoField.addEventListener('keydown', enterTodos);

todoField.focus();

function addTodos() {
    if(todoField.value === ''){
        todoField.focus();
        return null;
    }
    todoField.focus();
    todoField.value = '';
    todos.push(todoField.value);
    renderTodos();
}
;
function enterTodos(e) {
    let keyCode = e.keyCode;
    if(todoField.value === ''){
        todoField.focus();
        return null;
    } else if(keyCode === 13) {
        todoField.focus();
        todoField.value = '';
        todos.push(todoField.value);
        renderTodos();
    };
};

function renderTodos() {
    let todosHtml = '';
    todos.forEach((text, index) => {
        todosHtml += getTodoHtml(text, index);
    });
    todoList.innerHTML = todosHtml;
    addRemovebutton();
};

function addRemovebutton() {
    let removebuttons = document.querySelectorAll('.todoList button');
    removebuttons.forEach((removeButton, index) => {
        removeButton.addEventListener('click', () => {
            let className = e.target.value;
            let itemIndex = className.split('-')[1];
            todos.splice(itemIndex, 1);
            renderTodos();
        });
    });
};

function getTodoHtml(text, index) {
    let Html = `
        <li>
            <span>${text}</span>
            <div class="button_${index}">
                remove
            </div>
        </li>
    `;
    return Html;
}