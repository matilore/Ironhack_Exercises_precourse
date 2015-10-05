
window.onload = function() {

// the following code adds event listeners to the buttons
// you'll learn more about this later
// for this exercise, you are going to write the functions for
// what happens when the user clicks on the buttons.
  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);

  var doneButton = document.getElementById('done-button');
  doneButton.addEventListener('click', markAsDone, false);


  function addToDoItem() {
    // add your code here
    // this should create a new list item in the to-do list
    // and set the text as the input from the todo-input field
    var li = document.createElement('li');
    var ul = document.querySelector('ul.todo-list-items');
    ul.appendChild(li);
    var input = document.createTextNode(document.getElementById('todo-input').value);
    console.log(input);
    li.appendChild(input);


  }

  function markAsDone() {
    doneButton.classList.add('liked');
    doneButton.innerHTML = "Liked!";
    document.querySelector('h1').style.color = "red";

    var doneItem = document.querySelector('ul.todo-list-items li').firstChild;
    console.log(doneItem);

    var doneList = document.querySelector('ul.done-list-items');
    doneList.appendChild(doneItem);
    doneList.classList.add('done');

  }
  
}
