$(document).ready(function(){

	//Global Variables
	var addButton;
	var userTopic;

	//array used to populate buttons when the page loads
	var topics = ["Running", "The Big Bang Theory", "Yoda", "Animals napping", "Cool bicycles", "Robin Willimas"];

	//Function Calls
	createButtons();
	addTopic();
	removeButton();

	//Add user topics to topics array
	function addTopic(){
		$("#addUserTopic").on("click", function(){
			userTopic = $("#topic-input").val().trim();
			if (userTopic === ""){
				return false;
			}
			else {
			topics.push(userTopic);
			createButtons();
			return false;
			}
		});
	}
		
	//Create buttons on page for each item in topics array
	function createButtons(){
		$("#gifButtons").empty();
		for (var i = 0; i < topics.length; i++){
			addButton = $("<button>");
			addButton.addClass("btn btn-primary nextTopic");
			addButton.attr("data-name", topics[i]);
			addButton.text(topics[i]);
			$("#gifButtons").append(addButton);
		}
	}

	//remove most recent button from page
	function removeButton(){
		$("#removeButton").on("click", function(){
			// console.log(topics.length);
			topics.pop();
			createButtons();
			return false;
		})
	}
});