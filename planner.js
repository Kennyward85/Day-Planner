// Sets up moment for jumbotron 
var currentDay = moment().format("dddd, MMMM Do");
var displayMoment = document.getElementById("currentDay");
displayMoment.innerHTML = currentDay;


$(document).ready(function() {
// Sets up var to store the information  for document
    var value = $(this).siblings(".description").val();

    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);
// this function updates the css with moment so that the colors reflect properly for time past present future
    function hourUpdate() {
        var timeNow = moment().hours();
        $(".time-block").each(function () {
            var divHour = parseInt($(this).attr("id").split("-")[1]);
                
        if (divHour < timeNow) {
            $(this).addClass("past");
        }
        else if (divHour === timeNow) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");  
        }
    });
    
};

hourUpdate();

  var interval = setInterval(hourUpdate, 15000);
// sets up save button function  for the time and value 
$(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();

    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);

});


$("#hour-8 .description").val(localStorage.getItem("hour-8"));
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
});