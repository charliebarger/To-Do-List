import {createSelectedFolder} from "./createNewProject"
import {setLocalStorageProject, checkForFoldersOfSameName} from "./storage"
import{appendTasks} from "./taskSection"

//attempts to pass validation and create project on Enter or click of Add Button
export function callAddProjectListner() {
    let project = document.getElementById('add-project')
    let addButton = document.getElementById("add-project-button")
    addButton.addEventListener('click', function(e){
        validateProjectForm(e, project)
    })
    project.addEventListener('keydown', function(e){
        if(e.key == 'Enter'){
            validateProjectForm(e, project)
        }
    })
}

//checks that input is not blank and project name doesnt already exist, if not the project is added
function validateProjectForm(event, textField) {
    if(validateFormIsNotBlank(textField, checkForFoldersOfSameName)){
        addProject(textField, event)
    }
    else if(checkForFoldersOfSameName(textField.value)){
        alert('This Project Folder Already Exists')
        resetTextfield(textField, event)
    }
    else{
        clearInput(textField)
    }
}

function addProject(textField, event) {
    setLocalStorageProject(textField.value)
    createSelectedFolder(textField.value)
    resetTextfield(textField, event)
    appendTasks()
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
