
		var animals = ["red panda","dog","cat","iguana"]
		
		function displayAnimalGifs() {
        
        var animal = $(this).attr("data-name");
		var queryURL = ("http://api.giphy.com/v1/gifs/search?q=" + animal + "&rating=pg&api_key=dc6zaTOxFJmzC&limit=5");
		
    // API key = dc6zaTOxFJmzC
		
    $.ajax({
			url: queryURL,
			method: "GET"
			})

			.done(function(response){
        	var imageUrl = response.data.image_original_url;
        	var animalImage = $("<img>");
        	animalImage.attr("src", imageUrl);
        	animalImage.attr("alt", "There should be a GIF here...  :(");
        	
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

    //ideally, this should work, even after cross-referencing with previous assignments.  Not sure why it isn't, to be honest.
    
    //until these issues are fixed, this page will be missing the following:
    
    //-multiple still gifs
    
    //-the ability to pause and play gifs

    //-the ability to add new buttons, allowing the user to search for their own content.