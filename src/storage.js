import {createSelectedFolder, createNotSelectedFolder} from "./createNewProject"
import {getSelectedFolderName} from "./selectTask"

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

function addStorageTasks(taskName, dueDate, priority, description) {
    let localFolder = getFolderAndTasks()
    let selectedFolder = getSelectedFolderName()
    for (let i = 0; i < localFolder.length; i++){
        if (localFolder[i].title == selectedFolder){
            localFolder[i].tasks.push({"taskName": taskName, "dueDate": dueDate, "priority" : priority, "description": description})
            break
        }
    }
    localStorage.setItem('Projects', JSON.stringify(localFolder))
}

function getLocalStorageProject() {
    let parsedProjects = getFolderAndTasks()
    for (let i = 0; i < parsedProjects.length; i++){
        i == 0 ? createSelectedFolder(parsedProjects[i].title) : createNotSelectedFolder(parsedProjects[i].title)
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

export {setLocalStorageProject, getLocalStorageProject, checkForFoldersOfSameName, removeFromStorage, addStorageTasks, checkForTasksOfSameName}