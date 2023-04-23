$(document).ready(function() {
    // Get the current date using moment.js
    var currentDate = moment().format("dddd, MMMM Do YYYY");
    
    // Display the current date in the header
    $("#currentDay").text(currentDate);
    
    // Update the time every second
    setInterval(function() {
      // Get the current time using moment.js
      var currentTime = moment().format("h:mm:ss A");
      
      // Display the current time in the header
      $("#currentDay").text(currentDate + " - " + currentTime);
    }, 1000);
  });