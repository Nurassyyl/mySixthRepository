'use strict';

const todoControl = document.querySelector(".todo-control");
const headerInput = document.querySelector(".header-input");
const todoList = document.querySelector(".todo-list");
const todoCompleted = document.querySelector(".todo-completed");

const parse = JSON.parse(localStorage.getItem("text"));

if (parse) {
    const render = function () {
        todoList.innerHTML = "";
        todoCompleted.innerHTML = "";
        parse.forEach(function (item) {
            const li = document.createElement("li");
            li.classList.add("todo-item");
            li.innerHTML = '<span class="text - todo">' + item.text + '</span>' +
                '<div class="todo-buttons">' +
                '<button class="todo-remove"></button>' +
                '<button class="todo-complete"></button>' +
                '</div>';

            if (item.completed) {
                todoCompleted.append(li);
            } else {
                todoList.append(li);
            }

            li.querySelector(".todo-complete").addEventListener('click', function () {
                item.completed = !item.completed;
                render();
            });
        });
    };
    render();
}


todoControl.addEventListener('submit', function (event) {
    if (headerInput.value) {
        event.preventDefault();
        localStorage.setItem("text", JSON.stringify([...parse || "", { text: headerInput.value, completed: false }]));
        headerInput.value = '';
    }
});

