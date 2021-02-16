export class newProject{
    constructor(title){
        this.title = title
    }

    createWrapper() {
        let parent = document.querySelector('.project-list')
        let wrapper = document.createElement('div');
        wrapper.classList.add("list-wrapper", "project-folder", "hover-project", "selected-project")
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
        deleteButton.classList.add("delete-icon")
        return deleteButton
    }

    createNewProject(){
        let wrapper = this.createWrapper()
        wrapper.append(this.createTitle(), this.createDelete() )
        
    }
}


