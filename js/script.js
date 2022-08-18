const todoControl = document.querySelector(".todo-control");
const headerInput = document.querySelector(".header-input");
const todoList = document.querySelector(".todo-list");
const todoCompleted = document.querySelector(".todo-completed");

const toDoData = [];


const render = function () {
    todoList.innerHTML = "";
    todoCompleted.innerHTML = "";
    toDoData.forEach(function (item) {
        const li = document.createElement("li");
        li.classList.add("todo-item");
        li.innerHTML = '<span class="text - todo">' + item.text + '</span>' +
            '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
            '</div>';

        if (item.completed) {
            todoList.append(li);
        } else {
            todoCompleted.append(li);
        }

        li.querySelector(".todo-complete").addEventListener('click', function () {
            item.completed = !item.completed;
            render();
        });
    });
};



todoControl.addEventListener('submit', function (event) {
    if (headerInput.value) {
        event.preventDefault();
        localStorage.setItem('name', headerInput.value),
            localStorage.setItem('completed', false);
        const newtodo = {
            text: localStorage.getItem('name'),
            completed: localStorage.getItem('completed')
        };
        toDoData.push(newtodo);
        headerInput.value = '';
        render();
        console.log(toDoData);
    }
});


// const li = document.createElement("li");
// li.classList.add("todo-item");
// li.innerHTML = '<span class="text - todo">' + localStorage.getItem('name') + '</span>' +
//     '<div class="todo-buttons">' +
//     '<button class="todo-remove"></button>' +
//     '<button class="todo-complete"></button>' +
//     '</div>';
// if (localStorage.getItem('completed')) {
//     todoList.append(li);
// } else {
//     todoCompleted.append(li);
// }
