import {loadTasks, removeSelectedTasksFromStorage} from "./storage"

let taskHeader = document.querySelector("#child-wrapper > section.task-header.default-page")

function getTaskWrapper() {
     return document.getElementById('task-wrapper')
}

//remove auto margin from the taskHeader (auto margin is used here to center placeholder image)
function removeCenterImageClass(){
    taskHeader.classList.remove('center-it')
}

function removeTasks() {
    removeCenterImageClass()
    let parent = getTaskWrapper()
    while(parent.firstChild){
        parent.firstChild.remove()
    }
}

//append tasks if loadTask is empty append the placeholder image//
function appendTasks() {
    removeTasks()
    if (!loadTasks()){
        appendPlaceHolder()
    }
}

function createPlaceHolderWrapper() {
    let parent = getTaskWrapper()
    let wrapper = document.createElement('div')
    wrapper.classList.add('task-holder-img-wrapper')
    parent.appendChild(wrapper)
    return wrapper
}

function createPlaceHolderImage() {
    let img = document.createElement('img')
    img.src = "./img/20944361.jpg"
    return img
}

function appendPlaceHolder() {
    let wrapper = createPlaceHolderWrapper();
    let img = createPlaceHolderImage();
    wrapper.appendChild(img)
    taskHeader.classList.add('center-it')
}

function removeImage() {
    let wrapper = document.querySelector("#task-wrapper > div.task-holder-img-wrapper")
    if (wrapper){
        wrapper.remove()
        removeCenterImageClass()
    }
}

//clear selected tasks from local storage and reload tasks on clear button click//
function clearCompleted() {
    let clearCompletedButton = document.querySelector("#child-wrapper > div.min-margin-wrapper > section > div.clear-completed");
    clearCompletedButton.addEventListener('click', () => {
        removeSelectedTasksFromStorage()
        appendTasks()
    })
}

export {appendTasks, removeImage, appendPlaceHolder, clearCompleted, removeTasks}