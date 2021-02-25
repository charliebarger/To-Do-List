import {addMenuEvent} from "./burgerMenu"
// import {updateFolders} from "./Projectfolders"
import {callAddProjectListner} from "./projectTextfield"
import {getLocalStorageProject} from "./storage"
import {addTaskListner} from "./selectTask"
//burger icon//
addMenuEvent()
//hover and click project//
callAddProjectListner()
// window.onload = () => {
getLocalStorageProject()
addTaskListner()
// updateFolders()
// };
