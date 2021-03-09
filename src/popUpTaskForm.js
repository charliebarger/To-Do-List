let addButton = document.getElementById("add-task-button")
let taskPopUp = document.getElementById("task-form")
let cancelButton = document.getElementById("cancel-button")
let submitButton = document.getElementById("submit-button")
let taskBackground = document.getElementById("child-wrapper")
let hideSection = document.getElementById("task-section")
let navBar = document.querySelector("nav")
let taskName = document.getElementById("task-name")
let dueDate = document.getElementById("task-due-date")
let priority = document.getElementById("task-priority")
let description = document.getElementById("task-description")
// hide-task-form

export function addTaskButtonListner() {
    addButton.addEventListener('click', () => {
    taskPopUp.classList.remove("hide-task-form")
    taskBackground.classList.add("blur-it")
    hideSection.classList.add("hide-content")
})

    addButton.addEventListener('click', () => {
    cancelButton.addEventListener('click', () => {
        removePopUp()
        clearForm()
    })

    navBar.addEventListener('click', () => {
        if(!taskPopUp.classList.contains('hide-task-form')){
            removePopUp()
        }
    })

    taskPopUp.addEventListener('submit', function(e){
        if (taskName.value){
            clearForm()
            e.preventDefault()
            removePopUp()
        }
    })

})
}

function removePopUp(){
    taskPopUp.classList.add("hide-task-form")
    taskBackground.classList.remove("blur-it")
    hideSection.classList.remove("hide-content")
}

function clearForm() {
    taskName.value = '';
    dueDate.value = '';
    priority.selectedIndex = 0;
    description.value = '';
}
