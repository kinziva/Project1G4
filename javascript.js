//  original place call "https://api.foursquare.com/v2/venues/search?client_id=X3VSLYNVJXHUU2SM3CEVP5YLSO4SHPVJDGBCUNSP554LFE3I&client_secret=P1M2Y1HRN23WODIQ4XZJ3ZRVSHOVHB0CUJQ5PK4A1V2VKHVD&near=fairfax&intent=browse&radius=50&query=yoga studio&limit=10&v=20200101";

$(document).ready(function () {
  //variables
  const apiKey =
    "client_id=X3VSLYNVJXHUU2SM3CEVP5YLSO4SHPVJDGBCUNSP554LFE3I&client_secret=P1M2Y1HRN23WODIQ4XZJ3ZRVSHOVHB0CUJQ5PK4A1V2VKHVD";


  $("#place-btn").on("click", function (event) {
    event.preventDefault();

    placeFinder();

  });

  //place finder function
  function placeFinder() {
    var city = $("#city").val();
    console.log("city:    " + city);

    var radius = $("#radius").val();
    console.log("radius:    " + radius);

    var select = $("#inputGroupSelect02").val();

    console.log("select:    " + select);

    // queryURL for bmi API
    var queryURL =
      "https://api.foursquare.com/v2/venues/search?" +
      apiKey +
      "&near=" +
      city +
      "&intent=browse&radius=" +
      radius +
      "&query=" +
      select +
      "&limit=10&v=20200101";

    console.log("queryURL: " + queryURL);

    //ajax
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      console.log(response);

      console.log("response:   " + JSON.stringify(response));
      console.log("response.response:    " + JSON.stringify(response.response));

      console.log(
        "response.response.venues  " + JSON.stringify(response.response.venues)
      );

      console.log(
        "response.response.venues[0]  " +
          JSON.stringify(response.response.venues[0])
      );

      //  console.log("name:     " + JSON.stringify(response.response.venues[0].name));

      console.log(
        "adress:     " +
          JSON.stringify(response.response.venues[0].location.address)
      );
      console.log(
        "city:     " + JSON.stringify(response.response.venues[0].location.city)
      );
      console.log(
        "postalCode:     " +
          JSON.stringify(response.response.venues[0].location.postalCode)
      );
    });
  }

  //BMI Calculator
  $("#bmi-btn").on("click", function (event) {
    event.preventDefault();
    bmiCalculator();
    // bmi calculator
    function bmiCalculator() {
      var age = $("#bmi-age").val();
      var weight = $("#bmi-weight").val();
      var height = $("#bmi-height").val();
      console.log(age, weight, height);
      // queryURL for bmi API
      var queryURLBmi =
        "https://fitness-calculator.p.rapidapi.com/bmi?age=" +
        age +
        "&weight=" +
        weight +
        "&height=" +
        height;
      //ajax
      $.ajax({
        url: queryURLBmi,
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "6d01ea40d8msh0e3a90c20c5f4e7p1a74a4jsn9c524a72b90a",
          "x-rapidapi-host": "fitness-calculator.p.rapidapi.com",
        },
      }).then(function (response) {
        console.log(response);
      });
    }
  });
});
