import {addMenuEvent} from "./burgerMenu"
import {updateFolders} from "./Projectfolders"
import {callAddProjectListner} from "./projectTextfield"
import {getStorageItems} from "./localStorage"
//burger icon//
addMenuEvent()
getStorageItems()
//hover and click project//
updateFolders()
callAddProjectListner()
