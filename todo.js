// Selectors
document.querySelector('form').addEventListener('submit', handleSubmitForm);
document.querySelector('ul').addEventListener('click', handleClickDeleteOrCheck);
document.getElementById('clearAll').addEventListener('click', handleClearAll);

// Handle submissions
function handleSubmitForm(e) {
    e.preventDefault();
    let input = document.querySelector('input');
    if (input.value != '')
        addToDo(input.value);
    input.value = '';
}

function handleClickDeleteOrCheck(e) {
    if (e.target.name == 'check')
        checkToDo(e);
    
    if (e.target.name == 'delete')
        deleteToDo(e);
}

function handleClearAll(e) {
    document.querySelector('ul').innerHTML = '';
}

// Helper functions
function addToDo(todo) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');

    li.innerHTML = `
        <span class="todo-item">${todo}</span>
        <button name="check"><i class="fas fa-check-square"></i></button>
        <button name="delete"><i class="fas fa-trash"></i></button>
    `;
    li.classList.add('todo-list-item');
    ul.appendChild(li);
}

function checkToDo(e){
    let item = e.target.parentNode;
    if (item.style.textDecoration == 'line-through')
        item.style.textDecoration = 'none';
    else 
        item.style.textDecoration = 'line-through';
}

function deleteToDo(e) {
    let item = e.target.parentNode;
    item.remove()
}