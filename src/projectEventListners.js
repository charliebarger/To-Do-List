import {removeFromStorage} from "./storage"
import {selectFirstProject, appendProjectName} from "./selectedProject"
import {appendTasks} from "./taskSection"

//appends prokect name to top left of task form and renders is as selected
function addClickListners(item){
    addHoverEffect(item, 'hover-x', item.lastElementChild)
    item.addEventListener('click', () => {
        renderSelectedClass(item)
        appendProjectName(item.firstChild.textContent)
  })
}

function deleteButtonListner(item) {
    item.addEventListener('click', (e) => {
        removeFromStorage(item.parentElement.firstElementChild.textContent)
        renderProjectRemoval(item)
        e.stopPropagation()
    })
}

function renderProjectRemoval(item){
        item.parentElement.remove()
        appendProjectName('')
        selectFirstProject()
}

//removes selection class and adds selection classes to new item
function renderSelectedClass(item) {
    removeSelection()
    item.classList.add('selected-project')
    item.lastElementChild.classList.add('show-x')
    appendTasks()
}

//uses mouseover and mouseleave to create a hover effect. The mouseover can be on one element and effect another
function addHoverEffect(itemHovered, CSSclass, itemWitheffect = itemHovered){
   itemHovered.addEventListener('mouseover', () => {
       itemWitheffect.classList.add(CSSclass)
   })
   itemHovered.addEventListener('mouseleave', () => {
    itemWitheffect.classList.remove('hover-x')
})
}

//remove selection classes
function removeSelection(){
    updateProjectFoldersList().forEach(folder => {
        removeClasses(folder.lastElementChild, 'show-x' )
        removeClasses(folder, 'selected-project')
    })
}

//if an item contains a class remove that class
function removeClasses(item, CSSclass){
    if (item.classList.contains(CSSclass)){
        item.classList.remove(CSSclass)
    }
}

function updateProjectFoldersList() {
    let projectFolders = document.querySelectorAll('.project-folder');
    return projectFolders
}

export {addClickListners, removeSelection, deleteButtonListner}