let folderTasks = {}

function addNewFolder(folderName) {
    folderTasks[folderName] = []
    setLocalStorage()
}

function addNewTasks(folderName, tasks){
    folderTasks[folderName].push(tasks)
    setLocalStorage()
}

export {addNewFolder, addNewTasks}

function setLocalStorage(){
    for (let key in folderTasks){
        localStorage.setItem(JSON.stringify(key), JSON.stringify(folderTasks[key]))
    }
    console.log(localStorage)
}