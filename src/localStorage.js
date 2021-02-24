import {createSelectedFolder, createNotSelectedFolder} from "./createNewProject"
import {removeAllProjects} from "./removeProjects"
import {updateFolders} from "./Projectfolders"

let folderTasks = localStorage.getItem('Projects')
  ? JSON.parse(localStorage.getItem('Projects'))
  : [{"title": "Default", "tasks": [], "count": 0}]

function addNewFolder(folderName) {
    let newFolder = {"title": folderName, "tasks": []}
    folderTasks.push(newFolder)
    setLocalStorage()
}

function addCount() {
    let number = 0
    folderTasks.forEach(item => {
        item["count"] = number
        number++
    })
    console.log(folderTasks)
}

function addNewTasks(folderName, tasks){
    folderTasks[folderName].push(tasks)
    setLocalStorage()
}

function removeItem(number) {
    folderTasks.forEach(task => {
        if (task.count == number){
            let index = folderTasks.indexOf(task);
            console.log(index)
            folderTasks.splice(index, 1) 
        }
    })
    setLocalStorage()
}

function setLocalStorage(){
    localStorage.clear()
    addCount()
    localStorage.setItem('Projects', JSON.stringify(folderTasks))
}

function getStorageItems() {
  setLocalStorage()
  let parsedProjects = JSON.parse(localStorage.getItem('Projects'))
  for (let i = 0; i < parsedProjects.length; i++){
      i == parsedProjects.length -1 ? createSelectedFolder(parsedProjects[i].title) : createNotSelectedFolder(parsedProjects[i].title)
      }
      updateFolders()
    }


export {addNewFolder, addNewTasks, getStorageItems, removeItem}