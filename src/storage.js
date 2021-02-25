import {createSelectedFolder, createNotSelectedFolder} from "./createNewProject"
function getFolderTasks() {
    if(!localStorage.getItem('Projects')){
        localStorage.setItem('Projects',JSON.stringify([{"title": "Default", "tasks": []}]))
    }
    let folderTasks = JSON.parse(localStorage.getItem('Projects'))
    return folderTasks
}


function setLocalStorageProject(project) {
    let folder = getFolderTasks()
    console.log(getFolderTasks())
    folder.push({"title": project, "tasks": []})
    localStorage.setItem('Projects', JSON.stringify(folder))
}

function addStorageTasks(project, task) {
    let localFolder = getFolderTasks()
    localFolder.forEach(folder => {
        if (folder.title == project){
            folder.tasks.push(task)
        }
    });
    localStorage.setItem('Projects', JSON.stringify(localFolder))
}



function getLocalStorageProject() {
    let parsedProjects = getFolderTasks()
    for (let i = 0; i < parsedProjects.length; i++){
        i == 0 ? createSelectedFolder(parsedProjects[i].title) : createNotSelectedFolder(parsedProjects[i].title)
    }
}

function checkForFoldersOfSameName(newProject){
    let projects = getFolderTasks()
    let check = true;
    for (let folder of projects){
        console.log(folder)
        console.log(newProject)
        check = folder.title.replaceAll(/\s/g,'') !== newProject ? true : false;
        if (check == false){
            break
        }
    }
    return check
}

function removeFromStorage(titleName){
    let projects = getFolderTasks();
    for (let index = 0; index < projects.length; index++){
        if(projects[index].title == titleName){
            projects.splice(index, 1)
        }
    }
    localStorage.setItem('Projects', JSON.stringify(projects))
}

export {setLocalStorageProject, getLocalStorageProject, checkForFoldersOfSameName, removeFromStorage, addStorageTasks}