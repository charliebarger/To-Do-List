import {
  loopItems,
  updateFolders,
  updateProjectFoldersList,
} from "./Projectfolders";
import { createSelectedFolder } from "./createNewProject";
import { addNewFolder } from "./localStorage";
import { createSelectedFolder } from "./createNewProject";
import { setLocalStorageProject, checkForFoldersOfSameName } from "./storage";
import { appendTasks } from "./taskSection";

//attempts to pass validation and create project on Enter or click of Add Button
export function callAddProjectListner() {
  let project = document.getElementById("add-project");
  let addButton = document.getElementById("add-project-button");
  addButton.addEventListener("click", function (e) {
    if (project.value) {
      addInputedProject(project.value);
      clearInput(project, e);
    }
  });
  project.addEventListener("keydown", function (e) {
    if (e.key == "Enter" && project.value) {
      addInputedProject(project.value);
      clearInput(project, e);
    }
  });
}

function addInputedProject(textField) {
  if (textField) {
    addNewFolder(textField);
    //delete all current projects and delete selection classes
    loopItems(updateProjectFoldersList());
    createSelectedFolder(textField);
    //add event listners to new projects
    updateFolders();
  }
}

function clearInput(textField, event) {
  validateProjectForm(e, project);
  project.addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
      validateProjectForm(e, project);
    }
  });
}

//checks that input is not blank and project name doesnt already exist, if not the project is added
function validateProjectForm(event, textField) {
  if (validateFormIsNotBlank(textField, checkForFoldersOfSameName)) {
    addProject(textField, event);
  } else if (checkForFoldersOfSameName(textField.value)) {
    alert("This Project Folder Already Exists");
    resetTextfield(textField, event);
  } else {
    clearInput(textField);
  }
}

function addProject(textField, event) {
  checkForProjectWarning();
  setLocalStorageProject(textField.value);
  createSelectedFolder(textField.value);
  resetTextfield(textField, event);
  appendTasks();
}

function checkForProjectWarning() {
  let blocker = document.querySelector(".no-project");
  let blurred = document.getElementById("child-wrapper");
  if (blocker) {
    blurred.classList.remove("light-blur");
    blocker.remove();
  }
}

function validateFormIsNotBlank(textField, validationFunction) {
  return textField.value.trim().length > 0 &&
    !validationFunction(textField.value)
    ? true
    : false;
}

function resetTextfield(textField, event) {
  clearInput(textField);
  event.preventDefault();
}

function clearInput(textField) {
  textField.value = "";
  event.preventDefault();
}
