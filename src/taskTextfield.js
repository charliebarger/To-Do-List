// import {addStorageTasks, checkForTasksOfSameName} from "./storage"
// import {validateFormIsNotBlank, resetTextfield, clearInput} from "./projectTextfield"

// export function addTaskListner() {
//     let task = document.getElementById('addTaskInput')
//     let addButton = document.getElementById("addTaskButton")
//     addButton.addEventListener('click', function(e){
//         addInputedTask(e, task)
//     })
//     task.addEventListener('keydown', function(e){
//         if(e.key == 'Enter'){
//             addInputedTask(e, task)
//         }
//     })
// }

// function addInputedTask(event, textField) {
//     if(validateFormIsNotBlank(textField, checkForTasksOfSameName)){
//         addStorageTasks(textField.value)
//         resetTextfield(textField, event)
//     }
//     else if(checkForTasksOfSameName(textField.value)){
//         resetTextfield(textField, event)
//         alert('This Task Already Exists')
//     }
//     else{
//         console.log('here')
//         clearInput(textField)
//     }
// }
