import {addMenuEvent} from "./burgerMenu"
// import {updateFolders} from "./Projectfolders"
import {callAddProjectListner} from "./projectTextfield"
import {getLocalStorageProject} from "./storage"
import {addTaskListner} from "./taskSection"
import {addTaskButtonListner} from "./popUpTaskForm"
import {clearCompleted} from "./taskSection"
//burger icon//
addMenuEvent()
//hover and click project//
callAddProjectListner()
// window.onload = () => {
getLocalStorageProject()
addTaskButtonListner()
clearCompleted()
// addTaskListner()
// updateFolders()
// };
