const todo_control = document.querySelector('.todo-control'),
header_input = document.querySelector('.header-input'),
todo_list = document.querySelector('.todo-list'),
todo_comleted = document.querySelector('.todo-completed');
btn = document.querySelector('.header-button')


let todo_data = [
    {
        value: 'Task1',
        completed: true
    },
    {
        value: 'Task2',
        completed: false
    }
];

function addToDo(){
    todo_comleted.textContent = '';
    todo_list.textContent = '';
    todo_data.forEach(function(item, i, arr) {
        let li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML = `<span class="text-todo">${item.value}</span>
        <div class="todo-buttons">
            <button class="todo-remove"></buton>
            <button class="todo-complete"></buton>
        </div>`;
        if(item.completed === true){
            todo_comleted.append(li);
        } else{
            todo_list.append(li);
        }
        const btn_todo_complete = li.querySelector('.todo-complete');
        btn_todo_complete.addEventListener('click', function(){
            item.completed = !item.completed;
            addToDo();
        });

        const btn_todo_remove = li.querySelector('.todo-remove');
        btn_todo_remove.addEventListener('click', function(){
            todo_data.splice(i, 1);
            addToDo();
            console.log(arr);
        })
        
    });

}

addToDo();

btn.addEventListener('click', function(){
    if(header_input.value !== ''){
        let new_todo = {value: header_input.value, completed: false};
        todo_data.push(new_todo);
        addToDo();
        console.log(todo_data);
    }
    console.log(1);
})