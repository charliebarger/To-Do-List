import {createSelectedFolder, createNotSelectedFolder} from "./createNewProject"

let folderTasks = {"default": []}

function addNewFolder(folderName) {
    folderTasks[folderName] = []
    setLocalStorage()
}

function addNewTasks(folderName, tasks){
    folderTasks[folderName].push(tasks)
    setLocalStorage()
}

function setLocalStorage(){
    for (let key in folderTasks){
        localStorage.setItem(JSON.stringify(key), JSON.stringify(folderTasks[key]))
    }
    console.log(localStorage)
}

function getStorageItems() {
  setLocalStorage()
  for (var i = localStorage.length -1; -1 < i; i--) {
    let project = localStorage.key(i);
    if(i == localStorage.length -1){
        createSelectedFolder(JSON.parse(project))
    }
    else{
        createNotSelectedFolder(JSON.parse(project))
    }
    // let tasks = JSON.parse(localStorage.getItem(key))
  }
}


export {addNewFolder, addNewTasks, getStorageItems}