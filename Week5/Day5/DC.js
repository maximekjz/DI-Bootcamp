const tasks = [];

let form = document.querySelector('form')
let text = document.querySelector('text')

function addTask(e){
    e.preventDefault();
    let new_task = e.target.elements['task'].value;
    if (new_task ===''){
        alert('Please add a task');
    return;
    }
    tasks.push(new_task);

    const new_task_item = document.createElement('ul');
    new_task_item.textContent = new_task;

    const listTasks = document.querySelector('.listTasks');
    listTasks.appendChild(new_task_item);

    e.target.elements['task'].value = '';

}

form.addEventListener('submit', addTask)
