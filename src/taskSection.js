import {loadTasks, removeSelectedFromStorage} from "./storage"

function getTaskWrapper() {
     return document.getElementById('task-wrapper')
}

function removeImageStyles(){
    document.querySelector("#child-wrapper > section.task-header.default-page").classList.remove('center-it')
}

function removeTasks() {
    removeImageStyles()
    let parent = getTaskWrapper()
    while(parent.firstChild){
        parent.firstChild.remove()
    }
}

function appendTasks() {
    removeTasks()
    console.log('hi')
     if (!loadTasks()){
         appendPlaceHolder()
     }
}

function appendPlaceHolder() {
    let parent = getTaskWrapper()
    let wrapper = document.createElement('div')
    wrapper.classList.add('task-holder-img-wrapper')
    let img = document.createElement('img')
    img.src = "./img/20944361.jpg"
    wrapper.appendChild(img)
    parent.appendChild(wrapper)
    document.querySelector("#child-wrapper > section.task-header.default-page").classList.add('center-it')
}

function removeImage() {
        console.log('')
        let wrapper = document.querySelector("#task-wrapper > div.task-holder-img-wrapper")
        if (wrapper){
            wrapper.remove()
            document.querySelector("#child-wrapper > section.task-header.default-page").classList.remove('center-it')
        }
}

function clearCompleted(params) {
    let clearCompletedButton = document.querySelector("#child-wrapper > section.add-delete-section > div.clear-completed");
    clearCompletedButton.addEventListener('click', () => {
        removeSelectedFromStorage()
        appendTasks()
    })
}

export {appendTasks, removeImage, appendPlaceHolder, clearCompleted, removeTasks}