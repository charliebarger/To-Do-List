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
        return wrapper
    }

    createTitle(){
        let content = document.createElement('li')
        content.textContent = this.title
        return content
    }

    createDelete(selectedClass = ''){
        let deleteButton = document.createElement('div');
        deleteButton.classList.add("delete-icon")
        if(selectedClass){
            deleteButton.classList.add(selectedClass)
        }
        return deleteButton
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
    return folderProject
}

function createSelectedFolder(title) {
    createNewFolder(selectedProject, title)
}

function createNotSelectedFolder(title) {
    createNewFolder(newProject, title)
}

export {createSelectedFolder, createNotSelectedFolder}