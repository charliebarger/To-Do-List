import {createSelectedFolder, createNotSelectedFolder} from "./createNewProject"
import {getSelectedFolderName} from "./selectTask"
import {createTask} from "./createNewTask"
import {appendPlaceHolder} from "./taskSection"


function getFolderAndTasks() {
    if(!localStorage.getItem('Projects')){
        localStorage.setItem('Projects',JSON.stringify([{"title": "Default", "tasks": []}]))
    }
    let folderTasks = JSON.parse(localStorage.getItem('Projects'))
    return folderTasks
}

function setLocalStorageProject(project) {
    let folder = getFolderAndTasks()
    folder.push({"title": project, "tasks": []})
    localStorage.setItem('Projects', JSON.stringify(folder))
}

function loadTasks() {
    let selectedFolder = getSelectedFolderName();
    let localFolder = getFolderAndTasks()
     for (let i = 0; i < localFolder.length; i++){
        if (localFolder[i].title == selectedFolder){
            console.log(localFolder[i].tasks.length)
            if (localFolder[i].tasks.length == 0){
                console.log('hello der')
                return false
            }
            localFolder[i].tasks.forEach(task => {
                createTask(task.taskName, task.dueDate, task.priority, task.description, task.indexNumber)
            });
        }
    }
    return true
}

function getSelectedStorageFolder(localFolder) {
    let selectedFolder = getSelectedFolderName()
    for (let i = 0; i < localFolder.length; i++){
        if (localFolder[i].title == selectedFolder){
            return localFolder[i]
        }
    }
}

function appendLastStorageTask() {
    let localFolder = getFolderAndTasks()
    let folder = getSelectedStorageFolder(localFolder)
    let lastItem = folder.tasks.slice(-1)[0]
    console.log(lastItem)
    console.log(lastItem.taskName)
    createTask(lastItem.taskName, lastItem.dueDate, lastItem.priority, lastItem.description, lastItem.indexNumber)
}

function getNumber(folder) {
    console.log(folder)
    let lastFolder = folder.tasks.slice(-1)[0]
    let number = lastFolder ? lastFolder.indexNumber + 1 : 0;
    return number
}

function addStorageTasks(taskName, dueDate, priority, description) {
    let localFolder = getFolderAndTasks()
    let selectedFolder = getSelectedStorageFolder(localFolder)
    console.log(selectedFolder)
    let number = getNumber(selectedFolder)
    selectedFolder.tasks.push({"taskName": taskName, "dueDate" : dueDate, "priority" : priority, "description": description, "indexNumber" : number })
    localStorage.setItem('Projects', JSON.stringify(localFolder))
}

function getLocalStorageProject() {
    console.log(loadTasks())
    let parsedProjects = getFolderAndTasks()
    for (let i = 0; i < parsedProjects.length; i++){
        i == 0 ? createSelectedFolder(parsedProjects[i].title) : createNotSelectedFolder(parsedProjects[i].title)
    }
    if (!loadTasks()){
        appendPlaceHolder()
    }
}

function checkForFoldersOfSameName(newProject){
    let projects = getFolderAndTasks()
    console.log(projects)
    let check = false;
    for (let folder of projects){
        check = folder.title.replaceAll(/\s/g,'').toLowerCase() == newProject.replaceAll(/\s/g,'').toLowerCase() ? true : false;
        if (check == true){
            break
        }
    }
    return check
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
    localStorage.setItem('Projects', JSON.stringify(projects))
}

export {setLocalStorageProject, getLocalStorageProject, checkForFoldersOfSameName, removeFromStorage, addStorageTasks, checkForTasksOfSameName, loadTasks, getNumber, appendLastStorageTask}