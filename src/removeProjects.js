

export function removeAllProjects() {
    let parent = document.getElementById("project-parent")
    console.log(parent)
    while (parent.firstChild){
        parent.firstChild.remove()
    }
}
