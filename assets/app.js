$(document).ready(function(){

	//Global Variables
	



	//array used to populate buttons when the page loads
	var topics = ["Running", "The Big Bang Theory", "Yoda", "Animals napping", "Cool bicycles", "Robin Willimas"];

	//Function Calls
	createButtons();

	//Add user topics to topics array

	//Create buttons on page for each item in topics array
	function createButtons(){
		$("#gifButtons").empty();
		for (var i = 0; i < topics.length; i++){
			var addButton = $("<button>");
			addButton.addClass("btn btn-primary nextTopic");
			addButton.attr("data-name", topics[i]);
			addButton.text(topics[i]);
			$("#gifButtons").append(addButton);
		}
	}
});