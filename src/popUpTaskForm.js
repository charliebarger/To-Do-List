import {addStorageTasks, appendLastStorageTask, getTaskValues as currentTaskvalues, loadTasks, ammendTaskValues} from "./storage"
import {createTask} from "./createNewTask"
import {removeImage, removeTasks} from "./taskSection"

let taskPopUp = document.getElementById("task-form")
let editSwitch = false
let index;

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
        if (tasks.taskName.value && !editSwitch){
            addTasks()
        }
        else if (tasks.taskName.value && editSwitch){
            ammendTaskValues(index, tasks.taskName.value, tasks.dueDate.value, tasks.priority.value, tasks.description.value)
            removeTasks()
            loadTasks()
        }
        exitTaskForm(e)
    })
}

function submitEditForm(params) {
    
}

function openFormListner() {
     let addButton = document.getElementById("add-task-button")
     addButton.addEventListener('click', () => {
        editSwitch = false
        document.querySelector("#task-form > h4").textContent = "New Task"
        toggleTaskFormUI()
    })
}

function editDefaultValues(number) {
    index = number
    let textBox = getTaskInputs()
    let selectedtask = currentTaskvalues(index);
    console.log(selectedtask.taskName)
    textBox.taskName.value = selectedtask.taskName
    textBox.dueDate.value = selectedtask.dueDate
    textBox.priority.value = selectedtask.priority
    textBox.description.value = selectedtask.description
    toggleTaskFormUI()
    document.querySelector("#task-form > h4").textContent = "Edit Task"
    editSwitch = true
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
    removeImage()
    let tasks = getTaskValues()
    addStorageTasks(tasks.taskName, tasks.dueDate, tasks.priority, tasks.description)
    appendLastStorageTask()
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
    tasks.priority.value = 1;
}

export{editDefaultValues}