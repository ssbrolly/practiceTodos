let todoField = document.querySelector('.todoField');
let addTodo = document.querySelector('.addTodo');
let todoList = document.querySelector('.todoList');

let todos = [];

todoField.addEventListener('keypress', enterTodos);
addTodo.addEventListener('click', addTodos);
todoField.focus();

function addTodos() {
    if ( todoField.value === '' ) {
        todoField.focus();
        return null;
    }
    todoField.focus();
    todos.push( todoField.value );
    todoField.value = '';
    renderTodos();
};

function enterTodos(e) {
    let keyCode = e.keyCode
    if ( todoField.value === ''){
        todoField.focus();
        return null;
    } else if ( keyCode === 13 );
    todoField.focus();
    todos.push(todoField.value);
    todoField.value = '';
    renderTodos();
};

function renderTodos() {
    let todosHtml = '';
    todos.forEach((text, index) => {
        todosHtml = getTodoHtml(text, index);
    });
    todoList.innerHTML = todosHtml;
    addRemoveButtonEventListener();
};

function addRemoveButtonEventListener() {
    let removeButtons = document.querySelectorAll('.todoList button')
    removeButtons.forEach((removeButton, index) => {
        removeButton.addEventListener('click', (e) => {
            let className = e.target.value;
            let itemIndex = className.split('_')[1];
            todos.splice(itemIndex, 1);
            renderTodos;
        });
    });
};

function getTodoHtml() {
    let html = `
        <li>
            <span>${text}</span>
            <div ="controls">
                <button class="button_${index}>
                    remove
                </button>
            </div>
        </li>
    `;
    return html;
}
