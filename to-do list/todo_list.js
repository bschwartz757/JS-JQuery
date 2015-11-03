// JavaScript Document

var $ = function (id) { // anonymous function
	 return document.getElementById(id); 
	 }

	// declare taskList array to hold tasks:
	var taskList = ["Read", "Do homework", "Do laundry"];
	
	// declare addTask; this function will take the input from "new_task" and add it to taskList when the event handler is called (user clicks on "add_task" button):
	var addTask = function () { // addTask takes the value of "new_task" and adds it to the taskList array:
			// use the .length method to append the new task to the end of the array contents:
			taskList[taskList.length] = $ ("new_task").value;
			// show the updated value of taskList in the text area:
			$ ("task_list").value = listTasks();
			// "blank out" text box:
			$ ("new_task").value = null;
	}
		
	// declare listTasks; this function will display the contents of the array in the <textarea> (using the id="task_list"):
	var listTasks = function () {
			// textList is an empty string variable that will format taskList by adding a new line between items for readability:
			var textList = "";
			// use the for...in loop to iterate the items:
			for (var i in taskList) {
				textList += taskList[i] + "\n";				
			}
			// return the formatted array items:
			return textList;		
		} 		
	
	// declare showNextTask; this function will remove the first item in the taskList array via the shift() method and show it in the "show_next_task" element:
	var showNextTask = function () {
		// I created this for fun:
		var noTasks = "Task list completed - party time!!";
		// use an if...else statement to determine if there are items in takList. While there are items, display the next item in the array in the "next_task" field. Because we use the shift() method, the next item will always be in position [0]:
		if (taskList.length > 0) {
			$ ("next_task").value = taskList[0];
			taskList.shift();	
			// if there are no more tasks, alert the user:
		} else {
			$ ("next_task").value = noTasks;
			alert ("There are no more tasks");
				
		}
		
		// update the text area:
		$ ("task_list").value = listTasks();
				
	} // End the program
	
	
		// Event handlers: these will be called when the page loads. When the buttons are clicked the appropriate functions are executed:
		window.onload = function () { 

		  $("add_task").onclick = addTask;

		  $("show_next_task").onclick = showNextTask;
		     
		  $("new_task").focus();
		}
