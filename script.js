$(document).ready(function() {
    // Get the current date using moment.js
    var currentDate = moment().format("dddd, MMMM Do YYYY");
  
    // Display the current date in the header
    $("#currentDay").text(currentDate)
  
    // Update the time every second
    setInterval(function() {
      // Get the current time using moment.js
      var currentTime = moment().format("h:mm:ss A")
  
      // Display the current time in the header
      $("#currentDay").text(currentDate + " - " + currentTime)
    }, 1000);
  
    // Add click event listener to all save buttons
    $('.saveBtn').on('click', function() {
      // Get the text entered in the corresponding textarea
      var text = $(this).siblings(".description").val().trim()
      // Get the hour for the corresponding time block
      var hour = $(this).siblings(".hour").text().trim()
  
      // Save the data to localStorage using the hour as the key
      localStorage.setItem(hour, text);
    });
  
    // Load saved data from localStorage on page load
    $(".hour").each(function() {
      var hour = $(this).text().trim();
      var text = localStorage.getItem(hour);
  
      if (text !== null) {
        $(this).siblings(".description").val(text);
      }
    });
  
    // Display current date and time
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
  
    // Get the current hour in 24-hour format
    var currentHour = moment().hour();
  
    // Loop through each timeblock
    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("data-hour"));
  
      // Add classes based on the current hour and timeblock hour
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  });









