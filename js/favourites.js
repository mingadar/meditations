var meditationSelect = document.getElementById("meditation-select"); // meditation-select
var addButton = document.getElementById("add-button"); // add-button
var favs = document.getElementById("items");

// Load the meditation list from localStorage
var loadMeditationList = function () {
  var meditationList = getMeditationList();
  for (var i = 0; i < meditationList.length; i++) {
    var listItem = createNewTaskElement(meditationList[i]);
    favs.appendChild(listItem);
    bindTaskEvents(listItem);
  }
};

// Save the meditation list to localStorage
var saveMeditationList = function () {
  var meditationList = [];
  var tasks = favs.getElementsByTagName("label");
  for (var i = 0; i < tasks.length; i++) {
    meditationList.push(tasks[i].innerText);
  }
  setMeditationList(meditationList);
};

// Function to get the meditation list from localStorage
var getMeditationList = function () {
  return JSON.parse(localStorage.getItem("meditationList")) || [];
};

// Function to set the meditation list in localStorage
var setMeditationList = function (meditationList) {
  localStorage.setItem("meditationList", JSON.stringify(meditationList));
};

// New Task List Item
var createNewTaskElement = function (taskString) {
  // Create List Item
  var listItem = document.createElement("li");

  // label
  var label = document.createElement("label");

  // button.delete
  let deleteDiv = document.createElement("div");
  var deleteButton = document.createElement("button");

  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  deleteDiv.className = "remove";

  label.innerText = taskString;

  deleteDiv.appendChild(deleteButton);


  // Each element needs appending
  listItem.appendChild(label);
  listItem.appendChild(deleteDiv);

  return listItem;
};

// Update addMeditation function
var addMeditation = function () {
  var selectedMeditation = meditationSelect.value;
  if (selectedMeditation !== "" && !isMeditationInList(selectedMeditation)) {
    var listItem = createNewTaskElement(selectedMeditation);
    favs.appendChild(listItem);
    bindTaskEvents(listItem);
    saveMeditationList(); // Save the updated meditation list
  }
};

// Function to check if a meditation is already in the list
var isMeditationInList = function (meditation) {
  var tasks = favs.getElementsByTagName("label");
  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].innerText === meditation) {
      return true;
    }
  }
  return false;
};

// Delete an existing task
var deleteTask = function () {
  var listItem = this.parentNode;
  var ul = listItem.parentNode;

  // Remove the parent list item from the ul
  ul.removeChild(listItem);

  saveMeditationList(); // Save the updated meditation list
};

var bindTaskEvents = function (taskListItem) {
  var deleteButton = taskListItem.querySelector(".remove");

  // bind deleteTask to delete button
  deleteButton.onclick = deleteTask;
};

// Set the click handler to the addMeditation function
addButton.addEventListener("click", addMeditation);

// Load the meditation list when the page loads
window.addEventListener("load", function () {
  loadMeditationList();
});

// Get the heart logo element
const heartLogo = document.getElementById("heart");

// Add the 'heart-animation' class to start the animation
heartLogo.classList.add("heart-animation");
