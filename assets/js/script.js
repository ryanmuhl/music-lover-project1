
//Click button then fetch artist data
$("#click-celebrity").click(function(){
    getArtistData()
   
});

//Function to fetch artist data
var getArtistData = function () {
  var text = $("#type-artist-name").val();

var requestUrl = "https://genius.p.rapidapi.com/search?q=" + text;

fetch((requestUrl), {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "genius.p.rapidapi.com",
		"x-rapidapi-key": "ac9ab99d33msh3d2e68d58bcbf83p143df8jsn672a2b9e440d"
	}
})
.then(function (response) {
  console.log (response)
    return response.json();
  })
  .then(function (data) {
    var allSongs = data.response.hits
    for (var i = 0; i < allSongs.length; i++)
      
    
         console.log (allSongs[i].result.title)
        
    
  }
      )};

//Fetch API info



//Function/Logic


//Make one function that makes call to shazam API and One functon that makes a call to the Genius API


//Need to make two API calls to get to genius


//User Input Variable will determine what information is pulled from the Genius API


//User Input Variable will determine what Lyrics will be pulled from the Shazam API


//Append the Data to the page


//Save to Local Storage


//pull from local storage and append to second html page




