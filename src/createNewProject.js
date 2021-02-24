import {updateFolders, removeSelection} from "./Projectfolders"
import {removeFromStorage} from "./storage"
import {appendTaskName} from "./selectTask"
class newProject{
    constructor(title){
        this.title = title
    }

    createWrapper(selectedClass = '') {
        let parent = document.querySelector('.project-list')
        let wrapper = document.createElement('div');
        wrapper.classList.add("list-wrapper", "project-folder", "hover-project")
        if(selectedClass){
            wrapper.classList.add(selectedClass)
        }
        parent.appendChild(wrapper)
        wrapper.addEventListener('click', () => {
            appendTaskName(wrapper.firstElementChild.textContent)
        } )
        return wrapper
    }

    createTitle(){
        let content = document.createElement('li')
        content.textContent = this.title
        return content
    }

    createDelete(selectedClass = ''){
        let deleteButton = document.createElement('div');
        deleteButton.classList.add("delete-icon", "delete-it")
        if(selectedClass){
            deleteButton.classList.add(selectedClass)
        }
        deleteButton.addEventListener('click', () => {
            this.removeItem(deleteButton)
        })
        return deleteButton
    }

    removeItem(item){
        removeFromStorage(item.parentElement.firstElementChild.textContent)
        item.parentElement.remove()
    }

    createNewProject(){
        let wrapper = this.createWrapper()
        wrapper.append(this.createTitle(), this.createDelete() )
        }
}

class selectedProject extends newProject{
    constructor(title){
        super(title)
    }
    createNewProject(){
        let wrapper = this.createWrapper('selected-project')
        wrapper.append(this.createTitle(), this.createDelete('show-x') )
    }
    
}

function createNewFolder(className,title) {
    let folderProject = new className(title)
    folderProject.createNewProject()
    updateFolders()
    return folderProject
}

function createSelectedFolder(title) {
    removeSelection()
    createNewFolder(selectedProject, title)
}

function createNotSelectedFolder(title) {
    createNewFolder(newProject, title)
}

export {createSelectedFolder, createNotSelectedFolder}