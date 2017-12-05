
		
		var animals = ["red panda","dog","cat","iguana"]
		
		function displayAnimalGifs() {
        
        var animal = $(this).attr("data-name");
		var queryURL = ("http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=5");
		//dc6zaTOxFJmzC
		$.ajax({
			url: queryURL,
			method: "GET"
			})

			.done(function(response){
        	var imageUrl = response.data.image_original_url;
        	var animalImage = $("<img>");
        	animalImage.attr("src", imageUrl);
        	animalImage.attr("alt", "There should be a GIF here...  :/");
        	
        	$("#gif-view").append(animalImage);
      		
      		});
        };
      	
      	function renderButtons() {
        $("#buttons-view").empty();
		//loop through animal array
        for (var i = 0; i < animals.length; i++) {
        //make a var for buttons, then dynamically add info to that var, yo.
        var a = $("<button>");
        a.addClass("animal");
        a.attr("data-name", animals[i]);
        a.text(animals[i]);
        $("#buttons-view").append(a);
        
        //at this point nothing is showing up on our page.  why?
        //bad user experience.  D:

        	};
      	};
		//calls for renderButtons and displayAnimalGifs go here, on the outermost scope.
		renderButtons();
		$("button").click(displayAnimalGifs());