import {createSelectedFolder} from "./createNewProject"
import {setLocalStorageProject, checkForFoldersOfSameName} from "./storage"

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
    if(textField.value.trim().length > 0 && !checkForFoldersOfSameName(textField.value)){
        setLocalStorageProject(textField.value)
        createSelectedFolder(textField.value)
        clearInput(textField)
        event.preventDefault()
    }
    else if(checkForFoldersOfSameName(textField.value)){
        clearInput(textField)
        event.preventDefault()
        alert('This Project Folder Already Exists')
    }
    else{
        clearInput(textField)
    }
}

function clearInput(textField) {
    textField.value = '';
}

