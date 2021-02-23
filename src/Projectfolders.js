import {removeItem, getStorageItems} from "./localStorage"

function addProjectFolderEvents(nodeList){
    nodeList.forEach(node => {
        addClickListners(nodeList, node)
        addHoverEffect(node, 'hover-x', node.lastElementChild)
    })
    deleteItem()
}

function deleteItem(){
    let deleteIt = document.querySelectorAll(".delete-it")
    for(let count = 0 ; count < deleteIt.length ; count++) {
        deleteIt[count].addEventListener('click', function(){
        console.log(count)
        removeItem(count)
    });
}
}



//call functions on click
function addClickListners(nodeList, item){
    item.addEventListener('click', () => {
    loopItems(nodeList)
    addClasses(item,'selected-project')
    addClasses(item.lastElementChild, 'show-x')
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

function updateFolders() {
    let projectFolders = updateProjectFoldersList()
    addProjectFolderEvents(projectFolders)
}

function updateProjectFoldersList() {
    let projectFolders = document.querySelectorAll('.project-folder');
    return projectFolders
}




export {updateFolders, loopItems, updateProjectFoldersList}