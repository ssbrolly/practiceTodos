let todoField = document.querySelector('.todoField');
let todoList = document.querySelector('.todoList');
let addTodo = document.querySelector('.addTodo');
let searchField = document.querySelector('.searchField');

let todos = [{
    name: 'todos1',
    isDone: false,
    show: true,
}, {
    name: 'todos2',
    isDone: true,
    show: true,
}];

addTodo.addEventListener('click', addTodos);
todoField.addEventListener('keypress', addOnEnter);
searchField.addEventListener('input', search);
todoField.focus();
renderTodos();

function search(e) {
    let searchField = e.target.value;
    todos.forEach(todo => {
        if (todo.name.indexOf(searchField) !== -1) {
            todo.show = true;
        } else {
            todo.show = false;
        };
    });
    renderTodos();
};

function addOnEnter(e) {
    let keyCode = e.keyCode;
    if (keyCode === 13) {
        addTodos();
    };
};

function addTodos() {
    if (todoField.value === '') {
        todoField.focus();
        return null;
    } else {
        todoField.focus();
        todos.push({
            name: todoField.value,
            isDone: false,
            show: true,
        });
    };
    todoField.value = '';
    renderTodos();
};

function renderTodos() {
    let todoHtml = '';
    todos.forEach((todo, index) => {
        todoHtml += getTodoHtml(todo, index);
    });
    todoList.innerHTML = todoHtml;
}

function getTodoHtml(todoObj, index) {
    let html = `
        <li style="display:${todoObj.show ? 'block' : 'none'}">
            <span>${todoObj.name}</span>
            <div class="controls">
                <input type="checkbox" class="checkbox_${index}" ${todoObj.isDone ? 'checked' : ''}/>
                <button class="button_${index}">
                    remove
                </button>
            </div>
        </li>
    `
    return html;
};