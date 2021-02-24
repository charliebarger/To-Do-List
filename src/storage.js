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

export {setLocalStorageProject, getLocalStorageProject, checkForFoldersOfSameName, removeFromStorage}