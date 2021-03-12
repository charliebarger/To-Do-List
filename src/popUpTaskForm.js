import {addStorageTasks} from "./storage"
import {createTask} from "./createNewTask"

let taskPopUp = document.getElementById("task-form")

// hide-task-form

export function addTaskButtonListner() {
    openFormListner()
    closeFormListners()
    submitFormListner()
}

function closeFormListners() {
    let navBar = document.querySelector("nav")
    let cancelButton = document.getElementById("cancel-button")
    cancelButton.addEventListener('click', (e) => {
        exitTaskForm(e)
    })
    navBar.addEventListener('click', (e) => {
        if(!taskPopUp.classList.contains('hide-task-form')){
            exitTaskForm(e)
        }
    })
}

function submitFormListner() {
    taskPopUp.addEventListener('submit', function(e){
        let tasks = getTaskInputs()
        if (tasks.taskName.value){
            addTasks()
            exitTaskForm(e)
        }
    })
}

function openFormListner() {
     let addButton = document.getElementById("add-task-button")
     addButton.addEventListener('click', () => {
        toggleTaskFormUI()
    })
}

function getTaskValues(value) {
    let tasks = getTaskInputs()
    let keys = Object.keys(tasks)
    keys.forEach(key => {
        tasks[key] = tasks[key].value
    })
    return(tasks)
}

function addTasks(){
    let tasks = getTaskValues()
    createTask(tasks.taskName, tasks.dueDate, tasks.priority, tasks.description)
    addStorageTasks(tasks.taskName, tasks.dueDate, tasks.priority, tasks.description)
}

function getTaskInputs(){
    let taskName = document.getElementById("task-name")
    let dueDate = document.getElementById("task-due-date")
    let priority = document.getElementById("task-priority")
    let description = document.getElementById("task-description")
    return {taskName, dueDate, priority, description}   
}

function exitTaskForm(event) {
    event.preventDefault()
    toggleTaskFormUI()
    clearForm()
}

function toggleTaskFormUI() {
    taskPopUp.classList.toggle("hide-task-form")
    document.getElementById("child-wrapper").classList.toggle("blur-it")
    document.getElementById("task-section").classList.toggle("hide-content")
}

function clearForm() {
    let tasks = getTaskInputs()
    console.log(tasks.taskName)
    tasks.taskName.value = '';
    tasks.dueDate.value = '';
    tasks.description.value = '';
    tasks.priority.value = 0;
}
