import {addMenuEvent} from "./burgerMenu"
import {callAddProjectListner} from "./projectTextfield"
import {getLocalStorageProject} from "./storage"
//burger icon//
addMenuEvent()
//hover and click project//
callAddProjectListner()
// window.onload = () => {
  getLocalStorageProject()
// };
