let todoField = document.querySelector('.todoField');
let addTodo = document.querySelector('.addTodo');
let todoList = document.querySelector('.todoList');
let searchField = document.querySelector('.searchField');

let todos =[{
    name: 'todo1',
    isDone: false,
    show: true,
}, {
    name: 'todo2',
    isDone: true,
    show: true,
}];

addTodo.addEventListener('click', addTodos);
todoField.addEventListener('keypress', addOnEnter);
searchField.addEventListener('input', search);
todoField.focus();
renderTodos();

function search(e) {
    let searchValue = e.target.value;
    todos.forEach((todo, index) => {
        if (todo.name.indexOf(searchValue) !== -1) {
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
    }
    todoField.focus();
    todos.push({
        name: todoField.value,
        isDone: false,
        show: true,
    });
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
    let checkBoxes = document.querySelectorAll('.todoList input[type="checkbox"]');
    checkBoxes.forEach((checkBox, index) => {
        checkBox.addEventListener('change', (e) => {
            todos[index].isDone = e.target.checked;
        });
    });
};

function getTodoHtml(todoObj, index) {
    let Html = `
        <li style="display:${todoObj.show ? 'block' : 'none'}">
            <span>${todoObj.name}</span> 
            <div class="controls">
                <input type="checkbox" class="checkbox_${index}" ${todoObj.isDone ? 'checked' : ''} />
                <button class="button_${index}">
                    remove
                </button>
            </div>
        </li>
    `;
    return Html;
};

