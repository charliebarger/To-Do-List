import {addStorageTasks, checkForTasksOfSameName} from "./storage"
import {validateFormIsNotBlank, resetTextfield, clearInput} from "./projectTextfield"

// function addTaskListner() {
//     let newTask = document.getElementById('addTaskForm')
//     newTask.addEventListener('submit', (e) => {
//         let taskValue = document.getElementById('addTaskInput').value
//         if (taskValue){
//             addStorageTasks(getSelectedFolderName(), taskValue)
//         }
//     })
// }

export function addTaskListner() {
    let task = document.getElementById('addTaskInput')
    let addButton = document.getElementById("addTaskButton")
    addButton.addEventListener('click', function(e){
        addInputedProject(e, task)
    })
    task.addEventListener('keydown', function(e){
        if(e.key == 'Enter'){
            addInputedProject(e, task)
        }
    })
}

function addInputedProject(event, textField) {
    if(validateFormIsNotBlank(textField, checkForTasksOfSameName)){
        addStorageTasks(textField.value)
        resetTextfield(textField, event)
    }
    else if(checkForTasksOfSameName(textField.value)){
        resetTextfield(textField, event)
        alert('This Task Already Exists')
    }
    else{
        console.log('here')
        clearInput(textField)
    }
}
