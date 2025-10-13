const create = document.getElementById("btn1");
const edit = document.getElementById("btn2");
const deleteTask = document.getElementById("btn3");
const taskDiv = document.getElementById("tasks");
const taskCount = document.getElementById("task-count");

function Tasks(nomer, name, description) {
    this.nomer = nomer;
    this.name = name;
    this.description = description;
}

let taskArr = [];

let sum = 0;

create.addEventListener('click', () => {
    const taskName = prompt("Please write your task name");
    const taskDescription = prompt("Please write task descripton");
    sum++;
    const newObj = new Tasks(sum, taskName, taskDescription);
    taskArr.push(newObj);
    taskCount.textContent = `Task Count: ${sum}`;
    taskDiv.innerHTML += `<div class="task"><h1 class="h1">№${sum} Task Name: ${taskName}</h1><p>Task Description:</p> <p>${taskDescription}</p></div>`;
})

edit.addEventListener('click', () => {
    const tNum = prompt("Please write task number for edit");
    const task = taskArr.find(t => t.nomer == tNum);

    if (task) {
        task.name = prompt("Please write new task name")
        task.description = prompt("Please write new task description");

        taskDiv.innerHTML = "";
        taskArr.forEach(t => {
            taskDiv.innerHTML += `<div class="task"><h1 class="h1">№${t.nomer} Task Name: ${t.name}</h1><p>Task Description:</p> <p>${t.description}</p></div>`
        })
    } else {
        alert("Task not defined");
    }
})

deleteTask.addEventListener('click', () => {
    const tNum = prompt("Please write task number for delete");
    taskArr = taskArr.filter(obj => obj.nomer != tNum);
    sum--;
    taskCount.textContent = `Task Count: ${sum}`;

    taskArr.forEach((j, i) => j.nomer = i + 1)

    taskDiv.innerHTML = "";
    taskArr.forEach(t => {
        taskDiv.innerHTML += `<div class="task"><h1 class="h1">№${t.nomer} Task Name: ${t.name}</h1><p>Task Description:</p> <p>${t.description}</p></div>`
    })
})

