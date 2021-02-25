import {addMenuEvent} from "./burgerMenu"
// import {updateFolders} from "./Projectfolders"
import {callAddProjectListner} from "./projectTextfield"
import {getLocalStorageProject} from "./storage"
//burger icon//
addMenuEvent()
//hover and click project//
callAddProjectListner()
// window.onload = () => {
getLocalStorageProject()
// updateFolders()
// };
