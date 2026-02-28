const buttons=document.querySelectorAll('.add-task');
console.log(buttons)

buttons.forEach(function(button){
    button.addEventListener('click',()=>{
        const text=prompt('Enter task name')
        if(!text) return;

        const task=document.createElement('div')
        task.className='task'
        task.draggable=true

        const span = document.createElement('span')
        span.textContent=text

        const deletebtn=document.createElement('button');
        deletebtn.textContent='❌'
        deletebtn.className='delete-btn'

        task.appendChild(span);
        task.appendChild(deletebtn);
        const column=button.parentElement
        const taskList=column.querySelector('.task-list')
        taskList.append(task)
    })
})

const columns= document.querySelectorAll('.column')

let dragTask=null;

document.addEventListener('dragstart',function(event){
    if(event.target.classList.contains('task')){
        console.log(event.target)
        dragTask=event.target 
    }
})

columns.forEach(function(col){
    col.addEventListener('dragover',function(event){
        event.preventDefault();

    })
    col.addEventListener('drop',function(event){
        event.preventDefault();
        if(dragTask){
              const taskList = col.querySelector('.task-list');
              taskList.appendChild(dragTask)
              console.log(taskList)
              dragTask = null;
        }
    })
})