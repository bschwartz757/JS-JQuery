// Event handler: initializes once the DOM is loaded
$(document).ready(function() {
	// Text to display in the anchor element:
	var oldText = "Show more";
	var newText = "Show less";
	// Select the first block of text:
    $("#jdom a").toggle(// toggle will add/remove the second text block
		function() {
			// .prev() gets the previous sibling of the anchor element (which is "div .hide")
			$(this).prev().show();
			$(this).text(newText);
		},
		function() {
			// use .prev() to hide the additional text after a second click, and change the text back to "Show more":
			$(this).prev().hide();
			$(this).text(oldText);
		}
	); // End toggle
	
}); // End ready

