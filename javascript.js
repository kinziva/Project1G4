// Created by Hanna 12/15/2020


$("#search").on("click", function(event) {
    // This line allows us to take advantage of the HTML "submit" property
    // This way we can hit enter on the keyboard and it registers the search
    // (in addition to clicks). Prevents the page from reloading on form submit.
    event.preventDefault();
  
    // Empty the region associated with the articles
    clear();
  
    // Build the query URL for the ajax request to the NYT API
    var queryURL = buildQueryURL();

    // Make the AJAX request to the API - GETs the JSON data at the queryURL.
    // The data then gets passed as an argument to the updatePage function
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        console.log(response);
        console.log(queryURL);

  });


  $("#clear-all").on("click", clear);

  function clear() {
    $("#search-section").empty();
  }

//build QUERY url
  function buildQueryURL() {

    // queryURL is the url we'll use to query the API
    var queryURL ="https://api.foursquare.com/v2/venues/search?";

    var queryParams = { "client_id": "X3VSLYNVJXHUU2SM3CEVP5YLSO4SHPVJDGBCUNSP554LFE3I" };
    
    queryParams.client_secret= "P1M2Y1HRN23WODIQ4XZJ3ZRVSHOVHB0CUJQ5PK4A1V2VKHVD";

//select wellness place type from dropdown and search for it
    var selectWellness = $("#select-wellness")
    .val()
    .trim();
    queryParams.query = selectWellness;

// get input city name
        // var city = $(this).attr("city-input");
        var city = $("#city-input")
        .val()
        .trim();

        queryParams.near = city;
//get the radius
        var radius = $("#radius-input")
        .val()
        .trim();
        queryParams.radius = radius;


    // year
    queryParams.v = "20200101"
    queryParams.intent = "browse"


    queryParams.limit = "10"


    

    // "https://api.foursquare.com/v2/venues/search?client_id=X3VSLYNVJXHUU2SM3CEVP5YLSO4SHPVJDGBCUNSP554LFE3I&client_secret=P1M2Y1HRN23WODIQ4XZJ3ZRVSHOVHB0CUJQ5PK4A1V2VKHVD
    // &near=fairfax&intent=browse&radius=50&query=yoga studio&limit=10&v=20200101";


      // Logging the URL so we have access to it for troubleshooting
  console.log("---------------\nURL: " + queryURL + "\n---------------");
  console.log("---------------\nURL with params: " + queryURL + $.param(queryParams));
  return queryURL + $.param(queryParams);

  }


