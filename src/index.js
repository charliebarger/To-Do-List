import {addMenuEvent} from "./burgerMenu"
import {callAddProjectListner} from "./projectTextfield"
import {getLocalStorageProject} from "./storage"
import {addTaskButtonListner} from "./popUpTaskForm"
import {clearCompleted} from "./taskSection"
addMenuEvent()
callAddProjectListner()
getLocalStorageProject()
addTaskButtonListner()
clearCompleted()
