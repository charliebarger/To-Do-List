import {createSelectedFolder, createNotSelectedFolder} from "./createNewProject"
import {getSelectedFolderName, createNoProjectAlert} from "./selectedProject"
import {createTask} from "./createNewTask"
import {appendPlaceHolder} from "./taskSection"
import { parse } from "date-fns"

//Local Storage Projects

//return formatted local storage tasks, if empty set a default  
function getFolderAndTasks() {
    if(!localStorage.getItem('Projects')){
        localStorage.setItem('Projects',JSON.stringify([{"title": "Chores", "tasks": [{"taskName": "Click Me!", "dueDate" : '', "priority" : 3, "description": "Thanks for checking out my To-Do list! Click the Task Item to see it's description.", "indexNumber" : 1, "selected" : false},{"taskName": "Wash Dishes", "dueDate" : '2021-06-17', "priority" : 1, "description": "Do the Dishes!!!", "indexNumber" : 1, "selected" : false},{"taskName": "Mop Floor", "dueDate" : '2021-06-19', "priority" : 2, "description": "Go Get PineSol", "indexNumber" : 2, "selected" : false},{"taskName": "Take Out Trash", "dueDate" : '2021-03-17', "priority" : 3, "description": "", "indexNumber" : 3, "selected" : true}, {"taskName": "Do Laundry", "dueDate" : '', "priority" : 1, "description": "", "indexNumber" : 4, "selected" : false}, {"taskName": "Clean Bathroom", "dueDate" : '2021-04-17', "priority" : 2, "description": "Clean Toilet and Shower", "indexNumber" : 5, "selected" : false}, {"taskName": "Dusting", "dueDate" : '2021-03-20', "priority" : 2, "description": "Get To Dustin", "indexNumber" : 6, "selected" : true}, {"taskName": "Meal Prep", "dueDate" : '2021-04-21', "priority" : 3, "description": "Make chicken and salad for the work weak", "indexNumber" : 7, "selected" : false}]}, ]))
    }
    let folderTasks = JSON.parse(localStorage.getItem('Projects'))
    return folderTasks
}

function setLocalStorage(itemToSet) {
    localStorage.setItem('Projects', JSON.stringify(itemToSet))
}

//adds a new project to local storage
function setLocalStorageProject(project) {
    let folder = getFolderAndTasks()
    folder.push({"title": project, "tasks": []})
    setLocalStorage(folder)
}

//return the selected local Folder
function getSelectedStorageFolder(localFolder = getFolderAndTasks()) {
    let selectedFolder = getSelectedFolderName()
    for (let i = 0; i < localFolder.length; i++){
        if (localFolder[i].title == selectedFolder){
            return localFolder[i]
        }
    }
}

function getSelectedFolderIndex() {
    let localFolder = getFolderAndTasks()
    let selectedFolder = getSelectedFolderName()
    for (let i = 0; i < localFolder.length; i++){
        if (localFolder[i].title == selectedFolder){
            return i
        }
    }
}

//create Local storage projects, add selected if it is the first project
function getLocalStorageProject() {
    let parsedProjects = getFolderAndTasks()
    for (let i = 0; i < parsedProjects.length; i++){
        i == 0 ? createSelectedFolder(parsedProjects[i].title) : createNotSelectedFolder(parsedProjects[i].title)
    }
    if(parsedProjects.length == 0){
        createNoProjectAlert()
    }
    else{
        if (!loadTasks()){
            appendPlaceHolder()
        }
    }
}

//return true if project title already exists//
function checkForFoldersOfSameName(newProject){
    let projects = getFolderAndTasks()
    let check = false;
    for (let folder of projects){
        check = folder.title.replaceAll(/\s/g,'').toLowerCase() == newProject.replaceAll(/\s/g,'').toLowerCase() ? true : false;
        if (check == true){
            break
        }
    }
    return check
}

//removes project from local storage
function removeFromStorage(titleName){
    let projects = getFolderAndTasks();
    for (let index = 0; index < projects.length; index++){
        if(projects[index].title == titleName){
            projects.splice(index, 1)
        }
    }
    setLocalStorage(projects)
}

//Local Storage Tasks

function loadTasks() {
    let localFolder = getSelectedStorageFolder()
    if (localFolder.tasks.length == 0){
        return false
    }
    localFolder.tasks.forEach(task => {
        createTask(task.taskName, task.dueDate, task.priority, task.description, task.indexNumber, task.selected)
    });
    return true
}

function findTaskIndex(number) {
    let folder = getSelectedStorageFolder().tasks
    for (let i = 0; i < folder.length; i++){
        if(folder[i].indexNumber == Number(number)){
            return i
        }
    }
}

function getTaskValues(number) {
    let task = getSelectedStorageFolder().tasks
    let index = findTaskIndex(number)
    let currentTask = task[index]
    return currentTask
}

//find project and then task. Edit values and reset LocalStorage. Used for editing tasks
function ammendTaskValues(number, taskName, dueDate, priority, description) {
    let localFolder = getFolderAndTasks()
    let task = localFolder[getSelectedFolderIndex()].tasks[findTaskIndex(number)]
    task.taskName = taskName
    task.dueDate = dueDate
    task.priority = priority
    task.description = description
    setLocalStorage(localFolder)
}

//switches task.selected from true to false and vica versa
function switchSelectedValue(number) {
        let localFolder = getFolderAndTasks()
        let task = localFolder[getSelectedFolderIndex()].tasks[findTaskIndex(number)]
        task.selected = task.selected == true ? false : true;
        setLocalStorage(localFolder)
}

//removes all tasks with the value "selected" equal to true 
function removeSelectedTasksFromStorage(){
    let localFolder = getFolderAndTasks()
    let tasks = localFolder[getSelectedFolderIndex()].tasks
    for (let i = tasks.length - 1; i > -1; i--){
        if(tasks[i].selected){
            tasks.splice(i , 1)
        }
    }
    setLocalStorage(localFolder)
}

function appendLastStorageTask() {
    let folder = getSelectedStorageFolder()
    let lastItem = folder.tasks.slice(-1)[0]
    createTask(lastItem.taskName, lastItem.dueDate, lastItem.priority, lastItem.description, lastItem.indexNumber, lastItem.selected)
}



//sets indexNumber
function getIndexNumber(folder) {
    let lastFolder = folder.tasks.slice(-1)[0]
    let number = lastFolder ? lastFolder.indexNumber + 1 : 0;
    return number
}

function addStorageTasks(taskName, dueDate, priority, description) {
    let localFolder = getFolderAndTasks()
    let selectedFolder = localFolder[getSelectedFolderIndex()]
    selectedFolder.tasks.push({"taskName": taskName, "dueDate" : dueDate, "priority" : priority, "description": description, "indexNumber" : getIndexNumber(selectedFolder), "selected" : false})
    setLocalStorage(localFolder)
}

export {setLocalStorageProject, getLocalStorageProject, checkForFoldersOfSameName, removeFromStorage, addStorageTasks, loadTasks, appendLastStorageTask, switchSelectedValue, removeSelectedTasksFromStorage, getTaskValues, ammendTaskValues }