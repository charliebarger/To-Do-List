import {appendTaskName} from "./selectTask"

function addClickListners(item){
    addHoverEffect(item, 'hover-x', item.lastElementChild)
    item.addEventListener('click', () => {
        renderSelectedClass(item)
        appendTaskName(item.firstChild.textContent)
  })
}

//removes selection class and adds selection classes to new item
function renderSelectedClass(item) {
    removeSelection()
    item.classList.add('selected-project')
    item.lastElementChild.classList.add('show-x')
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

export {addClickListners, removeSelection}