$(document).ready(function () {
    // code for current date and time
    let currentDay = moment().format("dddd MMMM YYYY");
    let displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = currentDay;
    let currentHour = moment().format("HH");

    // Button function that clear local storage and clear contents
    $("#clearFieldsBtn").click(function (event) {
      event.preventDefault;
      $("input").val("");``
      localStorage.clear();
    });
  
    // the hour from each time slot and compares it to actual time
    $(".time-day").each(function () {
      var timeDay = $(this).attr("id").split("-")[1];
      
      if (currentHour == timeDay) {
        $(this).addClass("present");
        $(this).children(".name").addClass("white-text");
      } else if (currentHour < timeDay) {
        $(this).removeClass("present");
        $(this).addClass("future");
      } else if (currentHour > timeDay) {
        $(this).removeClass("future");
        $(this).addClass("past");
      }
    });
  
    //values from time and value divs and saves them to local storage
    $(".saveBtn").click(function (event) {
      event.preventDefault();
      var value = $(this).siblings(".time-day").val();
      var time = $(this).parent().attr("id").split("-")[1];
      localStorage.setItem(time, value);
    });
  
    //retrieves items from local storage and sets them in proper places
    $("#hour-08 .time").val(localStorage.getItem("08"));
    $("#hour-09 .time").val(localStorage.getItem("09"));
    $("#hour-10 .time").val(localStorage.getItem("10"));
    $("#hour-11 .time").val(localStorage.getItem("11"));
    $("#hour-12 .time").val(localStorage.getItem("12"));
    $("#hour-13 .time").val(localStorage.getItem("13"));
    $("#hour-14 .time").val(localStorage.getItem("14"));
    $("#hour-15 .time").val(localStorage.getItem("15"));
    $("#hour-16 .time").val(localStorage.getItem("16"));
  });
