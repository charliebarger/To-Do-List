let addButton = document.getElementById("add-task-button")
let taskPopUp = document.getElementById("task-form")
let cancelButton = document.getElementById("cancel-button")
let taskBackground = document.getElementById("child-wrapper")
let hideSection = document.getElementById("task-section")
// hide-task-form

export function addTaskButtonListner() {
    addButton.addEventListener('click', () => {
    taskPopUp.classList.remove("hide-task-form")
    taskBackground.classList.add("blur-it")
    hideSection.classList.add("hide-content")
})

    addButton.addEventListener('click', () => {
    cancelButton.addEventListener('click', () => {
        taskPopUp.classList.add("hide-task-form")
        taskBackground.classList.remove("blur-it")
        hideSection.classList.remove("hide-content")
    })
})
}
