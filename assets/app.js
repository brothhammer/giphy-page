$(document).ready(function(){

	//Global Variables
	var addButton;
	var userTopic;
	var topicRequest;
	var giphyReturn;
	var addDiv;
	var gifRating;

	//array used to populate buttons when the page loads
	var topics = ["Running", "The Big Bang Theory", "Yoda", "Animals napping", "Cool bicycles", "Robin Willimas"];

	//Function Calls
	createButtons();
	addTopic();
	removeButton();

	//Click handler for gif buttons
	$(".nextTopic").on("click", showGifs);

	//Show gifs on page
	function showGifs(){
		topicRequest = $(this).attr("data-name");
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topicRequest + "&api_key=dc6zaTOxFJmzC&limit=10";

		$.ajax({
			url: queryURL,
			method: "GET"
		})
		.done(function(response){
			console.log(response);
			$("#gifs").empty();
			giphyReturn = response.data;

			for(var i=0; i<giphyReturn.length; i++){
				addDiv = $("<div>");
				addDiv.addClass("newGif");
				gifRating = $("<p>").text("Rateing: "+giphyReturn[i].rating);
				addDiv.append(gifRating);
				$("#gifs").prepend(addDiv);
			}
		});
	}


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

	//remove most recent button from page
	function removeButton(){
		$("#removeButton").on("click", function(){
			// console.log(topics.length);
			topics.pop();
			createButtons();
			return false;
		})
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

	
});