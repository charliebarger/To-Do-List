import {addMenuEvent} from "./burgerMenu"
import {updateFolders, loopItems, addClasses} from "./Projectfolders"
import {newProject} from "./createNewProject"
//burger icon//
addMenuEvent()
//hover and click project//
updateFolders()


let project = document.getElementById('add-project')
project.addEventListener('keydown', function(e){
    if(e.key == 'Enter'){
        let projectFolders = document.querySelectorAll('.project-folder');
        let folderProject = new newProject(project.value)
        folderProject.createNewProject()
        updateFolders()
        project.value = ''
        loopItems(projectFolders)
    }
})

