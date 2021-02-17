import {loopItems, updateFolders, updateProjectFoldersList} from "./Projectfolders"
import {createNewFolder} from "./createNewProject"

export function callAddProjectListner() {
    let project = document.getElementById('add-project')
    project.addEventListener('keydown', function(e){
    if(e.key == 'Enter'){
        addInputedProject(project)
    }
})
}

function addInputedProject(textField) {
        //delete all current projects and delete selection classes
        loopItems(updateProjectFoldersList())
        createNewFolder(textField.value)
        clearInput(textField)
        //add event listners to new projects
        updateFolders()
}

function clearInput(textField) {
    textField.value = '';
}