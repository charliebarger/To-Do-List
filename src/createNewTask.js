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
        let flagImage = document.createElementNS('http://www.w3.org/1999/xlink', 'svg')
        return flagImage
    }
}

export function createTask(taskName, dueDate, priority, description){
    let task = new NewTask(taskName, dueDate, priority, description)
    task.createWrapper()
}