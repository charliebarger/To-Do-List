/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Projectfolders.js":
/*!*******************************!*\
  !*** ./src/Projectfolders.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateFolders": () => (/* binding */ updateFolders),
/* harmony export */   "loopItems": () => (/* binding */ loopItems),
/* harmony export */   "updateProjectFoldersList": () => (/* binding */ updateProjectFoldersList)
/* harmony export */ });
function addProjectFolderEvents(nodeList){
    nodeList.forEach(node => {
        addClickListners(nodeList, node)
        addHoverEffect(node, 'hover-x', node.lastElementChild)
    })
}

//call functions on click
function addClickListners(nodeList, item){
    item.addEventListener('click', () => {
    loopItems(nodeList)
    addClasses(item,'selected-project')
    addClasses(item.lastElementChild, 'show-x')
  })
}

//loop through items and call removeClasses on each
function loopItems(nodeList){
    console.log(nodeList)
    nodeList.forEach(node => {
        removeClasses(node.lastElementChild, 'show-x' )
        removeClasses(node, 'selected-project')
    })
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

//if an item contains a class remove that class
function removeClasses(item, CSSclass){
    if (item.classList.contains(CSSclass)){
        item.classList.remove(CSSclass)
    }
}

//adds css classes
function addClasses(item, CSSclass){
    item.classList.add(CSSclass)
}

function updateFolders() {
    let projectFolders = updateProjectFoldersList()
    addProjectFolderEvents(projectFolders)
}

function updateProjectFoldersList() {
    let projectFolders = document.querySelectorAll('.project-folder');
    return projectFolders
}






/***/ }),

/***/ "./src/burgerMenu.js":
/*!***************************!*\
  !*** ./src/burgerMenu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addMenuEvent": () => (/* binding */ addMenuEvent)
/* harmony export */ });
let burger = document.querySelector('.hamburger');
let navBar = document.querySelector('nav');

function toggleClassOnEvent(eventKey ,className, item = eventKey){
  eventKey.addEventListener('click', ()  => {
    item.classList.toggle(className)
})
}

function addMenuEvent(){
    toggleClassOnEvent(burger, 'closed')
    toggleClassOnEvent(burger, 'active', navBar)
}



/***/ }),

/***/ "./src/createNewProject.js":
/*!*********************************!*\
  !*** ./src/createNewProject.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNewFolder": () => (/* binding */ createNewFolder)
/* harmony export */ });
class newProject{
    constructor(title){
        this.title = title
    }

    createWrapper() {
        let parent = document.querySelector('.project-list')
        let wrapper = document.createElement('div');
        wrapper.classList.add("list-wrapper", "project-folder", "hover-project", "selected-project")
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
        deleteButton.classList.add("delete-icon", "show-x")
        return deleteButton
    }

    createNewProject(){
        let wrapper = this.createWrapper()
        wrapper.append(this.createTitle(), this.createDelete() )
        
    }
}

function createNewFolder(title) {
    let folderProject = new newProject(title)
    folderProject.createNewProject()
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _burgerMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burgerMenu */ "./src/burgerMenu.js");
/* harmony import */ var _Projectfolders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projectfolders */ "./src/Projectfolders.js");
/* harmony import */ var _projectTextfield__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectTextfield */ "./src/projectTextfield.js");



//burger icon//
(0,_burgerMenu__WEBPACK_IMPORTED_MODULE_0__.addMenuEvent)()
//hover and click project//
;(0,_Projectfolders__WEBPACK_IMPORTED_MODULE_1__.updateFolders)()
;(0,_projectTextfield__WEBPACK_IMPORTED_MODULE_2__.callAddProjectListner)()


/***/ }),

/***/ "./src/projectTextfield.js":
/*!*********************************!*\
  !*** ./src/projectTextfield.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "callAddProjectListner": () => (/* binding */ callAddProjectListner)
/* harmony export */ });
/* harmony import */ var _Projectfolders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projectfolders */ "./src/Projectfolders.js");
/* harmony import */ var _createNewProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createNewProject */ "./src/createNewProject.js");



function callAddProjectListner() {
    let project = document.getElementById('add-project')
    let addButton = document.getElementById("add-project-button")

    addButton.addEventListener('click', () => {
    addInputedProject(project)
})
    project.addEventListener('keydown', function(e){
    if(e.key == 'Enter'){
        addInputedProject(project)
    }
})
}

function addInputedProject(textField) {
    if (textField.value){
        //delete all current projects and delete selection classes
        (0,_Projectfolders__WEBPACK_IMPORTED_MODULE_0__.loopItems)((0,_Projectfolders__WEBPACK_IMPORTED_MODULE_0__.updateProjectFoldersList)())
        ;(0,_createNewProject__WEBPACK_IMPORTED_MODULE_1__.createNewFolder)(textField.value)
        clearInput(textField)
        //add event listners to new projects
        ;(0,_Projectfolders__WEBPACK_IMPORTED_MODULE_0__.updateFolders)()
    }
}

function clearInput(textField) {
    textField.value = '';
}

document.getElementById('new-project').addEventListener('on', function(e) { 
    e.preventDefault()
})


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