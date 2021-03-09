/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/burgerMenu.js":
/*!***************************!*\
  !*** ./src/burgerMenu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addMenuEvent": () => (/* binding */ addMenuEvent)
/* harmony export */ });
let burger = document.querySelector('.hamburger');
let navBar = document.querySelector('nav');
let hideBackground = document.getElementById('task-section')

function toggleClassOnEvent(eventKey ,className, item = eventKey){
  eventKey.addEventListener('click', () => {
    item.classList.toggle(className)
})
}

function addMenuEvent(){
    toggleClassOnEvent(burger, 'closed')
    toggleClassOnEvent(burger, 'hide-content', hideBackground)
    toggleClassOnEvent(burger, 'active', navBar)
}



/***/ }),

/***/ "./src/createNewProject.js":
/*!*********************************!*\
  !*** ./src/createNewProject.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSelectedFolder": () => (/* binding */ createSelectedFolder),
/* harmony export */   "createNotSelectedFolder": () => (/* binding */ createNotSelectedFolder)
/* harmony export */ });
/* harmony import */ var _selectTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectTask */ "./src/selectTask.js");
/* harmony import */ var _projectEventListners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectEventListners */ "./src/projectEventListners.js");



class newProject{
    constructor(title){
        this.title = title
    }

    createWrapper() {
        let parent = document.querySelector('.project-list')
        let wrapper = document.createElement('div');
        wrapper.classList.add("list-wrapper", "project-folder", "hover-project")
        parent.appendChild(wrapper)
        return wrapper
    }

    createTitle(){
        let content = document.createElement('li')
        content.textContent = this.title
        return content
    }

    createDelete(){
        let deleteButton = document.createElement('div');
        deleteButton.classList.add("delete-icon", "delete-it")
        ;(0,_projectEventListners__WEBPACK_IMPORTED_MODULE_1__.deleteButtonListner)(deleteButton)
        return deleteButton
    }

    createNewProject(){
        let wrapper = this.createWrapper()
        wrapper.append(this.createTitle(), this.createDelete())
        ;(0,_projectEventListners__WEBPACK_IMPORTED_MODULE_1__.addClickListners)(wrapper)
        return wrapper
    }
        
}

class selectedProject extends newProject{
    constructor(title){
        super(title)
    }

    addSelection(){
        (0,_projectEventListners__WEBPACK_IMPORTED_MODULE_1__.removeSelection)()
        let wrapper = this.createNewProject()
        wrapper.classList.add('selected-project')
        wrapper.lastElementChild.classList.add('show-x')
    }
    
}


function createSelectedFolder(title) {
    let selectedFolder = new selectedProject(title)
    selectedFolder.addSelection()
    ;(0,_selectTask__WEBPACK_IMPORTED_MODULE_0__.appendProjectName)(title)
    return selectedFolder 
}

function createNotSelectedFolder(title) {
    let unselectedFolder = new newProject(title)
    unselectedFolder.createNewProject()
    return unselectedFolder
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _burgerMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burgerMenu */ "./src/burgerMenu.js");
/* harmony import */ var _projectTextfield__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectTextfield */ "./src/projectTextfield.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _taskTextfield__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskTextfield */ "./src/taskTextfield.js");
/* harmony import */ var _taskTextfield__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_taskTextfield__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _popUpTaskForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popUpTaskForm */ "./src/popUpTaskForm.js");

// import {updateFolders} from "./Projectfolders"




//burger icon//
(0,_burgerMenu__WEBPACK_IMPORTED_MODULE_0__.addMenuEvent)()
//hover and click project//
;(0,_projectTextfield__WEBPACK_IMPORTED_MODULE_1__.callAddProjectListner)()
// window.onload = () => {
;(0,_storage__WEBPACK_IMPORTED_MODULE_2__.getLocalStorageProject)()
;(0,_popUpTaskForm__WEBPACK_IMPORTED_MODULE_4__.addTaskButtonListner)()
// addTaskListner()
// updateFolders()
// };


/***/ }),

/***/ "./src/popUpTaskForm.js":
/*!******************************!*\
  !*** ./src/popUpTaskForm.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTaskButtonListner": () => (/* binding */ addTaskButtonListner)
/* harmony export */ });
let addButton = document.getElementById("add-task-button")
let taskPopUp = document.getElementById("task-form")
let cancelButton = document.getElementById("cancel-button")
let submitButton = document.getElementById("submit-button")
let taskBackground = document.getElementById("child-wrapper")
let hideSection = document.getElementById("task-section")
let navBar = document.querySelector("nav")
let taskName = document.getElementById("task-name")
let dueDate = document.getElementById("task-due-date")
let priority = document.getElementById("task-priority")
let description = document.getElementById("task-description")
// hide-task-form

function addTaskButtonListner() {
    addButton.addEventListener('click', () => {
    taskPopUp.classList.remove("hide-task-form")
    taskBackground.classList.add("blur-it")
    hideSection.classList.add("hide-content")
})

    addButton.addEventListener('click', () => {
    cancelButton.addEventListener('click', () => {
        removePopUp()
        clearForm()
    })

    navBar.addEventListener('click', () => {
        if(!taskPopUp.classList.contains('hide-task-form')){
            removePopUp()
        }
    })

    taskPopUp.addEventListener('submit', function(e){
        if (taskName.value){
            clearForm()
            e.preventDefault()
            removePopUp()
        }
    })

})
}

function removePopUp(){
    taskPopUp.classList.add("hide-task-form")
    taskBackground.classList.remove("blur-it")
    hideSection.classList.remove("hide-content")
}

function clearForm() {
    taskName.value = '';
    dueDate.value = '';
    priority.selectedIndex = 0;
    description.value = '';
}


/***/ }),

/***/ "./src/projectEventListners.js":
/*!*************************************!*\
  !*** ./src/projectEventListners.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addClickListners": () => (/* binding */ addClickListners),
/* harmony export */   "removeSelection": () => (/* binding */ removeSelection),
/* harmony export */   "deleteButtonListner": () => (/* binding */ deleteButtonListner)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _selectTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectTask */ "./src/selectTask.js");



function addClickListners(item){
    addHoverEffect(item, 'hover-x', item.lastElementChild)
    item.addEventListener('click', () => {
        renderSelectedClass(item)
        ;(0,_selectTask__WEBPACK_IMPORTED_MODULE_1__.appendProjectName)(item.firstChild.textContent)
  })
}

function deleteButtonListner(item) {
    item.addEventListener('click', (e) => {
        (0,_storage__WEBPACK_IMPORTED_MODULE_0__.removeFromStorage)(item.parentElement.firstElementChild.textContent)
        renderProjectRemoval(item)
        e.stopPropagation()
    })
}

function renderProjectRemoval(item){
        item.parentElement.remove()
        ;(0,_selectTask__WEBPACK_IMPORTED_MODULE_1__.appendProjectName)('')
        ;(0,_selectTask__WEBPACK_IMPORTED_MODULE_1__.selectFirstProject)()
}

//removes selection class and adds selection classes to new item
function renderSelectedClass(item) {
    removeSelection()
    item.classList.add('selected-project')
    item.lastElementChild.classList.add('show-x')
}

//uses mouseover and mouseleave to create a hover effect. The mouseover can be on one element and effect another
function addHoverEffect(itemHovered, CSSclass, itemWitheffect = itemHovered){
   itemHovered.addEventListener('mouseover', () => {
       itemWitheffect.classList.add(CSSclass)
   })
   itemHovered.addEventListener('mouseleave', () => {
    itemWitheffect.classList.remove('hover-x')
})
}

//remove selection classes
function removeSelection(){
    updateProjectFoldersList().forEach(folder => {
        removeClasses(folder.lastElementChild, 'show-x' )
        removeClasses(folder, 'selected-project')
    })
}

//if an item contains a class remove that class
function removeClasses(item, CSSclass){
    if (item.classList.contains(CSSclass)){
        item.classList.remove(CSSclass)
    }
}

function updateProjectFoldersList() {
    let projectFolders = document.querySelectorAll('.project-folder');
    return projectFolders
}



/***/ }),

/***/ "./src/projectTextfield.js":
/*!*********************************!*\
  !*** ./src/projectTextfield.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "callAddProjectListner": () => (/* binding */ callAddProjectListner),
/* harmony export */   "validateFormIsNotBlank": () => (/* binding */ validateFormIsNotBlank),
/* harmony export */   "resetTextfield": () => (/* binding */ resetTextfield),
/* harmony export */   "clearInput": () => (/* binding */ clearInput)
/* harmony export */ });
/* harmony import */ var _createNewProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createNewProject */ "./src/createNewProject.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/storage.js");



function callAddProjectListner() {
    let project = document.getElementById('add-project')
    let addButton = document.getElementById("add-project-button")
    addButton.addEventListener('click', function(e){
        addInputedProject(e, project)
    })
    project.addEventListener('keydown', function(e){
        if(e.key == 'Enter'){
            addInputedProject(e, project)
        }
    })
}

function addInputedProject(event, textField) {
    if(validateFormIsNotBlank(textField, _storage__WEBPACK_IMPORTED_MODULE_1__.checkForFoldersOfSameName)){
        (0,_storage__WEBPACK_IMPORTED_MODULE_1__.setLocalStorageProject)(textField.value)
        ;(0,_createNewProject__WEBPACK_IMPORTED_MODULE_0__.createSelectedFolder)(textField.value)
        resetTextfield(textField, event)
    }
    else if((0,_storage__WEBPACK_IMPORTED_MODULE_1__.checkForFoldersOfSameName)(textField.value)){
        resetTextfield()
        alert('This Project Folder Already Exists')
    }
    else{
        clearInput(textField)
    }
}

function validateFormIsNotBlank(textField, validationFunction){
      return textField.value.trim().length > 0 && !validationFunction(textField.value) ? true : false
}

function resetTextfield(textField, event) {
    clearInput(textField)
    event.preventDefault()
}

function clearInput(textField) {
    textField.value = '';
}



/***/ }),

/***/ "./src/selectTask.js":
/*!***************************!*\
  !*** ./src/selectTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectFirstProject": () => (/* binding */ selectFirstProject),
/* harmony export */   "appendProjectName": () => (/* binding */ appendProjectName),
/* harmony export */   "addTaskListner": () => (/* binding */ addTaskListner),
/* harmony export */   "getSelectedFolderName": () => (/* binding */ getSelectedFolderName)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/storage.js");


function selectFirstProject() {
    let projects = document.querySelectorAll('.project-folder')
    if (projects[0]){
        projects[0].classList.add("selected-project")
        projects[0].lastElementChild.classList.add('show-x')
        appendProjectName(projects[0].firstChild.textContent)
    }
}

function appendProjectName(projectName) {
    let taskNameWrapper = document.getElementById('selected-task')
    taskNameWrapper.textContent = projectName
}

function getSelectedFolderName() {
    let projects = document.querySelectorAll('.project-folder')
    for(let i = 0; i < projects.length; i++){
        if(projects[i].classList.contains('selected-project')){
            return projects[i].firstChild.textContent
    }
}
}

function addTaskListner() {
    let newTask = document.getElementById('addTaskForm')
    newTask.addEventListener('submit', (e) => {
        e.preventDefault()
        let taskValue = document.getElementById('addTaskInput').value
        console.log(taskValue)
        if (taskValue){
            (0,_storage__WEBPACK_IMPORTED_MODULE_0__.addStorageTasks)(getSelectedFolderName(), taskValue)
        }
    })
}




/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setLocalStorageProject": () => (/* binding */ setLocalStorageProject),
/* harmony export */   "getLocalStorageProject": () => (/* binding */ getLocalStorageProject),
/* harmony export */   "checkForFoldersOfSameName": () => (/* binding */ checkForFoldersOfSameName),
/* harmony export */   "removeFromStorage": () => (/* binding */ removeFromStorage),
/* harmony export */   "addStorageTasks": () => (/* binding */ addStorageTasks),
/* harmony export */   "checkForTasksOfSameName": () => (/* binding */ checkForTasksOfSameName)
/* harmony export */ });
/* harmony import */ var _createNewProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createNewProject */ "./src/createNewProject.js");
/* harmony import */ var _selectTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectTask */ "./src/selectTask.js");



function getFolderAndTasks() {
    if(!localStorage.getItem('Projects')){
        localStorage.setItem('Projects',JSON.stringify([{"title": "Default", "tasks": []}]))
    }
    let folderTasks = JSON.parse(localStorage.getItem('Projects'))
    return folderTasks
}

function setLocalStorageProject(project) {
    let folder = getFolderAndTasks()
    folder.push({"title": project, "tasks": []})
    localStorage.setItem('Projects', JSON.stringify(folder))
}

function addStorageTasks(taskName, dueDate, priority, description) {
    let localFolder = getFolderAndTasks()
    let selectedFolder = (0,_selectTask__WEBPACK_IMPORTED_MODULE_1__.getSelectedFolderName)()
    for (let i = 0; i < localFolder.length; i++){
        if (localFolder[i].title == selectedFolder){
            localFolder[i].tasks.push({"taskName": taskName, "dueDate": dueDate, "priority" : priority, "description": description})
            break
        }
    }
    localStorage.setItem('Projects', JSON.stringify(localFolder))
}

function getLocalStorageProject() {
    let parsedProjects = getFolderAndTasks()
    for (let i = 0; i < parsedProjects.length; i++){
        i == 0 ? (0,_createNewProject__WEBPACK_IMPORTED_MODULE_0__.createSelectedFolder)(parsedProjects[i].title) : (0,_createNewProject__WEBPACK_IMPORTED_MODULE_0__.createNotSelectedFolder)(parsedProjects[i].title)
    }
}

function checkForFoldersOfSameName(newProject){
    let projects = getFolderAndTasks()
    console.log(projects)
    let check = false;
    for (let folder of projects){
        check = folder.title.replaceAll(/\s/g,'') == newProject.replaceAll(/\s/g,'') ? true : false;
        if (check == true){
            break
        }
    }
    return check
}

function checkForTasksOfSameName(task) {
    let projects = getFolderAndTasks()
    let selectedProject = (0,_selectTask__WEBPACK_IMPORTED_MODULE_1__.getSelectedFolderName)()
    for (let folder of projects){
        if (folder.title == selectedProject){
            if(folder.tasks.includes(task)){
                return true
            }
        }
    }
    return false
}

function removeFromStorage(titleName){
    let projects = getFolderAndTasks();
    for (let index = 0; index < projects.length; index++){
        if(projects[index].title == titleName){
            projects.splice(index, 1)
        }
    }
    localStorage.setItem('Projects', JSON.stringify(projects))
}



/***/ }),

/***/ "./src/taskTextfield.js":
/*!******************************!*\
  !*** ./src/taskTextfield.js ***!
  \******************************/
/***/ (() => {

// import {addStorageTasks, checkForTasksOfSameName} from "./storage"
// import {validateFormIsNotBlank, resetTextfield, clearInput} from "./projectTextfield"

// export function addTaskListner() {
//     let task = document.getElementById('addTaskInput')
//     let addButton = document.getElementById("addTaskButton")
//     addButton.addEventListener('click', function(e){
//         addInputedTask(e, task)
//     })
//     task.addEventListener('keydown', function(e){
//         if(e.key == 'Enter'){
//             addInputedTask(e, task)
//         }
//     })
// }

// function addInputedTask(event, textField) {
//     if(validateFormIsNotBlank(textField, checkForTasksOfSameName)){
//         addStorageTasks(textField.value)
//         resetTextfield(textField, event)
//     }
//     else if(checkForTasksOfSameName(textField.value)){
//         resetTextfield(textField, event)
//         alert('This Task Already Exists')
//     }
//     else{
//         console.log('here')
//         clearInput(textField)
//     }
// }


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=main.js.map