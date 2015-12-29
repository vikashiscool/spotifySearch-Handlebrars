// When a user submits the form, use jQuery to get the search keyword from the form input.
// Use AJAX to call Spotify's search endpoint with the search keyword from the form.
// On success of the AJAX call, render the search results on the page. You should include at least the track name and artist name.
// Each time the user submits the form, clear the previous search results from the view.

$(function(){
  //variable to search form for spotify API
  var $spotifySearch = $('#spotify-search');

  //variable for input field for track (song)
  var $track = $('#track');

  //variable to hold results from spotify API
  var $results = $('#results');

  //compile handlebars template (boilerplate)
  var source = $('#tracks-template').html();
  var template = Handlebars.compile(source);


  //submit form to search spotify API
  $spotifySearch.on('submit', function(event){
    event.preventDefault();
    
    //empty previous results
    $results.empty();
    //show loading GIF
    // $loading.show();

    //save form data to variable -- using .val()
    var searchTrack = $track.val();

    //variable for spotify search url
    var searchUrl = 'https://api.spotify.com/v1/search?type=track&q=' + searchTrack;

  //template function passes in the data will be rendered in template

  //Append HTML to view using AJAX
  $.get(searchUrl, function (data) {
    //track results are in an array called 'items', which is nested in the 'tracks' object
    var trackResults = data.tracks.items;
    console.log(trackResults);

    //hide loading gif
    // $loading.hide();

    //pass in data so it can be rendered in the template
    var trackHtml = template({ tracks: trackResults });

    //append HTML to the view using basic jQuery
    $results.append(trackHtml);
  });
   //reset form
   $spotifySearch[0].reset();
   $track.focus();

  });

});
