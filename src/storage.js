import {createSelectedFolder, createNotSelectedFolder} from "./createNewProject"

let folderTasks = localStorage.getItem('Projects')
  ? JSON.parse(localStorage.getItem('Projects'))
  : [{"title": "Default"}]

function setLocalStorageProject(project) {
    folderTasks.push({"title": project})
    localStorage.setItem('Projects', JSON.stringify(folderTasks))
    console.log(localStorage)
}

function getLocalStorageProject() {
    let parsedProjects = JSON.parse(localStorage.getItem('Projects'))
    for (let i = 0; i < parsedProjects.length; i++){
        i == 0 ? createSelectedFolder(parsedProjects[i].title) : createNotSelectedFolder(parsedProjects[i].title)
    }
}

export {setLocalStorageProject, getLocalStorageProject}