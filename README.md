#Spotify Search using Handlebars

##Objective:
Create a search page using jQuery, AJAX, and the Spotify API, specifically Spotify's search endpoint for searching tracks.

##Steps:
1. Create a search form (with input field and submit button)to search for tracks. 
2. Use jQuery in main.js to get search keyword from form.
3. Use an AJAX $.get request to call Spotify's search endpoint + searchTerm
4. On success of AJAX call, render search results (track name, artist, and album image, if available) on page. 
5. Clear previous search results from view each time user submits form.
