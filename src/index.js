import {addMenuEvent} from "./burgerMenu"
import {addProjectFolderEvents} from "./Projectfolders"
//burger icon//
addMenuEvent()
//hover and click project//

let projectFolders = document.querySelectorAll('.project-folder');

addProjectFolderEvents(projectFolders)


