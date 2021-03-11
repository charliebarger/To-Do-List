class NewTask{
    constructor(taskName, dueDate, priority, description){
        this.taskName = taskName;
        this.dueDate = dueDate;
        this.priority = priority;
        this.description = description;
    }

    createWrapper() {
        let parent = document.getElementById("task-wrapper")
        let wrapper = document.createElement('div');
        wrapper.classList.add('task')
        parent.appendChild(wrapper)
        wrapper.append(this.createCoreWrapper())
    }

    createCoreWrapper(){
        let wrapper = document.createElement('div')
        wrapper.classList.add('task-item')
        wrapper.append(this.createCheckBox(), this.createTitle(), this.createDueDate(), this.createSVG())
        return wrapper
    }

    createCheckBox(){
        let checkbox = document.createElement('div')
        checkbox.classList.add("checkbox")
        checkbox.style.border = `${this.formatPriority()} solid 2px`
        return checkbox
    }

    formatPriority(){
        let priority = Number(this.priority)
        let color = priority < 3 ? (priority == 1 ? "green" : "yellow") : "red";
        return color
    }

    createTitle(){
        let title = document.createElement('span')
        title.textContent = this.taskName
        return title
    }

    createDueDate(){
        let date = document.createElement('span')
        date.textContent = this.dueDate
        return date
    }

    createSVG(){
        let parent = document.createElement('div')
        parent.classList.add('edit-icon-wrapper');
        parent.innerHTML = '<svg class = "edit-svg" enable-background="new 0 0 45 45" height="45px" id="Layer_1" version="1.1" viewBox="0 0 45 45" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><rect height="23" transform="matrix(-0.7071 -0.7072 0.7072 -0.7071 38.2666 48.6029)" width="11" x="23.7" y="4.875"/><path d="M44.087,3.686l-2.494-2.494c-1.377-1.377-3.61-1.377-4.987,0L34.856,2.94l7.778,7.778l1.749-1.749   C45.761,7.593,45.465,5.063,44.087,3.686z"/><polygon points="16,22.229 16,30 23.246,30  "/><path d="M29,40H5V16h12.555l5-5H3.5C1.843,11,0,11.843,0,13.5v28C0,43.156,1.843,45,3.5,45h28   c1.656,0,2.5-1.844,2.5-3.5V23.596l-5,5V40z"/></g></svg>'
        return parent
    }
}

export function createTask(taskName, dueDate, priority, description){
    let task = new NewTask(taskName, dueDate, priority, description)
    task.createWrapper()
}

// {/* <svg enable-background="new 0 0 45 45" height="45px" id="Layer_1" version="1.1" viewBox="0 0 45 45" width="45px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><rect fill="white" height="23" transform="matrix(-0.7071 -0.7072 0.7072 -0.7071 38.2666 48.6029)" width="11" x="23.7" y="4.875"/><path d="M44.087,3.686l-2.494-2.494c-1.377-1.377-3.61-1.377-4.987,0L34.856,2.94l7.778,7.778l1.749-1.749   C45.761,7.593,45.465,5.063,44.087,3.686z" fill="white"/><polygon fill="white" points="16,22.229 16,30 23.246,30  "/><path d="M29,40H5V16h12.555l5-5H3.5C1.843,11,0,11.843,0,13.5v28C0,43.156,1.843,45,3.5,45h28   c1.656,0,2.5-1.844,2.5-3.5V23.596l-5,5V40z" fill="white"/></g></svg> */}