import {loopItems, updateFolders, updateProjectFoldersList} from "./Projectfolders"
import {createNewFolder} from "./createNewProject"
import {addNewFolder, getStorageItems} from "./localStorage"

export function callAddProjectListner() {
    let project = document.getElementById('add-project')
    let addButton = document.getElementById("add-project-button")

    addButton.addEventListener('click', function(e){
        addInputedProject(e, project)
})
    project.addEventListener('keydown', function(e){
    if(e.key == 'Enter'){
        addInputedProject(e, project)
    }
})
}

function addInputedProject(event, textField) {
    if (textField.value){
        addNewFolder(textField.value)
        getStorageItems()
        //delete all current projects and delete selection classes
        // loopItems(updateProjectFoldersList())
        // createNewFolder(textField.value)
        clearInput(textField)
        // //add event listners to new projects
        // updateFolders()
        event.preventDefault()
    }
}

function clearInput(textField) {
    textField.value = '';
}

