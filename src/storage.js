import {createSelectedFolder, createNotSelectedFolder} from "./createNewProject"
import {getSelectedFolderName} from "./selectTask"
import {createTask} from "./createNewTask"
import {appendPlaceHolder} from "./taskSection"

//Local Storage Projects

//return formatted local storage tasks, if empty set a default  
function getFolderAndTasks() {
    if(!localStorage.getItem('Projects')){
        localStorage.setItem('Projects',JSON.stringify([{"title": "Default", "tasks": []}]))
    }
    let folderTasks = JSON.parse(localStorage.getItem('Projects'))
    return folderTasks
}

function setLocalStorage(itemToSet) {
    localStorage.setItem('Projects', JSON.stringify(itemToSet))
}

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

function setIt() {
     localStorage.setItem('Projects', JSON.stringify(getFolderAndTasks()))
}

//create Local storage projects, add selected if it is the first project
function getLocalStorageProject() {
    let parsedProjects = getFolderAndTasks()
    for (let i = 0; i < parsedProjects.length; i++){
        i == 0 ? createSelectedFolder(parsedProjects[i].title) : createNotSelectedFolder(parsedProjects[i].title)
    }
    if (!loadTasks()){
        appendPlaceHolder()
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

function ammendTaskValues(number, taskName, dueDate, priority, description) {
    let localFolder = getFolderAndTasks()
    let task = getSelectedStorageFolder(localFolder).tasks
    let index = findTaskIndex(number)
    let currentTask = task[index]
    currentTask.taskName = taskName
    currentTask.dueDate = dueDate
    currentTask.priority = priority
    currentTask.description = description
    setLocalStorage(localFolder)
}

function matchIndexNumbers(number) {
        let localFolder = getFolderAndTasks()
        let task = getSelectedStorageFolder(localFolder).tasks
        let index = findTaskIndex(number)
        let currentTask = task[index]
        if(currentTask.selected == true){
            currentTask.selected = false
        }
        else{
            currentTask.selected = true
        }
        setLocalStorage(localFolder)
}

function removeSelectedFromStorage(){
    let localFolder = getFolderAndTasks()
    let folder = getSelectedStorageFolder(localFolder).tasks
    for (let i = folder.length - 1; i > -1; i--){
        if(folder[i].selected == true){
            folder.splice(i , 1)
        }
    }
    setLocalStorage(localFolder)
}

function appendLastStorageTask() {
    let folder = getSelectedStorageFolder()
    let lastItem = folder.tasks.slice(-1)[0]
    createTask(lastItem.taskName, lastItem.dueDate, lastItem.priority, lastItem.description, lastItem.indexNumber, lastItem.selected)
}

function getNumber(folder) {
    let lastFolder = folder.tasks.slice(-1)[0]
    let number = lastFolder ? lastFolder.indexNumber + 1 : 0;
    return number
}

function addStorageTasks(taskName, dueDate, priority, description) {
    let localFolder = getFolderAndTasks()
    let selectedFolder = getSelectedStorageFolder(localFolder)
    let number = getNumber(selectedFolder)
    selectedFolder.tasks.push({"taskName": taskName, "dueDate" : dueDate, "priority" : priority, "description": description, "indexNumber" : number, "selected" : false})
    setLocalStorage(localFolder)
}

function checkForTasksOfSameName(task) {
    let projects = getFolderAndTasks()
    let selectedProject = getSelectedFolderName()
    for (let folder of projects){
        if (folder.title == selectedProject){
            if(folder.tasks.includes(task)){
                return true
            }
        }
    }
    return false
}

function removeFromStorage(titleName){
    let projects = getFolderAndTasks();
    for (let index = 0; index < projects.length; index++){
        if(projects[index].title == titleName){
            projects.splice(index, 1)
        }
    }
    setLocalStorage(projects)
}

export {setLocalStorageProject, getLocalStorageProject, checkForFoldersOfSameName, removeFromStorage, addStorageTasks, checkForTasksOfSameName, loadTasks, getNumber, appendLastStorageTask, matchIndexNumbers, removeSelectedFromStorage, findTaskIndex, getTaskValues, ammendTaskValues }