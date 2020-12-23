

// Created by Hanna 12/15/2020

$("#place-btn").on("click", function(event) {
  // This line allows us to take advantage of the HTML "submit" property
  // This way we can hit enter on the keyboard and it registers the search
  // (in addition to clicks). Prevents the page from reloading on form submit.
  event.preventDefault();

  // Empty the region associated with the articles
  // clear();

  // Build the query URL for the ajax request to the NYT API
  var queryURL = buildQueryURL();

  // Make the AJAX request to the API - GETs the JSON data at the queryURL.
  // The data then gets passed as an argument to the updatePage function
  console.log("queryURL:  " + queryURL);

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {


    console.log("response:   " + JSON.stringify(response));

    console.log("response.response:    " + JSON.stringify(response.response));


   console.log("response.response.venues  " + JSON.stringify(response.response.venues));

   console.log("response.response.venues[0]  " + JSON.stringify(response.response.venues[0]));

   console.log("name:     " + JSON.stringify(response.response.venues[0].name));


   console.log("adress:     " + JSON.stringify(response.response.venues[0].location.address));
   console.log("city:     " + JSON.stringify(response.response.venues[0].location.city));
   console.log("postalCode:     " + JSON.stringify(response.response.venues[0].location.postalCode));








});
});

//   $("#clear-all").on("click", clear);

//   function clear() {
//     $("#search-section").empty();
//   }

//build QUERY url
function buildQueryURL() {

  // queryURL is the url we'll use to query the API
  var queryURL ="https://api.foursquare.com/v2/venues/search?";

  var queryParams = { "client_id": "X3VSLYNVJXHUU2SM3CEVP5YLSO4SHPVJDGBCUNSP554LFE3I" };
  
  queryParams.client_secret= "P1M2Y1HRN23WODIQ4XZJ3ZRVSHOVHB0CUJQ5PK4A1V2VKHVD";

//select wellness place type from dropdown and search for it
  // var selectWellness = $("#select-wellness")
  // .val()
  // .trim();
  var selectWellness = $(this).attr("select-wellness");

  queryParams.query = selectWellness;

// get input city name
      var city = $(this).attr("city-input");
      // var city = $("#city-input")
      // .val()
      // .trim();

      queryParams.near = city;
//get the radius
      // var radius = $("#radius-input")
      // .val()
      // .trim();
      var radius = $(this).attr("radius-input");

      queryParams.radius = radius;


  // year
  queryParams.v = "20200101"
  queryParams.intent = "browse"


  queryParams.limit = "10"

  // console.log("queryParams:        " +$.param(queryParams));


  // console.log("queryURL queryParams:     " + queryURL+ $.param(queryParams));

  

  // "https://api.foursquare.com/v2/venues/search?client_id=X3VSLYNVJXHUU2SM3CEVP5YLSO4SHPVJDGBCUNSP554LFE3I&client_secret=P1M2Y1HRN23WODIQ4XZJ3ZRVSHOVHB0CUJQ5PK4A1V2VKHVD
  // &near=fairfax&intent=browse&radius=50&query=yoga studio&limit=10&v=20200101";


    // Logging the URL so we have access to it for troubleshooting
//   console.log("---------------\nURL: " + queryURL + "\n---------------");
//   console.log("---------------\nURL with params: " + queryURL + $.param(queryParams));
//   return queryURL + $.param(queryParams);
return "https://api.foursquare.com/v2/venues/search?client_id=X3VSLYNVJXHUU2SM3CEVP5YLSO4SHPVJDGBCUNSP554LFE3I&client_secret=P1M2Y1HRN23WODIQ4XZJ3ZRVSHOVHB0CUJQ5PK4A1V2VKHVD&near=fairfax&intent=browse&radius=50&query=yoga studio&limit=10&v=20200101";

}

$("#bmi-btn").on("click", function(event) {
  event.preventDefault();
  bmiCalculator();
// bmi calculator
function bmiCalculator() {
  var age = $("#bmi-age").val();
  var weight = $("#bmi-weight").val();
  var height = $("#bmi-height").val();
  console.log(age,weight,height);
  // queryURL for bmi API 
  var queryURLBmi = "https://fitness-calculator.p.rapidapi.com/bmi?age="+age+"&weight="+weight+"&height="+height;
  //ajax 
  $.ajax({
    url: queryURLBmi,
    method: "GET",
    headers: {
      "x-rapidapi-key": "6d01ea40d8msh0e3a90c20c5f4e7p1a74a4jsn9c524a72b90a",
      "x-rapidapi-host": "fitness-calculator.p.rapidapi.com"
    }
  }).then(function(response) {
      console.log(response);

});
}

});