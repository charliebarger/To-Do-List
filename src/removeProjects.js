export function removeAllProjects() {
    let parent = document.getElementById("project-parent")
    while (parent.firstChild){
        parent.firstChild.remove()
    }
}



// export function deleteItem(){
//     let deleteIt = document.querySelectorAll(".delete-icon")
//     let count = 0
//     deleteIt.forEach(node => {
//         node.addEventListener('click', () => {
//             node.remove()
//             removeItem(count)
//             count++
//         })
//     })
// }