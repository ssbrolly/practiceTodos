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

function getTodoHtml(todoObj, index) {
    let html = `
        <li style="display:${todoObj.show ? 'block' : 'none'}">
            <span>${todoObj.name}</span>
            <div class="controls">
                <input type="checkbox" class="checkbox_${index}/>
            </div>
        </li>
    `;
}