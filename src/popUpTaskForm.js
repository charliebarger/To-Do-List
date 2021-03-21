import {addStorageTasks, appendLastStorageTask, getTaskValues as currentTaskvalues, loadTasks, ammendTaskValues} from "./storage"
import {removeImage, removeTasks} from "./taskSection"

let taskPopUp = document.getElementById("task-form")
let editSwitch = false
let index;

function addTaskButtonListner() {
    openFormListner()
    closeFormListners()
    submitFormListner()
}

//if cancel button or anywhere on the project nav bar is clicked exit the form
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

//submit either a new task or edit an old one
function submitFormListner() {
    taskPopUp.addEventListener('submit', function(e){
        let tasks = getTaskInputs()
        if (tasks.taskName.value && !editSwitch){
            addTasks()
        }
        else if (tasks.taskName.value && editSwitch){
            editTasks(tasks)
        }
        exitTaskForm(e)
    })
}

function addTasks(){
    removeImage()
    let tasks = getTaskValues()
    addStorageTasks(tasks.taskName, tasks.dueDate, tasks.priority, tasks.description)
    appendLastStorageTask()
}

function editTasks(tasks) {
    ammendTaskValues(index, tasks.taskName.value, tasks.dueDate.value, tasks.priority.value, tasks.description.value)
    removeTasks()
    loadTasks()
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
    tasks.taskName.value = '';
    tasks.dueDate.value = '';
    tasks.description.value = '';
    tasks.priority.value = 1;
}

//opens New Task Form on click of Add Button (bottom left of task section)
function openFormListner() {
     let addButton = document.getElementById("add-task-button")
     addButton.addEventListener('click', () => {
        editSwitch = false
        document.querySelector("#task-form > h4").textContent = "New Task"
        toggleTaskFormUI()
    })
}

//opens taskForm and places values of task that are being edited as values in the textfield.
//changes header from "New Project" to "Edit Project"
function editDefaultValues(number) {
    index = number
    let textBox = getTaskInputs()
    let selectedtask = currentTaskvalues(index);
    textBox.taskName.value = selectedtask.taskName
    textBox.dueDate.value = selectedtask.dueDate
    textBox.priority.value = selectedtask.priority
    textBox.description.value = selectedtask.description
    toggleTaskFormUI()
    document.querySelector("#task-form > h4").textContent = "Edit Task"
    editSwitch = true
}

//loops through getTaskinputs and changes the value to th textfield value
function getTaskValues() {
    let tasks = getTaskInputs()
    let keys = Object.keys(tasks)
    keys.forEach(key => {
        tasks[key] = tasks[key].value
    })
    return(tasks)
}

function getTaskInputs(){
    let taskName = document.getElementById("task-name")
    let dueDate = document.getElementById("task-due-date")
    let priority = document.getElementById("task-priority")
    let description = document.getElementById("task-description")
    return {taskName, dueDate, priority, description}   
}

export{addTaskButtonListner, editDefaultValues}