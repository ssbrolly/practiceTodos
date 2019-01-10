let todoField = document.querySelector('.todoField');
let addTodo = document.querySelector('.addTodo');
let searchField = document.querySelector('.searchField');
let todoList = document.querySelector('.todoList');

let todos =[{
    name: 'todo1',
    isDone: false,
    show: true,
}, {
    name: 'todo2',
    isDone: false,
    show: true,
}];

todoField.addEventListener('keypress', addOnEnter);
addTodo.addEventListener('click', addTodos);
searchField.addEventListener('input', search);
todoField.focus();
renderTodos();

function search(e) {
    let searchValue = e.target.value;
    todos.forEach(todos => {
        if (todos.name.indexOf(searchValue) !== -1) {
            todos.show = true;
        } else {
            todos.show = false;
        };
    });
    renderTodos();
};

function addOnEnter(e) {
    let keyCode = e.keyCode;
    if (keyCode === 13) {
        addTodos();
    }
}

function addTodos() {
    if (todoField.value === '') {
        todoField.focus();
        return null;
    } else {
        todoField.focus();
        todos.push({
            name: todoField.value,
            isdone: false,
            show: true,      
        });
    };
    todoField.value = '';
    renderTodos();
};

function renderTodos() {
    let todoHtml = '';
    todos.forEach((todos, index) => {
        todoHtml += getTodoHtml(todos, index);
    });
    todoList.innerHTML = todoHtml;
    addRemoveButtonEventListener();
};

function addRemoveButtonEventListener() {
    let removeButtons = document.querySelectorAll('.todoList button');
    removeButtons.forEach((removeButton, index) => {
        removeButton.addEventListener('click', (e) => {
            let className = e.target.className;
            let itemIndex = className.split('_')[1];
            todos.splice(itemIndex, 1);
            renderTodos();
        });
    });
    let checkBoxes = document.querySelectorAll('.todoList input[type="checkbox"]')
    checkBoxes.forEach((checkBox, index) => {
        checkBox.addEventListener('change', (e) => {
            todos[index].isDone = e.target.checked;
        });
    });
};

function getTodoHtml(todoObj, index) {
    let html = `
        <li style="display:${todoObj.show ? 'block' : 'none'}">
            <span>${todoObj.name}</span>
            <div class="controls">
                <input type="checkbox" class="button_${index}" ${todoObj.isDone ? 'checked' : ''}/>
                <button class="button_${index}">
                    remove
                </button>
            </div>
        </li>
    `
    return html;
}