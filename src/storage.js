import {createSelectedFolder, createNotSelectedFolder} from "./createNewProject"

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

function addStorageTasks(project, task) {
    let localFolder = getFolderAndTasks()
    console.log(localFolder)
    localFolder.forEach(folder => {
        if (folder.title == project){
            folder.tasks.push(task)
        }
    });
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
    let check = true;
    for (let folder of projects){
        check = folder.title.replaceAll(/\s/g,'') == newProject.replaceAll(/\s/g,'') ? true : false;
        if (check == true){
            break
        }
    }
    return check
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

export {setLocalStorageProject, getLocalStorageProject, checkForFoldersOfSameName, removeFromStorage, addStorageTasks}