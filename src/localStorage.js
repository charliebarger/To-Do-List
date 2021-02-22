import {createSelectedFolder, createNotSelectedFolder} from "./createNewProject"
import {removeAllProjects} from "./removeProjects"

let folderTasks = localStorage.getItem('Projects')
  ? JSON.parse(localStorage.getItem('Projects'))
  : [{"title": "Default", "tasks": [], "number": 0}]

function addNewFolder(folderName) {
    let newFolder = {"title": folderName, "tasks": [], "number": 0}
    folderTasks.push(newFolder)
    setLocalStorage()
}

function addNewTasks(folderName, tasks){
    folderTasks[folderName].push(tasks)
    setLocalStorage()
}

function setLocalStorage(){
    localStorage.clear()
    localStorage.setItem('Projects', JSON.stringify(folderTasks))
    removeAllProjects()
    console.log(localStorage)
}

function getStorageItems() {
  setLocalStorage()
  let parsedProjects = JSON.parse(localStorage.getItem('Projects'))
  for (let i = 0; i < parsedProjects.length; i++){
      i == parsedProjects.length -1 ? createSelectedFolder(parsedProjects[i].title) : createNotSelectedFolder(parsedProjects[i].title)
      }
    }


export {addNewFolder, addNewTasks, getStorageItems}