function requestNewsFeed() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=london&units=metric&APPID=e90df68c7d8ee7197f673d9ce8215959", false);
    // xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
    console.log(xhttp);
    console.log(xhttp.responseText);
    var response = JSON.parse(xhttp.responseText);
}

document.getElementById("demo").innerHTML = xhttp.responseText;
// Try it Yourself »
//
//
// $(document).ready(function() {
//
//   $("#getMessage").on("click", function() {
//     $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?", function(val) {
//
//       //json.forEach(function(val) {
//       quoteText = val.quoteText;
//       quoteAuthor = val.quoteAuthor;
//
//       $(".quote-text").html(quoteText);
//       $(".quote-author").html(quoteAuthor);
//       $('.twitter-share').attr('href','https://twitter.com/intent/tweet?text=' + quoteText + 'by Author: ' + quoteAuthor + ' @roberts_uk');
//   });
//
//       var colors = ["#9999ff", "#47d1d1", "#008080", "#990099", "#ff6699", "#9999ff", "#47d1d1", "#008080", "#990099", "#ff6699", "#9999ff", "#47d1d1", "#008080", "#990099", "#ff6699"];
//       var rand = Math.floor(Math.random() * colors.length);
//       $("body").css("background-color", colors[rand]);
//
//     });
//
//   });
//
//
//   function getWeather(city) {
//     $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=e90df68c7d8ee7197f673d9ce8215959", function(response) {
//       $('#weather-forecast').html(response.main.temp.toFixed(1)+ String.fromCharCode(176) +"C")
//     });
//   };
