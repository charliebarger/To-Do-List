import {addStorageTasks} from "./storage"
function selectFirstProject() {
    let projects = document.querySelectorAll('.project-folder')
    if (projects[0]){
        projects[0].classList.add("selected-project")
        projects[0].lastElementChild.classList.add('show-x')
    }
    appendTaskName(projects[0].firstChild.textContent)
}

function appendTaskName(projectName) {
    let taskNameWrapper = document.getElementById('selected-task')
    taskNameWrapper.textContent = projectName
}

function getSelectedFolderName() {
    let projects = document.querySelectorAll('.project-folder')
    for(let i = 0; i < projects.length; i++){
        if(projects[i].classList.contains('selected-project')){
            console.log('got it')
            return projects[i].firstChild.textContent
    }
}
}

function addTaskListner() {
    let newTask = document.getElementById('addTaskForm')
    newTask.addEventListener('submit', (e) => {
        e.preventDefault()
        let taskValue = document.getElementById('addTaskInput').value
        console.log(taskValue)
        if (taskValue){
            addStorageTasks(getSelectedFolderName(), taskValue)
        }
    })
}

function addTasks(project, task){
    console.log(project.textContent)
    addStorageTasks(project.textContent, task)
}

export {selectFirstProject, appendTaskName, addTaskListner}