import {createSelectedFolder, createNotSelectedFolder} from "./createNewProject"
function getFolderTasks() {
    let folderTasks = localStorage.getItem('Projects')
    ? JSON.parse(localStorage.getItem('Projects'))
    : [{"title": "Default"}]
    return folderTasks
}


function setLocalStorageProject(project) {
    let folder = getFolderTasks()
    folder.push({"title": project})
    localStorage.setItem('Projects', JSON.stringify(folder))
}

function getLocalStorageProject() {
    let parsedProjects = getFolderTasks()
    for (let i = 0; i < parsedProjects.length; i++){
        i == 0 ? createSelectedFolder(parsedProjects[i].title) : createNotSelectedFolder(parsedProjects[i].title)
    }
}

function checkForFoldersOfSameName(newProject){
    let projects = getFolderTasks()
    let check;
    for (let folder of projects){
        check = folder.title !== newProject ? true : false;
        if (check == false){
            break
        }
    }
    return check
}


export {setLocalStorageProject, getLocalStorageProject, checkForFoldersOfSameName}