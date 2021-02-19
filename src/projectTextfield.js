import {loopItems, updateFolders, updateProjectFoldersList} from "./Projectfolders"
import {createSelectedFolder} from "./createNewProject"
import {addNewFolder} from "./localStorage"

export function callAddProjectListner() {
    let project = document.getElementById('add-project')
    let addButton = document.getElementById("add-project-button")

    addButton.addEventListener('click', function(e){
        if (project.value){
            addInputedProject(project.value)
            clearInput(project, e)
        }
})
    project.addEventListener('keydown', function(e){
    if(e.key == 'Enter' && project.value){
        addInputedProject(project.value)
        clearInput(project, e)
    }
})
}

function addInputedProject(textField) {
    if (textField){
        addNewFolder(textField)
        //delete all current projects and delete selection classes
        loopItems(updateProjectFoldersList())
        createSelectedFolder(textField)
        //add event listners to new projects
        updateFolders()
    }
}

function clearInput(textField, event) {
    textField.value = '';
    event.preventDefault()
}

