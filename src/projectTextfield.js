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
    if(validateFormIsNotBlank(textField, checkForFoldersOfSameName)){
        setLocalStorageProject(textField.value)
        createSelectedFolder(textField.value)
        resetTextfield(textField, event)
    }
    else if(checkForFoldersOfSameName(textField.value)){
        resetTextfield()
        alert('This Project Folder Already Exists')
    }
    else{
        clearInput(textField)
    }
}

function validateFormIsNotBlank(textField, validationFunction){
      return textField.value.trim().length > 0 && !validationFunction(textField.value) ? true : false
}

function resetTextfield(textField, event) {
    clearInput(textField)
    event.preventDefault()
}

function clearInput(textField) {
    textField.value = '';
}

export {validateFormIsNotBlank, resetTextfield, clearInput}