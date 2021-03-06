import {format} from 'date-fns'
import {toggleClassOnEvent} from "./burgerMenu.js"
import {switchSelectedValue} from "./storage"
import {editDefaultValues} from "./popUpTaskForm"

class NewTask{
    constructor(taskName, dueDate, priority, description, number, selected){
        this.taskName = taskName;
        this.dueDate = dueDate;
        this.priority = priority;
        this.description = description;
        this.number = number;
        this.selected = selected
    }

    createWrapper() {
        let parent = document.getElementById("task-wrapper")
        let wrapper = document.createElement('div');
        wrapper.dataset.indexNumber = this.number
        wrapper.classList.add('task')
        parent.appendChild(wrapper)
        let coreWrapper = this.createCoreWrapper()
        let description = this.createDescriptionWrapper()
        toggleClassOnEvent(coreWrapper, 'hide-it', description)
        wrapper.append(coreWrapper, description)
        if (this.selected){
            wrapper.style.opacity = ".5"
        }
    }

    createCoreWrapper(){
        let wrapper = document.createElement('div')
        wrapper.classList.add('task-item')
        wrapper.append(this.createCheckBox(), this.createTitle(), this.createDueDate(), this.createSVG())
        return wrapper
    }

    createCheckBox(){
        let dulled = this.selected
        let checkbox = document.createElement('div')
        checkbox.classList.add("checkbox")
        checkbox.style.border = `${this.formatPriority(checkbox)} solid 2px`
        toggleClassOnEvent(checkbox, "checkbox-clicked")
        checkbox.addEventListener('click', () => {
            switchSelectedValue(checkbox.parentElement.parentElement.dataset.indexNumber)
            let parent = checkbox.parentElement.parentElement;
            parent.style.opacity = ".5"
            dulled = dulled == false ? true : false;
            parent.style.opacity = dulled == false ? "1" : ".5";
        })
        return checkbox
    }

    formatPriority(checkbox){
        let color = this.priority < 3 ? (this.priority == 1 ? "green" : "yellow") : "red";
        if(this.selected){
            checkbox.classList.add("checkbox-clicked")
        }
        return color
    }

    createTitle(){
        let title = document.createElement('span')
        title.textContent = this.taskName
        return title
    }

    createDueDate(){
        let date = document.createElement('span')
        if (this.dueDate){
            let selectedDate =  new Date(this.dueDate)
            let formattedDate = format(selectedDate, 'MMMM dd, yyyy')
            date.textContent = formattedDate
        }
        return date
    }

    createSVG(){
        let parent = document.createElement('div')
        parent.classList.add('edit-icon-wrapper');
        let svg = '<svg class = "edit-svg" enable-background="new 0 0 45 45" height="45px" id="Layer_1" version="1.1" viewBox="0 0 45 45" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><rect height="23" transform="matrix(-0.7071 -0.7072 0.7072 -0.7071 38.2666 48.6029)" width="11" x="23.7" y="4.875"/><path d="M44.087,3.686l-2.494-2.494c-1.377-1.377-3.61-1.377-4.987,0L34.856,2.94l7.778,7.778l1.749-1.749   C45.761,7.593,45.465,5.063,44.087,3.686z"/><polygon points="16,22.229 16,30 23.246,30  "/><path d="M29,40H5V16h12.555l5-5H3.5C1.843,11,0,11.843,0,13.5v28C0,43.156,1.843,45,3.5,45h28   c1.656,0,2.5-1.844,2.5-3.5V23.596l-5,5V40z"/></g></svg>'
        parent.innerHTML = svg;
        this.svgEvent(parent)
        return parent
    }

    svgEvent(icon) {
        icon.addEventListener('click', (e) => {
            e.stopPropagation()
            editDefaultValues(this.number)
        })
    }

    createDescriptionWrapper(){
        let wrapper = document.createElement('div')
        wrapper.classList.add('description', 'hide-it')
        wrapper.appendChild(this.createDescription())
        return wrapper
    }

    createDescription(){
        let description = document.createElement('p')
        let text = this.description ? `Comments: ${this.description}`: `No Comments`;
        description.textContent = text
        return description
    }
}



export function createTask(taskName, dueDate, priority, description, number, selected){
    let task = new NewTask(taskName, dueDate, priority, description, number, selected)
    task.createWrapper()
}

