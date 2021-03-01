import {appendProjectName} from "./selectTask"
import {addClickListners, removeSelection, deleteButtonListner} from "./projectEventListners"

class newProject{
    constructor(title){
        this.title = title
    }

    createWrapper() {
        let parent = document.querySelector('.project-list')
        let wrapper = document.createElement('div');
        wrapper.classList.add("list-wrapper", "project-folder", "hover-project")
        parent.appendChild(wrapper)
        return wrapper
    }

    createTitle(){
        let content = document.createElement('li')
        content.textContent = this.title
        return content
    }

    createDelete(){
        let deleteButton = document.createElement('div');
        deleteButton.classList.add("delete-icon", "delete-it")
        deleteButtonListner(deleteButton)
        return deleteButton
    }

    createNewProject(){
        let wrapper = this.createWrapper()
        wrapper.append(this.createTitle(), this.createDelete())
        addClickListners(wrapper)
        return wrapper
    }
        
}

class selectedProject extends newProject{
    constructor(title){
        super(title)
    }

    addSelection(){
        removeSelection()
        let wrapper = this.createNewProject()
        wrapper.classList.add('selected-project')
        wrapper.lastElementChild.classList.add('show-x')
    }
    
}


function createSelectedFolder(title) {
    let selectedFolder = new selectedProject(title)
    selectedFolder.addSelection()
    appendProjectName(title)
    return selectedFolder 
}

function createNotSelectedFolder(title) {
    let unselectedFolder = new newProject(title)
    unselectedFolder.createNewProject()
    return unselectedFolder
}

export {createSelectedFolder, createNotSelectedFolder}