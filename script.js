const main = document.getElementById('root');
const h1 = document.createElement('h1');
h1.textContent = 'To DO LIST';

main.appendChild(h1);

const container = document.createElement('div');
container.setAttribute('class', 'container');
const parent = document.createElement('div');
parent.setAttribute('class', 'parent');

const input_el = document.createElement('input');
input_el.setAttribute('class', 'input');
input_el.setAttribute('type', 'text');
input_el.setAttribute('placeholder', 'Enter your task');

main.appendChild(container);
container.appendChild(parent);
parent.appendChild(input_el);

const button = document.createElement('button');
button.textContent = 'Add Task';
parent.appendChild(button);

button.onclick = function() {

    button.setAttribute('class', 'button');
    const value = input_el.value;
    const list = document.createElement('div');
    list.textContent = value;
    list.setAttribute('class', 'list');
    parent.appendChild(list);
    input_el.value = '';
}

//add a delete button to the tasks list2
const delete_el = document.createElement('button');
delete_el.setAttribute('class', 'button');
delete_el.textContent = 'Delete Task';
parent.appendChild(delete_el);

delete_el.onclick = function() {
    const list2 = document.getElementsByClassName('list');
    list2[0].remove();
}

//set a timer to delete the task after 5 seconds
const timer = document.createElement('button');
timer.setAttribute('class', 'button');
timer.textContent = 'Delete in 1 minute';  
parent.appendChild(timer);

timer.onclick = function() {
    const list3 = document.getElementsByClassName('list');
    setTimeout(function() {
        list3[0].remove();
    }, 5000);
}






