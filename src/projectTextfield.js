import {createSelectedFolder} from "./createNewProject"
import {setLocalStorageProject} from "./storage"

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
        createSelectedFolder(textField.value)
        setLocalStorageProject(textField.value)
        clearInput(textField)
        event.preventDefault()
    }
}

function clearInput(textField) {
    textField.value = '';
}

