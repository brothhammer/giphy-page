$(document).ready(function(){

	//Global Variables
	var addButton;
	var userTopic;
	var topicRequest;
	var giphyReturn;
	var addDiv;
	var gifRating;
	var addGifImg

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
				//create a div for each returned gif and append this with the gif rating
				addDiv = $("<div>");
				addDiv.addClass("newGif");
				gifRating = $("<p>").text("Rateing: "+giphyReturn[i].rating);
				addDiv.append(gifRating);
				
				// create an img element for each returned gif, include still and animated images as attributes,
				// append this to the div just created then prepend both the rating and gif to #gifs in html
				addGifImg = $("<img>");
				addGifImg.attr("src", giphyReturn[i].images.fixed_height_small_still.url);
				//still image
				addGifImg.attr("data-still", giphyReturn[i].images.fixed_height_small_still.url);
				//moving image
				addGifImg.attr("data-animate", giphyReturn[i].images.fixed_height_small.url);
				addGifImg.addClass("image")

				addDiv.append(addGifImg);

				$("#gifs").prepend(addDiv);
			}
		});
	}

	//Click handler to start and stop gifs
	$(".nextTopic").on

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