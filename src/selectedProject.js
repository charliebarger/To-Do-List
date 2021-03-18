import {appendTasks} from "./taskSection"

function selectFirstProject() {
    let projects = document.querySelectorAll('.project-folder')
    if (projects[0]){
        projects[0].classList.add("selected-project")
        projects[0].lastElementChild.classList.add('show-x')
        appendProjectName(projects[0].firstChild.textContent)
    }
    appendTasks()
}

//appends project name to top left of task section
function appendProjectName(projectName) {
    let taskNameWrapper = document.getElementById('selected-task')
    taskNameWrapper.textContent = projectName
}

function getSelectedFolderName() {
    let projects = document.querySelectorAll('.project-folder')
    for(let i = 0; i < projects.length; i++){
        if(projects[i].classList.contains('selected-project')){
            return projects[i].firstChild.textContent
    }
}
}

export {selectFirstProject, appendProjectName, getSelectedFolderName}