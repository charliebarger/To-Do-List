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
    addTasks(taskNameWrapper) 
}

function addTasks(project){
    console.log('reached')
    console.log(project.textContent)
    addStorageTasks(project.textContent, 'fuck eat penis')
}

export {selectFirstProject, appendTaskName}