import {appendTaskName} from "./selectTask"
// function addProjectFolderEvents(nodeList){
//     nodeList.forEach(node => {
//         console.log(node.firstChild.textContent)
//         node.addEventListener('click', () => {
//             console.log('hi')
//             node.style.color = "red"
//         })
//         // addClickListners(nodeList, node)
//         // addHoverEffect(node, 'hover-x', node.lastElementChild)
//     })
// }

//call functions on click
function addClickListners(item){
    item.addEventListener('click', () => {
        console.log('hello')
    loopItems(updateProjectFoldersList())
    addClasses(item,'selected-project')
    addClasses(item.lastElementChild, 'show-x')
    appendTaskName(item.firstChild.textContent)
    addHoverEffect(item, 'hover-x', item.lastElementChild)
  })
}

//loop through items and call removeClasses on each
function loopItems(nodeList){
    nodeList.forEach(node => {
        removeClasses(node.lastElementChild, 'show-x' )
        removeClasses(node, 'selected-project')
    })
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

//if an item contains a class remove that class
function removeClasses(item, CSSclass){
    if (item.classList.contains(CSSclass)){
        item.classList.remove(CSSclass)
    }
}

//adds css classes
function addClasses(item, CSSclass){
    item.classList.add(CSSclass)
}

// function updateFolders() {
//     let projectFolders = updateProjectFoldersList()
//     addProjectFolderEvents(projectFolders)
// }

function updateProjectFoldersList() {
    let projectFolders = document.querySelectorAll('.project-folder');
    return projectFolders
}

function removeSelection() {
    loopItems(updateProjectFoldersList())
}




export {removeSelection, updateProjectFoldersList, addClickListners}